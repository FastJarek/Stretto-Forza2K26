// CS3 – logika gracza i botów: ruch, strzelanie, obrażenia. Bez Three.js.

import { C, WEAPONS, MAP } from './config.js';
import {
  clamp, dist, dirFromAngles, moveWithCollisions, castShot, lerp,
} from './math.js';

let nextId = 1;

export function createActor(opts = {}) {
  const weapon = opts.weapon || 'pistol';
  const a = {
    id: opts.id ?? nextId++,
    name: opts.name || 'Żołnierz',
    team: opts.team === 'CT' ? 'CT' : 'T',
    bot: !!opts.bot,
    x: opts.x ?? 0, y: 0, z: opts.z ?? 0,
    vx: 0, vy: 0, vz: 0,
    yaw: opts.yaw ?? 0, pitch: 0,
    radius: C.BOT_RADIUS,
    eye: C.EYE_STAND,
    height: C.HEIGHT_STAND,
    crouch: false, walking: false, grounded: true,
    hp: 100, armor: 0, helmet: false, kit: false,
    alive: true, weapon,
    arsenal: {},
    ammo: WEAPONS[weapon].mag,
    reserve: WEAPONS[weapon].reserve,
    nextShot: 0, reloading: 0, recoilShots: 0,
    viewKick: 0, viewKickYaw: 0,
    kills: 0, deaths: 0, money: C.START_MONEY,
    hasBomb: false, plantProgress: 0, defuseProgress: 0,
    flashT: 0, hurtT: 0, lastHitBy: null,
    ads: false, firing: false,
    botState: 'roam', path: [], pathTimer: 0, targetId: null,
    reactionT: 0, burst: 0, strafeDir: Math.random() < 0.5 ? -1 : 1,
    strafeTimer: 0, aimYaw: 0, aimPitch: 0, difficulty: opts.difficulty ?? 1,
  };
  a.arsenal[weapon] = { mag: a.ammo, reserve: a.reserve };
  return a;
}

export function giveWeapon(a, id) {
  const w = WEAPONS[id];
  if (!w || id === 'c4') return false;
  if (a.arsenal[a.weapon]) {
    a.arsenal[a.weapon].mag = a.ammo;
    a.arsenal[a.weapon].reserve = a.reserve;
  }
  a.weapon = id;
  const st = a.arsenal[id] || { mag: w.mag, reserve: w.reserve };
  a.ammo = st.mag;
  a.reserve = st.reserve;
  a.reloading = 0;
  return true;
}

export function addAmmo(a) {
  const w = WEAPONS[a.weapon];
  if (!w || w.melee) return;
  a.reserve = Math.min(a.reserve + w.reserve, w.reserve * 2);
  a.arsenal[a.weapon] = { mag: a.ammo, reserve: a.reserve };
}

export function startReload(a, now) {
  const w = WEAPONS[a.weapon];
  if (!w || w.melee || a.reloading > 0 || a.ammo >= w.mag || a.reserve <= 0) return false;
  a.reloading = w.reload;
  a.nextShot = Math.max(a.nextShot, now + w.reload * 0.9);
  return true;
}

function finishReload(a) {
  const w = WEAPONS[a.weapon];
  const need = w.mag - a.ammo;
  const take = Math.min(need, a.reserve);
  a.ammo += take;
  a.reserve -= take;
  a.arsenal[a.weapon] = { mag: a.ammo, reserve: a.reserve };
}

// input: {forward, strafe, jump, crouch, walk, dx, dz}
export function updateMovement(a, input, dt, walls = MAP.walls) {
  if (!a.alive) return;
  a.flashT = Math.max(0, a.flashT - dt);
  a.hurtT = Math.max(0, a.hurtT - dt);

  if (a.reloading > 0) {
    a.reloading -= dt;
    if (a.reloading <= 0) { a.reloading = 0; finishReload(a); }
  }
  a.viewKick = Math.max(0, a.viewKick - dt * 1.8);
  a.viewKickYaw *= Math.max(0, 1 - dt * 5);

  const wantCrouch = !!input.crouch;
  a.crouch = wantCrouch;
  const targetEye = wantCrouch ? C.EYE_CROUCH : C.EYE_STAND;
  a.eye = lerp(a.eye, targetEye, 1 - Math.exp(-12 * dt));
  a.height = wantCrouch ? C.HEIGHT_CROUCH : C.HEIGHT_STAND;
  a.walking = !!input.walk;

  const w = WEAPONS[a.weapon] || WEAPONS.pistol;
  const speed = (wantCrouch ? C.CROUCH_SPEED : input.walk ? C.WALK_SPEED : C.RUN_SPEED)
    * w.move * (a.ads ? 0.62 : 1);
  let ix = input.strafe || 0;
  let iz = input.forward || 0;
  const ilen = Math.hypot(ix, iz);
  if (ilen > 1) { ix /= ilen; iz /= ilen; }

  // Kierunek w świecie względem yaw (yaw=0 → -Z)
  const sin = Math.sin(a.yaw), cos = Math.cos(a.yaw);
  const wx = (-sin * iz + cos * ix) * speed;
  const wz = (-cos * iz - sin * ix) * speed;

  if (a.grounded) {
    const k = 1 - Math.exp(-(ilen > 0 ? 16 : C.FRICTION) * dt);
    a.vx = lerp(a.vx, wx, k);
    a.vz = lerp(a.vz, wz, k);
    if (input.jump) { a.vy = C.JUMP_SPEED; a.grounded = false; }
  } else {
    const k = 1 - Math.exp(-C.AIR_CONTROL * 4 * dt);
    a.vx += (wx - a.vx) * k * 0.55;
    a.vz += (wz - a.vz) * k * 0.55;
  }

  a.vy -= C.GRAVITY * dt;
  a.y += a.vy * dt;
  if (a.y <= 0) { a.y = 0; a.vy = 0; a.grounded = true; }

  const [nx, nz] = moveWithCollisions(a.x, a.z, a.vx * dt, a.vz * dt, a.radius, walls);
  if (Math.abs(nx - (a.x + a.vx * dt)) > 0.001) a.vx *= 0.2;
  if (Math.abs(nz - (a.z + a.vz * dt)) > 0.001) a.vz *= 0.2;
  a.x = nx; a.z = nz;
}

export function spreadFor(a, moving) {
  const w = WEAPONS[a.weapon];
  let s = w.spread;
  if (a.crouch) s *= 0.65;
  if (moving > 0.6) s *= 2.1;
  else if (moving > 0.1) s *= 1.4;
  if (!a.grounded) s *= 2.6;
  if (a.ads && w.scoped) s *= 0.25;
  s += a.recoilShots * w.spread * 0.12;
  return s;
}

// Próba strzału. Zwraca opis trafienia albo null.
export function shoot(a, now, ctx, opts = {}) {
  const w = WEAPONS[a.weapon];
  if (!a.alive || !w || w.melee || w.id === 'c4') return null;
  if (now < a.nextShot || a.reloading > 0) return null;
  if (a.ammo <= 0) { startReload(a, now); return null; }
  a.ammo--;
  a.nextShot = now + 60 / w.rpm;
  a.recoilShots++;
  a.firing = true;

  const moving = Math.hypot(a.vx, a.vz);
  const base = spreadFor(a, moving);
  const err = opts.error || 0;
  const sx = (Math.random() - 0.5) * 2 * (base + err);
  const sy = (Math.random() - 0.5) * 2 * (base + err);
  const origin = { x: a.x, y: a.y + a.eye, z: a.z };
  const dir = dirFromAngles(a.yaw + a.viewKickYaw, a.pitch + a.viewKick, sx, sy);
  const hit = castShot(origin, dir, ctx.walls || MAP.walls, ctx.actors || [], a, w.range);

  const recoil = w.recoil || 0.15;
  a.viewKick += (0.004 + Math.random() * 0.003) * recoil;
  a.viewKickYaw += (Math.random() - 0.5) * 0.0035 * recoil;
  a.viewKick = clamp(a.viewKick, 0, 0.14);

  let result = { shooter: a, origin, dir, hit, weapon: w, damage: 0 };
  if (hit.actor) {
    let dmg = w.dmg * Math.pow(1 - hit.t / w.range, 0.18);
    if (hit.part === 'head') dmg *= w.headMult;
    else if (hit.part === 'legs') dmg *= 0.78;
    if (hit.actor.armor > 0) {
      const ignore = (hit.actor.helmet && hit.part === 'head') ? 0.5 : 1;
      const pen = w.armorPen * ignore;
      dmg *= 1 - 0.5 * pen;
      hit.actor.armor = Math.max(0, hit.actor.armor - dmg * 0.45);
    }
    dmg = Math.round(dmg);
    applyDamage(hit.actor, dmg, hit.part, a);
    result.damage = dmg;
  }
  ctx.onShot?.(result);
  return result;
}

export function melee(a, now, ctx) {
  const w = WEAPONS[a.weapon];
  if (!a.alive || !w.melee || now < a.nextShot) return null;
  a.nextShot = now + 60 / w.rpm;
  const origin = { x: a.x, y: a.y + a.eye, z: a.z };
  const dir = dirFromAngles(a.yaw, a.pitch);
  const hit = castShot(origin, dir, ctx.walls || MAP.walls, ctx.actors || [], a, w.range);
  let result = { shooter: a, origin, dir, hit, weapon: w, damage: 0 };
  if (hit.actor) {
    const dmg = hit.part === 'head' ? Math.round(w.dmg * w.headMult) : w.dmg;
    applyDamage(hit.actor, dmg, hit.part, a);
    result.damage = dmg;
  }
  ctx.onShot?.(result);
  return result;
}

export function applyDamage(target, amount, part, attacker) {
  if (!target.alive) return;
  target.hp -= amount;
  target.hurtT = 0.35;
  target.lastHitBy = attacker?.id ?? null;
  if (target.hp <= 0) {
    target.hp = 0;
    target.alive = false;
    target.deaths++;
    if (attacker && attacker !== target) {
      attacker.kills++;
      attacker.money = Math.min(C.MAX_MONEY, attacker.money + C.KILL_REWARD);
    }
  }
}

export function resetActor(a, spawn, weapon) {
  a.x = spawn[0]; a.z = spawn[1]; a.y = 0;
  a.vx = a.vy = a.vz = 0;
  a.yaw = spawn[2] ?? (a.team === 'T' ? Math.PI : 0);
  a.pitch = 0;
  a.eye = C.EYE_STAND; a.height = C.HEIGHT_STAND;
  a.crouch = false; a.walking = false; a.grounded = true;
  a.hp = 100; a.alive = true; a.armor = a.armor || 0;
  a.ammo = 0; a.reloading = 0; a.nextShot = 0;
  a.recoilShots = 0; a.viewKick = 0; a.viewKickYaw = 0;
  a.hasBomb = false; a.plantProgress = 0; a.defuseProgress = 0;
  a.flashT = 0; a.hurtT = 0; a.ads = false; a.firing = false;
  a.path = []; a.targetId = null; a.botState = 'roam'; a.pathTimer = 0;
  a.arsenal = {};
  giveWeapon(a, weapon || (a.team === 'T' ? 'rifle' : 'm4'));
}
