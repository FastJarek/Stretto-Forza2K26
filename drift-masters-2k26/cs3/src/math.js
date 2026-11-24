// CS3 – matematyka gry: kolizje, promienie, nawigacja. Czysty JS (testowalny w Node).

import { MAP } from './config.js';

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const dist2 = (ax, az, bx, bz) => (ax - bx) ** 2 + (az - bz) ** 2;
export const dist = (ax, az, bx, bz) => Math.sqrt(dist2(ax, az, bx, bz));

export function normAngle(a) {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export function approachAngle(a, b, maxStep) {
  const d = normAngle(b - a);
  return a + clamp(d, -maxStep, maxStep);
}

export function boxMinX(b) { return b.x - b.w / 2; }
export function boxMaxX(b) { return b.x + b.w / 2; }
export function boxMinZ(b) { return b.z - b.d / 2; }
export function boxMaxZ(b) { return b.z + b.d / 2; }

// Wypycha punkt (x,z) poza AABB jeśli jest zbyt blisko. Zwraca nową pozycję.
export function pushOutOfBox(x, z, r, b) {
  const minX = boxMinX(b) - r, maxX = boxMaxX(b) + r;
  const minZ = boxMinZ(b) - r, maxZ = boxMaxZ(b) + r;
  if (x <= minX || x >= maxX || z <= minZ || z >= maxZ) return [x, z];

  const dl = x - minX, dr = maxX - x, dt = z - minZ, db = maxZ - z;
  const m = Math.min(dl, dr, dt, db);
  if (m === dl) return [minX, z];
  if (m === dr) return [maxX, z];
  if (m === dt) return [x, minZ];
  return [x, maxZ];
}

// Ruch z osobną rozwiązaniem osi X i Z – pozwala ślizgać się wzdłuż ścian.
export function moveWithCollisions(x, z, dx, dz, r, walls, iterations = 2) {
  let nx = x + dx;
  let nz = z;
  for (let k = 0; k < iterations; k++) {
    for (const b of walls) [nx, nz] = pushOutOfBox(nx, nz, r, b);
  }
  nx = clamp(nx, -MAP.half + r + 0.2, MAP.half - r - 0.2);

  let px = nx;
  let pz = z + dz;
  for (let k = 0; k < iterations; k++) {
    for (const b of walls) [px, pz] = pushOutOfBox(px, pz, r, b);
  }
  pz = clamp(pz, -MAP.half + r + 0.2, MAP.half - r - 0.2);
  return [px, pz];
}

// Przecięcie promienia z AABB. Zwraca t >= 0 lub Infinity.
export function rayBox(ox, oy, oz, dx, dy, dz, b) {
  let tmin = 0, tmax = Infinity;
  const lo = [boxMinX(b), 0, boxMinZ(b)];
  const hi = [boxMaxX(b), b.h, boxMaxZ(b)];
  const o = [ox, oy, oz], d = [dx, dy, dz];
  for (let i = 0; i < 3; i++) {
    if (Math.abs(d[i]) < 1e-8) {
      if (o[i] < lo[i] || o[i] > hi[i]) return Infinity;
    } else {
      const inv = 1 / d[i];
      let t1 = (lo[i] - o[i]) * inv;
      let t2 = (hi[i] - o[i]) * inv;
      if (t1 > t2) [t1, t2] = [t2, t1];
      tmin = Math.max(tmin, t1);
      tmax = Math.min(tmax, t2);
      if (tmin > tmax) return Infinity;
    }
  }
  return tmin;
}

// Przecięcie promienia z pionowym walcem gracza. Zwraca {t, part} lub null.
export function rayActor(o, d, a) {
  const r = a.radius || 0.36;
  const ox = o.x - a.x, oz = o.z - a.z;
  const A = d.x * d.x + d.z * d.z;
  if (A < 1e-9) return null;
  const B = 2 * (ox * d.x + oz * d.z);
  const C = ox * ox + oz * oz - r * r;
  const disc = B * B - 4 * A * C;
  if (disc < 0) return null;
  const sq = Math.sqrt(disc);
  let t = (-B - sq) / (2 * A);
  if (t < 0) t = (-B + sq) / (2 * A);
  if (t < 0) return null;
  const y = o.y + d.y * t;
  const top = a.y + (a.crouch ? 1.25 : 1.8);
  if (y < a.y - 0.05 || y > top) return null;
  const rel = y - a.y;
  const part = rel > top - 0.34 ? 'head' : rel < 0.38 ? 'legs' : 'body';
  return { t, part };
}

// Linia wzroku między dwoma punktami (Ignoruje podmiot, opcjonalnie).
export function hasLOS(a, b, walls, maxDist = Infinity) {
  const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
  const len = Math.hypot(dx, dy, dz);
  if (len < 0.001) return true;
  if (len > maxDist) return false;
  const nx = dx / len, ny = dy / len, nz = dz / len;
  for (const w of walls) {
    const t = rayBox(a.x, a.y, a.z, nx, ny, nz, w);
    if (t > 0.05 && t < len - 0.35) return false;
  }
  return true;
}

// Najbliższy cel trafienia: ściana albo gracz. Zwraca {t, actor?, part?, wall?}.
export function castShot(origin, dir, walls, actors, shooter, maxRange) {
  let best = { t: maxRange };
  for (const w of walls) {
    const t = rayBox(origin.x, origin.y, origin.z, dir.x, dir.y, dir.z, w);
    if (t < best.t) best = { t, wall: w };
  }
  for (const a of actors) {
    if (a === shooter || !a.alive) continue;
    const hit = rayActor(origin, dir, a);
    if (hit && hit.t < best.t) best = { t: hit.t, actor: a, part: hit.part };
  }
  return best;
}

// Kierunek z kątami yaw/pitch (yaw=0 → -Z, pitch>0 → góra).
export function dirFromAngles(yaw, pitch, spreadX = 0, spreadY = 0) {
  const y = yaw + spreadX, p = clamp(pitch + spreadY, -1.5, 1.5);
  const cp = Math.cos(p);
  return { x: -Math.sin(y) * cp, y: Math.sin(p), z: -Math.cos(y) * cp };
}

// ---------- Nawigacja siatkowa ----------

let navCache = null;

export function buildNavGrid(walls = MAP.walls) {
  if (navCache) return navCache;
  const { cell, origin, count } = MAP.nav;
  const free = new Uint8Array(count * count);
  const pad = 0.48;
  for (let iz = 0; iz < count; iz++) {
    for (let ix = 0; ix < count; ix++) {
      const x = origin + ix * cell + cell / 2;
      const z = origin + iz * cell + cell / 2;
      let blocked = false;
      for (const b of walls) {
        if (x > boxMinX(b) - pad && x < boxMaxX(b) + pad &&
            z > boxMinZ(b) - pad && z < boxMaxZ(b) + pad) {
          blocked = true;
          break;
        }
      }
      free[iz * count + ix] = blocked ? 0 : 1;
    }
  }
  navCache = free;
  return free;
}

export function worldToCell(x, z) {
  const { cell, origin, count } = MAP.nav;
  return [
    clamp(Math.floor((x - origin) / cell), 0, count - 1),
    clamp(Math.floor((z - origin) / cell), 0, count - 1),
  ];
}

export function cellToWorld(ix, iz) {
  const { cell, origin } = MAP.nav;
  return { x: origin + ix * cell + cell / 2, z: origin + iz * cell + cell / 2 };
}

function nearestFreeCell(x, z, grid) {
  const [cx, cz] = worldToCell(x, z);
  const { count } = MAP.nav;
  if (grid[cz * count + cx]) return [cx, cz];
  for (let ring = 1; ring <= 8; ring++) {
    for (let dz = -ring; dz <= ring; dz++) {
      for (let dx = -ring; dx <= ring; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== ring) continue;
        const ix = cx + dx, iz = cz + dz;
        if (ix < 0 || iz < 0 || ix >= count || iz >= count) continue;
        if (grid[iz * count + ix]) return [ix, iz];
      }
    }
  }
  return [cx, cz];
}

// A* na siatce 8-połączonej. Zwraca listę punktów świata (bez punktu startu).
export function findPath(from, to, maxNodes = 3500) {
  const grid = buildNavGrid();
  const { count } = MAP.nav;
  const [sx, sz] = nearestFreeCell(from.x, from.z, grid);
  const [gx, gz] = nearestFreeCell(to.x, to.z, grid);
  const start = sz * count + sx, goal = gz * count + gx;
  if (start === goal) return [{ x: to.x, z: to.z }];

  const g = new Float32Array(count * count).fill(Infinity);
  const parent = new Int32Array(count * count).fill(-1);
  const closed = new Uint8Array(count * count);
  const open = [start];
  g[start] = 0;
  const h = (i) => {
    const dx = Math.abs((i % count) - gx), dz = Math.abs(Math.floor(i / count) - gz);
    return Math.max(dx, dz) + 0.414 * Math.min(dx, dz);
  };
  let visited = 0;

  while (open.length && visited++ < maxNodes) {
    let bi = 0;
    for (let i = 1; i < open.length; i++) {
      if (g[open[i]] + h(open[i]) < g[open[bi]] + h(open[bi])) bi = i;
    }
    const cur = open.splice(bi, 1)[0];
    if (cur === goal) {
      const path = [];
      let node = goal;
      while (node !== start && node >= 0) {
        const ix = node % count, iz = Math.floor(node / count);
        const p = cellToWorld(ix, iz);
        path.push(p);
        node = parent[node];
      }
      path.reverse();
      if (path.length) { path[path.length - 1] = { x: to.x, z: to.z }; }
      return smoothPath(path, grid);
    }
    closed[cur] = 1;
    const cx = cur % count, cz = Math.floor(cur / count);
    for (let dz = -1; dz <= 1; dz++) {
      for (let dx = -1; dx <= 1; dx++) {
        if (!dx && !dz) continue;
        const nx = cx + dx, nz = cz + dz;
        if (nx < 0 || nz < 0 || nx >= count || nz >= count) continue;
        const ni = nz * count + nx;
        if (!grid[ni] || closed[ni]) continue;
        if (dx && dz && (!grid[cz * count + nx] || !grid[nz * count + cx])) continue;
        const ng = g[cur] + (dx && dz ? 1.414 : 1);
        if (ng < g[ni]) {
          g[ni] = ng;
          parent[ni] = cur;
          if (!open.includes(ni)) open.push(ni);
        }
      }
    }
  }
  return [];
}

// Uproszczenie ścieżki: usuwamy punkty widoczne z wcześniejszego.
function smoothPath(path, grid) {
  if (path.length <= 2) return path;
  const out = [];
  let i = 0;
  while (i < path.length - 1) {
    let j = path.length - 1;
    while (j > i + 1 && !segmentFree(path[i], path[j], grid)) j--;
    out.push(path[j]);
    i = j;
  }
  if (!out.length && path.length) out.push(path[path.length - 1]);
  return out;
}

function segmentFree(a, b, grid) {
  const n = Math.ceil(dist(a.x, a.z, b.x, b.z) / 0.4);
  for (let s = 1; s <= n; s++) {
    const t = s / n;
    const [ix, iz] = worldToCell(lerp(a.x, b.x, t), lerp(a.z, b.z, t));
    if (!grid[iz * MAP.nav.count + ix]) return false;
  }
  return true;
}

export function inSite(x, z, site) {
  return Math.abs(x - site.x) <= site.w / 2 && Math.abs(z - site.z) <= site.d / 2;
}
