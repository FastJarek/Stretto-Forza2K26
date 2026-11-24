// CS3 — punkt wejścia: pętla gry, rozgrywka, render dwuprzebiegowy.

import { C, WEAPONS, MAP } from './config.js';
import { clamp, hasLOS, dist } from './math.js';
import { createActor, updateMovement, shoot, melee, startReload, applyDamage, giveWeapon } from './actor.js';
import { updateBot } from './bots.js';
import { Match } from './match.js';
import { Input } from './input.js';
import { Audio } from './audio.js';
import { createWorld } from './world.js';
import { createActorModel, updateActorModel } from './actors3d.js';
import { createViewmodel } from './weapons3d.js';
import { Effects } from './effects.js';
import { HUD } from './hud.js';

const DEFAULT_SETTINGS = {
  team: 'CT', difficulty: 1, controlMode: 'auto',
  sensitivity: 1, volume: 0.7, quality: 'high',
  invertY: false, touchDetected: false,
};

function loadSettings() {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem('cs3-settings') || '{}') };
  } catch (_) { return { ...DEFAULT_SETTINGS }; }
}
function saveSettings(s) {
  try { localStorage.setItem('cs3-settings', JSON.stringify(s)); } catch (_) {}
}

const settings = loadSettings();
if (navigator.maxTouchPoints > 0 || matchMedia('(pointer: coarse)').matches) {
  settings.touchDetected = true;
  if (settings.controlMode === 'auto') settings.controlMode = 'touch';
}

const canvas = document.getElementById('game');
let world;
try {
  world = createWorld(canvas, settings.quality);
} catch (e) {
  window.__cs3Fatal?.('Nie można uruchomić grafiki 3D: ' + (e.message || e));
  throw e;
}
const vm = createViewmodel();
const fx = new Effects(world.scene);
const input = new Input(canvas, settings);
const audio = new Audio(settings.volume);
const hud = new HUD(settings, {
  onStart: () => startMatch(),
  onResume: () => setPaused(false),
  onRestart: () => startMatch(),
  onMenu: () => toMenu(),
  onSettings: () => { saveSettings(settings); world.setQuality(settings.quality); world.resize(); audio.setVolume(settings.volume); },
  onBuy: (item) => { const r = match.buy(actorForHud(), item); hud.buyResult(r); audio.ui(); },
  onBuyClose: () => { document.getElementById('buy').classList.add('hidden'); },
  getPlayer: () => player,
});

const BOT_NAMES = ['Wilk', 'Szpak', 'Rys', 'Orzeł', 'Borsuk', 'Jastrząb', 'Lis', 'Komar'];
const player = createActor({ name: 'TY', team: settings.team, bot: false });
player.radius = C.PLAYER_RADIUS;
player.nades = 1;
const actors = [player];
const models = new Map();
models.set(player.id, createActorModel(player.team, false));
world.scene.add(models.get(player.id));

const opposite = settings.team === 'CT' ? 'T' : 'CT';
for (let i = 0; i < 7; i++) {
  const team = i < 3 ? settings.team : opposite;
  const b = createActor({
    name: BOT_NAMES[i % BOT_NAMES.length], team, bot: true,
    difficulty: settings.difficulty * (0.9 + Math.random() * 0.2),
  });
  actors.push(b);
  const model = createActorModel(team, team === settings.team);
  models.set(b.id, model);
  world.scene.add(model);
}

const match = new Match(actors, onMatchEvent);
let state = 'menu';
let paused = false;
let now = 0;
let last = performance.now();
let bobPhase = 0;
let pendingGrenades = [];
let spectate = null;
let menuAngle = 0;
let lastVMWeapon = null;

function actorForHud() { return player; }

function onMatchEvent(type, data) {
  if (type === 'roundstart') {
    player.nades = 1;
    spectate = null;
    pendingGrenades = [];
    hud.banner(`RUNDA ${data.round} · PRZYGOTOWANIE`, 2);
    hud.hideScoreboard();
    document.getElementById('buy').classList.add('hidden');
    lastVMWeapon = null;
  } else if (type === 'roundlive') {
    hud.banner('IDZIE!, IDZIE!', 1.6);
    audio.ui();
  } else if (type === 'roundend') {
    const win = data.winner === settings.team;
    hud.banner(`${data.winner === 'CT' ? 'CT' : 'T'} WYGRYWAJĄ · ${data.reason}`, C.ROUND_END_TIME);
    audio.tone(win ? 880 : 220, 0.6, 0.3, win ? 'sine' : 'sawtooth');
  } else if (type === 'plant') {
    hud.banner(`BOMBA ZAŁOŻONA · STREFA ${data.site}`, 2.4);
    hud.toast('Rozbrój bombę lub zniszcz przeciwników');
    audio.plant();
  } else if (type === 'defuse') {
    audio.defuse();
  } else if (type === 'beep') {
    audio.beep(data.time < 10);
  } else if (type === 'explode') {
    audio.explode();
    fx.explosion(data.bomb || { x: 0, z: 0 });
    for (const a of actors) {
      if (!a.alive) continue;
      const d = dist(a.x, a.z, data.bomb.x, data.bomb.z);
      if (d < 14) applyDamage(a, Math.round(140 * (1 - d / 14)), 'body', null);
    }
    world.bomb.visible = false;
  } else if (type === 'matchover') {
    state = 'matchover';
    input.releasePointerLock();
    const win = data.winner === settings.team;
    const title = document.getElementById('matchover-title');
    title.textContent = win ? 'ZWYCIĘSTWO!' : 'PORażKA';
    title.className = win ? 'win' : 'lose';
    document.getElementById('matchover-score').textContent = `${match.score.T} : ${match.score.CT}`;
    hud.screen('matchover');
  }
}

function startMatch() {
  audio.init();
  settings.team = hudTeam();
  player.team = settings.team;
  const oppositeNow = settings.team === 'CT' ? 'T' : 'CT';
  actors.forEach((a, i) => {
    a.team = i < 4 ? settings.team : oppositeNow;
    a.difficulty = settings.difficulty * (0.9 + Math.random() * 0.2);
    const old = models.get(a.id);
    if (old) world.scene.remove(old);
    const m = createActorModel(a.team, a.bot && a.team === settings.team);
    models.set(a.id, m);
    world.scene.add(m);
  });
  player.name = 'TY';
  match.playerSite = 'A';
  saveSettings(settings);
  match.startMatch();
  state = 'playing';
  paused = false;
  hud.screen(null);
  hud.setTeam(settings.team);
  input.releasePointerLock();
}

function hudTeam() {
  return document.querySelector('#team-select button.active')?.dataset.team || settings.team;
}

function toMenu() {
  state = 'menu';
  paused = false;
  match.phase = 'menu';
  hud.screen('menu');
  hud.hideScoreboard();
  input.releasePointerLock();
}

function setPaused(v) {
  if (state !== 'playing') return;
  paused = v;
  hud.screen(v ? 'pause' : null);
  if (v) {
    input.releasePointerLock();
    document.getElementById('pause-info').textContent = `Runda ${match.round} · T ${match.score.T} : ${match.score.CT} CT`;
  }
}

function switchWeapon(id) {
  if (player.hasBomb && id !== 'c4') {
    // Gracz z bombą może ją odłożyć dopiero po wpisie do sklepu – uproszczenie:
    player.hasBomb = false;
    match.giveBombToSomeone('T');
  }
  if (giveWeapon(player, id)) {
    vm.setWeapon(id);
    audio.ui();
    hud.toast(WEAPONS[id].name, 1);
  }
}

function cycleWeapon(dir = 1) {
  const order = player.team === 'T' ? ['knife', 'pistol', 'rifle', 'sniper'] : ['knife', 'pistol', 'm4', 'sniper'];
  let i = order.indexOf(player.weapon);
  i = (i + dir + order.length) % order.length;
  switchWeapon(order[i]);
}

function onShot(result) {
  const { origin, dir, hit, weapon, damage, shooter } = result;
  const end = {
    x: origin.x + dir.x * hit.t,
    y: origin.y + dir.y * hit.t,
    z: origin.z + dir.z * hit.t,
  };
  fx.tracer(
    { x: origin.x + dir.x * 0.5, y: origin.y - 0.12, z: origin.z + dir.z * 0.5 },
    end, shooter === player ? 0xffe6a0 : 0xffb070,
  );
  fx.impact(end, !!hit.actor);
  fx.shell(origin, dir);
  fx.muzzle({ x: origin.x + dir.x * 0.6, y: origin.y - 0.1, z: origin.z + dir.z * 0.6 });
  const d = shooter === player ? 0 : dist(shooter.x, shooter.z, player.x, player.z);
  audio.shot(weapon.id, d);
  if (shooter === player && damage > 0) { hud.hit(); audio.hit(); }
  if (damage > 0 && shooter !== player && hit.actor === player) {
    hud.damage(damage);
    audio.hurt();
  }
  if (damage > 0 && hit.actor && !hit.actor.alive) {
    hud.kill(shooter, hit.actor, weapon.name);
    if (hit.actor === player) audio.death();
  }
}

function throwGrenade() {
  if (player.nades <= 0) { hud.toast('Brak granatów', 1); return; }
  player.nades--;
  const dir = { x: -Math.sin(player.yaw), z: -Math.cos(player.yaw) };
  pendingGrenades.push({
    x: player.x + dir.x * 0.5, z: player.z + dir.z * 0.5,
    y: player.y + 1.5,
    vx: dir.x * 17, vz: dir.z * 17, vy: 6.5, t: 1.5, owner: player,
  });
  hud.toast('Granat odrzucił!', 1);
  audio.ui();
}

function updateGrenades(dt) {
  for (let i = pendingGrenades.length - 1; i >= 0; i--) {
    const g = pendingGrenades[i];
    g.x += g.vx * dt; g.z += g.vz * dt;
    g.vy -= C.GRAVITY * dt; g.y += g.vy * dt;
    if (g.y < 0.12) { g.y = 0.12; g.vy *= -0.35; g.vx *= 0.5; g.vz *= 0.5; }
    g.t -= dt;
    if (g.t <= 0) {
      pendingGrenades.splice(i, 1);
      fx.explosion({ x: g.x, z: g.z });
      audio.explode();
      for (const a of actors) {
        if (!a.alive) continue;
        const d = dist(a.x, a.z, g.x, g.z);
        if (d < 9) {
          const dmg = Math.round(95 * (1 - d / 9));
          applyDamage(a, dmg, 'body', g.owner);
          if (a === player) hud.damage(dmg);
          if (d < 6 && hasLOS({ x: g.x, y: 1, z: g.z }, { x: a.x, y: a.y + 1.5, z: a.z }, MAP.walls, 6)) {
            a.flashT = 2;
            if (a === player) { audio.tone(2200, 1.2, 0.4, 'sine', 400); }
          }
        }
      }
    }
  }
}

function handleActions() {
  if (input.consumePause()) setPaused(!paused);
  if (paused) return;

  if (input.consumeAction('mute')) { audio.muted = !audio.muted; hud.toast(audio.muted ? 'Dźwięk wyłączony' : 'Dźwięk włączony'); }
  if (input.consumeAction('buy')) {
    const el = document.getElementById('buy');
    if (el.classList.contains('hidden')) { hud.showBuy(match, player); input.releasePointerLock(); }
    else el.classList.add('hidden');
  }
  if (input.consumeAction('reload') && match.phase !== 'freeze') { if (startReload(player, now)) audio.reload(); }
  if (input.consumeAction('weapon1')) switchWeapon('pistol');
  if (input.consumeAction('weapon2')) switchWeapon(player.team === 'T' ? 'rifle' : 'm4');
  if (input.consumeAction('weapon3')) switchWeapon('sniper');
  if (input.consumeAction('weapon4')) switchWeapon('knife');
  if (input.consumeAction('cycle')) cycleWeapon(1);
  if (input.consumeAction('weaponNext')) cycleWeapon(1);
  if (input.consumeAction('weaponPrev')) cycleWeapon(-1);
  if (input.consumeAction('grenade') && match.phase === 'live') throwGrenade();
  if (input.consumeAction('help')) hud.toast('WASD · LPM strzał · PPM cel · R reload · E użyj · B sklep · Tab wyniki', 4);
}

function updatePlayer(dt) {
  const look = input.consumeLook();
  player.yaw -= look.dx;
  player.pitch = clamp(player.pitch - look.dy, -1.45, 1.45);
  player.ads = input.mouse.right && !player.hasBomb;
  const freeze = match.phase === 'freeze';
  const mi = input.moveInput();
  if (freeze) {
    mi.forward = mi.strafe = 0; mi.jump = false;
  }
  updateMovement(player, mi, dt);
  const moving = Math.hypot(player.vx, player.vz);
  if (moving > 0.8 && player.grounded) audio.footstep(now, !player.walking);

  // Interakcja E/F
  const using = input.down('KeyE') || input.down('KeyF') || input.virtualKeys.has('KeyF')
    || input.mouse.middle;
  if (!using || freeze) match.cancelInteract(player);
  else {
    if (player.hasBomb) match.tryPlant(player, dt);
    else if (match.bombPlanted && player.team === 'CT') match.tryDefuse(player, dt);
  }

  if (match.phase === 'live') {
    if (input.mouse.left && !player.hasBomb) {
      if (WEAPONS[player.weapon].melee) melee(player, now, { ...ctx, onShot });
      else shoot(player, now, ctx);
    }
  }

  if (!player.alive) {
    if (!spectate || !spectate.alive) {
      spectate = actors.find((a) => a.alive && a.team === player.team) || null;
    }
  }
}

const ctx = {
  get actors() { return actors; },
  get walls() { return MAP.walls; },
  get weapons() { return WEAPONS; },
  get now() { return now; },
  get match() { return match; },
  onShot,
  onBotShot: onShot,
};

function updateCamera(dt) {
  const view = player.alive ? player : spectate;
  if (!view) {
    cameraIdle(dt);
    return;
  }
  const moving = Math.hypot(view.vx, view.vz);
  bobPhase += dt * (5 + moving * 1.4);
  const bob = view.grounded && moving > 0.6 ? Math.sin(bobPhase) * 0.035 : 0;
  const roll = view.grounded ? clamp(view.vx * 0.002 + view.vz * 0.0004, -0.035, 0.035) : 0;
  world.camera.position.set(view.x, view.y + view.eye + bob, view.z);
  world.camera.rotation.set(
    view.pitch + view.viewKick,
    view.yaw + view.viewKickYaw,
    view === player && !player.alive ? 0 : roll,
    'YXZ',
  );
  world.camera.fov = view.ads && WEAPONS[view.weapon]?.scoped ? 22 : 78;
  world.camera.updateProjectionMatrix();
}

function cameraIdle(dt) {
  menuAngle += dt * 0.08;
  const r = 38;
  world.camera.position.set(Math.sin(menuAngle) * r, 17, Math.cos(menuAngle) * r);
  world.camera.lookAt(0, 2, -4);
  world.camera.fov = 68;
  world.camera.updateProjectionMatrix();
}

function frame(t) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, Math.max(0.001, (t - last) / 1000));
  last = t;
  now = t / 1000;

  if (state === 'playing' && !paused) {
    handleActions();
    if (input.consumeAction('buy')) { /* już obsłużone */ }
    document.getElementById('scoreboard').classList.toggle('hidden', !input.down('Tab'));
    if (document.getElementById('buy').classList.contains('hidden')) {
      updatePlayer(dt);
      for (const a of actors) {
        if (a.bot) updateBot(a, ctx, dt);
      }
      updateGrenades(dt);
      match.update(dt, now);
      for (const a of actors) {
        const model = models.get(a.id);
        if (model) updateActorModel(model, a, dt, now);
      }
      fx.update(dt);
    }
    updateCamera(dt);
    world.bomb.visible = match.bombPlanted;
    if (match.bombPlanted) world.bomb.position.set(match.bomb.x, 0.12, match.bomb.z);
    world.update(dt, now);

    const view = player.alive ? player : spectate;
    const sway = { swayX: (input.touchMove.x || 0), swayY: (input.touchMove.y || 0) };
    if (lastVMWeapon !== player.weapon) {
      vm.setWeapon(player.weapon);
      lastVMWeapon = player.weapon;
    }
    vm.update(player, sway, dt, now, {});
    hud.update(dt, match, player);

    world.renderer.autoClear = false;
    world.renderer.clear();
    world.renderer.render(world.scene, world.camera);
    world.renderer.clearDepth();
    world.renderer.render(vm.scene, vm.camera);
  } else {
    if (state === 'menu') cameraIdle(dt);
    fx.update(dt);
    world.update(dt, now);
    world.renderer.autoClear = true;
    world.renderer.render(world.scene, world.camera);
  }
}

window.addEventListener('resize', () => {
  world.resize();
  vm.resize(canvas.clientWidth / Math.max(1, canvas.clientHeight));
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden && state === 'playing') setPaused(true);
});
canvas.addEventListener('click', () => {
  if (state === 'playing' && !paused && settings.controlMode !== 'touch' && !input.nativeMouseSeen) {
    canvas.requestPointerLock?.();
  }
});

world.resize();
vm.resize(canvas.clientWidth / Math.max(1, canvas.clientHeight));
hud.screen('menu');
requestAnimationFrame(frame);

// Debug / testy w przeglądarce
window.__CS3 = { match, actors, player, world, settings, input, hud, startMatch };
window.__CS3_READY = true;
