import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_SAVE, TRACKS, CARS, carsForMode, getCar, getSetup, DEFAULT_SETUP,
  sanitizeSave, sampleClosedPath, nearestOnPath, buildCheckpoints, trackLength,
  medalFor, carParams, createCar, stepCar, resolveTrackBounds, driftPoints,
  driftGrade, formatTime, upgradeCost,
} from '../src/core.js';

test('sanitizeSave uzupełnia brakujące pola i ogranicza wartości', () => {
  const s = sanitizeSave({
    settings: { sensitivity: 99, gyroSensitivity: 99, graphics: ' dziwne ', controlMode: 'x' },
    tuning: { engine: 99 }, credits: -5, selectedCar: 's13',
    setups: { s13: { power: 999, steerAngle: -20, gearbox: 'manual' } },
  });
  assert.equal(s.settings.sensitivity, 2);
  assert.equal(s.settings.gyroSensitivity, 2.5);
  assert.equal(s.settings.graphics, 'high');
  assert.equal(s.settings.controlMode, 'touch');
  assert.equal(s.tuning.engine, 5);
  assert.equal(s.credits, 0);
  assert.equal(s.selectedCar, 's13');
  assert.equal(s.setups.s13.power, 100);
  assert.equal(s.setups.s13.steerAngle, 10);
  assert.equal(s.setups.s13.gearbox, 'manual');
  assert.deepEqual(sanitizeSave(null), DEFAULT_SAVE);
});

test('trasy: skidpad, bihoku, tory wyścigowe i free roam', () => {
  assert.equal(TRACKS.length, 9);
  assert.equal(TRACKS.filter((t) => t.type === 'trening').length, 4);
  assert.equal(TRACKS.filter((t) => t.type === 'wyścig').length, 2);
  assert.equal(TRACKS.filter((t) => t.type === 'drift').length, 3);
  for (const id of ['skipad', 'bihoku', 'tor-poznan', 'suzuka']) {
    assert.ok(TRACKS.some((t) => t.id === id), `brak trasy ${id}`);
  }
  for (const t of TRACKS.filter((t) => t.type === 'drift')) {
    assert.equal(t.laps, 0, `${t.id} nie powinien mieć okrążeń`);
    assert.equal(t.checkpoints, 0, `${t.id} nie powinien mieć bramek`);
  }
  for (const t of TRACKS) {
    const path = sampleClosedPath(t.points);
    assert.equal(path.length, t.points.length * 14);
    assert.ok(trackLength(path) > 100, `${t.id} jest za krótka`);
    const cps = buildCheckpoints(path, t.checkpoints);
    assert.equal(cps.length, t.checkpoints);
    for (const cp of cps) assert.ok(Number.isFinite(cp.yaw));
  }
});

test('nearestOnPath znajduje odległość i styczną', () => {
  const path = [{ x: 0, z: 0 }, { x: 0, z: 10 }, { x: 10, z: 10 }, { x: 10, z: 0 }];
  const p = nearestOnPath(path, 3, 10);
  assert.ok(Math.abs(p.dist - 0) < 1e-6);
  assert.ok(p.tx > 0.99 || p.tz > 0.99);
  const far = nearestOnPath(path, 30, 30);
  assert.ok(far.dist > 14);
});

test('samochód przyspiesza, hamuje i jeździ wstecz', () => {
  const params = carParams(DEFAULT_SAVE.tuning);
  const car = createCar(0, 0, 0);
  const input = { throttle: 1, brake: 0, steer: 0 };
  for (let i = 0; i < 120; i++) stepCar(car, input, params, 1 / 60);
  assert.ok(car.speed > 10, `prędkość=${car.speed}`);
  assert.ok(car.z > 0, 'samochód powinien jechać w kierunku +Z');
  for (let i = 0; i < 60; i++) stepCar(car, { throttle: 0, brake: 1, steer: 0 }, params, 1 / 60);
  assert.ok(car.speed < 6, `prędkość po hamowaniu=${car.speed}`);
  for (let i = 0; i < 180; i++) stepCar(car, { throttle: 0, brake: 1, steer: 0 }, params, 1 / 60);
  assert.ok(car.vz < -1, 'po zatrzymaniu wlecze bieg wsteczny');
  assert.equal(car.gear, -1);
});

test('stawki aut: drift i wyścig mają własne specyfikacje', () => {
  assert.equal(CARS.length, 6);
  assert.deepEqual(carsForMode('drift').map((c) => c.id), ['ae86', 'e36', 's13']);
  assert.deepEqual(carsForMode('wyścig').map((c) => c.id), ['e60', 'miata', 'gokart']);
  assert.equal(getCar('suzuka'), null);
  const ae86 = carParams(DEFAULT_SAVE.tuning, null, 'ae86');
  const e60 = carParams(DEFAULT_SAVE.tuning, null, 'e60');
  assert.ok(e60.mass > ae86.mass);
  assert.ok(e60.engineForce > ae86.engineForce);
  assert.ok(e60.maxSpeed > ae86.maxSpeed);
  const kart = carParams(DEFAULT_SAVE.tuning, null, 'gokart');
  assert.ok(kart.mass < ae86.mass / 3);
});

test('setup auta realnie zmienia fizykę, sprzęgło odcina napęd', () => {
  const base = carParams(DEFAULT_SAVE.tuning, getSetup(DEFAULT_SAVE, 'e36'), 'e36');
  const setup = {
    ...DEFAULT_SETUP,
    steerAngle: 100, rearGrip: 100, power: 100,
    brakeBias: 100, finalDrive: 100, gearbox: 'manual',
  };
  const tuned = carParams(DEFAULT_SAVE.tuning, setup, 'e36');
  assert.ok(tuned.steerMax > base.steerMax);
  assert.ok(tuned.muRear > base.muRear);
  assert.ok(tuned.engineForce > base.engineForce);
  assert.ok(tuned.brakeBias < base.brakeBias);
  assert.equal(tuned.manual, true);

  const drive = (clutch) => {
    const car = createCar(0, 0, 0);
    for (let i = 0; i < 60; i++) stepCar(car, { throttle: 1, clutch }, tuned, 1 / 60);
    return car.speed;
  };
  assert.ok(drive(false) > drive(true) + 1);
});

test('hamulec ręczny zwiększa kąt poślizgu', () => {
  const params = carParams({ ...DEFAULT_SAVE.tuning, drift: 3 });
  const drive = (handbrake) => {
    const car = createCar(0, 0, 0);
    for (let i = 0; i < 90; i++) stepCar(car, { throttle: 1, brake: 0, steer: 0 }, params, 1 / 60);
    let max = 0;
    for (let i = 0; i < 90; i++) {
      stepCar(car, { throttle: 0.6, brake: 0, steer: 1, handbrake }, params, 1 / 60);
      max = Math.max(max, Math.abs(car.driftAngle));
    }
    return max;
  };
  assert.ok(drive(true) > drive(false) + 3);
});

test('model LFS: hamowanie silnikiem, przenoszenie masy i geometria Ackermanna', () => {
  const p = carParams(DEFAULT_SAVE.tuning, DEFAULT_SETUP, 'ae86');
  assert.ok(p.wheelRadius > 0.2);
  assert.ok(p.trackWidth > 1);
  assert.ok(p.engineBrake > 0);
  assert.ok(p.diffStiffness > 0);
  assert.ok(p.tireStiffnessFront > 0 && p.longStiffnessRear > 0);

  const car = createCar(0, 0, 0);
  for (let i = 0; i < 180; i++) stepCar(car, { throttle: 1 }, p, 1 / 60);
  const beforeCoast = car.speed;
  for (let i = 0; i < 60; i++) stepCar(car, { throttle: 0 }, p, 1 / 60);
  assert.ok(car.speed < beforeCoast - 0.5, 'hamowanie silnikiem powinno zwalniać');
  assert.ok(car.speed > beforeCoast - 8, 'hamowanie silnikiem nie może być zbyt mocne');

  // Przyspieszenie obciąża tył, skręt w prawo obciąża lewe (zewnętrzne) koła.
  const turn = createCar(0, 0, 0);
  for (let i = 0; i < 120; i++) stepCar(turn, { throttle: 1 }, p, 1 / 60);
  assert.ok(turn.wheelLoad[2] + turn.wheelLoad[3] > turn.wheelLoad[0] + turn.wheelLoad[1]);
  for (let i = 0; i < 30; i++) stepCar(turn, { throttle: 0.7, steer: 1 }, p, 1 / 60);
  assert.ok(turn.wheelLoad[0] > turn.wheelLoad[1], 'prawy łuk obciąża lewe koła');
  assert.ok(Math.abs(turn.wheelSteer[0] - turn.wheelSteer[1]) > 0.001, 'Ackermann różni kąty kół');
});

test('model LFS: blokada dyferencjału zmienia rozdział momentu na kołach', () => {
  const split = (diffLock) => {
    const p = carParams(DEFAULT_SAVE.tuning, { ...DEFAULT_SETUP, diffLock }, 'ae86');
    const car = createCar(0, 0, 0);
    for (let i = 0; i < 60; i++) stepCar(car, { throttle: 1 }, p, 1 / 60);
    car.wheelOmega[2] = car.wheelOmega[3] + 20;
    stepCar(car, { throttle: 1 }, p, 1 / 240);
    return Math.abs(car.wheelTorque[2] - car.wheelTorque[3]);
  };
  assert.ok(split(100) > split(0) + 100, 'zablokowany dyferencjał wyrównuje momenty');
});

test('punkty i ocena driftu (Meyer)', () => {
  assert.equal(driftPoints(40, 5, 1), 0);
  assert.equal(driftPoints(10, 35, 1), 0);
  assert.equal(driftPoints(90, 85, 1), 0);
  assert.ok(driftPoints(90, 35, 1 / 60) > 0);
  assert.equal(driftGrade(8), '');
  assert.equal(driftGrade(20), 'LEKKI POŚLIZG');
  assert.equal(driftGrade(35), 'DRIFT');
  assert.equal(driftGrade(50), 'DUŻY KĄT');
  assert.equal(driftGrade(-65, 3), 'MEYER! 🔥');
});

test('odbicie od krawędzi trasy nie wypycha auta poza limit', () => {
  const car = createCar(15, 0, Math.PI / 2);
  car.vx = 12;
  const hit = resolveTrackBounds(car, { dist: 15, x: 0, z: 0 }, 10);
  assert.equal(hit, true);
  assert.ok(Math.hypot(car.x, car.z) <= 10);
  assert.ok(car.vx < 12);
});

test('medale i formatowanie czasu', () => {
  const t = TRACKS[0];
  assert.equal(medalFor(t, t.medals.gold - 1), 'gold');
  assert.equal(medalFor(t, t.medals.gold + 1), 'silver');
  assert.equal(medalFor(t, t.medals.bronze + 1), 'none');
  assert.equal(formatTime(65.43), '01:05.43');
  assert.equal(upgradeCost(2), 1100);
});
