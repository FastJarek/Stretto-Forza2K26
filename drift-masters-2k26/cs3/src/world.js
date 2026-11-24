// CS3 – scena 3D, mapa, oświetlenie, niebo i dekoracje.

import * as THREE from './lib/three.module.js';
import { WALLS, MAP, TEAM_COLOR } from './config.js';
import { makeMaterials, getTextures } from './textures.js';

function skyDome() {
  const geo = new THREE.SphereGeometry(400, 24, 16);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {},
    vertexShader: `
      varying vec3 vPos;
      void main() {
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    fragmentShader: `
      varying vec3 vPos;
      void main() {
        float h = clamp(normalize(vPos).y * 0.5 + 0.5, 0.0, 1.0);
        vec3 horizon = vec3(0.83, 0.74, 0.58);
        vec3 mid = vec3(0.58, 0.70, 0.83);
        vec3 top = vec3(0.26, 0.45, 0.72);
        vec3 col = mix(horizon, mid, smoothstep(0.40, 0.62, h));
        col = mix(col, top, smoothstep(0.60, 1.0, h));
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  return new THREE.Mesh(geo, mat);
}

function sunSprite() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  g.addColorStop(0, 'rgba(255,250,220,1)');
  g.addColorStop(0.18, 'rgba(255,235,170,0.95)');
  g.addColorStop(0.55, 'rgba(255,210,120,0.25)');
  g.addColorStop(1, 'rgba(255,210,120,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  s.scale.set(80, 80, 1);
  s.position.set(-160, 150, -220);
  return s;
}

function siteDecal(label, x, z, color) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const ctx = c.getContext('2d');
  ctx.clearRect(0, 0, 256, 256);
  ctx.strokeStyle = color;
  ctx.lineWidth = 10;
  ctx.setLineDash([20, 12]);
  ctx.beginPath();
  ctx.arc(128, 128, 105, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = color;
  ctx.font = 'bold 150px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(label, 128, 136);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 7),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.75 }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(x, 0.035, z);
  return mesh;
}

function addDistantCity(scene) {
  const mat = new THREE.MeshStandardMaterial({ color: 0xb39b75, roughness: 1 });
  const mat2 = new THREE.MeshStandardMaterial({ color: 0x9d8665, roughness: 1 });
  let seed = 11;
  const rand = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let i = 0; i < 46; i++) {
    const angle = rand() * Math.PI * 2;
    const r = 80 + rand() * 100;
    const w = 8 + rand() * 18, h = 8 + rand() * 34;
    const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, w * (0.7 + rand() * 0.6)), rand() > 0.5 ? mat : mat2);
    b.position.set(Math.cos(angle) * r, h / 2 - 1, Math.sin(angle) * r);
    b.castShadow = false; b.receiveShadow = false;
    scene.add(b);
  }
}

function createRenderer(canvas, quality) {
  const attrs = {
    alpha: false, antialias: quality !== 'low',
    powerPreference: 'high-performance', preserveDrawingBuffer: false,
  };
  let gl = null;
  for (const name of ['webgl2', 'webgl', 'experimental-webgl']) {
    try { gl = canvas.getContext(name, attrs); } catch (_) { /* next */ }
    if (gl) break;
  }
  if (!gl) throw new Error('Brak kontekstu WebGL w WebView (włącz akcelerację sprzętową).');
  window.__cs3GLVersion = (typeof WebGL2RenderingContext !== 'undefined'
    && gl instanceof WebGL2RenderingContext) ? 2 : 1;
  return new THREE.WebGLRenderer({ canvas, context: gl, ...attrs });
}

export function createWorld(canvas, quality = 'high') {
  const renderer = createRenderer(canvas, quality);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = quality !== 'low';
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0xcbb894, 0.0065);
  const camera = new THREE.PerspectiveCamera(78, 1, 0.05, 600);
  camera.rotation.order = 'YXZ';
  scene.add(camera);

  scene.add(skyDome());
  scene.add(sunSprite());

  const hemi = new THREE.HemisphereLight(0xcfe0ff, 0x8a7048, 1.35);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0cc, 2.5);
  sun.position.set(-38, 62, -46);
  sun.castShadow = quality !== 'low';
  sun.shadow.mapSize.set(quality === 'high' ? 2048 : 1024, quality === 'high' ? 2048 : 1024);
  sun.shadow.camera.left = -48; sun.shadow.camera.right = 48;
  sun.shadow.camera.top = 48; sun.shadow.camera.bottom = -48;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 180;
  sun.shadow.bias = -0.0006;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(0, 0, 0);

  const mats = makeMaterials();
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), mats.ground);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  scene.add(ground);

  // Płyta areny – delikatnie cieplejszy piasek
  const arena = new THREE.Mesh(
    new THREE.PlaneGeometry(MAP.size, MAP.size),
    new THREE.MeshStandardMaterial({ color: 0xd6bd8c, roughness: 1 }),
  );
  arena.rotation.x = -Math.PI / 2;
  arena.position.y = 0.002;
  arena.receiveShadow = true;
  scene.add(arena);

  const wallGeo = new THREE.BoxGeometry(1, 1, 1);
  const wallGroup = new THREE.Group();
  for (const b of WALLS) {
    let mesh;
    if (b.mat === 'barrel') {
      mesh = new THREE.Mesh(new THREE.CylinderGeometry(b.w / 2, b.w / 2, b.h, 14), mats.barrel);
      mesh.position.set(b.x, b.h / 2, b.z);
    } else {
      mesh = new THREE.Mesh(wallGeo, mats[b.mat] || mats.wall);
      mesh.scale.set(b.w, b.h, b.d);
      mesh.position.set(b.x, b.h / 2, b.z);
    }
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    wallGroup.add(mesh);

    if (b.mat === 'wall' && b.h > 4) {
      // ciemna listwa u dołu muru dla głębi
      const trim = new THREE.Mesh(wallGeo, mats.low);
      trim.scale.set(b.w + 0.06, 0.45, b.d + 0.06);
      trim.position.set(b.x, 0.22, b.z);
      trim.receiveShadow = true;
      wallGroup.add(trim);
      const cap = new THREE.Mesh(wallGeo, mats.low);
      cap.scale.set(b.w + 0.12, 0.22, b.d + 0.12);
      cap.position.set(b.x, b.h - 0.1, b.z);
      cap.castShadow = true;
      wallGroup.add(cap);
    }
  }
  scene.add(wallGroup);

  scene.add(siteDecal('A', MAP.sites.A.x, MAP.sites.A.z, '#e8c14b'));
  scene.add(siteDecal('B', MAP.sites.B.x, MAP.sites.B.z, '#e8c14b'));
  addDistantCity(scene);

  // Latarnie i kable jako detale
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x5b5142, roughness: 0.8, metalness: 0.3 });
  for (const [x, z] of [[-27, 2], [27, 2], [-27, -28], [27, -28], [0, 19]]) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 7, 8), poleMat);
    pole.position.set(x, 3.5, z);
    pole.castShadow = true;
    scene.add(pole);
    const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.18, 0.5), poleMat);
    lamp.position.set(x + (x > 0 ? -0.45 : 0.45), 6.9, z);
    scene.add(lamp);
  }

  // Model bomby
  const bomb = new THREE.Group();
  const bombBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.38, 0.2, 0.28),
    new THREE.MeshStandardMaterial({ color: 0x3d4239, roughness: 0.75 }),
  );
  bomb.add(bombBody);
  const bombLed = new THREE.Mesh(
    new THREE.SphereGeometry(0.055, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xff3322 }),
  );
  bombLed.position.set(0.16, 0.1, 0.1);
  bomb.add(bombLed);
  bomb.visible = false;
  scene.add(bomb);

  let currentQuality = quality;
  function setQuality(q) {
    currentQuality = q;
    const pr = q === 'high' ? Math.min(window.devicePixelRatio || 1, 2)
      : q === 'medium' ? Math.min(window.devicePixelRatio || 1, 1.35) : 1;
    renderer.setPixelRatio(pr);
    renderer.shadowMap.enabled = q !== 'low';
    sun.castShadow = q !== 'low';
    const size = q === 'high' ? 2048 : 1024;
    if (sun.shadow.mapSize.x !== size) {
      sun.shadow.mapSize.set(size, size);
      sun.shadow.map?.dispose();
      sun.shadow.map = null;
    }
    renderer.shadowMap.needsUpdate = true;
    resize();
  }

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  setQuality(currentQuality);

  function update(dt, now) {
    bombLed.material.color.setHex(Math.sin(now * (bomb.visible ? 8 : 2)) > 0 ? 0xff3322 : 0x441100);
  }

  return { renderer, scene, camera, sun, bomb, bombLed, setQuality, resize, update, mats };
}
