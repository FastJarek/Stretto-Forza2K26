// CS3 – model broni pierwszoosobowej (viewmodel) w osobnym renderze.

import * as THREE from './lib/three.module.js';

const metal = new THREE.MeshStandardMaterial({ color: 0x24282a, roughness: 0.5, metalness: 0.55 });
const dark = new THREE.MeshStandardMaterial({ color: 0x141718, roughness: 0.75 });
const wood = new THREE.MeshStandardMaterial({ color: 0x7a522f, roughness: 0.85 });
const tan = new THREE.MeshStandardMaterial({ color: 0x9b8560, roughness: 0.8 });
const glove = new THREE.MeshStandardMaterial({ color: 0x4b4437, roughness: 0.95 });
const glass = new THREE.MeshStandardMaterial({ color: 0x1d2b33, roughness: 0.15, metalness: 0.7 });

function box(w, h, d, mat, x, y, z, parent) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
  m.position.set(x, y, z);
  parent.add(m);
  return m;
}
function cyl(r, h, mat, x, y, z, parent, rot = [Math.PI / 2, 0, 0]) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 10), mat);
  m.position.set(x, y, z);
  m.rotation.set(...rot);
  parent.add(m);
  return m;
}

function hands(g, positions) {
  for (const [x, y, z] of positions) {
    box(0.12, 0.14, 0.22, glove, x, y, z, g);
    box(0.09, 0.19, 0.09, glove, x, y - 0.12, z + 0.05, g);
  }
}

function makeRifle(tanBody = false) {
  const g = new THREE.Group();
  const body = tanBody ? tan : wood;
  box(0.085, 0.11, 0.62, metal, 0, 0, -0.12, g);
  box(0.11, 0.1, 0.28, body, 0, -0.005, 0.28, g);
  box(0.07, 0.22, 0.12, dark, 0, -0.16, 0.02, g);       // magazynek
  box(0.09, 0.09, 0.22, body, 0, -0.02, 0.5, g);        // kolba
  cyl(0.022, 0.42, metal, 0, 0.012, -0.5, g);           // lufa
  cyl(0.033, 0.1, dark, 0, 0.012, -0.7, g);             // tłumik / hamulec
  box(0.05, 0.05, 0.05, dark, 0, 0.1, -0.3, g);         // celownik
  box(0.03, 0.02, 0.02, dark, 0, 0.13, -0.3, g);
  box(0.06, 0.04, 0.12, body, 0, -0.09, -0.3, g);       // chwyt
  hands(g, [[0.02, -0.16, 0.02], [-0.02, -0.12, -0.38]]);
  g.userData.muzzle = new THREE.Vector3(0, 0.012, -0.76);
  return g;
}

function makePistol() {
  const g = new THREE.Group();
  box(0.08, 0.1, 0.3, metal, 0, 0, -0.08, g);
  box(0.075, 0.22, 0.1, dark, 0, -0.16, 0.05, g);
  cyl(0.02, 0.16, metal, 0, 0.01, -0.3, g);
  box(0.05, 0.03, 0.03, dark, 0, 0.08, -0.2, g);
  box(0.08, 0.02, 0.03, dark, 0, 0.065, 0.03, g);
  hands(g, [[0.01, -0.17, 0.08]]);
  g.userData.muzzle = new THREE.Vector3(0, 0.01, -0.4);
  return g;
}

function makeSniper() {
  const g = new THREE.Group();
  box(0.09, 0.11, 0.72, dark, 0, 0, -0.08, g);
  box(0.11, 0.09, 0.3, wood, 0, -0.01, 0.4, g);
  cyl(0.025, 0.6, metal, 0, 0.015, -0.66, g);
  cyl(0.055, 0.3, glass, 0, 0.16, -0.1, g, [Math.PI / 2, 0, 0]);
  cyl(0.062, 0.04, metal, 0, 0.16, 0.06, g, [Math.PI / 2, 0, 0]);
  cyl(0.062, 0.04, metal, 0, 0.16, -0.26, g, [Math.PI / 2, 0, 0]);
  box(0.05, 0.06, 0.05, dark, 0, 0.1, -0.44, g);
  hands(g, [[0.02, -0.14, 0.1], [-0.02, -0.14, -0.45]]);
  g.userData.muzzle = new THREE.Vector3(0, 0.015, -0.98);
  return g;
}

function makeKnife() {
  const g = new THREE.Group();
  box(0.05, 0.05, 0.2, dark, 0, 0, 0.05, g);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.02, 0.32), metal);
  blade.position.set(0, 0, -0.2);
  blade.rotation.y = 0.12;
  g.add(blade);
  hands(g, [[0, -0.06, 0.08]]);
  g.userData.muzzle = new THREE.Vector3(0, 0, -0.38);
  return g;
}

function makeC4() {
  const g = new THREE.Group();
  box(0.32, 0.18, 0.24, tan, 0, 0, 0, g);
  box(0.2, 0.05, 0.04, dark, 0, 0.1, 0.02, g);
  box(0.06, 0.06, 0.02, metal, 0.1, 0.11, -0.06, g);
  hands(g, [[-0.14, -0.12, 0.12], [0.14, -0.12, 0.12]]);
  g.userData.muzzle = new THREE.Vector3(0, 0, -0.2);
  return g;
}

export function createViewmodel() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.01, 20);
  camera.position.set(0, 0, 0);
  scene.add(new THREE.AmbientLight(0xffffff, 1.5));
  const key = new THREE.DirectionalLight(0xfff0d8, 2.4);
  key.position.set(-1, 2, 1);
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x9fc4ff, 1.1);
  rim.position.set(2, 0.5, -1);
  scene.add(rim);

  const root = new THREE.Group();
  scene.add(root);

  const models = {
    rifle: makeRifle(false),
    m4: makeRifle(true),
    pistol: makePistol(),
    sniper: makeSniper(),
    knife: makeKnife(),
    c4: makeC4(),
  };
  for (const m of Object.values(models)) { m.visible = false; root.add(m); }

  const flash = new THREE.Mesh(
    new THREE.PlaneGeometry(0.26, 0.26),
    new THREE.MeshBasicMaterial({ color: 0xffd88a, transparent: true, opacity: 0, depthTest: false }),
  );
  flash.renderOrder = 100;
  root.add(flash);

  let current = 'rifle';
  let kick = 0;
  let flashT = 0;
  let bob = 0;
  let reloadAnim = 0;
  const basePos = new THREE.Vector3(0.26, -0.24, -0.5);
  const adsPos = new THREE.Vector3(0, -0.115, -0.36);

  function setWeapon(id) {
    if (!models[id]) id = 'pistol';
    models[current].visible = false;
    current = id;
    models[current].visible = true;
    kick = 0;
  }

  function fire() {
    kick = 1;
    flashT = 0.055;
    flash.rotation.z = Math.random() * 6;
    const p = models[current].userData.muzzle || new THREE.Vector3();
    flash.position.copy(p);
    flash.position.z -= 0.05;
  }

  function update(actor, input, dt, now, opts = {}) {
    const model = models[current];
    if (!model) return;
    const moving = Math.hypot(actor.vx, actor.vz);
    bob += dt * (5 + moving * 1.6);
    kick = Math.max(0, kick - dt * 7);
    flashT = Math.max(0, flashT - dt);
    flash.material.opacity = flashT > 0 ? Math.min(1, flashT * 18) : 0;

    if (actor.reloading > 0) reloadAnim = Math.min(1, reloadAnim + dt * 4);
    else reloadAnim = Math.max(0, reloadAnim - dt * 5);

    const ads = actor.ads && current !== 'c4' && current !== 'knife';
    const t = 1 - Math.exp(-dt * (ads ? 16 : 11));
    const target = ads ? adsPos : basePos;
    const swayX = Math.sin(now * 1.3) * 0.006 + input.swayX * 0.015;
    const swayY = Math.cos(now * 1.7) * 0.005 + input.swayY * 0.012;
    root.position.x += (target.x + swayX - root.position.x) * t;
    root.position.y += (target.y + swayY - root.position.y) * t;
    root.position.z += (target.z + kick * 0.09 - root.position.z) * t;
    root.rotation.x = -kick * 0.16 + (ads ? 0 : Math.sin(bob) * 0.012 * moving);
    root.rotation.y = reloadAnim * 0.75 + (ads ? 0 : Math.cos(bob * 0.5) * 0.01 * moving);
    root.rotation.z = reloadAnim * 0.45 + (ads ? 0 : Math.sin(bob) * 0.008 * moving);
    model.position.y = -reloadAnim * 0.14;
    camera.fov = ads && current === 'sniper' ? 22 : ads ? 58 : 72;
    camera.updateProjectionMatrix();
  }

  function resize(aspect) {
    camera.aspect = aspect;
    camera.updateProjectionMatrix();
  }

  setWeapon('rifle');
  return { scene, camera, models, setWeapon, fire, update, resize };
}
