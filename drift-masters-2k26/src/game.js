import {
  TRACKS, CARS, UPGRADES, CAR_COLORS, RIM_COLORS, MEDAL_ICON, DEFAULT_SETUP,
  SETUP_CONTROLS, getCar, carsForMode, getSetup,
  loadSave, writeSave, sanitizeSave, upgradeCost, clamp, formatTime, driftGrade,
  getTrack, sampleClosedPath, buildCheckpoints, nearestOnPath, medalFor,
  carParams, createCar, stepCar, resolveTrackBounds, driftPoints,
} from './core.js';
import { GameAudio } from './audio.js';
import { GameWorld, drawMinimap } from './world.js';

const $ = (id) => document.getElementById(id);
const save = loadSave(window.localStorage);
const audio = new GameAudio(save.settings);
const world = new GameWorld($('scene'), save.settings, save.tuning);

let screenName = 'menu';
let settingsReturn = 'menu';
let activeTab = 'trening';
let carId = getCar(save.selectedCar) ? save.selectedCar : 'ae86';
const modeCars = { trening: carId, wyścig: 'e60', drift: 'ae86' };
let mode = 'menu';
let phase = 'idle';
let track = null;
let car = createCar();
let params = carParams(save.tuning, getSetup(save, carId), carId);
let raceTime = 0;
let score = 0;
let combo = 1;
let comboTimer = 0;
let driftSession = 0;
let driftDuration = 0;
let currentCp = 0;
let lap = 1;
let countdown = 0;
let lastBeep = -1;
let lastTime = performance.now();
let smokeTimer = 0;
let crashCooldown = 0;

const keys = Object.create(null);
const touch = { steer: 0, gas: false, brake: false, handbrake: false, nitro: false, clutch: false };
const mouse = { active: false, steer: 0, startX: 0, startSteer: 0 };
const gyro = { ready: false, zero: 0, value: 0 };

// ---------------------------------------------------------------------------
// Ekrany i pomoc
// ---------------------------------------------------------------------------

function showScreen(name) {
  screenName = name;
  document.querySelectorAll('.screen').forEach((el) => el.classList.add('hide'));
  if (name !== 'none') $('screen-' + name).classList.remove('hide');
  $('hud').classList.toggle('hide', name !== 'none');
  $('touch-controls').classList.toggle('hide', name !== 'none' || save.settings.controlMode === 'keyboard');
  $('steer-pad').classList.toggle('hide', save.settings.controlMode === 'gyro');
}

function toast(text) {
  const el = $('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove('show'), 1900);
}

function message(text, duration = 900) {
  const el = $('center-message');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(message.timer);
  message.timer = setTimeout(() => el.classList.remove('show'), duration);
}

function persist() { writeSave(window.localStorage, save); }

function currentSetup() {
  if (!save.setups[carId]) save.setups[carId] = { ...DEFAULT_SETUP, ...getSetup(save, carId) };
  return save.setups[carId];
}

function refreshParams() { params = carParams(save.tuning, getSetup(save, carId), carId); }

function selectCar(id, persistSelection = true) {
  if (!getCar(id)) return;
  carId = id;
  modeCars.trening = id;
  modeCars[getCar(id).mode] = id;
  if (persistSelection) { save.selectedCar = id; persist(); }
  refreshParams();
  renderCars(); renderGarage();
  world.showShowroom(save.tuning, carId);
}

// ---------------------------------------------------------------------------
// Wybór trasy i auta
// ---------------------------------------------------------------------------

const MODE_LABEL = { trening: 'TRENING', wyścig: 'WYŚCIG', drift: 'DRIFT / FREE ROAM' };

function renderCars() {
  const list = carsForMode(activeTab);
  if (!list.some((c) => c.id === carId)) carId = list[0].id;
  $('car-options').innerHTML = list.map((c) =>
    `<div class="chip ${c.id === carId ? 'active' : ''}" data-car="${c.id}">${c.name}</div>`).join('');
  $('car-options').querySelectorAll('[data-car]').forEach((el) =>
    el.addEventListener('click', () => selectCar(el.dataset.car)));
  $('selected-car-info').textContent = (getCar(carId) || {}).desc || '';
}

function switchTab(tab) {
  activeTab = tab;
  carId = tab === 'wyścig' ? modeCars.wyścig : tab === 'drift' ? modeCars.drift : modeCars.trening;
  refreshParams();
  renderTracks();
}

function renderTracks() {
  document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === activeTab));
  $('modes-title').textContent = 'WYBIERZ TRASĘ · ' + MODE_LABEL[activeTab];
  renderCars();
  const list = TRACKS.filter((t) => t.type === activeTab);
  $('track-list').innerHTML = list.map((t, i) => {
    const best = save.best[t.id];
    const medal = best ? MEDAL_ICON[best.medal] || '' : '';
    const bestText = best ? (t.type === 'drift' ? best.score.toLocaleString('pl-PL') + ' pkt' : formatTime(best.time)) : 'brak wyniku';
    const meta = t.type === 'drift'
      ? '<span>FREE ROAM</span><span>bez bramek</span>'
      : `<span>${t.laps} ${t.laps === 1 ? 'okrążenie' : 'okrążenia'}</span><span>${t.checkpoints} bramek</span>`;
    return `<article class="track-card" data-track="${t.id}">
      <div class="num">0${i + 1}</div>
      <h4>${t.name}</h4>
      <div class="desc">${t.desc}</div>
      <div class="meta">${meta}<span>${medal} ${bestText}</span></div>
    </article>`;
  }).join('');
  $('track-list').querySelectorAll('[data-track]').forEach((card) =>
    card.addEventListener('click', () => startSession(card.dataset.track)));
}

// ---------------------------------------------------------------------------
// Garaż i ustawienia samochodu
// ---------------------------------------------------------------------------

function tuningStats() {
  const p = carParams(save.tuning, getSetup(save, carId), carId);
  const spec = getCar(carId) || { mass: 1150 };
  return [
    ['Prędkość', clamp(Math.round(p.maxSpeed / 52 * 100), 0, 100)],
    ['Przyspieszenie', clamp(Math.round(p.engineForce / (spec.mass * 13) * 100), 0, 100)],
    ['Przyczepność przód', clamp(Math.round(p.muFront / 1.55 * 100), 0, 100)],
    ['Przyczepność tył', clamp(Math.round(p.muRear / 1.55 * 100), 0, 100)],
    ['Kąt skrętu', clamp(Math.round(p.steerMax / 0.72 * 100), 0, 100)],
    ['Skłonność do driftu', clamp(Math.round((1.55 - p.muRear) / 0.75 * 100), 0, 100)],
  ];
}

function renderGarage() {
  $('menu-credits').textContent = save.credits + ' CR';
  $('garage-credits').textContent = save.credits + ' CR';
  $('garage-cars').innerHTML = CARS.map((c) =>
    `<div class="chip ${c.id === carId ? 'active' : ''}" data-garage-car="${c.id}">${c.name}</div>`).join('');
  $('garage-cars').querySelectorAll('[data-garage-car]').forEach((el) =>
    el.addEventListener('click', () => selectCar(el.dataset.garageCar)));
  $('garage-car-info').textContent = (getCar(carId) || {}).desc || '';

  $('color-swatches').innerHTML = CAR_COLORS.map((c) =>
    `<div class="swatch ${c === save.tuning.color ? 'active' : ''}" style="background:${c}" data-color="${c}"></div>`).join('');
  $('color-swatches').querySelectorAll('[data-color]').forEach((el) => el.addEventListener('click', () => {
    save.tuning.color = el.dataset.color; persist(); renderGarage(); world.showShowroom(save.tuning, carId);
  }));
  $('rim-options').innerHTML = RIM_COLORS.map((r) =>
    `<div class="chip ${r === save.tuning.rim ? 'active' : ''}" data-rim="${r}">${r === 'silver' ? 'Srebrne' : r === 'black' ? 'Czarne' : 'Złote'}</div>`).join('');
  $('rim-options').querySelectorAll('[data-rim]').forEach((el) => el.addEventListener('click', () => {
    save.tuning.rim = el.dataset.rim; persist(); renderGarage(); world.showShowroom(save.tuning, carId);
  }));
  $('tune-spoiler').checked = save.tuning.spoiler;
  $('tune-neon').checked = save.tuning.neon;

  $('upgrade-list').innerHTML = UPGRADES.map((u) => {
    const lvl = save.tuning[u.key];
    const cost = upgradeCost(lvl);
    const pips = Array.from({ length: u.max }, (_, i) => `<i class="pip ${i < lvl ? 'on' : ''}"></i>`).join('');
    return `<div class="upgrade"><div class="info"><b>${u.name} · ${lvl}/${u.max}</b><small>${u.desc}</small><div class="pips">${pips}</div></div>
      <button data-up="${u.key}" data-dir="-1" ${lvl <= 0 ? 'disabled' : ''}>−</button>
      <button data-up="${u.key}" data-dir="1" ${lvl >= u.max || save.credits < cost ? 'disabled' : ''}>+ ${cost}</button></div>`;
  }).join('');
  $('upgrade-list').querySelectorAll('[data-up]').forEach((b) => b.addEventListener('click', () => {
    const key = b.dataset.up, dir = Number(b.dataset.dir);
    const u = UPGRADES.find((x) => x.key === key);
    const lvl = save.tuning[key];
    if (dir > 0) {
      const cost = upgradeCost(lvl);
      if (lvl >= u.max || save.credits < cost) return;
      save.credits -= cost; save.tuning[key] = lvl + 1;
      audio.beep(760, 0.09);
    } else {
      if (lvl <= 0) return;
      save.credits += Math.round(upgradeCost(lvl - 1) * 0.6);
      save.tuning[key] = lvl - 1;
      audio.beep(300, 0.09);
    }
    persist(); refreshParams(); renderGarage(); world.showShowroom(save.tuning, carId);
  }));

  const setup = getSetup(save, carId);
  $('setup-list').innerHTML = SETUP_CONTROLS.map((c) =>
    `<label class="slider-row">${c.name} <output id="out-setup-${c.key}">${setup[c.key]}%</output>
      <input type="range" id="set-setup-${c.key}" min="${c.min}" max="${c.max}" step="1" value="${setup[c.key]}">
      <small>${c.desc}</small></label>`).join('') +
    `<div class="seg" id="gearbox-mode">
      <button data-value="auto" class="${setup.gearbox === 'auto' ? 'active' : ''}">SKRZYNIA AUTOMATYCZNA</button>
      <button data-value="manual" class="${setup.gearbox === 'manual' ? 'active' : ''}">SKRZYNIA MANUALNA</button>
    </div>`;
  SETUP_CONTROLS.forEach((c) => {
    $(`set-setup-${c.key}`).addEventListener('input', (e) => {
      currentSetup()[c.key] = Number(e.target.value);
      $(`out-setup-${c.key}`).textContent = e.target.value + '%';
      persist(); refreshParams(); renderStatBars();
    });
  });
  $('gearbox-mode').querySelectorAll('button').forEach((b) => b.addEventListener('click', () => {
    currentSetup().gearbox = b.dataset.value;
    persist(); refreshParams(); renderGarage();
    toast(b.dataset.value === 'manual' ? 'Skrzynia manualna: Q/E biegi, C sprzęgło' : 'Skrzynia automatyczna');
  }));

  renderStatBars();
}

function renderStatBars() {
  $('stat-bars').innerHTML = tuningStats().map(([name, v]) =>
    `<div class="stat">${name} <span style="float:right">${v}%</span><div class="bar"><i style="width:${v}%"></i></div></div>`).join('');
}

// ---------------------------------------------------------------------------
// Ustawienia gry
// ---------------------------------------------------------------------------

const sliderMap = {
  'set-sensitivity': ['sensitivity', 'out-sensitivity', (v) => Number(v).toFixed(2) + '×'],
  'set-gyro-sensitivity': ['gyroSensitivity', 'out-gyro-sensitivity', (v) => Number(v).toFixed(2) + '×'],
  'set-camera-distance': ['cameraDistance', 'out-camera-distance', (v) => Number(v).toFixed(1) + ' m'],
  'set-camera-height': ['cameraHeight', 'out-camera-height', (v) => Number(v).toFixed(2) + ' m'],
  'set-fov': ['fov', 'out-fov', (v) => v + '°'],
  'set-draw-distance': ['drawDistance', 'out-draw-distance', (v) => v + ' m'],
  'set-resolution': ['resolution', 'out-resolution', (v) => Math.round(Number(v) * 100) + '%'],
  'set-master': ['master', 'out-master', (v) => Math.round(Number(v) * 100) + '%'],
  'set-engine': ['engine', 'out-engine', (v) => Math.round(Number(v) * 100) + '%'],
  'set-effects': ['effects', 'out-effects', (v) => Math.round(Number(v) * 100) + '%'],
};
const checkboxMap = {
  'set-mouse-steer': 'mouseSteer', 'set-invert': 'invertSteer',
  'set-gyro-invert': 'gyroInvert', 'set-shadows': 'shadows', 'set-particles': 'particles',
};
const segmentMap = {
  'control-mode': 'controlMode', 'camera-mode': 'cameraMode', 'graphics-quality': 'graphics',
};

function syncSettingsUI() {
  for (const [id, [key, outId, fmt]] of Object.entries(sliderMap)) {
    $(id).value = save.settings[key];
    $(outId).textContent = fmt(save.settings[key]);
  }
  for (const [id, key] of Object.entries(checkboxMap)) $(id).checked = !!save.settings[key];
  for (const [id, key] of Object.entries(segmentMap)) {
    document.querySelectorAll(`#${id} button`).forEach((b) => b.classList.toggle('active', b.dataset.value === save.settings[key]));
  }
}

function afterSettingsChange() {
  persist();
  audio.setVolumes(save.settings);
  world.applyQuality(save.settings);
  $('touch-controls').classList.toggle('hide', mode === 'menu' || save.settings.controlMode === 'keyboard');
  $('steer-pad').classList.toggle('hide', save.settings.controlMode === 'gyro');
  if (save.settings.controlMode === 'gyro') {
    gyro.ready = false;
    message('WYKALIBRUJ ŻYROSKOP', 1400);
  }
}

function initSettingsUI() {
  for (const [id, [key, outId, fmt]] of Object.entries(sliderMap)) {
    $(id).addEventListener('input', (e) => {
      save.settings[key] = Number(e.target.value);
      $(outId).textContent = fmt(e.target.value);
      afterSettingsChange();
    });
  }
  for (const [id, key] of Object.entries(checkboxMap)) {
    $(id).addEventListener('change', (e) => { save.settings[key] = e.target.checked; afterSettingsChange(); });
  }
  for (const [id, key] of Object.entries(segmentMap)) {
    document.querySelectorAll(`#${id} button`).forEach((b) => b.addEventListener('click', () => {
      save.settings[key] = b.dataset.value;
      syncSettingsUI(); afterSettingsChange();
    }));
  }
}

function calibrateGyro() {
  if (!gyro.ready) { toast('Żyroskop jeszcze nie odczytał danych'); return; }
  gyro.zero = gyro.value;
  audio.beep(880, 0.12);
  toast('Żyroskop wykalibrowany');
}

// ---------------------------------------------------------------------------
// Rozgrywka
// ---------------------------------------------------------------------------

function startSession(id) {
  audio.init();
  const def = getTrack(id);
  const path = sampleClosedPath(def.points);
  track = {
    ...def, path,
    checkpoints: def.checkpoints ? buildCheckpoints(path, def.checkpoints) : [],
  };
  refreshParams();
  world.buildTrack(track, save.tuning, carId);
  const p = track.path[0], n = track.path[1];
  const yaw = Math.atan2(n.x - p.x, n.z - p.z);
  car = createCar(p.x, p.z, yaw);
  raceTime = 0; score = 0; combo = 1; comboTimer = 0;
  driftSession = 0; driftDuration = 0; currentCp = 0; lap = 1;
  smokeTimer = 0; crashCooldown = 0; lastBeep = -1;
  countdown = 3.6;
  phase = 'countdown';
  mode = track.type;
  Object.keys(keys).forEach((k) => delete keys[k]);
  touch.steer = 0;
  gyro.ready = false;
  showScreen('none');
  message(mode === 'drift' ? 'FREE ROAM' : 'PRZYGOTUJ SIĘ', 1200);
}

function restartRace() { if (track) startSession(track.id); }

function quitRace() {
  mode = 'menu'; phase = 'idle';
  audio.silence();
  world.showShowroom(save.tuning, carId);
  renderGarage();
  showScreen('menu');
}

function pauseGame() {
  if (mode === 'menu' || phase === 'finished' || phase === 'paused') return;
  phase = 'paused';
  audio.silence();
  $('pause-finish').classList.toggle('hide', mode !== 'drift');
  showScreen('pause');
}

function resumeGame() {
  if (mode === 'menu') return;
  phase = countdown > 0 ? 'countdown' : 'race';
  showScreen('none');
  audio.init();
}

function finishRace() {
  phase = 'finished';
  audio.finish();
  audio.silence();
  const isDrift = mode === 'drift';
  const medal = isDrift ? 'none' : medalFor(track, raceTime);
  const reward = Math.round(score / 25) + (isDrift ? 100 : { gold: 500, silver: 300, bronze: 150, none: 50 }[medal]);
  const prev = save.best[track.id];
  const isBest = !prev || (isDrift ? score > prev.score : raceTime < prev.time);
  if (isBest) save.best[track.id] = { time: raceTime, score, medal };
  save.credits += reward;
  persist();
  $('result-title').textContent = isDrift ? 'KONIEC SESJI DRIFTU' : (lap > track.laps ? 'KONIEC TRASY!' : 'UKOŃCZONO');
  $('result-medal').textContent = isDrift ? '🏁' : MEDAL_ICON[medal];
  $('result-time').textContent = formatTime(raceTime);
  $('result-score').textContent = score.toLocaleString('pl-PL');
  $('result-best').textContent = prev
    ? (isDrift ? Math.max(score, prev.score).toLocaleString('pl-PL') + ' pkt' : formatTime(Math.min(raceTime, prev.time)))
    : '—';
  $('result-credits').textContent = '+' + reward + ' CR';
  $('result-note').textContent = isBest ? 'Nowy rekord! 🎉' : (prev ? 'Lepszy wynik w poprzedniej sesji' : '');
  const list = TRACKS.filter((t) => t.type === mode);
  const idx = list.findIndex((t) => t.id === track.id);
  $('result-next').classList.toggle('hide', idx >= list.length - 1);
  $('result-next').dataset.trackId = list[idx + 1] ? list[idx + 1].id : '';
  showScreen('results');
  renderGarage();
}

function readInput() {
  const s = save.settings;
  let steer = 0, throttle = 0, brake = 0, handbrake = false, nitro = false, clutch = false;
  if (s.controlMode === 'keyboard') {
    if (keys.ArrowLeft || keys.KeyA) steer -= 1;
    if (keys.ArrowRight || keys.KeyD) steer += 1;
    if (keys.ArrowUp || keys.KeyW) throttle = 1;
    if (keys.ArrowDown || keys.KeyS) brake = 1;
    handbrake = !!keys.Space;
    clutch = !!keys.KeyC;
    nitro = !!(keys.ShiftLeft || keys.ShiftRight);
    if (s.mouseSteer && mouse.active && steer === 0) steer = mouse.steer;
  } else if (s.controlMode === 'gyro') {
    if (gyro.ready) {
      const delta = gyro.value - gyro.zero;
      steer = clamp(delta / 22 * s.gyroSensitivity, -1, 1);
      if (s.gyroInvert) steer = -steer;
    }
    throttle = touch.gas ? 1 : 0;
    brake = touch.brake ? 1 : 0;
    handbrake = touch.handbrake;
    nitro = touch.nitro;
    clutch = touch.clutch;
  } else {
    steer = touch.steer;
    throttle = touch.gas ? 1 : 0;
    brake = touch.brake ? 1 : 0;
    handbrake = touch.handbrake;
    nitro = touch.nitro;
    clutch = touch.clutch;
  }
  if (s.invertSteer && s.controlMode !== 'gyro') steer = -steer;
  return {
    steer: clamp(steer * (0.55 + s.sensitivity * 0.45), -1, 1),
    throttle, brake, handbrake, nitro, clutch,
  };
}

function shift(dir) {
  if (mode === 'menu' || phase === 'finished') return;
  if (params.manual === false) {
    currentSetup().gearbox = 'manual';
    refreshParams(); persist();
    toast('Skrzynia manualna — Q/E biegi, C sprzęgło');
  }
  car.gear = clamp(car.gear + dir, car.vz < -0.5 ? -1 : 1, 6);
  audio.beep(dir > 0 ? 720 : 420, 0.07);
  message('BIEG ' + (car.gear === -1 ? 'R' : car.gear), 500);
}

function cycleCamera() {
  const order = ['chase', 'hood', 'bumper'];
  const i = order.indexOf(save.settings.cameraMode);
  save.settings.cameraMode = order[(i + 1) % order.length];
  persist(); syncSettingsUI();
  toast('Widok: ' + (save.settings.cameraMode === 'chase' ? 'za autem' : save.settings.cameraMode === 'hood' ? 'kokpit' : 'zderzak'));
}

function updateHUD(input) {
  const kmh = Math.round(car.speed * 3.6);
  $('hud-speed').textContent = kmh;
  $('hud-time').textContent = formatTime(raceTime);
  const best = save.best[track.id];
  $('hud-best').textContent = best ? 'BEST ' + (mode === 'drift' ? best.score.toLocaleString('pl-PL') : formatTime(best.time)) : '';
  $('hud-mode').textContent = MODE_LABEL[mode] || '';
  $('hud-track-name').textContent = track.name;
  if (mode === 'drift') {
    $('hud-lap').textContent = 'FREE ROAM';
    $('hud-cp').textContent = 'bez limitu czasu';
  } else {
    $('hud-lap').textContent = `${Math.min(lap, track.laps)}/${track.laps}`;
    $('hud-cp').textContent = `CP ${currentCp}/${track.checkpoints.length}`;
  }
  $('hud-score').textContent = score.toLocaleString('pl-PL');
  $('hud-gear').textContent = (params.manual ? 'MAN ' : 'AUTO ') + (car.gear === -1 ? 'R' : car.gear);
  $('hud-rpm-fill').style.width = clamp(car.rpm / 8200 * 100, 0, 100) + '%';
  $('nitro-fill').style.width = car.nitro + '%';
  const driftEl = $('drift-popup');
  const drifting = Math.abs(car.driftAngle) > 14 && car.speed > 8;
  driftEl.classList.toggle('show', drifting);
  if (drifting) {
    $('drift-angle').textContent = Math.round(Math.abs(car.driftAngle)) + '°';
    $('drift-score').textContent = '+' + Math.round(driftPoints(kmh, car.driftAngle, 0.1) * 10 * combo);
    $('drift-grade').textContent = driftGrade(car.driftAngle, driftDuration);
  }
  $('combo-popup').textContent = combo > 1.05 ? `x${combo.toFixed(1)} KOMBO` : '';
  drawMinimap($('minimap').getContext('2d'), track, car, currentCp);
}

function tickRace(dt) {
  const input = readInput();
  stepCar(car, input, params, dt);

  const proj = nearestOnPath(track.path, car.x, car.z);
  if (resolveTrackBounds(car, proj, track.width / 2) && crashCooldown <= 0) {
    audio.crash();
    world.shake = 0.55;
    crashCooldown = 0.7;
    combo = 1; comboTimer = 0; driftDuration = 0;
  }
  crashCooldown -= dt;

  const kmh = car.speed * 3.6;
  const gained = driftPoints(kmh, car.driftAngle, dt);
  if (gained > 0) {
    score += Math.round(gained * combo);
    driftSession += dt;
    driftDuration += dt;
    comboTimer = 1.25;
    if (driftSession > 0.8 + combo * 0.45) {
      combo = Math.min(5, combo + 0.5);
      driftSession = 0;
    }
  } else if (comboTimer > 0) {
    comboTimer -= dt;
    if (comboTimer <= 0) { combo = 1; driftSession = 0; driftDuration = 0; }
  }

  if (Math.abs(car.driftAngle) > 11 && car.speed > 8 && save.settings.particles) {
    world.addSkid(car.x, car.z, car.yaw);
    smokeTimer -= dt;
    if (smokeTimer <= 0) { world.spawnSmoke(car.x, car.z, car.yaw); smokeTimer = 0.045; }
  }

  if (track.checkpoints.length) {
    const cp = track.checkpoints[currentCp];
    if (cp) {
      const d = Math.hypot(car.x - cp.x, car.z - cp.z);
      if (d < track.width * 0.85) {
        world.setGateState(currentCp, true);
        audio.checkpoint();
        currentCp++;
        if (currentCp >= track.checkpoints.length) {
          currentCp = 0;
          lap++;
          world.gates.forEach((_, i) => world.setGateState(i, false));
          if (lap > track.laps) { finishRace(); return; }
          message(`OKRĄŻENIE ${lap}/${track.laps}`);
        }
      }
    }
  }

  raceTime += dt;
  audio.update(car.speed, input.throttle, car.driftAngle, car.boost);
  world.applyCar(world.carGroup, car, input.steer, dt);
  world.updateCamera(car, dt, save.settings);
  world.updateSmoke(dt);
  world.render();
  if (Math.floor(raceTime * 30) !== Math.floor((raceTime - dt) * 30)) updateHUD(input);
}

function tickCountdown(dt) {
  countdown -= dt;
  const n = Math.ceil(countdown - 0.6);
  if (n !== lastBeep && n >= 0 && n <= 3) {
    lastBeep = n;
    audio.countdown(n);
    message(n === 0 ? 'START!' : String(n), n === 0 ? 800 : 700);
  }
  const input = readInput();
  world.applyCar(world.carGroup, car, input.steer, dt);
  world.updateCamera(car, dt, save.settings);
  world.updateSmoke(dt);
  world.render();
  updateHUD(input);
  if (countdown <= 0) { phase = 'race'; countdown = 0; }
}

function frame(now) {
  const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
  lastTime = now;
  if (mode === 'menu') {
    world.showroomTick(dt);
    world.render();
  } else if (phase === 'race') tickRace(dt);
  else if (phase === 'countdown') tickCountdown(dt);
  else world.render();
  requestAnimationFrame(frame);
}

// ---------------------------------------------------------------------------
// Wejście
// ---------------------------------------------------------------------------

function initInput() {
  window.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space', 'Tab'].includes(e.code)) e.preventDefault();
    if (e.repeat && ['KeyQ', 'KeyE', 'Tab', 'KeyR'].includes(e.code)) return;
    keys[e.code] = true;
    audio.init();
    if (e.code === 'Escape') {
      if (phase === 'paused') resumeGame();
      else if (phase === 'race' || phase === 'countdown') pauseGame();
      else if (screenName !== 'menu') showScreen('menu');
    }
    if (e.code === 'KeyR' && mode !== 'menu' && phase !== 'finished') restartRace();
    if (e.code === 'Tab' && mode !== 'menu') cycleCamera();
    if (e.code === 'KeyQ') shift(1);
    if (e.code === 'KeyE') shift(-1);
  });
  window.addEventListener('keyup', (e) => { keys[e.code] = false; });
  window.addEventListener('blur', () => Object.keys(keys).forEach((k) => delete keys[k]));

  window.addEventListener('deviceorientation', (e) => {
    if (e.gamma == null || !Number.isFinite(e.gamma)) return;
    gyro.value = e.gamma;
    if (!gyro.ready) { gyro.zero = e.gamma; gyro.ready = true; }
  });

  const canvas = $('scene');
  canvas.addEventListener('pointerdown', (e) => {
    if (mode === 'menu' || save.settings.controlMode !== 'keyboard') return;
    audio.init();
    mouse.active = true;
    mouse.startX = e.clientX;
    mouse.startSteer = mouse.steer;
    canvas.setPointerCapture && canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    if (!mouse.active || mode === 'menu' || save.settings.controlMode !== 'keyboard') return;
    mouse.steer = clamp(mouse.startSteer + (e.clientX - mouse.startX) / (window.innerWidth * 0.24), -1, 1);
  });
  const endMouse = () => { mouse.active = false; mouse.steer *= 0.3; };
  canvas.addEventListener('pointerup', endMouse);
  canvas.addEventListener('pointercancel', endMouse);

  const pad = $('steer-pad'), knob = $('steer-knob');
  const setPad = (e) => {
    const r = pad.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    touch.steer = clamp(dx / (r.width * 0.4), -1, 1);
    knob.style.transform = `translateX(${touch.steer * r.width * 0.3}px)`;
  };
  pad.addEventListener('pointerdown', (e) => { audio.init(); pad.setPointerCapture(e.pointerId); setPad(e); });
  pad.addEventListener('pointermove', (e) => { if (pad.hasPointerCapture(e.pointerId)) setPad(e); });
  const resetPad = (e) => {
    if (pad.hasPointerCapture && pad.hasPointerCapture(e.pointerId)) pad.releasePointerCapture(e.pointerId);
    touch.steer = 0; knob.style.transform = 'translateX(0)';
  };
  pad.addEventListener('pointerup', resetPad);
  pad.addEventListener('pointercancel', resetPad);

  document.querySelectorAll('[data-control]').forEach((btn) => {
    const key = btn.dataset.control;
    const set = (v) => {
      touch[key] = v;
      btn.classList.toggle('active', v);
      if (v) audio.init();
    };
    btn.addEventListener('pointerdown', (e) => { e.preventDefault(); btn.setPointerCapture(e.pointerId); set(true); });
    btn.addEventListener('pointerup', () => set(false));
    btn.addEventListener('pointercancel', () => set(false));
    btn.addEventListener('lostpointercapture', () => set(false));
  });

  // Android Bridge — pozwala zamknąć grę przyciskiem Wstecz przez WebView.
  window.dmBack = () => {
    if (phase === 'paused') resumeGame();
    else if (mode !== 'menu') pauseGame();
    else if (screenName !== 'menu') showScreen('menu');
  };
}

function initActions() {
  document.addEventListener('click', (e) => {
    const tab = e.target.closest('.tab');
    if (tab) { audio.init(); audio.beep(620, 0.06, 'sine', 0.08); switchTab(tab.dataset.tab); return; }
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    audio.init();
    audio.beep(620, 0.07, 'sine', 0.1);
    switch (btn.dataset.action) {
      case 'goto-modes':
        switchTab(btn.dataset.mode || 'trening');
        showScreen('modes'); break;
      case 'goto-garage': renderGarage(); showScreen('garage'); world.showShowroom(save.tuning, carId); break;
      case 'goto-settings': settingsReturn = screenName; syncSettingsUI(); showScreen('settings'); break;
      case 'pause-settings': settingsReturn = 'pause'; syncSettingsUI(); showScreen('settings'); break;
      case 'settings-back': showScreen(settingsReturn); break;
      case 'goto-help': showScreen('help'); break;
      case 'goto-menu': quitRace(); break;
      case 'calibrate-gyro': calibrateGyro(); break;
      case 'reset-settings':
        save.settings = sanitizeSave(null).settings;
        persist(); syncSettingsUI(); afterSettingsChange();
        toast('Ustawienia przywrócone');
        break;
      case 'resume': resumeGame(); break;
      case 'restart': restartRace(); break;
      case 'retry': restartRace(); break;
      case 'finish': finishRace(); break;
      case 'quit': quitRace(); break;
      case 'gear-up': shift(1); break;
      case 'gear-down': shift(-1); break;
      case 'next-track':
        if (btn.dataset.trackId) startSession(btn.dataset.trackId);
        break;
    }
  });
}

function boot() {
  initInput();
  initActions();
  initSettingsUI();
  syncSettingsUI();
  renderGarage();
  world.showShowroom(save.tuning, carId);
  showScreen('menu');
  window.addEventListener('resize', () => world.resize());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && phase === 'race') pauseGame();
  });
  requestAnimationFrame(frame);
}

boot();
