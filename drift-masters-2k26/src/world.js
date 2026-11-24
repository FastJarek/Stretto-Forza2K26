import * as THREE from './lib/three.module.js';
import { clamp, smooth, buildCheckpoints, nearestOnPath, getCar } from './core.js';

// Oprawa w klimacie Assetto Corsa: dzienne niebo, naturalne światło,
// asfalt z teksturą, krawężniki i zieleń wokół toru.
const THEMES = {
  city: {
    skyTop: 0x6f9fd8, skyBottom: 0xd8e4ef, ground: 0xb6c3a6, road: 0x2d3035,
    barrier: 0x9aa4ad, accent: 0xe8483c, sun: 0xfff2dc,
  },
  industrial: {
    skyTop: 0x8aa8c4, skyBottom: 0xd9d6cc, ground: 0xc0b9a4, road: 0x303237,
    barrier: 0x8d8e92, accent: 0xf0b33c, sun: 0xffe6bb,
  },
  mountain: {
    skyTop: 0x5f96d2, skyBottom: 0xdceaf2, ground: 0x8fbb86, road: 0x2b2f33,
    barrier: 0xb0b5ba, accent: 0xe8483c, sun: 0xfff4dd,
  },
};

function noiseTexture(base, spread, size = 128) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  const rand = rng(base);
  for (let i = 0; i < img.data.length; i += 4) {
    const grain = (rand() - 0.5) * spread + (rand() > 0.985 ? -spread * 0.6 : 0);
    const v = clamp(base + grain, 0, 255);
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

function curbTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 8; canvas.height = 16;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#e8e8e8'; ctx.fillRect(0, 0, 8, 16);
  ctx.fillStyle = '#d43a32';
  ctx.fillRect(0, 0, 8, 4);
  ctx.fillRect(0, 8, 8, 4);
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function buildingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 64;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#7d8896'; ctx.fillRect(0, 0, 64, 64);
  const rand = rng(9182);
  for (let y = 6; y < 58; y += 10) {
    for (let x = 5; x < 58; x += 11) {
      ctx.fillStyle = rand() > 0.45 ? '#263444' : '#9fb4c8';
      ctx.fillRect(x, y, 6, 5);
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function skyDome(top, bottom) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { top: { value: new THREE.Color(top) }, bottom: { value: new THREE.Color(bottom) } },
    vertexShader: 'varying float vH; void main(){ vH = position.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
    fragmentShader: 'uniform vec3 top; uniform vec3 bottom; varying float vH; void main(){ float t = clamp(vH / 700.0 * 0.5 + 0.5, 0.0, 1.0); gl_FragColor = vec4(mix(bottom, top, pow(t, 0.75)), 1.0); }',
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  return new THREE.Mesh(new THREE.SphereGeometry(700, 24, 12), mat);
}

function rng(seed) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

function ribbon(path, halfWidth, y = 0.02, offset = 0) {
  const positions = [];
  const uvs = [];
  const indices = [];
  const n = path.length;
  let dist = 0;
  for (let i = 0; i <= n; i++) {
    const a = path[i % n], b = path[(i + 1) % n];
    const tx = b.x - a.x, tz = b.z - a.z;
    const len = Math.hypot(tx, tz) || 1;
    const nx = -tz / len, nz = tx / len;
    const w = halfWidth + offset;
    positions.push(a.x + nx * w, y, a.z + nz * w, a.x - nx * w, y, a.z - nz * w);
    uvs.push(0, dist / 6, 1, dist / 6);
    if (i < n) {
      const k = i * 2;
      indices.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
    dist += len;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  g.setIndex(indices);
  g.computeVertexNormals();
  return g;
}

export class GameWorld {
  constructor(canvas, settings, tuning) {
    this.settings = settings;
    this.tuning = tuning;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: settings.graphics !== 'low', powerPreference: 'high-performance' });
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.shadowMap.enabled = settings.shadows;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(settings.fov, 1, 0.1, 1200);
    this.root = new THREE.Group();
    this.scene.add(this.root);

    this.asphalt = noiseTexture(78, 28);
    this.groundTex = noiseTexture(112, 36);
    this.groundTex.repeat.set(70, 70);
    this.curb = curbTexture();

    this.hemi = new THREE.HemisphereLight(0xd3e6ff, 0x4a4d3f, 1.75);
    this.scene.add(this.hemi);
    this.sun = new THREE.DirectionalLight(0xfff2dc, 2.3);
    this.sun.position.set(60, 110, 40);
    this.sun.castShadow = settings.shadows;
    this.sun.shadow.mapSize.set(settings.graphics === 'high' ? 2048 : 1024, settings.graphics === 'high' ? 2048 : 1024);
    this.sun.shadow.camera.left = -140; this.sun.shadow.camera.right = 140;
    this.sun.shadow.camera.top = 140; this.sun.shadow.camera.bottom = -140;
    this.sun.shadow.camera.far = 320;
    this.scene.add(this.sun);

    this.skidMat = new THREE.MeshBasicMaterial({ color: 0x05070c, transparent: true, opacity: 0.42, depthWrite: false, side: THREE.DoubleSide });
    this.skidVerts = new Float32Array(1800 * 6 * 3);
    this.skidCount = 0;
    this.skidGeo = new THREE.BufferGeometry();
    this.skidGeo.setAttribute('position', new THREE.BufferAttribute(this.skidVerts, 3));
    this.skidGeo.setDrawRange(0, 0);
    this.skids = new THREE.Mesh(this.skidGeo, this.skidMat);
    this.skids.frustumCulled = false;
    this.root.add(this.skids);

    this.smokeGeo = new THREE.BufferGeometry();
    this.smokePos = new Float32Array(90 * 3);
    this.smokeCol = new Float32Array(90 * 3);
    this.smokeGeo.setAttribute('position', new THREE.BufferAttribute(this.smokePos, 3));
    this.smokeGeo.setAttribute('color', new THREE.BufferAttribute(this.smokeCol, 3));
    this.smoke = new THREE.Points(this.smokeGeo, new THREE.PointsMaterial({ size: 1.5, vertexColors: true, transparent: true, opacity: 0.42, depthWrite: false }));
    this.smoke.frustumCulled = false;
    this.root.add(this.smoke);
    this.smokeLife = new Array(90).fill(0);
    this.smokeCursor = 0;

    this.shake = 0;
    this.carGroup = null;
    this.showroomAngle = 0;
    this.applyQuality(settings);
    this.resize();
  }

  applyQuality(s) {
    this.settings = s;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, s.resolution));
    this.renderer.shadowMap.enabled = !!s.shadows;
    this.sun.castShadow = !!s.shadows;
    this.sun.shadow.mapSize.set(s.graphics === 'high' ? 2048 : 1024, s.graphics === 'high' ? 2048 : 1024);
    if (this.scene.fog) this.scene.fog.density = 1 / (s.drawDistance * 1.55);
    this.resize();
  }

  resize() {
    const w = Math.max(1, window.innerWidth), h = Math.max(1, window.innerHeight);
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  clear() {
    // Usuwamy wszystko oprócz efektów (skidy, dym) i świateł.
    for (let i = this.root.children.length - 1; i >= 0; i--) {
      const c = this.root.children[i];
      if (c === this.skids || c === this.smoke) continue;
      this.root.remove(c);
    }
    this.path = null;
    this.carGroup = null;
    this.gates = [];
    this.skidCount = 0;
    this.skidGeo.setDrawRange(0, 0);
    this.smokeLife.fill(0);
  }

  showShowroom(tuning, carId) {
    this.clear();
    this.scene.background = new THREE.Color(0x8db4db);
    this.scene.fog = null;
    this.root.add(skyDome(0x6f9fd8, 0xd8e4ef));
    const floorMat = new THREE.MeshStandardMaterial({ map: this.groundTex, color: 0xc8d0c4, roughness: 0.95 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(300, 300), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.root.add(floor);
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 0.08, 48),
      new THREE.MeshStandardMaterial({ map: this.asphalt, color: 0xd8dde2, roughness: 0.92 }));
    pad.position.y = 0.02; pad.receiveShadow = true;
    this.root.add(pad);
    this.carGroup = this.buildCar(tuning, carId);
    this.carGroup.position.set(0, 0, 0);
    this.root.add(this.carGroup);
    this.camera.position.set(7, 3.4, 9);
    this.camera.lookAt(0, 1, 0);
  }

  buildTrack(track, tuning, carId) {
    this.clear();
    this.track = track;
    const theme = THEMES[track.theme] || THEMES.city;
    this.scene.background = new THREE.Color(theme.skyTop);
    this.scene.fog = new THREE.FogExp2(theme.skyBottom, 1 / (this.settings.drawDistance * 2.2));
    this.root.add(skyDome(theme.skyTop, theme.skyBottom));
    this.sun.color.setHex(theme.sun);
    this.path = track.path;
    this.halfWidth = track.width / 2;
    this.gates = [];

    const ground = new THREE.Mesh(new THREE.PlaneGeometry(900, 900),
      new THREE.MeshStandardMaterial({ map: this.groundTex, color: theme.ground, roughness: 1 }));
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.06;
    ground.receiveShadow = true;
    this.root.add(ground);

    const road = new THREE.Mesh(ribbon(this.path, this.halfWidth),
      new THREE.MeshStandardMaterial({ map: this.asphalt, color: 0xffffff, roughness: 0.96, metalness: 0.02, side: THREE.DoubleSide }));
    road.receiveShadow = true;
    this.root.add(road);

    // Krawężniki w czerwono-białe paski, jak na torach wyścigowych.
    const curbMat = new THREE.MeshStandardMaterial({ map: this.curb, roughness: 0.8, side: THREE.DoubleSide });
    for (const side of [-1, 1]) {
      const g = ribbon(this.path, 0.55, 0.045, side * (this.halfWidth - 0.4));
      this.root.add(new THREE.Mesh(g, curbMat));
    }
    // Linia środkowa (przerywana)
    if (this.settings.graphics !== 'low') {
      const dashMat = new THREE.MeshBasicMaterial({ color: 0x9aa8bd, transparent: true, opacity: 0.4, side: THREE.DoubleSide });
      for (let i = 0; i < this.path.length; i += 7) {
        const a = this.path[i], b = this.path[(i + 2) % this.path.length];
        const tx = b.x - a.x, tz = b.z - a.z, len = Math.hypot(tx, tz) || 1;
        const dash = new THREE.Mesh(new THREE.PlaneGeometry(0.2, Math.min(4, len)), dashMat);
        dash.rotation.x = -Math.PI / 2;
        dash.rotation.z = -Math.atan2(tx, tz);
        dash.position.set(a.x, 0.05, a.z);
        this.root.add(dash);
      }
    }

    // Bariery z instancjonowania — tanie nawet dla długich tras.
    const step = this.settings.graphics === 'low' ? 6 : 3;
    const count = Math.floor(this.path.length / step) * 2;
    const barriers = new THREE.InstancedMesh(
      new THREE.BoxGeometry(0.45, 1.05, 2.6),
      new THREE.MeshStandardMaterial({ color: theme.barrier, roughness: 0.8, metalness: 0.25 }),
      count,
    );
    const dummy = new THREE.Object3D();
    let k = 0;
    for (let i = 0; i < this.path.length; i += step) {
      const a = this.path[i], b = this.path[(i + 1) % this.path.length];
      const tx = b.x - a.x, tz = b.z - a.z, len = Math.hypot(tx, tz) || 1;
      const nx = -tz / len, nz = tx / len;
      for (const side of [-1, 1]) {
        dummy.position.set(a.x + nx * (this.halfWidth + 1.1), 0.52, a.z + nz * (this.halfWidth + 1.1));
        dummy.rotation.set(0, Math.atan2(tx, tz), 0);
        dummy.updateMatrix();
        barriers.setMatrixAt(k++, dummy.matrix);
      }
    }
    barriers.count = k;
    barriers.castShadow = this.settings.shadows && this.settings.graphics === 'high';
    this.root.add(barriers);

    // Linia startu / mety
    const start = this.path[0], next = this.path[1];
    const startYaw = Math.atan2(next.x - start.x, next.z - start.z);
    const startGroup = new THREE.Group();
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 2; j++) {
        const tile = new THREE.Mesh(
          new THREE.PlaneGeometry(this.widthOfTile(), 0.6),
          new THREE.MeshBasicMaterial({ color: (i + j) % 2 ? 0xffffff : 0x111111, side: THREE.DoubleSide }),
        );
        tile.rotation.x = -Math.PI / 2;
        tile.position.set((i - 4.5) * this.widthOfTile(), 0.07, (j - 0.5) * 0.6);
        startGroup.add(tile);
      }
    }
    startGroup.position.set(start.x, 0, start.z);
    startGroup.rotation.y = startYaw;
    this.root.add(startGroup);

    // Bramki checkpointów
    track.checkpoints.forEach((cp, i) => {
      const g = new THREE.Group();
      const mat = new THREE.MeshStandardMaterial({ color: theme.accent, emissive: theme.accent, emissiveIntensity: 0.7 });
      for (const side of [-1, 1]) {
        const pole = new THREE.Mesh(new THREE.BoxGeometry(0.22, 3.6, 0.22), mat);
        pole.position.set(side * this.halfWidth, 1.8, 0);
        g.add(pole);
      }
      const bar = new THREE.Mesh(new THREE.BoxGeometry(this.halfWidth * 2, 0.22, 0.22), mat);
      bar.position.y = 3.6;
      g.add(bar);
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }));
      arrow.position.set(0, 4.3, 0);
      arrow.rotation.x = Math.PI / 2;
      g.add(arrow);
      g.position.set(cp.x, 0, cp.z);
      g.rotation.y = cp.yaw;
      g.userData.materials = [mat];
      this.root.add(g);
      this.gates.push(g);
    });

    this.buildScenery(theme, track);
    if (track.type === 'trening') this.buildCones(theme);

    this.carGroup = this.buildCar(tuning, carId);
    this.root.add(this.carGroup);
    this.applyCar(this.carGroup, { x: start.x, z: start.z, yaw: startYaw, speed: 0, driftAngle: 0 }, 0, 0);
    this.camera.position.set(start.x - Math.sin(startYaw) * 8, 3.5, start.z - Math.cos(startYaw) * 8);
    this.camera.lookAt(start.x, 1, start.z);
  }

  widthOfTile() { return (this.halfWidth * 2) / 10; }

  buildScenery(theme, track) {
    const rand = rng(track.id.length * 7919 + track.points.length * 104729);
    const q = this.settings.graphics;
    const count = q === 'low' ? 26 : q === 'medium' ? 55 : 95;
    const dummy = new THREE.Object3D();
    const trees = track.theme === 'mountain';
    const geo = trees ? new THREE.ConeGeometry(2.4, 7, 7) : new THREE.BoxGeometry(6, 8, 6);
    const mat = new THREE.MeshStandardMaterial({
      map: track.theme === 'city' ? buildingTexture() : null,
      color: trees ? 0x2f6b34 : track.theme === 'city' ? 0xd0d8e2 : 0x9a9180,
      roughness: 0.85, metalness: track.theme === 'city' ? 0.15 : 0.02,
    });
    const inst = new THREE.InstancedMesh(geo, mat, count);
    const spots = [];
    let placed = 0;
    for (let i = 0; i < count * 4 && placed < count; i++) {
      const idx = Math.floor(rand() * this.path.length);
      const p = this.path[idx], n = this.path[(idx + 1) % this.path.length];
      const tx = n.x - p.x, tz = n.z - p.z, len = Math.hypot(tx, tz) || 1;
      const side = rand() > 0.5 ? 1 : -1;
      const off = this.halfWidth + 11 + rand() * 55;
      const x = p.x + (-tz / len) * off * side;
      const z = p.z + (tx / len) * off * side;
      if (nearestOnPath(this.path, x, z).dist < this.halfWidth + 7) continue;
      const s = 0.6 + rand() * 1.8;
      spots.push({ x, z, s, rot: rand() * Math.PI, h: 0.6 + rand() * 1.4 });
      dummy.position.set(x, trees ? 3.4 * s : 4 * s, z);
      dummy.rotation.set(0, spots[spots.length - 1].rot, 0);
      dummy.scale.set(s, s * spots[spots.length - 1].h, s);
      dummy.updateMatrix();
      inst.setMatrixAt(placed++, dummy.matrix);
    }
    inst.count = placed;
    inst.castShadow = this.settings.shadows && q === 'high';
    this.root.add(inst);

    if (trees && placed) {
      const trunks = new THREE.InstancedMesh(
        new THREE.CylinderGeometry(0.32, 0.48, 3, 6),
        new THREE.MeshStandardMaterial({ color: 0x5a422c, roughness: 1 }), placed);
      spots.forEach((sp, i) => {
        dummy.position.set(sp.x, 1.5 * sp.s, sp.z);
        dummy.rotation.set(0, sp.rot, 0);
        dummy.scale.set(sp.s, sp.s, sp.s);
        dummy.updateMatrix();
        trunks.setMatrixAt(i, dummy.matrix);
      });
      trunks.castShadow = this.settings.shadows && q === 'high';
      this.root.add(trunks);
    }

    if (track.theme === 'city' && q !== 'low') {
      const lampMat = new THREE.MeshBasicMaterial({ color: 0xfff0d0 });
      const poleMat = new THREE.MeshStandardMaterial({ color: 0x6b7685 });
      for (let i = 0; i < this.path.length; i += 18) {
        const p = this.path[i], n = this.path[(i + 1) % this.path.length];
        const tx = n.x - p.x, tz = n.z - p.z, len = Math.hypot(tx, tz) || 1;
        for (const side of [-1, 1]) {
          const g = new THREE.Group();
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 5, 6), poleMat);
          pole.position.y = 2.5; g.add(pole);
          const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.3, 8, 6), lampMat);
          lamp.position.y = 5; g.add(lamp);
          g.position.set(p.x + (-tz / len) * (this.halfWidth + 3) * side, 0, p.z + (tx / len) * (this.halfWidth + 3) * side);
          this.root.add(g);
        }
      }
    }
  }

  buildCones(theme) {
    const coneGeo = new THREE.ConeGeometry(0.38, 0.9, 8);
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xff7a1a, emissive: 0x401400 });
    const count = this.settings.graphics === 'low' ? 20 : 45;
    const inst = new THREE.InstancedMesh(coneGeo, coneMat, count);
    const rand = rng(4242);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(rand() * this.path.length);
      const p = this.path[idx], n = this.path[(idx + 1) % this.path.length];
      const tx = n.x - p.x, tz = n.z - p.z, len = Math.hypot(tx, tz) || 1;
      const side = rand() > 0.5 ? 1 : -1;
      dummy.position.set(p.x + (-tz / len) * (this.halfWidth - 2) * side, 0.45, p.z + (tx / len) * (this.halfWidth - 2) * side);
      dummy.rotation.set(0, 0, 0);
      dummy.scale.set(1, 1, 1);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
    }
    this.root.add(inst);
  }

  buildCar(tuning, carId) {
    // Różne sylwetki aut z poszczególnych stawek (AE86, E36, S13, E60, Miata, gokart).
    const SHAPES = {
      kei: { w: 1.68, l: 3.65, h: 0.5, y: 0.68, cabW: 1.5, cabH: 0.58, cabL: 1.75, cabZ: -0.25, cabY: 1.22, roofY: 1.55, wz: 1.18, wx: 0.88, wr: 0.36 },
      coupe: { w: 1.95, l: 4.15, h: 0.55, y: 0.72, cabW: 1.66, cabH: 0.62, cabL: 1.9, cabZ: -0.25, cabY: 1.28, roofY: 1.62, wz: 1.35, wx: 1.0, wr: 0.42 },
      sedan: { w: 1.95, l: 4.6, h: 0.58, y: 0.76, cabW: 1.7, cabH: 0.64, cabL: 2.3, cabZ: -0.2, cabY: 1.32, roofY: 1.68, wz: 1.5, wx: 1.0, wr: 0.44 },
      roadster: { w: 1.72, l: 3.9, h: 0.45, y: 0.62, cabW: 1.45, cabH: 0.4, cabL: 1.15, cabZ: -0.3, cabY: 1.0, roofY: 0, wz: 1.25, wx: 0.92, wr: 0.38 },
      kart: { w: 1.12, l: 2.25, h: 0.24, y: 0.36, cabW: 0, cabH: 0, cabL: 0, cabZ: 0, cabY: 0, roofY: 0, wz: 0.82, wx: 0.7, wr: 0.28 },
    };
    const def = getCar(carId);
    const d = SHAPES[def ? def.style : 'coupe'] || SHAPES.coupe;
    const car = new THREE.Group();
    const color = new THREE.Color(tuning.color || (def && def.color) || '#2ee9ff');
    const bodyMat = new THREE.MeshStandardMaterial({ color, metalness: 0.65, roughness: 0.3 });
    const dark = new THREE.MeshStandardMaterial({ color: 0x12161d, metalness: 0.5, roughness: 0.5 });
    const glass = new THREE.MeshPhysicalMaterial({
      color: 0x0d1a26, metalness: 0.15, roughness: 0.08,
      transparent: true, opacity: 0.86, clearcoat: 1, clearcoatRoughness: 0.05,
    });
    const headMat = new THREE.MeshStandardMaterial({ color: 0xfff3d8, emissive: 0xffe6b0, emissiveIntensity: 0.65 });
    const tailMat = new THREE.MeshStandardMaterial({ color: 0xd4142c, emissive: 0xff162c, emissiveIntensity: 0.75 });
    const rimColors = { silver: 0xc8d2e0, black: 0x22262e, gold: 0xffc93c };
    const rimMat = new THREE.MeshStandardMaterial({ color: rimColors[tuning.rim] || rimColors.silver, metalness: 0.9, roughness: 0.2 });
    const tireMat = new THREE.MeshStandardMaterial({ color: 0x101114, roughness: 0.95 });

    const body = new THREE.Mesh(new THREE.BoxGeometry(d.w, d.h, d.l), bodyMat);
    body.position.y = d.y; body.castShadow = true; car.add(body);
    const hood = new THREE.Mesh(new THREE.BoxGeometry(d.w * 0.94, 0.16, d.l * 0.28), bodyMat);
    hood.position.set(0, d.y + d.h / 2 + 0.08, d.l * 0.32); hood.castShadow = true; car.add(hood);
    if (d.cabH > 0) {
      const cabin = new THREE.Mesh(new THREE.BoxGeometry(d.cabW, d.cabH, d.cabL), glass);
      cabin.position.set(0, d.cabY, d.cabZ); cabin.castShadow = true; car.add(cabin);
      if (d.roofY > 0) {
        const roof = new THREE.Mesh(new THREE.BoxGeometry(d.cabW * 0.97, 0.1, d.cabL * 0.79), bodyMat);
        roof.position.set(0, d.roofY, d.cabZ); car.add(roof);
      }
    }
    if (def && def.style === 'kart') {
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.55, 0.5), dark);
      seat.position.set(0, 0.7, -0.25); car.add(seat);
      const engine = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.42, 0.6), dark);
      engine.position.set(0, 0.55, -0.8); car.add(engine);
    }
    for (const side of [-1, 1]) {
      const light = new THREE.Mesh(new THREE.BoxGeometry(d.w * 0.25, 0.13, 0.08), headMat);
      light.position.set(side * d.w * 0.3, d.y + 0.08, d.l / 2 + 0.03); car.add(light);
      const tail = new THREE.Mesh(new THREE.BoxGeometry(d.w * 0.25, 0.12, 0.08), tailMat);
      tail.position.set(side * d.w * 0.3, d.y + 0.08, -d.l / 2 - 0.03); car.add(tail);
      if (d.cabH > 0) {
        const mirror = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.14), bodyMat);
        mirror.position.set(side * (d.w / 2 + 0.09), d.y + d.h / 2 + 0.12, d.l * 0.16);
        car.add(mirror);
      }
    }
    if (def && def.style !== 'kart') {
      const grille = new THREE.Mesh(new THREE.BoxGeometry(d.w * 0.52, 0.17, 0.06), dark);
      grille.position.set(0, d.y - 0.06, d.l / 2 + 0.02); car.add(grille);
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.09, 0.24, 10),
        new THREE.MeshStandardMaterial({ color: 0x9aa0a6, metalness: 0.9, roughness: 0.25 }));
      exhaust.rotation.x = Math.PI / 2;
      exhaust.position.set(d.w * 0.24, 0.25, -d.l / 2 - 0.12); car.add(exhaust);
    }
    if (tuning.spoiler && def && def.style !== 'kart') {
      const wing = new THREE.Mesh(new THREE.BoxGeometry(d.w * 0.97, 0.1, 0.5), dark);
      wing.position.set(0, d.roofY || d.y + 0.55, -d.l / 2 + 0.15); car.add(wing);
      for (const side of [-1, 1]) {
        const support = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.45, 0.12), dark);
        support.position.set(side * d.w * 0.36, (d.roofY || d.y + 0.55) - 0.22, -d.l / 2 + 0.15); car.add(support);
      }
    }
    if (tuning.neon) {
      const glow = new THREE.Mesh(new THREE.PlaneGeometry(d.w * 1.1, d.l * 1.05), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.4, depthWrite: false, side: THREE.DoubleSide }));
      glow.rotation.x = -Math.PI / 2; glow.position.y = 0.08; car.add(glow);
    }

    this.wheels = [];
    const wheelGeo = new THREE.CylinderGeometry(d.wr, d.wr, 0.3, 14);
    wheelGeo.rotateZ(Math.PI / 2);
    const rimGeo = new THREE.CylinderGeometry(d.wr * 0.58, d.wr * 0.58, 0.32, 10);
    rimGeo.rotateZ(Math.PI / 2);
    for (const z of [d.wz, -d.wz]) {
      for (const x of [-d.wx, d.wx]) {
        const pivot = new THREE.Group();
        pivot.position.set(x, d.wr, z);
        const tire = new THREE.Mesh(wheelGeo, tireMat);
        tire.castShadow = true;
        const rim = new THREE.Mesh(rimGeo, rimMat);
        tire.add(rim);
        pivot.add(tire);
        car.add(pivot);
        this.wheels.push({ pivot, tire, front: z > 0, radius: d.wr });
      }
    }
    car.userData.wheels = this.wheels;
    return car;
  }

  applyCar(group, car, steer, dt) {
    if (!group) return;
    group.position.set(car.x, 0, car.z);
    group.rotation.y = car.yaw;
    // Lekki przechył nadwozia w zakręcie
    const roll = clamp(car.driftAngle * 0.0035 + (steer || 0) * clamp(car.speed / 60, 0, 1) * 0.06, -0.09, 0.09);
    group.rotation.z = smooth(group.rotation.z, roll, 8, dt || 0.016);
    const wheels = group.userData.wheels || [];
    const wheelRadius = wheels.length && wheels[0].radius ? wheels[0].radius : 0.42;
    const spin = (car.speed || 0) * (dt || 0) / wheelRadius;
    for (const w of wheels) {
      w.tire.rotation.x -= spin;
      if (w.front) w.pivot.rotation.y = smooth(w.pivot.rotation.y, (steer || 0) * 0.42, 12, dt || 0.016);
    }
  }

  updateCamera(car, dt, settings) {
    const s = settings || this.settings;
    const fx = Math.sin(car.yaw), fz = Math.cos(car.yaw);
    const speedN = clamp((car.speed || 0) / 48, 0, 1);
    if (s.cameraMode === 'hood' || s.cameraMode === 'bumper') {
      const isBumper = s.cameraMode === 'bumper';
      const target = new THREE.Vector3(car.x + fx * (isBumper ? 2.1 : 0.5), isBumper ? 0.72 : 1.45, car.z + fz * (isBumper ? 2.1 : 0.5));
      this.camera.position.copy(target);
      this.camera.lookAt(car.x + fx * 24, isBumper ? 0.75 : 1.5, car.z + fz * 24);
    } else {
      const back = s.cameraDistance + speedN * 2.2;
      const desired = new THREE.Vector3(car.x - fx * back, s.cameraHeight + speedN * 0.7, car.z - fz * back);
      this.camera.position.lerp(desired, 1 - Math.exp(-6 * dt));
      if (this.shake > 0) {
        this.camera.position.x += (Math.random() - 0.5) * this.shake;
        this.camera.position.y += (Math.random() - 0.5) * this.shake * 0.5;
        this.shake = Math.max(0, this.shake - dt * 2.2);
      }
      this.camera.lookAt(car.x + fx * 6, 1.1, car.z + fz * 6);
    }
    const fov = s.fov + speedN * 8;
    if (Math.abs(this.camera.fov - fov) > 0.05) {
      this.camera.fov = fov;
      this.camera.updateProjectionMatrix();
    }
  }

  showroomTick(dt) {
    this.showroomAngle += dt * 0.35;
    if (this.carGroup) {
      this.carGroup.rotation.y = this.showroomAngle;
      this.carGroup.position.y = Math.sin(this.showroomAngle * 2) * 0.04;
    }
    this.camera.position.set(Math.cos(this.showroomAngle * 0.25) * 9, 3.6, Math.sin(this.showroomAngle * 0.25) * 9);
    this.camera.lookAt(0, 1.1, 0);
  }

  addSkid(x, z, yaw, halfTrack) {
    if (!this.settings.particles || this.skidCount >= 1780) return;
    const fx = Math.sin(yaw), fz = Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    for (const side of [-1, 1]) {
      const cx = x + rx * side * 0.95 - fx * 1.35;
      const cz = z + rz * side * 0.95 - fz * 1.35;
      const a = [cx - rx * 0.14, 0.055, cz - rz * 0.14];
      const b = [cx + rx * 0.14, 0.055, cz + rz * 0.14];
      const c = [a[0] - fx * 0.65, 0.055, a[2] - fz * 0.65];
      const d = [b[0] - fx * 0.65, 0.055, b[2] - fz * 0.65];
      this.skidVerts.set([...a, ...b, ...c, ...b, ...d, ...c], this.skidCount * 18);
      this.skidCount++;
    }
    this.skidGeo.attributes.position.needsUpdate = true;
    this.skidGeo.setDrawRange(0, this.skidCount * 6);
  }

  spawnSmoke(x, z, yaw) {
    if (!this.settings.particles) return;
    const fx = Math.sin(yaw), fz = Math.cos(yaw), rx = Math.cos(yaw), rz = -Math.sin(yaw);
    const i = this.smokeCursor++ % 90;
    const side = Math.random() > 0.5 ? 1 : -1;
    this.smokePos[i * 3] = x + rx * side * 0.95 - fx * 1.35;
    this.smokePos[i * 3 + 1] = 0.35;
    this.smokePos[i * 3 + 2] = z + rz * side * 0.95 - fz * 1.35;
    this.smokeLife[i] = 1;
    this.smokeGeo.attributes.position.needsUpdate = true;
  }

  updateSmoke(dt) {
    let changed = false;
    for (let i = 0; i < 90; i++) {
      if (this.smokeLife[i] <= 0) continue;
      this.smokeLife[i] = Math.max(0, this.smokeLife[i] - dt * 0.85);
      this.smokePos[i * 3 + 1] += dt * 2.2;
      this.smokePos[i * 3] += (Math.random() - 0.5) * dt * 1.2;
      const v = this.smokeLife[i] * 0.75;
      this.smokeCol[i * 3] = v; this.smokeCol[i * 3 + 1] = v; this.smokeCol[i * 3 + 2] = v;
      changed = true;
    }
    if (changed) {
      this.smokeGeo.attributes.position.needsUpdate = true;
      this.smokeGeo.attributes.color.needsUpdate = true;
    }
  }

  setGateState(index, passed) {
    const g = this.gates && this.gates[index];
    if (!g) return;
    for (const m of g.userData.materials || []) {
      m.color.setHex(passed ? 0x4a5058 : 0xe8483c);
      m.emissive.setHex(passed ? 0x000000 : 0xe8483c);
      m.emissiveIntensity = passed ? 0 : 0.7;
    }
  }

  render() { this.renderer.render(this.scene, this.camera); }
}

export function drawMinimap(ctx, track, car, currentCp) {
  if (!ctx || !track || !track.path) return;
  const w = ctx.canvas.width, h = ctx.canvas.height;
  ctx.clearRect(0, 0, w, h);
  const pts = track.path;
  let minX = Infinity, maxX = -Infinity, minZ = Infinity, maxZ = -Infinity;
  for (const p of pts) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minZ = Math.min(minZ, p.z); maxZ = Math.max(maxZ, p.z); }
  const pad = 16;
  const scale = Math.min((w - pad * 2) / (maxX - minX || 1), (h - pad * 2) / (maxZ - minZ || 1));
  const cx = (minX + maxX) / 2, cz = (minZ + maxZ) / 2;
  const toX = (x) => w / 2 + (x - cx) * scale;
  const toY = (z) => h / 2 + (z - cz) * scale;
  ctx.lineWidth = Math.max(6, track.width * scale);
  ctx.strokeStyle = 'rgba(210,218,226,.35)';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  pts.forEach((p, i) => (i ? ctx.lineTo(toX(p.x), toY(p.z)) : ctx.moveTo(toX(p.x), toY(p.z))));
  ctx.closePath(); ctx.stroke();
  ctx.lineWidth = 1.2; ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.stroke();

  (track.checkpoints || []).forEach((cp, i) => {
    ctx.fillStyle = i === currentCp ? '#e04848' : i < currentCp ? 'rgba(255,255,255,.8)' : 'rgba(255,255,255,.35)';
    ctx.beginPath(); ctx.arc(toX(cp.x), toY(cp.z), i === currentCp ? 5 : 3, 0, Math.PI * 2); ctx.fill();
  });
  ctx.fillStyle = '#ffffff';
  ctx.beginPath(); ctx.arc(toX(pts[0].x), toY(pts[0].z), 4, 0, Math.PI * 2); ctx.fill();

  ctx.save();
  ctx.translate(toX(car.x), toY(car.z));
  ctx.rotate(-car.yaw);
  ctx.fillStyle = '#e8e8e8';
  ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(5, 6); ctx.lineTo(-5, 6); ctx.closePath(); ctx.fill();
  ctx.restore();
}
