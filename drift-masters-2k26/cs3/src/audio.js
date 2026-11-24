// CS3 – dźwięki syntetyzowane w WebAudio (bez plików audio).

export class Audio {
  constructor(volume = 0.7) {
    this.volume = volume;
    this.ctx = null;
    this.noise = null;
    this.muted = false;
    this.lastStep = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    const len = this.ctx.sampleRate * 1;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
    this.noise = buf;
  }

  setVolume(v) {
    this.volume = v;
    if (this.master) this.master.gain.value = v;
  }

  bus(gainValue = 1) {
    if (!this.ctx || this.muted) return null;
    const g = this.ctx.createGain();
    g.gain.value = gainValue * this.volume;
    g.connect(this.ctx.destination);
    return g;
  }

  noiseBurst(dur, freq, q, gain, type = 'lowpass') {
    if (!this.ctx || !this.noise) return;
    const g = this.bus(gain);
    if (!g) return;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const env = this.ctx.createGain();
    const t = this.ctx.currentTime;
    env.gain.setValueAtTime(1, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f); f.connect(env); env.connect(g);
    src.start(t); src.stop(t + dur + 0.02);
  }

  tone(freq, dur, gain, type = 'sine', slideTo = null) {
    if (!this.ctx) return;
    const g = this.bus(gain);
    if (!g) return;
    const o = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    const t = this.ctx.currentTime;
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    env.gain.setValueAtTime(0.8, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(env); env.connect(g);
    o.start(t); o.stop(t + dur + 0.02);
  }

  shot(id, distance = 0) {
    if (!this.ctx) return;
    const att = 1 / (1 + distance * 0.045);
    if (id === 'sniper') {
      this.noiseBurst(0.4, 1400, 0.6, 0.9 * att);
      this.tone(110, 0.35, 0.5 * att, 'sawtooth', 45);
    } else if (id === 'pistol') {
      this.noiseBurst(0.14, 2200, 0.8, 0.5 * att);
      this.tone(190, 0.1, 0.25 * att, 'square', 90);
    } else if (id === 'rifle' || id === 'm4') {
      this.noiseBurst(0.19, 1800, 0.7, 0.62 * att);
      this.tone(135, 0.13, 0.35 * att, 'sawtooth', 60);
    } else {
      this.noiseBurst(0.08, 900, 1, 0.2 * att);
    }
  }

  footstep(now, running = false) {
    if (!this.ctx || now - this.lastStep < (running ? 0.28 : 0.42)) return;
    this.lastStep = now;
    this.noiseBurst(0.07, 420 + Math.random() * 180, 1.2, 0.06);
  }

  hit() { this.tone(1250, 0.06, 0.22, 'square', 900); }
  hurt() { this.noiseBurst(0.18, 320, 0.8, 0.28); }
  reload() {
    this.noiseBurst(0.05, 3000, 2, 0.16, 'bandpass');
    setTimeout(() => this.noiseBurst(0.06, 1800, 2, 0.14, 'bandpass'), 250);
  }
  beep(fast) { this.tone(fast ? 1400 : 950, 0.07, 0.24, 'square'); }
  plant() { this.tone(500, 0.2, 0.3, 'sine'); setTimeout(() => this.tone(760, 0.25, 0.3), 180); }
  defuse() { this.tone(880, 0.15, 0.25, 'sine'); setTimeout(() => this.tone(1320, 0.3, 0.25), 140); }
  explode() {
    this.noiseBurst(1.4, 260, 0.4, 1.3);
    this.tone(80, 1.1, 0.8, 'sawtooth', 25);
  }
  ui() { this.tone(660, 0.05, 0.12, 'sine'); }
  death() { this.tone(220, 0.7, 0.3, 'sawtooth', 50); }
}
