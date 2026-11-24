// CS3 – konfiguracja gry. Czyste dane, bez Three.js – używane także w testach Node.

function box(x, z, w, d, h, mat = 'wall', opts = {}) {
  return { x, z, w, d, h, mat, ...opts };
}

// Mapa „Dust Sector” – oryginalny układ dwóch stref (A / B), trzech korytarzy
// i centralnego midu. Wszystkie ściany to AABB-y (oś Y do góry).
function buildWalls() {
  const w = [];
  const H = 7;

  // Granice areny
  w.push(box(0, -33, 68, 2, H, 'wall'));
  w.push(box(0, 33, 68, 2, H, 'wall'));
  w.push(box(-33, 0, 2, 68, H, 'wall'));
  w.push(box(33, 0, 2, 68, H, 'wall'));

  // Bariera przed spawnem T (przejścia: lewy korytarz, mid, prawy korytarz)
  w.push(box(-25.5, 20, 15, 1.6, H, 'wall'));
  w.push(box(-5, 20, 4, 1.6, H, 'wall'));
  w.push(box(5, 20, 4, 1.6, H, 'wall'));
  w.push(box(25.5, 20, 15, 1.6, H, 'wall'));

  // Trzy korytarze południowe
  w.push(box(-18, 12, 1.2, 16, H, 'wall'));
  w.push(box(-7, 12, 1.2, 16, H, 'wall'));
  w.push(box(-4, 12, 1.2, 16, H, 'wall'));
  w.push(box(4, 12, 1.2, 16, H, 'wall'));
  w.push(box(7, 12, 1.2, 16, H, 'wall'));
  w.push(box(18, 12, 1.2, 16, H, 'wall'));

  // Ściany oddzielające strefy od midu (z przejściami z=-14..-10)
  w.push(box(-8, -20, 1.2, 12, H, 'wall'));
  w.push(box(-8, -8, 1.2, 4, H, 'wall'));
  w.push(box(8, -20, 1.2, 12, H, 'wall'));
  w.push(box(8, -8, 1.2, 4, H, 'wall'));

  // Mid północny (przejścia do stref z=-14..-10)
  w.push(box(-5, -17, 1.2, 6, H, 'wall'));
  w.push(box(-5, -5, 1.2, 10, H, 'wall'));
  w.push(box(5, -17, 1.2, 6, H, 'wall'));
  w.push(box(5, -5, 1.2, 10, H, 'wall'));

  // Bariera przed spawnem CT (przejścia do A, mid i B)
  w.push(box(-27.5, -24, 11, 1.2, H, 'wall'));
  w.push(box(-8.5, -24, 11, 1.2, H, 'wall'));
  w.push(box(8.5, -24, 11, 1.2, H, 'wall'));
  w.push(box(27.5, -24, 11, 1.2, H, 'wall'));

  // Ozdobne murki / osłony przy krawędziach
  w.push(box(-28, -12, 6, 1, 2.2, 'low'));
  w.push(box(28, -12, 6, 1, 2.2, 'low'));
  w.push(box(-28, 6, 6, 1, 2.2, 'low'));
  w.push(box(28, 6, 6, 1, 2.2, 'low'));

  // Osłony w strefie A
  w.push(box(-23, -17, 3, 2.4, 1.25, 'crate'));
  w.push(box(-14, -13, 2.2, 3, 1.25, 'crate'));
  w.push(box(-19, -21, 4, 1.6, 1.25, 'crate'));
  w.push(box(-24, -10, 2, 2, 1.1, 'barrel'));
  w.push(box(-13, -20, 1.6, 1.6, 1.35, 'barrel'));

  // Osłony w strefie B
  w.push(box(23, -17, 3, 2.4, 1.25, 'crate'));
  w.push(box(14, -13, 2.2, 3, 1.25, 'crate'));
  w.push(box(19, -21, 4, 1.6, 1.25, 'crate'));
  w.push(box(24, -10, 2, 2, 1.1, 'barrel'));
  w.push(box(13, -20, 1.6, 1.6, 1.35, 'barrel'));

  // Osłony w korytarzach i na midzie
  w.push(box(-12, 13, 2.4, 2, 1.2, 'crate'));
  w.push(box(12, 13, 2.4, 2, 1.2, 'crate'));
  w.push(box(-12, 6, 1.8, 1.8, 1.2, 'barrel'));
  w.push(box(12, 6, 1.8, 1.8, 1.2, 'barrel'));
  w.push(box(0, 14, 2.6, 2, 1.2, 'crate'));
  w.push(box(0, 8, 2, 2, 1.2, 'crate'));
  w.push(box(0, -1, 2.4, 1.8, 1.2, 'crate'));
  w.push(box(0, -10, 2.4, 2, 1.2, 'crate'));
  w.push(box(-12, -1, 2, 2, 1.2, 'crate'));
  w.push(box(12, -1, 2, 2, 1.2, 'crate'));

  return w;
}

export const WALLS = buildWalls();

export const MAP = {
  size: 66,
  half: 33,
  walls: WALLS,
  sites: {
    A: { x: -18, z: -16, w: 11, d: 10 },
    B: { x: 18, z: -16, w: 11, d: 10 },
  },
  spawns: {
    T: [[-12, 26], [-4, 27], [4, 27], [12, 26], [0, 30]],
    CT: [[-6, -29], [0, -29], [6, -29], [-11, -27], [11, -27]],
  },
  nav: { cell: 1, origin: -33, count: 66 },
};

export const C = {
  PLAYER_RADIUS: 0.36,
  BOT_RADIUS: 0.38,
  EYE_STAND: 1.62,
  EYE_CROUCH: 1.08,
  HEIGHT_STAND: 1.8,
  HEIGHT_CROUCH: 1.25,
  GRAVITY: 22,
  JUMP_SPEED: 7.2,
  WALK_SPEED: 3.1,
  RUN_SPEED: 5.0,
  CROUCH_SPEED: 2.1,
  AIR_CONTROL: 0.42,
  FRICTION: 9,
  FREEZE_TIME: 7,
  ROUND_TIME: 115,
  PLANT_TIME: 3.2,
  DEFUSE_TIME: 10,
  BOMB_TIME: 40,
  ROUND_END_TIME: 5,
  WIN_SCORE: 13,
  START_MONEY: 800,
  MAX_MONEY: 16000,
  KILL_REWARD: 300,
  PLANT_REWARD: 800,
  DEFUSE_REWARD: 800,
};

export const WEAPONS = {
  knife: {
    id: 'knife', name: 'Nóż', dmg: 55, rpm: 130, mag: 0, reserve: 0,
    reload: 0, spread: 0, armorPen: 1, headMult: 1.6, range: 2.2,
    auto: false, melee: true, price: 0, move: 1.12,
  },
  pistol: {
    id: 'pistol', name: 'P-250', dmg: 32, rpm: 380, mag: 13, reserve: 52,
    reload: 1.9, spread: 0.007, armorPen: 0.5, headMult: 4, range: 90,
    auto: false, price: 300, move: 1.05,
  },
  rifle: {
    id: 'rifle', name: 'AK-R', dmg: 36, rpm: 600, mag: 30, reserve: 90,
    reload: 2.4, spread: 0.011, armorPen: 0.775, headMult: 4, range: 110,
    auto: true, price: 2700, move: 1.0, recoil: 1.0,
  },
  m4: {
    id: 'm4', name: 'M4-A', dmg: 33, rpm: 666, mag: 30, reserve: 90,
    reload: 2.9, spread: 0.009, armorPen: 0.8, headMult: 4, range: 110,
    auto: true, price: 3000, move: 1.02, recoil: 0.72,
  },
  sniper: {
    id: 'sniper', name: 'AWM', dmg: 115, rpm: 42, mag: 5, reserve: 20,
    reload: 3.6, spread: 0.0009, armorPen: 0.97, headMult: 1, range: 180,
    auto: false, price: 4750, move: 0.88, recoil: 2.6, scoped: true,
  },
  c4: {
    id: 'c4', name: 'C4', dmg: 0, rpm: 0, mag: 0, reserve: 0,
    reload: 0, spread: 0, armorPen: 1, headMult: 1, range: 0,
    auto: false, price: 0, move: 1,
  },
};

export const BUY_ITEMS = [
  { id: 'rifle', label: 'AK-R', price: 2700, desc: 'Karabin szturmowy' },
  { id: 'm4', label: 'M4-A', price: 3000, desc: 'Karabin CT' },
  { id: 'sniper', label: 'AWM', price: 4750, desc: 'Karabin snajperski' },
  { id: 'pistol', label: 'P-250', price: 300, desc: 'Pistolet' },
  { id: 'armor', label: 'Kamizelka', price: 650, desc: 'Pancerz 100' },
  { id: 'helmet', label: 'Hełm', price: 1000, desc: 'Ochrona głowy' },
  { id: 'kit', label: 'Zestaw rozbr.', price: 400, desc: 'Szybsza rozbrajanie (CT)' },
  { id: 'ammo', label: 'Amunicja', price: 300, desc: 'Zapasowe magazynki' },
];

export const BOT_NAMES = [
  'Wilk', 'Szpak', 'Rys', 'Orzeł', 'Borsuk', 'Jastrząb', 'Lis', 'Tygrys',
  'Grom', 'Cień', 'Sokół', 'Niedźwiedź', 'Komar', 'Błysk', 'Raven', 'Falcon',
];

export const TEAM_COLOR = { T: 0xd9a441, CT: 0x4d8fd6 };
