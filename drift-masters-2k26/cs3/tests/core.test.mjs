import test from 'node:test';
import assert from 'node:assert/strict';

import { C, MAP, WEAPONS } from '../src/config.js';
import {
  moveWithCollisions, rayBox, rayActor, castShot, dirFromAngles,
  findPath, inSite, hasLOS, buildNavGrid,
} from '../src/math.js';
import {
  createActor, updateMovement, shoot, startReload, applyDamage, giveWeapon, resetActor,
} from '../src/actor.js';
import { Match } from '../src/match.js';
import { updateBot } from '../src/bots.js';

const walls = MAP.walls;

test('mapa ma dwie strefy iosilki startowe', () => {
  assert.ok(inSite(MAP.sites.A.x, MAP.sites.A.z, MAP.sites.A));
  assert.equal(MAP.spawns.T.length, 5);
  assert.equal(MAP.spawns.CT.length, 5);
  assert.ok(walls.length > 40);
});

test('ruch nie pozwala przejść przez ścianę', () => {
  // Mur na z=20, przejście tylko w wybranych miejscach
  const start = [-25, 22];
  let [x, z] = start;
  for (let i = 0; i < 80; i++) {
    [x, z] = moveWithCollisions(x, z, 0, -0.25, 0.36, walls);
  }
  assert.ok(z > 20, `powinien zatrzymać się przed murem, z=${z}`);
});

test('promień trafia w ścianę i w gracza', () => {
  const w = { x: 0, z: -10, w: 4, d: 1, h: 3 };
  assert.ok(Number.isFinite(rayBox(0, 1, 0, 0, 0, -1, w)));
  const target = createActor({ x: 0, z: -5, team: 'CT' });
  const hit = rayActor({ x: 0, y: 1.2, z: 0 }, { x: 0, y: 0, z: -1 }, target);
  assert.ok(hit);
  assert.equal(hit.part, 'body');
  const high = rayActor({ x: 0, y: 1.7, z: 0 }, { x: 0, y: 0, z: -1 }, target);
  assert.equal(high.part, 'head');
});

test('kierunek patrzenia: yaw 0 idzie w -Z, pitch w górę', () => {
  const d = dirFromAngles(0, 0);
  assert.ok(Math.abs(d.x) < 1e-6);
  assert.ok(d.z < -0.99);
  const up = dirFromAngles(0, 0.5);
  assert.ok(up.y > 0.4);
});

test('obrażenia z głowy są wyższe i gracz ginie', () => {
  const a = createActor({ team: 'CT' });
  const attacker = createActor({ team: 'T' });
  applyDamage(a, 40, 'head', attacker);
  assert.equal(a.hp, 60);
  assert.equal(attacker.money, C.START_MONEY + C.KILL_REWARD - C.KILL_REWARD); // 40 ≠ zabicie
  applyDamage(a, 100, 'body', attacker);
  assert.equal(a.alive, false);
  assert.equal(attacker.kills, 1);
  assert.equal(attacker.money, C.START_MONEY + C.KILL_REWARD);
});

test('przeładowanie zużywa zapas amunicji', () => {
  const a = createActor({ weapon: 'rifle' });
  a.ammo = 2;
  a.reserve = 30;
  assert.equal(startReload(a, 0), true);
  for (let i = 0; i < 40; i++) updateMovement(a, {}, 0.1, walls);
  assert.equal(a.ammo, WEAPONS.rifle.mag);
  assert.equal(a.reserve, 30 - (WEAPONS.rifle.mag - 2));
});

test('strzał trafia wroga i zużywa amunicję', () => {
  const shooter = createActor({ team: 'T', x: 0, z: 10, weapon: 'rifle' });
  shooter.yaw = 0; shooter.pitch = 0;
  const target = createActor({ team: 'CT', x: 0, z: 4 });
  let hits = 0;
  const res = shoot(shooter, 1, {
    walls: [{ x: 0, z: -20, w: 4, d: 1, h: 3 }],
    actors: [target],
    onShot: () => hits++,
  }, { error: 0 });
  assert.ok(res);
  assert.equal(shooter.ammo, WEAPONS.rifle.mag - 1);
  assert.equal(hits, 1);
  assert.ok(target.hp < 100 || !target.alive);
});

test('A* znajduje drogę ze spawnu T do strefy A', () => {
  const path = findPath({ x: MAP.spawns.T[0][0], z: MAP.spawns.T[0][1] },
    { x: MAP.sites.A.x, z: MAP.sites.A.z });
  assert.ok(path.length > 0, 'ścieżka nie jest pusta');
  assert.ok(path.length < 300);
  const grid = buildNavGrid();
  for (const p of path) {
    const ix = Math.floor(p.x + 33), iz = Math.floor(p.z + 33);
    assert.equal(grid[iz * 66 + ix], 1, `punkt ${p.x},${p.z} jest wolny`);
  }
});

test('linia wzroku działa przez przejścia i jest blokowana przez mur', () => {
  assert.equal(hasLOS({ x: 0, y: 1.6, z: 25 }, { x: 0, y: 1.6, z: 15 }, walls), true);
  assert.equal(hasLOS({ x: -25, y: 1.6, z: 25 }, { x: -25, y: 1.6, z: 15 }, walls), false);
});

test('mecz przechodzi przez freeze → live i kończy rundę po eliminacji', () => {
  const a = createActor({ team: 'T' });
  const b = createActor({ team: 'CT' });
  const m = new Match([a, b]);
  m.startMatch();
  assert.equal(m.phase, 'freeze');
  m.update(C.FREEZE_TIME + 0.1, 1);
  assert.equal(m.phase, 'live');
  b.alive = false;
  m.update(0.016, 2);
  assert.equal(m.phase, 'roundend');
  assert.equal(m.score.T, 1);
  assert.ok(a.money > C.START_MONEY);
});

test('bomba: założenie, wybuch i zwycięstwo T', () => {
  const a = createActor({ team: 'T', x: MAP.sites.A.x, z: MAP.sites.A.z });
  const b = createActor({ team: 'CT', x: 0, z: -29 });
  const m = new Match([a, b]);
  m.startMatch();
  m.phase = 'live';
  a.hasBomb = true; a.weapon = 'c4';
  a.x = MAP.sites.A.x; a.z = MAP.sites.A.z;
  for (let i = 0; i < 40; i++) m.tryPlant(a, 0.1);
  assert.equal(m.bombPlanted, true);
  assert.equal(m.bomb.site, 'A');
  m.update(C.BOMB_TIME + 0.1, 5);
  assert.equal(m.phase, 'roundend');
  assert.equal(m.winner, 'T');
});

test('CT rozbraja bombę', () => {
  const a = createActor({ team: 'T', x: 0, z: 26 });
  const b = createActor({ team: 'CT', x: MAP.sites.B.x, z: MAP.sites.B.z });
  const m = new Match([a, b]);
  m.startMatch();
  m.phase = 'live';
  m.bombPlanted = true;
  m.bomb = { x: b.x, z: b.z, site: 'B' };
  b.kit = true;
  for (let i = 0; i < 60; i++) m.tryDefuse(b, 0.1);
  assert.equal(m.phase, 'roundend');
  assert.equal(m.winner, 'CT');
});

test('bot potrafi się poruszać w stronę celu', () => {
  const bot = createActor({ team: 'T', bot: true, x: -12, z: 26 });
  const enemy = createActor({ team: 'CT', x: 0, z: -29 });
  const m = new Match([bot, enemy]);
  m.startMatch();
  m.phase = 'live';
  const ctx = {
    actors: [bot, enemy], walls, weapons: WEAPONS, now: 10,
    match: m, onBotShot: () => {}, onShot: () => {},
  };
  const d0 = Math.hypot(bot.x - MAP.sites.A.x, bot.z - MAP.sites.A.z);
  for (let i = 0; i < 300; i++) {
    ctx.now += 1 / 60;
    updateBot(bot, ctx, 1 / 60);
  }
  const d1 = Math.hypot(bot.x - MAP.sites.A.x, bot.z - MAP.sites.A.z);
  assert.ok(d1 < d0 - 4, `bot powinien zbliżyć się do strefy: ${d0.toFixed(1)} → ${d1.toFixed(1)}`);
  assert.ok(bot.alive);
});
