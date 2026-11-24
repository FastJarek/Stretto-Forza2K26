// CS3 – proceduralzne tekstury generowane na canvasie (bez zewnętrznych plików).

import * as THREE from './lib/three.module.js';

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function makeCanvas(size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return [c, c.getContext('2d')];
}

function grain(ctx, size, rand, amount, alpha = 0.12) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rand() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n));
  }
  ctx.putImageData(img, 0, 0);
  ctx.globalAlpha = alpha;
  for (let i = 0; i < size / 2; i++) {
    ctx.fillStyle = rand() > 0.5 ? '#fff' : '#000';
    ctx.fillRect(rand() * size, rand() * size, 1 + rand() * 3, 1);
  }
  ctx.globalAlpha = 1;
}

function finish(canvas, repeat = 1) {
  const t = new THREE.CanvasTexture(canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.anisotropy = 4;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function sandTexture() {
  const size = 512;
  const [c, ctx] = makeCanvas(size);
  const rand = rng(7);
  ctx.fillStyle = '#c9ad7c';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 1600; i++) {
    ctx.fillStyle = rand() > 0.5 ? 'rgba(160,130,85,0.16)' : 'rgba(240,220,175,0.16)';
    const r = 2 + rand() * 22;
    ctx.beginPath();
    ctx.ellipse(rand() * size, rand() * size, r, r * (0.3 + rand() * 0.5), rand() * 3, 0, 7);
    ctx.fill();
  }
  grain(ctx, size, rand, 26, 0.1);
  return finish(c, 9);
}

function plasterTexture() {
  const size = 256;
  const [c, ctx] = makeCanvas(size);
  const rand = rng(19);
  ctx.fillStyle = '#d9c39a';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 90; i++) {
    ctx.fillStyle = rand() > 0.5 ? 'rgba(150,120,80,0.09)' : 'rgba(255,245,220,0.12)';
    ctx.fillRect(rand() * size, rand() * size, 8 + rand() * 60, 4 + rand() * 30);
  }
  // cienie pod blokami
  ctx.strokeStyle = 'rgba(120,95,60,0.25)';
  ctx.lineWidth = 3;
  for (let y = 0; y <= size; y += 64) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(size, y); ctx.stroke();
  }
  for (let x = 0; x <= size; x += 128) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, size); ctx.stroke();
    const off = x === 0 ? 64 : 0;
    ctx.beginPath(); ctx.moveTo(x + off, 0); ctx.lineTo(x + off, size); ctx.stroke();
  }
  grain(ctx, size, rand, 24, 0.08);
  return finish(c, 1);
}

function stoneTexture() {
  const size = 256;
  const [c, ctx] = makeCanvas(size);
  const rand = rng(31);
  ctx.fillStyle = '#a9906b';
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 32) {
    const off = (y / 32) % 2 ? 32 : 0;
    for (let x = -64; x < size; x += 64) {
      ctx.fillStyle = `rgba(${150 + rand() * 40},${125 + rand() * 35},${85 + rand() * 30},0.55)`;
      ctx.fillRect(x + off + 2, y + 2, 60, 28);
    }
  }
  grain(ctx, size, rand, 30, 0.12);
  return finish(c, 1);
}

function woodTexture() {
  const size = 256;
  const [c, ctx] = makeCanvas(size);
  const rand = rng(53);
  ctx.fillStyle = '#a27642';
  ctx.fillRect(0, 0, size, size);
  for (let y = 0; y < size; y += 42) {
    ctx.fillStyle = '#8e6336';
    ctx.fillRect(0, y + 40, size, 3);
    for (let i = 0; i < 26; i++) {
      ctx.strokeStyle = `rgba(70,45,20,${0.05 + rand() * 0.14})`;
      ctx.lineWidth = 1 + rand() * 2;
      ctx.beginPath();
      ctx.moveTo(0, y + rand() * 40);
      ctx.bezierCurveTo(size / 3, y + rand() * 40, size * 2 / 3, y + rand() * 40, size, y + rand() * 40);
      ctx.stroke();
    }
  }
  ctx.strokeStyle = 'rgba(60,40,20,0.65)';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(14, 14); ctx.lineTo(size - 14, size - 14);
  ctx.moveTo(size - 14, 14); ctx.lineTo(14, size - 14);
  ctx.stroke();
  ctx.strokeStyle = 'rgba(220,190,140,0.22)';
  ctx.lineWidth = 2;
  ctx.strokeRect(10, 10, size - 20, size - 20);
  grain(ctx, size, rand, 22, 0.1);
  return finish(c, 1);
}

function metalTexture(color = '#63727a') {
  const size = 256;
  const [c, ctx] = makeCanvas(size);
  const rand = rng(71);
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, size, size);
  for (let x = 0; x < size; x += 16) {
    ctx.fillStyle = 'rgba(0,0,0,0.11)';
    ctx.fillRect(x, 0, 2, size);
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(x + 3, 0, 2, size);
  }
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = `rgba(90,60,35,${0.15 + rand() * 0.25})`;
    ctx.beginPath();
    ctx.ellipse(rand() * size, rand() * size, 4 + rand() * 22, 3 + rand() * 12, rand() * 3, 0, 7);
    ctx.fill();
  }
  grain(ctx, size, rand, 22, 0.08);
  return finish(c, 1);
}

let cache = null;

export function getTextures() {
  if (cache) return cache;
  cache = {
    sand: sandTexture(),
    plaster: plasterTexture(),
    stone: stoneTexture(),
    wood: woodTexture(),
    metal: metalTexture(),
    rust: metalTexture('#8a5d3c'),
  };
  return cache;
}

export function makeMaterials() {
  const t = getTextures();
  return {
    ground: new THREE.MeshStandardMaterial({ map: t.sand, color: 0xffffff, roughness: 1 }),
    wall: new THREE.MeshStandardMaterial({ map: t.plaster, color: 0xfff3d8, roughness: 0.94 }),
    low: new THREE.MeshStandardMaterial({ map: t.stone, roughness: 0.95 }),
    crate: new THREE.MeshStandardMaterial({ map: t.wood, roughness: 0.88 }),
    barrel: new THREE.MeshStandardMaterial({ map: t.metal, roughness: 0.55, metalness: 0.35 }),
  };
}
