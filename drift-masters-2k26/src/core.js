// Drift Masters 2K26 — logika gry niezależna od przeglądarki i Three.js.
// Ten plik jest używany zarówno przez grę, jak i przez testy Node.js.

export const SAVE_KEY = 'dm2k26.save.v2';

// Samochody są podzielone na stawki driftowe i wyścigowe, tak jak w grach
// typu Assetto Corsa: każdy ma własną masę, moc, przyczepność i nadwozie.
export const CARS = [
  {
    id: 'ae86', name: 'Toyota AE86', mode: 'drift', style: 'kei',
    desc: 'Lekki klasyk z napędem na tył. Najłatwiejszy do utrzymania w długim poślizgu.',
    mass: 960, engine: 5200, maxSpeed: 33, gripF: 62000, gripR: 60000,
    muF: 1.1, muR: 1.04, steer: 0.61, driftBonus: 1.12, color: '#f2f5ff',
  },
  {
    id: 'e36', name: 'BMW E36', mode: 'drift', style: 'coupe',
    desc: 'Klasyczne coupe z równowagą mocy i przyczepności. Bardzo przewidywalne.',
    mass: 1310, engine: 7100, maxSpeed: 41, gripF: 77000, gripR: 79000,
    muF: 1.2, muR: 1.27, steer: 0.55, driftBonus: 1.02, color: '#2e6bff',
  },
  {
    id: 's13', name: 'Nissan S13', mode: 'drift', style: 'coupe',
    desc: 'Japoński driftowy klasyk. Ostra odpowiedź na gaz i szybkie kontry.',
    mass: 1220, engine: 6900, maxSpeed: 43, gripF: 74000, gripR: 71000,
    muF: 1.17, muR: 1.14, steer: 0.6, driftBonus: 1.15, color: '#ff3ea5',
  },
  {
    id: 'e60', name: 'BMW E60', mode: 'wyścig', style: 'sedan',
    desc: 'Szybka limuzyna. Stabilna przy wysokich prędkościach i na długich łukach.',
    mass: 1580, engine: 9900, maxSpeed: 51, gripF: 90000, gripR: 92000,
    muF: 1.3, muR: 1.34, steer: 0.49, driftBonus: 0.92, color: '#c9d3e3',
  },
  {
    id: 'miata', name: 'Mazda Miata', mode: 'wyścig', style: 'roadster',
    desc: 'Zwinny roadster. Najlepszy w ciasnych zakrętach i szybkich zmianach kierunku.',
    mass: 1010, engine: 5700, maxSpeed: 38, gripF: 80000, gripR: 81000,
    muF: 1.25, muR: 1.24, steer: 0.64, driftBonus: 0.98, color: '#ffd23f',
  },
  {
    id: 'gokart', name: 'Gokart', mode: 'wyścig', style: 'kart',
    desc: 'Bardzo lekki i zwrotny. Wybacza błędy, ale wymaga precyzji przy hamowaniu.',
    mass: 180, engine: 2100, maxSpeed: 27, gripF: 28000, gripR: 30000,
    muF: 1.45, muR: 1.48, steer: 0.72, driftBonus: 0.85, color: '#7cff6b',
  },
];

export const BASE_SPEC = {
  mass: 1150, engine: 7000, maxSpeed: 42, gripF: 75000, gripR: 80000,
  muF: 1.18, muR: 1.3, steer: 0.55, driftBonus: 1,
};

export function getCar(id) { return CARS.find((c) => c.id === id) || null; }
export function carsForMode(mode) {
  if (mode === 'drift') return CARS.filter((c) => c.mode === 'drift');
  if (mode === 'wyścig') return CARS.filter((c) => c.mode === 'wyścig');
  return CARS;
}

// Ustawienia samochodu (tuning) — każdy suwak realnie zmienia fizykę.
export const DEFAULT_SETUP = {
  power: 50, steerAngle: 50, finalDrive: 50, frontGrip: 50, rearGrip: 50,
  brakeBias: 50, suspension: 50, diffLock: 50, gearbox: 'auto',
};

export const SETUP_CONTROLS = [
  { key: 'power', name: 'Silnik — mapa mocy', desc: 'Moc silnika i prędkość maksymalna', min: 0, max: 100 },
  { key: 'steerAngle', name: 'Kąt skrętu przednich kół', desc: 'Maksymalny kąt kół przednich', min: 10, max: 100 },
  { key: 'finalDrive', name: 'Przełożenie końcowe', desc: 'Krótsze przełożenie = lepsze przyspieszenie, niższa prędkość', min: 0, max: 100 },
  { key: 'frontGrip', name: 'Przyczepność przód', desc: 'Sztywność opon przednich', min: 0, max: 100 },
  { key: 'rearGrip', name: 'Przyczepność tył', desc: 'Sztywność opon tylnych — niższa ułatwia drift', min: 0, max: 100 },
  { key: 'brakeBias', name: 'Rozkład hamowania', desc: '0% przód, 100% tył', min: 0, max: 100 },
  { key: 'suspension', name: 'Zawieszenie', desc: 'Szybkość reakcji na sterowanie', min: 0, max: 100 },
  { key: 'diffLock', name: 'Blokada dyferencjału', desc: 'Wyższa = lepsza trakcja, trudniejszy drift', min: 0, max: 100 },
];

export const GEAR_RATIOS = [0, 3.55, 2.25, 1.6, 1.22, 0.98, 0.8];

export const DEFAULT_SAVE = {
  version: 2,
  credits: 0,
  settings: {
    controlMode: 'touch',
    sensitivity: 1,
    mouseSteer: true,
    invertSteer: false,
    gyroSensitivity: 1,
    gyroInvert: false,
    cameraDistance: 8,
    cameraHeight: 3.2,
    fov: 68,
    cameraMode: 'chase',
    graphics: 'high',
    shadows: true,
    particles: true,
    drawDistance: 320,
    resolution: 1,
    master: 0.75,
    engine: 0.85,
    effects: 0.8,
  },
  tuning: {
    color: '#2ee9ff', rim: 'silver', spoiler: true, neon: false,
    engine: 0, grip: 0, suspension: 0, drift: 0,
  },
  setups: {},
  selectedCar: 'ae86',
  best: {},
};

export const CAR_COLORS = ['#2ee9ff', '#ff3ea5', '#ffd23f', '#7cff6b', '#ff6b35', '#f2f5ff', '#8a5cff', '#111827'];
export const RIM_COLORS = ['silver', 'black', 'gold'];

export const UPGRADES = [
  { key: 'engine', name: 'Silnik', desc: 'Przyspieszenie i prędkość maksymalna', max: 5 },
  { key: 'grip', name: 'Przyczepność', desc: 'Lepsze wyjście z zakrętu', max: 5 },
  { key: 'suspension', name: 'Zawieszenie', desc: 'Szybsza reakcja na sterowanie', max: 5 },
  { key: 'drift', name: 'Ustawienie driftowe', desc: 'Łatwiejsze i dłuższe poślizgi', max: 5 },
];

export function upgradeCost(level) {
  return 400 + level * 350;
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smooth = (a, b, rate, dt) => lerp(a, b, 1 - Math.exp(-rate * dt));

export function sanitizeSave(raw) {
  const s = JSON.parse(JSON.stringify(DEFAULT_SAVE));
  if (!raw || typeof raw !== 'object') return s;
  const numbers = [
    ['sensitivity', 0.4, 2], ['gyroSensitivity', 0.3, 2.5],
    ['cameraDistance', 4, 14], ['cameraHeight', 1.5, 7],
    ['fov', 55, 95], ['drawDistance', 80, 600], ['resolution', 0.6, 1.5],
    ['master', 0, 1], ['engine', 0, 1], ['effects', 0, 1],
  ];
  const src = raw.settings || {};
  for (const [k, lo, hi] of numbers) {
    if (Number.isFinite(src[k])) s.settings[k] = clamp(src[k], lo, hi);
  }
  for (const k of ['controlMode', 'cameraMode', 'graphics']) {
    if (typeof src[k] === 'string') s.settings[k] = src[k];
  }
  if (!['touch', 'gyro', 'keyboard'].includes(s.settings.controlMode)) s.settings.controlMode = 'touch';
  if (!['chase', 'hood', 'bumper'].includes(s.settings.cameraMode)) s.settings.cameraMode = 'chase';
  if (!['low', 'medium', 'high'].includes(s.settings.graphics)) s.settings.graphics = 'high';
  for (const k of ['mouseSteer', 'invertSteer', 'gyroInvert', 'shadows', 'particles']) {
    if (typeof src[k] === 'boolean') s.settings[k] = src[k];
  }
  const t = raw.tuning || {};
  if (CAR_COLORS.includes(t.color)) s.tuning.color = t.color;
  if (RIM_COLORS.includes(t.rim)) s.tuning.rim = t.rim;
  for (const k of ['spoiler', 'neon']) if (typeof t[k] === 'boolean') s.tuning[k] = t[k];
  for (const u of UPGRADES) {
    if (Number.isFinite(t[u.key])) s.tuning[u.key] = clamp(Math.round(t[u.key]), 0, u.max);
  }
  if (raw.setups && typeof raw.setups === 'object') {
    for (const carDef of CARS) {
      const srcSetup = raw.setups[carDef.id];
      if (!srcSetup || typeof srcSetup !== 'object') continue;
      s.setups[carDef.id] = { ...DEFAULT_SETUP };
      for (const ctrl of SETUP_CONTROLS) {
        if (Number.isFinite(srcSetup[ctrl.key])) {
          s.setups[carDef.id][ctrl.key] = clamp(Math.round(srcSetup[ctrl.key]), ctrl.min, ctrl.max);
        }
      }
      if (srcSetup.gearbox === 'manual' || srcSetup.gearbox === 'auto') {
        s.setups[carDef.id].gearbox = srcSetup.gearbox;
      }
    }
  }
  if (typeof raw.selectedCar === 'string' && getCar(raw.selectedCar)) s.selectedCar = raw.selectedCar;
  if (Number.isFinite(raw.credits)) s.credits = clamp(Math.round(raw.credits), 0, 1e9);
  if (raw.best && typeof raw.best === 'object') {
    for (const [id, v] of Object.entries(raw.best)) {
      if (v && Number.isFinite(v.time) && v.time > 0) {
        s.best[id] = { time: v.time, score: Number(v.score) || 0, medal: v.medal || 'none' };
      }
    }
  }
  return s;
}

export function loadSave(storage) {
  try {
    return sanitizeSave(JSON.parse(storage.getItem(SAVE_KEY)));
  } catch (_) {
    return sanitizeSave(null);
  }
}

export function writeSave(storage, save) {
  try { storage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (_) { /* prywatny tryb */ }
}

// ---------------------------------------------------------------------------
// Trasy
// ---------------------------------------------------------------------------

export const TRACKS = [
  // --- TRENINGI ---
  {
    id: 'skipad', type: 'trening', name: 'Skipad', desc: 'Klasyczny okrąg poślizgowy. Utrzymaj auto w długim, kontrolowanym driftcie.',
    width: 22, laps: 1, checkpoints: 4, theme: 'industrial', medals: { gold: 13, silver: 18, bronze: 25 },
    points: Array.from({ length: 14 }, (_, i) => {
      const a = (i / 14) * Math.PI * 2;
      return [Math.round(Math.cos(a) * 40), Math.round(Math.sin(a) * 40)];
    }),
  },
  {
    id: 'bihoku', type: 'trening', name: 'Bihoku', desc: 'Techniczna trasa treningowa: szybkie łuki, ciasne szykany i zmiany kierunku.',
    width: 17, laps: 1, checkpoints: 6, theme: 'city', medals: { gold: 27, silver: 36, bronze: 49 },
    points: [[-70, -40], [-40, -60], [0, -50], [30, -30], [60, -48], [84, -24], [72, 10], [40, 26], [10, 8], [-20, 28], [-56, 44], [-84, 16]],
  },
  {
    id: 'petla-startowa', type: 'trening', name: 'Pętla Startowa', desc: 'Szeroka pętla do nauki hamowania i pierwszych poślizgów.',
    width: 20, laps: 1, checkpoints: 4, theme: 'city', medals: { gold: 17, silver: 23, bronze: 31 },
    points: [[-62, -28], [-46, -48], [0, -54], [48, -46], [64, -22], [66, 12], [46, 38], [0, 46], [-48, 38], [-66, 10]],
  },
  {
    id: 'slalom-miejski', type: 'trening', name: 'Slalom Miejski', desc: 'Ciasne łuki i szybkie zmiany kierunku. Ćwicz rytm i gaz.',
    width: 15, laps: 1, checkpoints: 6, theme: 'city', medals: { gold: 24, silver: 32, bronze: 44 },
    points: [[-70, -40], [-35, -45], [-10, -25], [18, -46], [52, -38], [68, -8], [40, 8], [12, 30], [-18, 10], [-50, 32], [-72, 8]],
  },

  // --- WYŚCIGI ---
  {
    id: 'tor-poznan', type: 'wyścig', name: 'Tor Poznań', desc: 'Szybki tor wyścigowy z długimi prostymi, szykaną i ciasnym fryzjerem.',
    width: 17, laps: 2, checkpoints: 8, theme: 'industrial', medals: { gold: 92, silver: 118, bronze: 155 },
    points: [[-110, -60], [-60, -82], [10, -76], [70, -62], [112, -30], [118, 10], [88, 44], [44, 58], [10, 40], [-30, 60], [-76, 72], [-112, 40], [-120, 0]],
  },
  {
    id: 'suzuka', type: 'wyścig', name: 'Suzuka', desc: 'Japoński klasyk w układzie ósemki: szybkie łuki, łyżeczka i huśtawka.',
    width: 15, laps: 2, checkpoints: 9, theme: 'city', medals: { gold: 105, silver: 138, bronze: 180 },
    points: [[-100, -50], [-50, -70], [0, -50], [35, -20], [70, -30], [100, -60], [110, -10], [80, 20], [40, 30], [10, 60], [-30, 80], [-70, 60], [-100, 20], [-60, 0], [-20, -10], [20, 10], [60, 0]],
  },

  // --- DRIFT / FREE ROAM (bez bramek i bez końca) ---
  {
    id: 'drift-industrial', type: 'drift', name: 'Strefa Przemysłowa', desc: 'Free roam: szerokie aleje, szykany i betonowe bariery. Idealne do długich poślizgów.',
    width: 25, laps: 0, checkpoints: 0, theme: 'industrial', medals: { gold: 0, silver: 0, bronze: 0 },
    points: [[-92, -36], [-58, -62], [-12, -55], [18, -28], [48, -60], [92, -44], [96, 6], [58, 24], [74, 62], [18, 70], [-24, 42], [-66, 66], [-96, 26]],
  },
  {
    id: 'drift-mountain', type: 'drift', name: 'Górska Przełęcz', desc: 'Free roam: wąski, kręty odcinek górski. Wymaga precyzyjnych kontr.',
    width: 21, laps: 0, checkpoints: 0, theme: 'mountain', medals: { gold: 0, silver: 0, bronze: 0 },
    points: [[-96, -18], [-66, -52], [-28, -40], [-6, -72], [32, -62], [52, -28], [88, -36], [96, 8], [58, 30], [70, 70], [22, 78], [-18, 46], [-58, 68], [-94, 34]],
  },
  {
    id: 'drift-harbor', type: 'drift', name: 'Port Nocą', desc: 'Free roam: pusty port, długie łuki i odbicia od nabrzeża. Bez limitu czasu.',
    width: 26, laps: 0, checkpoints: 0, theme: 'city', medals: { gold: 0, silver: 0, bronze: 0 },
    points: [[-108, -30], [-70, -66], [-20, -70], [26, -50], [74, -64], [108, -30], [96, 12], [56, 34], [70, 72], [18, 80], [-34, 56], [-78, 74], [-110, 30]],
  },
];

export function getTrack(id) {
  return TRACKS.find((t) => t.id === id) || TRACKS[0];
}

/** Catmull-Rom dla zamkniętej pętli — zwraca gęstą środkową linię trasy. */
export function sampleClosedPath(points, perSegment = 14) {
  const path = [];
  const n = points.length;
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n], p1 = points[i];
    const p2 = points[(i + 1) % n], p3 = points[(i + 2) % n];
    for (let j = 0; j < perSegment; j++) {
      const t = j / perSegment, t2 = t * t, t3 = t2 * t;
      const cr = (a, b, c, d) => 0.5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t2 + (-a + 3 * b - 3 * c + d) * t3);
      path.push({ x: cr(p0[0], p1[0], p2[0], p3[0]), z: cr(p0[1], p1[1], p2[1], p3[1]) });
    }
  }
  return path;
}

/** Najbliższy punkt na linii środkowej. Zwraca też wektor stycznej i odległość. */
export function nearestOnPath(path, x, z, hint = -1) {
  let best = { dist: Infinity, index: 0, t: 0, x: 0, z: 0, tx: 0, tz: 1 };
  const n = path.length;
  // Szukanie w okolicy wskazówki jest szybsze, ale dla pewności sprawdzamy całą trasę.
  for (let i = 0; i < n; i++) {
    const a = path[i], b = path[(i + 1) % n];
    const dx = b.x - a.x, dz = b.z - a.z;
    const len2 = dx * dx + dz * dz || 1;
    const t = clamp(((x - a.x) * dx + (z - a.z) * dz) / len2, 0, 1);
    const px = a.x + dx * t, pz = a.z + dz * t;
    const d2 = (x - px) * (x - px) + (z - pz) * (z - pz);
    if (d2 < best.dist * best.dist) {
      const len = Math.sqrt(len2);
      best = { dist: Math.sqrt(d2), index: i, t, x: px, z: pz, tx: dx / len, tz: dz / len };
    }
  }
  return best;
}

export function buildCheckpoints(path, count) {
  const cps = [];
  for (let i = 0; i < count; i++) {
    const idx = Math.floor((((i + 1) / (count + 1)) % 1) * path.length);
    const p = path[idx];
    const nx = path[(idx + 1) % path.length];
    cps.push({ x: p.x, z: p.z, yaw: Math.atan2(nx.x - p.x, nx.z - p.z), index: idx });
  }
  return cps;
}

export function trackLength(path) {
  let len = 0;
  for (let i = 0; i < path.length; i++) {
    const a = path[i], b = path[(i + 1) % path.length];
    len += Math.hypot(b.x - a.x, b.z - a.z);
  }
  return len;
}

export function medalFor(track, time) {
  if (time <= track.medals.gold) return 'gold';
  if (time <= track.medals.silver) return 'silver';
  if (time <= track.medals.bronze) return 'bronze';
  return 'none';
}

export const MEDAL_ICON = { gold: '🥇', silver: '🥈', bronze: '🥉', none: '—' };

// ---------------------------------------------------------------------------
// Fizyka auta (uproszczony model rowerowy z poślizgiem bocznym)
// ---------------------------------------------------------------------------

/**
 * Parametry fizyczne auta. Model zbliżony do symulacyjnych gier driftowych
 * (CarX): osobne osie przednia/tylna, sztywność opon, koło przyczepności
 * i przenoszenie masy. Ulepszenia w garażu realnie zmieniają te wartości.
 */
export function getSetup(save, carId) {
  const id = getCar(carId) ? carId : (save && getCar(save.selectedCar) ? save.selectedCar : 'ae86');
  return { ...DEFAULT_SETUP, ...((save && save.setups && save.setups[id]) || {}) };
}

/**
 * Parametry fizyczne wynikające z trzech warstw: specyfikacji auta,
 * ulepszeń w garażu i indywidualnego ustawienia (setupu) dla danego auta.
 * Wywołanie carParams(tuning) bez setupu daje parametry bazowe (używane w testach).
 */
export function carParams(tuning, setup, carId) {
  const t = tuning || DEFAULT_SAVE.tuning;
  const s = { ...DEFAULT_SETUP, ...(setup || {}) };
  const def = carId ? getCar(carId) : null;
  const spec = def || BASE_SPEC;
  const power = 0.8 + (s.power / 100) * 0.4;
  const driveScale = 0.85 + (s.finalDrive / 100) * 0.3;
  return {
    mass: spec.mass,
    a: 1.15,
    b: 1.45,
    inertia: spec.mass * 1.17,
    cgHeight: 0.52,
    gravity: 9.81,
    engineForce: spec.engine * (1 + t.engine * 0.17) * power,
    brakeForce: 20000 * (spec.mass / 1150),
    reverseForce: 3000 * (spec.mass / 1150),
    boostForce: 4600,
    maxSpeed: spec.maxSpeed * (1 + t.engine * 0.07) * (0.9 + (s.power / 100) * 0.2),
    steerMax: spec.steer * (0.8 + (s.steerAngle / 100) * 0.4) + t.suspension * 0.012,
    steerRate: 3.4 + t.suspension * 0.5 + (s.suspension / 100) * 1.1,
    corneringFront: spec.gripF * (1 + t.grip * 0.056) * (0.75 + (s.frontGrip / 100) * 0.5),
    corneringRear: spec.gripR * (1 + t.grip * 0.058 - t.drift * 0.065) * (0.75 + (s.rearGrip / 100) * 0.5),
    muFront: spec.muF * (1 + t.grip * 0.038) * (0.85 + (s.frontGrip / 100) * 0.3),
    muRear: spec.muR * (1 + t.grip * 0.038 - t.drift * 0.058) * (0.85 + (s.rearGrip / 100) * 0.3) * spec.driftBonus,
    yawDamping: 1000 + t.suspension * 80 + (s.suspension / 100) * 130,
    dragCoeff: spec.style === 'kart' ? 0.62 : 0.42,
    rollingResistance: 175 * (spec.mass / 1150),
    brakeBias: 0.62 - (s.brakeBias / 100) * 0.24,
    diffLock: s.diffLock / 100,
    finalDrive: driveScale,
    manual: s.gearbox === 'manual',
    ratios: GEAR_RATIOS,
  };
}

export function createCar(x = 0, z = 0, yaw = 0) {
  return {
    x, z, yaw, vx: 0, vz: 0, yawRate: 0, nitro: 100,
    speed: 0, driftAngle: 0, boost: false, gear: 1, rpm: 900,
    steerAngle: 0, lateralAccel: 0, reverseHold: 0,
  };
}

/**
 * Krok fizyki — uproszczony model rowerowy z kątami poślizgu opon.
 * Wewnętrzny układ: x przód, y lewo, obrót przeciwnie do ruchu wskazówek zegara.
 * Sterowanie `steer > 0` oznacza skręt w prawo (zgodnie z interfejsem gry).
 * Mutuje `car`; zwraca dodatkowe informacje o poślizgu.
 */
export function stepCar(car, input, params, dt) {
  dt = clamp(dt, 0, 0.05);
  const throttle = clamp(input.throttle || 0, 0, 1);
  const brake = clamp(input.brake || 0, 0, 1);
  const steer = clamp(input.steer || 0, -1, 1);
  const handbrake = !!input.handbrake;
  const clutch = !!input.clutch;

  car.boost = !!input.nitro && car.nitro > 0 && throttle > 0.1;
  if (car.boost) car.nitro = Math.max(0, car.nitro - 32 * dt);
  else car.nitro = Math.min(100, car.nitro + 5 * dt);

  // Współrzędne ciała: przód i lewo (standardowy układ pojazdu).
  const fx = Math.sin(car.yaw), fz = Math.cos(car.yaw);
  const lx = -Math.cos(car.yaw), lz = Math.sin(car.yaw);
  const vf = car.vx * fx + car.vz * fz;
  const vy = car.vx * lx + car.vz * lz;
  const r = -car.yawRate; // r > 0 = skręt w lewo

  // Kierownica: przód skręca w lewo dla ujemnego steer (bo steer > 0 to prawo).
  const speed = Math.abs(vf);
  const steerLimit = params.steerMax / (1 + speed * speed * 0.0012);
  const targetDelta = -steer * steerLimit;
  car.steerAngle = smooth(car.steerAngle, targetDelta, params.steerRate, dt);

  // Skrzynia biegów: przełożenie ogranicza prędkość na biegu i zmienia moment.
  // W trybie manualnym bieg zmienia gracz (Q/E), sprzęgło (C) odcina napęd.
  if (vf < -0.5) car.gear = -1;
  else if (!params.manual && vf >= -0.5) car.gear = clamp(Math.floor(speed / 9) + 1, 1, 6);
  else if (params.manual && car.gear < 1) car.gear = 1;
  const gear = car.gear > 0 ? clamp(car.gear, 1, 6) : 1;
  const ratio = (params.ratios && params.ratios[gear]) || 1.6;
  const finalDrive = params.finalDrive || 1;
  const topSpeed = Math.min(params.maxSpeed + (car.boost ? 8 : 0),
    (params.maxSpeed + (car.boost ? 8 : 0)) * 1.75 / ratio / finalDrive);
  const powerCurve = Math.max(0, 1 - (speed / Math.max(4, topSpeed)) ** 2);
  let driveForce = throttle * (params.engineForce + (car.boost ? params.boostForce : 0))
    * (ratio / 1.6) * finalDrive * powerCurve * (clutch ? 0 : 1);
  // Bieg wsteczny włącza się dopiero po krótkim przytrzymaniu hamulca na
  // zatrzymanym aucie — dzięki temu hamowanie nie wrzuca od razu reverse.
  car.reverseHold = brake > 0.1 && throttle < 0.1 && vf < 0.8 ? (car.reverseHold || 0) + dt : 0;
  if (car.reverseHold > 0.35) driveForce = -params.reverseForce * brake;
  let frontBrake = 0, rearBrake = 0;
  if (brake > 0 && vf > 0.3) {
    frontBrake = -params.brakeForce * brake * (params.brakeBias || 0.62);
    rearBrake = -params.brakeForce * brake * (1 - (params.brakeBias || 0.62));
  }
  if (handbrake) rearBrake -= params.brakeForce * 0.35;
  const drag = -params.dragCoeff * vf * speed - Math.sign(vf) * params.rollingResistance;
  const fxTotal = driveForce + frontBrake + rearBrake * 0.4 + drag;
  const rearLong = rearBrake * 0.6 + driveForce;

  const longAccel = clamp(fxTotal / params.mass, -12, 12);
  // Przenoszenie masy: hamowanie obciąża przód, przyspieszenie — tył.
  const loadTotal = params.mass * params.gravity;
  const wheelbase = params.a + params.b;
  let frontLoad = loadTotal * params.b / wheelbase - params.mass * longAccel * params.cgHeight / wheelbase;
  frontLoad = clamp(frontLoad, loadTotal * 0.16, loadTotal * 0.84);
  const rearLoad = loadTotal - frontLoad;
  const lateralTransfer = clamp(Math.abs(car.lateralAccel) / params.gravity, 0, 1.4);
  const frontMu = params.muFront * (1 - 0.12 * lateralTransfer);
  const rearMu = params.muRear * (handbrake ? 0.55 : 1) * (1 - 0.16 * lateralTransfer);

  // Kąty poślizgu i siły boczne opon
  const vSafe = Math.max(2.2, speed);
  const alphaF = Math.atan2(vy + params.a * r, vSafe) - car.steerAngle;
  const alphaR = Math.atan2(vy - params.b * r, vSafe);
  const lowSpeedGrip = clamp(speed / 3, 0, 1);
  const frontCapacity = Math.max(1, frontMu * frontLoad);
  const rearCapacity = Math.max(1, rearMu * rearLoad * (1 + (params.diffLock || 0) * 0.12));
  // Koło przyczepności: longitudinalna siła (gaz/hamulec) zabiera część przyczepności bocznej.
  const frontCircle = Math.sqrt(Math.max(0, 1 - (Math.abs(frontBrake) / frontCapacity) ** 2));
  const rearCircle = Math.sqrt(Math.max(0, 1 - (Math.min(Math.abs(rearLong), rearCapacity) / rearCapacity) ** 2));
  // Krzywa opony: siła rośnie do szczytu przy ~8° poślizgu, potem maleje.
  // Dzięki temu counter-sterowanie realnie ratuje auto przed spinningiem.
  const tireCurve = (alpha, peak) => {
    const s = alpha / peak;
    return (2 * s) / (1 + s * s);
  };
  const frontPeak = 0.14 * (75000 / params.corneringFront);
  const rearPeak = 0.14 * (80000 / params.corneringRear);
  let fyFront = -frontCapacity * tireCurve(alphaF, frontPeak) * frontCircle * lowSpeedGrip;
  let fyRear = -rearCapacity * tireCurve(alphaR, rearPeak) * rearCircle * lowSpeedGrip;

  const latAccel = clamp((fyFront + fyRear) / params.mass, -params.gravity * 1.8, params.gravity * 1.8);
  let rAccel = (params.a * fyFront - params.b * fyRear - params.yawDamping * r) / params.inertia;
  rAccel = clamp(rAccel, -9, 9);

  // Całkowanie w układzie świata
  const axWorld = (fxTotal / params.mass) * fx + latAccel * lx;
  const azWorld = (fxTotal / params.mass) * fz + latAccel * lz;
  car.vx += axWorld * dt;
  car.vz += azWorld * dt;
  const newR = r + rAccel * dt;
  car.yawRate = clamp(-newR, -2.6, 2.6);
  car.yaw += car.yawRate * dt;
  car.x += car.vx * dt;
  car.z += car.vz * dt;
  car.lateralAccel = latAccel;

  const nfx = Math.sin(car.yaw), nfz = Math.cos(car.yaw);
  const nrx = Math.cos(car.yaw), nrz = -Math.sin(car.yaw);
  const bodyForward = car.vx * nfx + car.vz * nfz;
  const bodyRight = car.vx * nrx + car.vz * nrz;
  car.speed = Math.hypot(car.vx, car.vz);
  car.driftAngle = Math.atan2(bodyRight, Math.abs(bodyForward) + 0.5) * 180 / Math.PI;
  if (bodyForward < -0.5) car.gear = -1;
  else if (car.gear < 1) car.gear = params.manual ? 1 : clamp(Math.floor(Math.abs(bodyForward) / 9) + 1, 1, 6);
  const rpmGear = (params.ratios && params.ratios[clamp(car.gear, 1, 6)]) || 1.6;
  const rpmTop = Math.max(4, Math.min(params.maxSpeed, params.maxSpeed * 1.75 / rpmGear / (params.finalDrive || 1)));
  car.rpm = clamp(900 + (Math.abs(bodyForward) / rpmTop) * 5900 + (clutch ? throttle * 2600 : 0), 900, 8200);
  return { speed: car.speed, driftAngle: car.driftAngle, rearSlip: Math.abs(bodyRight), throttle, braking: brake > 0 };
}

/** Odbicie od krawędzi trasy: spycha auto do środka i tnie prędkość. */
export function resolveTrackBounds(car, proj, halfWidth) {
  const limit = halfWidth - 1.4;
  if (proj.dist <= limit) return false;
  const nx = (proj.x - car.x) / (proj.dist || 1);
  const nz = (proj.z - car.z) / (proj.dist || 1);
  car.x += nx * (proj.dist - limit);
  car.z += nz * (proj.dist - limit);
  const into = car.vx * -nx + car.vz * -nz;
  if (into > 0) {
    car.vx += nx * into * 1.35;
    car.vz += nz * into * 1.35;
  }
  car.vx *= 0.86;
  car.vz *= 0.86;
  return true;
}

/** Ocena poślizgu wyświetlana w HUD (styl „Meyer”: kąt + czas). */
export function driftGrade(angle, seconds = 0) {
  const a = Math.abs(angle);
  if (a < 14) return '';
  if (a < 25) return 'LEKKI POŚLIZG';
  if (a < 40) return 'DRIFT';
  if (a < 60) return 'DUŻY KĄT';
  return seconds > 2.5 ? 'MEYER! 🔥' : 'MEYER!';
}

export function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '—';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  const c = Math.floor((seconds % 1) * 100);
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${String(c).padStart(2, '0')}`;
}

/** Punkty za poślizg w danym kroku (tylko przy odpowiedniej prędkości i kącie). */
export function driftPoints(speedKmh, angle, dt) {
  const a = Math.abs(angle);
  if (speedKmh < 28 || a < 14 || a > 80) return 0;
  const quality = clamp(1 - Math.abs(a - 38) / 55, 0.2, 1);
  return Math.round((speedKmh / 3.6) * quality * 9 * dt);
}
