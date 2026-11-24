// Synteza dźwięku bez plików audio — działa w WebView bez zasobów zewnętrznych.

export class GameAudio {
  constructor(settings) {
    this.settings = settings;
    this.ctx = null;
    this.ready = false;
    this.engineGain = null;
    this.tireGain = null;
    this.windGain = null;
    this.oscA = null;
    this.oscB = null;
  }

  init() {
    if (this.ready) {
      if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try {
      this.ctx = new AC();
      const ctx = this.ctx;
      this.master = ctx.createGain();
      this.master.gain.value = this.settings.master;
      this.master.connect(ctx.destination);

      // Silnik: dwa piły przez filtr dolnoprzepustowy.
      this.engineGain = ctx.createGain();
      this.engineGain.gain.value = 0;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 900;
      this.oscA = ctx.createOscillator();
      this.oscA.type = 'sawtooth';
      this.oscB = ctx.createOscillator();
      this.oscB.type = 'square';
      this.oscA.frequency.value = 60;
      this.oscB.frequency.value = 30;
      this.oscA.connect(lp); this.oscB.connect(lp);
      lp.connect(this.engineGain); this.engineGain.connect(this.master);
      this.oscA.start(); this.oscB.start();

      // Szum opon i wiatr — jeden bufor loop, dwa filtry.
      const len = ctx.sampleRate * 2;
      const buf = ctx.createBuffer(1, len, ctx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
      const noise = ctx.createBufferSource();
      noise.buffer = buf;
      noise.loop = true;
      this.tireGain = ctx.createGain();
      this.tireGain.gain.value = 0;
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass'; bp.frequency.value = 1750; bp.Q.value = 2.5;
      noise.connect(bp); bp.connect(this.tireGain); this.tireGain.connect(this.master);
      this.windGain = ctx.createGain();
      this.windGain.gain.value = 0;
      const wl = ctx.createBiquadFilter();
      wl.type = 'lowpass'; wl.frequency.value = 420;
      noise.connect(wl); wl.connect(this.windGain); this.windGain.connect(this.master);
      noise.start();
      this.ready = true;
    } catch (_) { this.ready = false; }
  }

  setVolumes(s) {
    this.settings = s;
    if (!this.ready) return;
    this.master.gain.setTargetAtTime(s.master, this.ctx.currentTime, 0.05);
  }

  update(speed, throttle, drift, boosting) {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    const rpm = 52 + speed * 3.1 + (throttle > 0.1 ? 24 : 0) + (boosting ? 40 : 0);
    this.oscA.frequency.setTargetAtTime(rpm, t, 0.06);
    this.oscB.frequency.setTargetAtTime(rpm * 0.5, t, 0.06);
    this.engineGain.gain.setTargetAtTime(this.settings.engine * (0.04 + throttle * 0.075), t, 0.08);
    this.tireGain.gain.setTargetAtTime(this.settings.effects * Math.min(0.18, Math.abs(drift) / 260), t, 0.05);
    this.windGain.gain.setTargetAtTime(this.settings.effects * Math.min(0.07, speed / 950), t, 0.1);
  }

  silence() {
    if (!this.ready) return;
    const t = this.ctx.currentTime;
    this.engineGain.gain.setTargetAtTime(0, t, 0.1);
    this.tireGain.gain.setTargetAtTime(0, t, 0.1);
    this.windGain.gain.setTargetAtTime(0, t, 0.1);
  }

  beep(freq = 680, duration = 0.12, type = 'square', gain = 0.18) {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(gain * this.settings.effects, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, t + duration);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + duration + 0.02);
  }

  countdown(n) {
    this.beep(n === 0 ? 980 : 520, n === 0 ? 0.35 : 0.14, 'square', 0.22);
  }

  checkpoint() { this.beep(880, 0.1, 'sine', 0.14); }

  finish() {
    [0, 120, 240].forEach((delay, i) => {
      if (!this.ready) return;
      const ctx = this.ctx, t = ctx.currentTime + delay / 1000;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = 'triangle'; o.frequency.value = [523, 659, 784][i];
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.16 * this.settings.effects, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
      o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.32);
    });
  }

  crash() {
    if (!this.ready) return;
    const ctx = this.ctx, t = ctx.currentTime;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(45, t + 0.22);
    g.gain.setValueAtTime(0.22 * this.settings.effects, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.24);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + 0.25);
  }
}
