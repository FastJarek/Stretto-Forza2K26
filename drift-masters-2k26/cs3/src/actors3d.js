// CS3 – modele postaci zbudowane z prymitywów + animacja chodu.

import * as THREE from './lib/three.module.js';
import { TEAM_COLOR } from './config.js';

const skinMat = new THREE.MeshStandardMaterial({ color: 0xc99a70, roughness: 0.9 });
const bootMat = new THREE.MeshStandardMaterial({ color: 0x2c2a27, roughness: 0.95 });
const gunMat = new THREE.MeshStandardMaterial({ color: 0x272b2c, roughness: 0.55, metalness: 0.5 });
const gunWood = new THREE.MeshStandardMaterial({ color: 0x6b4526, roughness: 0.8 });

function box(w, h, d, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  return m;
}

function markerSprite(color) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = color;
  ctx.beginPath(); ctx.arc(32, 32, 18, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,0.9)'; ctx.lineWidth = 3; ctx.stroke();
  const tex = new THREE.CanvasTexture(c);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, depthTest: false, transparent: true,
  }));
  s.scale.set(0.55, 0.55, 1);
  s.position.y = 2.35;
  s.renderOrder = 20;
  return s;
}

export function createActorModel(team, showMarker = false) {
  const g = new THREE.Group();
  const col = TEAM_COLOR[team];
  const cloth = new THREE.MeshStandardMaterial({ color: col, roughness: 0.92 });
  const vest = new THREE.MeshStandardMaterial({
    color: team === 'CT' ? 0x2f4c68 : 0x6b5433, roughness: 0.9,
  });

  const body = new THREE.Group();
  g.add(body);

  // Korpus, kamizelka, głowa, hełm
  body.add(box(0.62, 0.72, 0.34, cloth, 0, 1.22, 0));
  body.add(box(0.66, 0.48, 0.4, vest, 0, 1.28, -0.02));
  body.add(box(0.3, 0.3, 0.3, skinMat, 0, 1.78, 0));
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.235, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.62), vest);
  helmet.position.y = 1.87;
  helmet.castShadow = true;
  body.add(helmet);
  body.add(box(0.5, 0.3, 0.22, vest, 0, 1.18, 0.25)); // plecak

  // Ramiona i nogi (zawiasy w grupach, żeby animować)
  const limbs = {};
  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.42, 1.5, 0);
    arm.add(box(0.19, 0.5, 0.19, cloth, 0, -0.25, 0));
    arm.add(box(0.17, 0.18, 0.17, skinMat, 0, -0.55, 0));
    body.add(arm);
    limbs[side < 0 ? 'armL' : 'armR'] = arm;

    const leg = new THREE.Group();
    leg.position.set(side * 0.18, 0.93, 0);
    leg.add(box(0.23, 0.55, 0.24, cloth, 0, -0.28, 0));
    leg.add(box(0.25, 0.16, 0.32, bootMat, 0, -0.62, -0.04));
    body.add(leg);
    limbs[side < 0 ? 'legL' : 'legR'] = leg;
  }

  // Karabin trzymany z przodu
  const rifle = new THREE.Group();
  rifle.add(box(0.09, 0.1, 0.7, gunMat, 0, 0, -0.2));
  rifle.add(box(0.07, 0.2, 0.1, gunMat, 0, -0.14, 0.02));
  rifle.add(box(0.08, 0.08, 0.25, gunWood, 0, -0.02, 0.2));
  rifle.add(box(0.04, 0.04, 0.35, gunMat, 0, 0.08, -0.3));
  rifle.position.set(0.16, 1.22, -0.34);
  rifle.rotation.y = -0.1;
  body.add(rifle);

  let marker = null;
  if (showMarker) {
    marker = markerSprite(team === 'CT' ? '#6fc3ff' : '#ffc861');
    g.add(marker);
  }

  g.userData = { body, limbs, rifle, marker, walkPhase: Math.random() * 6 };
  return g;
}

export function updateActorModel(model, actor, dt, now) {
  const d = model.userData;
  model.position.set(actor.x, actor.y, actor.z);
  model.rotation.y = actor.yaw;

  if (!actor.alive) {
    d.body.rotation.x = Math.min(Math.PI / 2, (d.body.rotation.x || 0) + dt * 4);
    d.body.position.y = -0.25;
    if (d.marker) d.marker.visible = false;
    return;
  }
  d.body.rotation.x = 0;
  d.body.position.y = 0;
  if (d.marker) d.marker.visible = true;

  const speed = Math.hypot(actor.vx, actor.vz);
  d.walkPhase += dt * (4 + speed * 1.7);
  const amp = Math.min(0.65, speed / 6);
  const s = Math.sin(d.walkPhase) * amp;
  d.limbs.legL.rotation.x = s;
  d.limbs.legR.rotation.x = -s;
  d.limbs.armL.rotation.x = -s * 0.4;
  d.limbs.armR.rotation.x = s * 0.25;
  d.body.position.y = Math.abs(Math.sin(d.walkPhase)) * 0.045 * amp;

  // Kucanie – skrócenie sylwetki
  const targetScale = actor.crouch ? 0.72 : 1;
  d.body.scale.y += (targetScale - d.body.scale.y) * Math.min(1, dt * 12);
  d.rifle.rotation.x = actor.pitch * 0.5;
}
