// CS3 – interfejs: HUD, minimapa, menu, sklep, wyniki.

import { WALLS, MAP, BUY_ITEMS, C, WEAPONS } from './config.js';

const $ = (id) => document.getElementById(id);

export class HUD {
  constructor(settings, callbacks = {}) {
    this.settings = settings;
    this.cb = callbacks;
    this.bannerT = 0;
    this.toastT = 0;
    this.damageAlpha = 0;
    this.flashAlpha = 0;
    this.hitT = 0;
    this.bindMenu();
    this.bindBuy();
  }

  bindMenu() {
    const seg = (id, key, cast = (v) => v) => {
      const root = $(id);
      root?.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        [...root.querySelectorAll('button')].forEach((x) => x.classList.remove('active'));
        b.classList.add('active');
        this.settings[key] = cast(b.dataset[key === 'team' ? 'team' : key === 'difficulty' ? 'diff' : 'control']);
        this.cb.onSettings?.(this.settings);
      });
    };
    seg('team-select', 'team');
    seg('diff-select', 'difficulty', Number);
    seg('control-select', 'controlMode');

    const sens = $('opt-sens'), vol = $('opt-vol'), qual = $('opt-quality'), inv = $('opt-invert');
    sens.value = this.settings.sensitivity;
    vol.value = this.settings.volume;
    qual.value = this.settings.quality;
    inv.checked = this.settings.invertY;
    $('out-sens').textContent = Number(sens.value).toFixed(2);
    $('out-vol').textContent = Number(vol.value).toFixed(2);
    sens.addEventListener('input', () => {
      this.settings.sensitivity = Number(sens.value);
      $('out-sens').textContent = sens.value;
      this.cb.onSettings?.(this.settings);
    });
    vol.addEventListener('input', () => {
      this.settings.volume = Number(vol.value);
      $('out-vol').textContent = vol.value;
      this.cb.onSettings?.(this.settings);
    });
    qual.addEventListener('change', () => {
      this.settings.quality = qual.value;
      this.cb.onSettings?.(this.settings);
    });
    inv.addEventListener('change', () => {
      this.settings.invertY = inv.checked;
      this.cb.onSettings?.(this.settings);
    });

    $('start-btn').addEventListener('click', () => this.cb.onStart?.());
    $('resume-btn').addEventListener('click', () => this.cb.onResume?.());
    $('restart-btn').addEventListener('click', () => this.cb.onRestart?.());
    $('menu-btn').addEventListener('click', () => this.cb.onMenu?.());
    $('again-btn').addEventListener('click', () => this.cb.onRestart?.());
    $('over-menu-btn').addEventListener('click', () => this.cb.onMenu?.());
    $('fullscreen-btn').addEventListener('click', () => {
      const el = document.documentElement;
      if (!document.fullscreenElement) el.requestFullscreen?.();
      else document.exitFullscreen?.();
    });
  }

  bindBuy() {
    const grid = $('buy-grid');
    grid.innerHTML = BUY_ITEMS.map((it) => `
      <button class="buy-item" data-item="${it.id}">
        <span><b>${it.label}</b><small>${it.desc}</small></span>
        <span class="price">$${it.price}</span>
      </button>`).join('');
    grid.addEventListener('click', (e) => {
      const b = e.target.closest('[data-item]');
      if (b) this.cb.onBuy?.(b.dataset.item);
    });
    $('buy-close').addEventListener('click', () => this.cb.onBuyClose?.());
  }

  screen(name) {
    for (const id of ['menu', 'pause', 'buy', 'matchover']) {
      $(id).classList.toggle('hidden', id !== name);
    }
    $('hud').classList.toggle('hidden', name === 'menu');
    const touch = this.settings.controlMode === 'touch'
      || (this.settings.controlMode === 'auto' && this.settings.touchDetected);
    $('touch-controls').classList.toggle('hidden', !touch || name === 'menu');
  }

  setTeam(team) {
    [...$('team-select').querySelectorAll('button')].forEach((b) => b.classList.toggle('active', b.dataset.team === team));
  }

  banner(text, duration = 2.5) {
    $('banner').textContent = text;
    $('banner').classList.remove('hidden');
    this.bannerT = duration;
  }

  toast(text, duration = 1.8) {
    $('toast').textContent = text;
    $('toast').classList.remove('hidden');
    this.toastT = duration;
  }

  hit() { this.hitT = 0.16; $('hitmarker').classList.add('show'); }
  damage(amount) { this.damageAlpha = Math.min(1, this.damageAlpha + amount / 80); }
  flash(amount) { this.flashAlpha = Math.max(this.flashAlpha, amount); }

  kill(killer, victim, weaponName) {
    const div = document.createElement('div');
    div.className = 'kill';
    const kc = killer?.team === 'CT' ? 'kct' : 'kt';
    const vc = victim.team === 'CT' ? 'kct' : 'kt';
    div.innerHTML = `<span class="${kc}">${killer?.name || '—'}</span> <span class="kw">[${weaponName}]</span> <span class="${vc}">${victim.name}</span>`;
    const feed = $('killfeed');
    feed.prepend(div);
    while (feed.children.length > 5) feed.lastChild.remove();
    setTimeout(() => div.remove(), 6000);
  }

  showBuy(match, player) {
    $('buy-money').textContent = `$${player.money}`;
    $('buy').classList.remove('hidden');
  }

  buyResult(res) {
    $('buy-msg').textContent = res.msg;
    $('buy-money').textContent = `$${this.cb.getPlayer()?.money ?? 0}`;
  }

  showScoreboard(match, player) {
    const body = $('scoreboard-body');
    body.innerHTML = ['CT', 'T'].map((team) => `
      <tr><td colspan="4" style="color:var(--${team === 'T' ? 't' : 'ct'})">${team === 'T' ? 'TERRORYŚCI' : 'ANTYTERRORYŚCI'}</td></tr>
      ${match.actors.filter((a) => a.team === team).map((a) => `
        <tr class="row${team} ${a === player ? 'me' : ''}">
          <td>${a.name}${a.hasBomb ? ' 💣' : ''}${a === player ? ' (TY)' : ''}</td>
          <td>${a.kills}</td><td>${a.deaths}</td><td>$${a.money}</td>
        </tr>`).join('')}`).join('');
    $('scoreboard').classList.remove('hidden');
  }

  hideScoreboard() { $('scoreboard').classList.add('hidden'); }

  update(dt, match, player) {
    $('scoreT').textContent = match.score.T;
    $('scoreCT').textContent = match.score.CT;
    $('timer').textContent = match.timeText;
    $('timer').style.color = match.bombPlanted ? '#ff7050' : match.phaseTime < 20 ? '#ffbd5c' : '#eef2f4';
    const phase = match.phase === 'freeze' ? 'PRZYGOTOWANIE'
      : match.phase === 'live' ? (match.bombPlanted ? 'BOMBA AKTYWNA' : 'WALKA')
        : match.phase === 'roundend' ? 'KONIEC RUNDY' : '';
    $('roundInfo').textContent = `RUNDA ${match.round} · ${phase}`;

    if (player) {
      $('hp').textContent = Math.ceil(player.hp);
      $('armor').textContent = Math.ceil(player.armor);
      $('ammo').textContent = player.weapon === 'knife' || player.weapon === 'c4' ? '—' : player.ammo;
      $('reserve').textContent = player.weapon === 'knife' || player.weapon === 'c4' ? '' : `/ ${player.reserve}`;
      $('weapon-name').textContent = WEAPONS[player.weapon]?.name || '';
      const moving = Math.hypot(player.vx, player.vz);
      const gap = 4 + Math.min(13, moving * 1.5 + player.recoilShots * 0.8) + (player.ads ? -3 : 0);
      for (const [cls, pos] of [['ch-top', gap], ['ch-bottom', gap], ['ch-left', gap], ['ch-right', gap]]) {
        const el = document.querySelector('.' + cls);
        if (cls.startsWith('ch-t')) el.style.top = `${20 - pos}px`;
        else if (cls.startsWith('ch-b')) el.style.bottom = `${20 - pos}px`;
        else if (cls.startsWith('ch-l')) el.style.left = `${20 - pos}px`;
        else el.style.right = `${20 - pos}px`;
      }
      const prog = Math.max(player.plantProgress / C.PLANT_TIME,
        player.defuseProgress / C.DEFUSE_TIME);
      $('progress').classList.toggle('hidden', prog <= 0.001);
      $('progress-bar').style.width = `${Math.min(100, prog * 100)}%`;
      $('progress-label').textContent = player.plantProgress > 0 ? 'ZAKŁADANIE BOMBY' : 'ROZBRAJANIE BOMBY';
    }
    $('bomb-warning').classList.toggle('hidden', !match.bombPlanted);

    this.damageAlpha = Math.max(0, this.damageAlpha - dt * 1.8);
    this.flashAlpha = Math.max(0, this.flashAlpha - dt * 1.6);
    $('damage-flash').style.opacity = this.damageAlpha;
    $('flashbang').style.opacity = this.flashAlpha;
    if (this.bannerT > 0) {
      this.bannerT -= dt;
      if (this.bannerT <= 0) $('banner').classList.add('hidden');
    }
    if (this.toastT > 0) {
      this.toastT -= dt;
      if (this.toastT <= 0) $('toast').classList.add('hidden');
    }
    if (this.hitT > 0) {
      this.hitT -= dt;
      if (this.hitT <= 0) $('hitmarker').classList.remove('show');
    }
    this.drawMinimap(match, player);
  }

  drawMinimap(match, player) {
    const cv = $('minimap');
    if (!cv || !player) return;
    const ctx = cv.getContext('2d');
    const S = cv.width / MAP.size;
    const px = (x) => (x + MAP.half) * S;
    const pz = (z) => (z + MAP.half) * S;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = 'rgba(30,28,22,.5)';
    ctx.fillRect(0, 0, cv.width, cv.height);

    for (const w of WALLS) {
      if (w.mat === 'crate' || w.mat === 'barrel') continue;
      ctx.fillStyle = w.h > 4 ? 'rgba(160,143,108,.55)' : 'rgba(120,105,80,.7)';
      ctx.fillRect(px(w.x - w.w / 2), pz(w.z - w.d / 2), w.w * S, w.d * S);
    }
    ctx.strokeStyle = 'rgba(232,193,75,.9)';
    ctx.lineWidth = 2;
    for (const k of ['A', 'B']) {
      const s = MAP.sites[k];
      ctx.strokeRect(px(s.x - s.w / 2), pz(s.z - s.d / 2), s.w * S, s.d * S);
      ctx.fillStyle = '#e8c14b';
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText(k, px(s.x) - 4, pz(s.z) + 4);
    }
    if (match.bombPlanted) {
      ctx.fillStyle = '#ff5b3d';
      ctx.beginPath(); ctx.arc(px(match.bomb.x), pz(match.bomb.z), 5, 0, 7); ctx.fill();
    }
    for (const a of match.actors) {
      if (!a.alive || a === player) continue;
      if (a.team !== player.team && Math.hypot(a.x - player.x, a.z - player.z) > 16) continue;
      ctx.fillStyle = a.team === 'CT' ? '#6bb6ef' : '#e0a64a';
      ctx.beginPath(); ctx.arc(px(a.x), pz(a.z), 3, 0, 7); ctx.fill();
    }
    const r = player.yaw;
    ctx.save();
    ctx.translate(px(player.x), pz(player.z));
    ctx.rotate(-r);
    ctx.fillStyle = '#7dffa8';
    ctx.beginPath();
    ctx.moveTo(0, -7); ctx.lineTo(5, 6); ctx.lineTo(0, 3); ctx.lineTo(-5, 6);
    ctx.closePath(); ctx.fill();
    ctx.restore();
  }
}
