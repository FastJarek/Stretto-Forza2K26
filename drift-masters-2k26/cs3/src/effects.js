// CS3 – efekty wizualne: smugi pocisków, iskry, krew, łuski, wybuch.

import * as THREE from './lib/three.module.js';

const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffd08a });
const bloodMat = new THREE.MeshBasicMaterial({ color: 0x9e1c1c });
const shellMat = new THREE.MeshStandardMaterial({ color: 0xc9a64c, metalness: 0.8, roughness: 0.3 });

function dotTexture(color) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(32, 32, 2, 32, 32, 31);
  g.addColorStop(0, color);
  g.addColorStop(0.5, color.replace('1)', '0.55)'));
  g.addColorStop(1, color.replace('1)', '0)'));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export class Effects {
  constructor(scene) {
    this.scene = scene;
    this.items = [];
    this.decals = [];
    this.sparkTex = dotTexture('rgba(255,220,140,1)');
    this.bloodTex = dotTexture('rgba(180,25,25,1)');
  }

  add(obj, life, update) {
    this.scene.add(obj);
    this.items.push({ obj, life, max: life, update });
    if (this.items.length > 260) {
      const old = this.items.shift();
      this.scene.remove(old.obj);
    }
  }

  tracer(from, to, color = 0xffe2a0) {
    const geo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(from.x, from.y, from.z),
      new THREE.Vector3(to.x, to.y, to.z),
    ]);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.85 });
    const line = new THREE.Line(geo, mat);
    this.add(line, 0.09, (it, k) => { mat.opacity = k * 0.85; });
  }

  muzzle(pos) {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.sparkTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    s.position.set(pos.x, pos.y, pos.z);
    s.scale.set(0.55, 0.55, 1);
    this.add(s, 0.075, (it, k) => { s.scale.setScalar(0.3 + k * 0.6); });
  }

  impact(point, blood = false) {
    const tex = blood ? this.bloodTex : this.sparkTex;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: tex, transparent: true, depthWrite: false,
      blending: blood ? THREE.NormalBlending : THREE.AdditiveBlending,
    }));
    s.position.set(point.x, point.y, point.z);
    s.scale.set(0.3, 0.3, 1);
    this.add(s, 0.22, (it, k) => { s.scale.setScalar(0.1 + (1 - k) * 0.55); });

    for (let i = 0; i < (blood ? 6 : 4); i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.025, 4, 4), blood ? bloodMat : sparkMat);
      p.position.set(point.x, point.y, point.z);
      const v = new THREE.Vector3(
        (Math.random() - 0.5) * 2.4, Math.random() * 2, (Math.random() - 0.5) * 2.4,
      );
      this.add(p, 0.45, (it, dt) => {
        p.position.addScaledVector(v, dt);
        v.y -= 8 * dt;
      });
    }

    if (!blood && this.decals.length < 70) {
      const dec = new THREE.Mesh(
        new THREE.CircleGeometry(0.055 + Math.random() * 0.03, 6),
        new THREE.MeshBasicMaterial({ color: 0x2b241c, transparent: true, opacity: 0.65 }),
      );
      dec.position.set(point.x, point.y, point.z);
      dec.position.y = Math.max(0.04, dec.position.y);
      dec.rotation.x = -Math.PI / 2;
      this.scene.add(dec);
      this.decals.push(dec);
    }
  }

  shell(pos, dir) {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.06, 6), shellMat);
    m.position.set(pos.x, pos.y, pos.z);
    const v = new THREE.Vector3(-dir.x * 1.4 + Math.random(), 1.8 + Math.random(), -dir.z * 1.4 + Math.random());
    this.add(m, 1.2, (it, dt) => {
      m.position.addScaledVector(v, dt);
      v.y -= 9 * dt;
      m.rotation.x += dt * 9;
      m.rotation.z += dt * 5;
    });
  }

  explosion(pos) {
    const light = new THREE.PointLight(0xffb055, 25, 30);
    light.position.set(pos.x, 1.5, pos.z);
    this.add(light, 0.5, (it, k) => { light.intensity = k * 25; });

    const ball = new THREE.Mesh(
      new THREE.SphereGeometry(1, 16, 12),
      new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.9 }),
    );
    ball.position.set(pos.x, 1, pos.z);
    this.add(ball, 0.5, (it, k) => { ball.scale.setScalar(1 + (1 - k) * 8); ball.material.opacity = k * 0.8; });

    for (let i = 0; i < 34; i++) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.08 + Math.random() * 0.12, 5, 4),
        new THREE.MeshBasicMaterial({ color: i % 3 ? 0x5a5145 : 0xff9a33, transparent: true }));
      p.position.set(pos.x, 0.6, pos.z);
      const v = new THREE.Vector3((Math.random() - 0.5) * 14, 3 + Math.random() * 9, (Math.random() - 0.5) * 14);
      this.add(p, 1.2 + Math.random(), (it, dt, k) => {
        p.position.addScaledVector(v, dt);
        v.y -= 9 * dt;
        p.material.opacity = k;
      });
    }
  }

  update(dt) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.life -= dt;
      const k = Math.max(0, it.life / it.max);
      it.update?.(it, dt, k);
      if (it.life <= 0) {
        this.scene.remove(it.obj);
        it.obj.geometry?.dispose?.();
        it.obj.material?.dispose?.();
        this.items.splice(i, 1);
      }
    }
  }
}
