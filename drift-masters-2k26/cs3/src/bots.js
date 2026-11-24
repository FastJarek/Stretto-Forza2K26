// CS3 – zachowanie botów: nawigacja A*, walka, celowanie, obsługa celu.

import { MAP } from './config.js';
import {
  dist, findPath, hasLOS, normAngle, approachAngle, inSite, clamp,
} from './math.js';
import { updateMovement, shoot, startReload, melee } from './actor.js';

const EYE = 1.6;

function eyeOf(a) {
  return { x: a.x, y: a.y + (a.crouch ? 1.05 : EYE), z: a.z };
}

function canSee(bot, enemy, walls) {
  if (!enemy.alive) return false;
  const d = dist(bot.x, bot.z, enemy.x, enemy.z);
  if (d > 75) return false;
  const ang = Math.atan2(-(enemy.x - bot.x), -(enemy.z - bot.z));
  if (Math.abs(normAngle(ang - bot.yaw)) > 1.25 && bot.targetId !== enemy.id) return false;
  return hasLOS(eyeOf(bot), eyeOf(enemy), walls, d + 1);
}

function chooseGoal(bot, ctx) {
  const m = ctx.match;
  if (!m) return { x: 0, z: 0 };
  if (bot.team === 'CT' && m.bombPlanted && m.bomb) {
    return { x: m.bomb.x, z: m.bomb.z };
  }
  if (bot.team === 'T' && m.bombPlanted) {
    return { x: m.bomb.x, z: m.bomb.z };
  }
  const site = MAP.sites[bot.site || 'A'];
  if (bot.team === 'T' && bot.hasBomb) {
    if (inSite(bot.x, bot.z, site)) return { x: bot.x, z: bot.z, plant: true };
    return { x: site.x, z: site.z };
  }
  if (bot.team === 'T' && m.bombCarrier && m.bombCarrier !== bot) {
    const c = m.bombCarrier;
    return { x: c.x, z: c.z };
  }
  // CT broni strefy lub patroluje w jej pobliżu
  const off = bot.defendOffset || [0, 0];
  return { x: site.x + off[0], z: site.z + off[1] };
}

function followPath(bot, goal, dt, ctx) {
  bot.pathTimer -= dt;
  const goalMoved = !bot.lastGoal || dist(bot.lastGoal.x, bot.lastGoal.z, goal.x, goal.z) > 2.5;
  if (bot.pathTimer <= 0 || goalMoved || !bot.path.length) {
    bot.path = findPath(bot, goal);
    bot.pathTimer = 0.6 + Math.random() * 0.35;
    bot.lastGoal = { x: goal.x, z: goal.z };
  }
  let point = bot.path[0];
  while (point && dist(bot.x, bot.z, point.x, point.z) < 1.1) {
    bot.path.shift();
    point = bot.path[0];
  }
  if (!point) point = goal;
  const dx = point.x - bot.x, dz = point.z - bot.z;
  const len = Math.hypot(dx, dz) || 1;
  const wantYaw = Math.atan2(-dx, -dz);
  bot.yaw = approachAngle(bot.yaw, wantYaw, dt * 7);
  bot.pitch = approachAngle(bot.pitch, 0, dt * 2);
  return { forward: 1, strafe: 0, jump: false, crouch: false, walk: false };
}

function engage(bot, enemy, dt, ctx) {
  const dx = enemy.x - bot.x, dz = enemy.z - bot.z;
  const d = Math.hypot(dx, dz) || 1;
  const wantYaw = Math.atan2(-dx, -dz);
  const wantPitch = Math.atan2(
    enemy.y + (enemy.crouch ? 1.1 : 1.45) - (bot.y + bot.eye), d,
  );
  const skill = bot.difficulty;
  const speed = (3.2 + skill * 3.6) * dt;
  bot.yaw = approachAngle(bot.yaw, wantYaw, speed);
  bot.pitch = approachAngle(bot.pitch, wantPitch, speed * 0.8);
  bot.reactionT += dt;
  bot.strafeTimer -= dt;
  if (bot.strafeTimer <= 0) {
    bot.strafeDir = Math.random() < 0.5 ? -1 : 1;
    bot.strafeTimer = 0.5 + Math.random() * 1.1;
  }

  const w = ctx.weapons[bot.weapon];
  const far = d > 22;
  const input = {
    forward: far ? 0.25 : 0,
    strafe: bot.strafeDir * (far ? 0.35 : 0.8),
    jump: false,
    crouch: far && Math.random() < 0.02,
    walk: far,
  };

  if (bot.ammo <= 0 && bot.reloading <= 0) {
    startReload(bot, ctx.now);
  } else if (d < 2.1 && bot.weapon !== 'knife') {
    // nóż przy bardzo bliskim kontakcie
    bot.weapon = 'knife'; bot.ammo = 0;
  }

  const reaction = 0.42 / skill;
  if (bot.reactionT > reaction && bot.ammo > 0) {
    const facing = Math.abs(normAngle(bot.yaw - wantYaw));
    if (facing < 0.22 + (1 - skill) * 0.15) {
      const err = (0.012 + 0.012 * (d / 45)) / skill;
      shoot(bot, ctx.now, {
        ...ctx,
        actors: ctx.actors.filter((a) => a.team !== bot.team),
        walls: ctx.walls,
        onShot: ctx.onBotShot,
      }, { error: err });
    }
  }
  return input;
}

export function updateBot(bot, ctx, dt) {
  if (!bot.alive || !ctx.match || ctx.match.phase === 'freeze') return;

  const enemies = ctx.actors.filter((a) => a.alive && a.team !== bot.team);
  let target = null;
  if (bot.targetId) target = enemies.find((e) => e.id === bot.targetId);
  if (target && !canSee(bot, target, ctx.walls)) {
    bot.lostT = (bot.lostT || 0) + dt;
    if (bot.lostT > 1.2) { target = null; bot.targetId = null; bot.lostT = 0; }
  } else {
    bot.lostT = 0;
  }
  if (!target) {
    let bestD = Infinity;
    for (const e of enemies) {
      if (!canSee(bot, e, ctx.walls)) continue;
      const d = dist(bot.x, bot.z, e.x, e.z);
      if (d < bestD) { bestD = d; target = e; }
    }
    if (target) {
      bot.targetId = target.id;
      bot.reactionT = 0;
    }
  }

  // Nosiciel bomby nie daje się odciągać od celu – walczy tylko przy bliskim zagrożeniu.
  if (target && bot.hasBomb && !ctx.match.bombPlanted &&
      dist(bot.x, bot.z, target.x, target.z) > 16) {
    target = null;
    bot.targetId = null;
  }

  let input;
  if (target) {
    bot.botState = 'engage';
    input = engage(bot, target, dt, ctx);
  } else {
    bot.botState = 'navigate';
    const goal = chooseGoal(bot, ctx);
    input = followPath(bot, goal, dt, ctx);

    if (goal.plant && bot.team === 'T' && bot.hasBomb) {
      ctx.match.tryPlant(bot, dt);
    }
    if (bot.team === 'CT' && ctx.match.bombPlanted) {
      const d = dist(bot.x, bot.z, ctx.match.bomb.x, ctx.match.bomb.z);
      if (d < 1.8) {
        bot.crouch = true;
        ctx.match.tryDefuse(bot, dt);
      }
    }
  }

  // Bot nie powinien stać w miejscu, gdy został trafiony – zwiększ czujność.
  if (bot.hurtT > 0 && !target) bot.walking = false;
  updateMovement(bot, input, dt, ctx.walls);
  bot.firing = false;
}
