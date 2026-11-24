// CS3 – system rund, ekonomii i bomby. Bez Three.js.

import { C, MAP, WEAPONS, BUY_ITEMS } from './config.js';
import { dist, inSite } from './math.js';
import { giveWeapon, addAmmo, resetActor } from './actor.js';

export class Match {
  constructor(actors, onEvent = () => {}) {
    this.actors = actors;
    this.onEvent = onEvent;
    this.score = { T: 0, CT: 0 };
    this.losses = { T: 0, CT: 0 };
    this.round = 0;
    this.phase = 'menu'; // menu | freeze | live | roundend | matchover
    this.phaseTime = 0;
    this.bombPlanted = false;
    this.bomb = null;
    this.bombTime = 0;
    this.bombCarrier = null;
    this.winner = null;
    this.reason = '';
    this.nextBeep = 0;
    this.playerSite = 'A';
  }

  startMatch() {
    this.score = { T: 0, CT: 0 };
    this.losses = { T: 0, CT: 0 };
    this.round = 0;
    this.startRound();
  }

  startRound() {
    this.round++;
    this.phase = 'freeze';
    this.phaseTime = C.FREEZE_TIME;
    this.bombPlanted = false;
    this.bomb = null;
    this.bombTime = 0;
    this.winner = null;
    this.reason = '';
    this.nextBeep = 0;

    const spawns = { T: MAP.spawns.T.slice(), CT: MAP.spawns.CT.slice() };
    for (const a of this.actors) {
      const saved = a.arsenal || {};
      const armor = a.armor, helmet = a.helmet, kit = a.kit;
      const money = a.money;
      const pool = spawns[a.team];
      const spawn = pool.splice(Math.floor(Math.random() * pool.length), 1)[0] || [0, a.team === 'T' ? 26 : -26];
      resetActor(a, spawn, 'pistol');
      a.arsenal = saved;
      a.armor = armor;
      a.helmet = helmet;
      a.kit = kit;
      a.money = money;
      // Zachowana broń z poprzedniej rundy, a boty dokupują sprzęt za kredyty.
      if (saved.m4) giveWeapon(a, 'm4');
      else if (saved.rifle) giveWeapon(a, 'rifle');
      else if (saved.sniper) giveWeapon(a, 'sniper');
      else if (a.bot) {
        const roll = Math.random();
        const primary = a.team === 'CT'
          ? (roll < 0.78 ? 'm4' : roll < 0.88 ? 'sniper' : 'pistol')
          : (roll < 0.74 ? 'rifle' : roll < 0.84 ? 'sniper' : 'pistol');
        giveWeapon(a, primary);
        a.armor = Math.max(a.armor, 100);
        if (a.team === 'CT' && Math.random() < 0.4) a.kit = true;
      }
      a.hp = 100;
      a.alive = true;
      a.site = this.pickSite(a);
      a.defendOffset = a.site === 'A' ? [-2 + Math.random() * 4, -2 + Math.random() * 4]
        : [-2 + Math.random() * 4, -2 + Math.random() * 4];
    }

    // Wybór nosiciela bomby – gracz dostaje ją co kilka rund
    const ts = this.actors.filter((a) => a.team === 'T');
    const preferPlayer = this.round % 3 === 1;
    const player = ts.find((a) => !a.bot);
    const carrier = (preferPlayer && player) || ts[Math.floor(Math.random() * ts.length)];
    if (carrier) {
      carrier.hasBomb = true;
      carrier.weapon = 'c4';
      carrier.ammo = 0;
      this.bombCarrier = carrier;
    }
    this.onEvent('roundstart', { round: this.round });
  }

  pickSite(a) {
    if (!a.bot) return this.playerSite;
    // Boty rozdzielają się po strefach
    const idx = this.actors.filter((x) => x.bot).indexOf(a);
    return idx % 2 === 0 ? 'A' : 'B';
  }

  buy(actor, itemId) {
    if (this.phase !== 'freeze' && !(this.phase === 'live' && this.phaseTime > C.ROUND_TIME - 12)) {
      return { ok: false, msg: 'Kupno tylko na początku rundy' };
    }
    const item = BUY_ITEMS.find((i) => i.id === itemId);
    if (!item) return { ok: false, msg: 'Brak przedmiotu' };
    if (actor.money < item.price) return { ok: false, msg: 'Za mało pieniędzy' };
    if (itemId === 'armor') {
      if (actor.armor >= 100) return { ok: false, msg: 'Masz już pancerz' };
      actor.armor = 100;
    } else if (itemId === 'helmet') {
      if (actor.helmet) return { ok: false, msg: 'Masz już hełm' };
      actor.helmet = true;
      if (actor.armor <= 0) actor.armor = 100;
    } else if (itemId === 'kit') {
      if (actor.kit || actor.team !== 'CT') return { ok: false, msg: 'Niedostępne' };
      actor.kit = true;
    } else if (itemId === 'ammo') {
      addAmmo(actor);
    } else {
      if (actor.weapon === itemId) {
        addAmmo(actor);
      } else {
        giveWeapon(actor, itemId);
        if (actor.hasBomb) { actor.hasBomb = false; this.giveBombToSomeone(actor.team); }
      }
    }
    actor.money -= item.price;
    this.onEvent('buy', { actor, item: itemId });
    return { ok: true, msg: `Kupiono: ${item.label}` };
  }

  giveBombToSomeone(team) {
    const list = this.actors.filter((a) => a.alive && a.team === team && !a.hasBomb);
    if (!list.length) return;
    const a = list[0];
    a.hasBomb = true;
    a.weapon = 'c4';
    a.ammo = 0;
    this.bombCarrier = a;
  }

  tryPlant(actor, dt) {
    if (this.bombPlanted || !actor.hasBomb || actor.team !== 'T' || !actor.alive) return;
    const site = inSite(actor.x, actor.z, MAP.sites.A) ? 'A'
      : inSite(actor.x, actor.z, MAP.sites.B) ? 'B' : null;
    if (!site) { actor.plantProgress = 0; return; }
    actor.plantProgress += dt;
    if (actor.plantProgress >= C.PLANT_TIME) {
      actor.plantProgress = 0;
      actor.hasBomb = false;
      this.bombPlanted = true;
      this.bomb = { x: actor.x, z: actor.z, site };
      this.bombTime = C.BOMB_TIME;
      actor.money = Math.min(C.MAX_MONEY, actor.money + C.PLANT_REWARD);
      this.onEvent('plant', { site, by: actor });
    }
  }

  cancelInteract(actor) {
    actor.plantProgress = 0;
    actor.defuseProgress = 0;
  }

  tryDefuse(actor, dt) {
    if (!this.bombPlanted || !actor.alive || actor.team !== 'CT') return;
    if (dist(actor.x, actor.z, this.bomb.x, this.bomb.z) > 2) {
      actor.defuseProgress = 0;
      return;
    }
    actor.defuseProgress += dt * (actor.kit ? 2 : 1);
    if (actor.defuseProgress >= C.DEFUSE_TIME) {
      actor.defuseProgress = 0;
      actor.money = Math.min(C.MAX_MONEY, actor.money + C.DEFUSE_REWARD);
      this.onEvent('defuse', { by: actor });
      this.endRound('CT', 'Bomba rozbrojona');
    }
  }

  update(dt, now) {
    if (this.phase === 'freeze') {
      this.phaseTime -= dt;
      if (this.phaseTime <= 0) {
        this.phase = 'live';
        this.phaseTime = C.ROUND_TIME;
        this.onEvent('roundlive', { round: this.round });
      }
    } else if (this.phase === 'live') {
      this.phaseTime -= dt;
      // Nosiciel zginął – bomba spada na żywego terrorystę.
      if (!this.bombPlanted) {
        const c = this.bombCarrier;
        if (!c || !c.alive || !c.hasBomb) {
          for (const a of this.actors) if (a.hasBomb) a.hasBomb = false;
          this.giveBombToSomeone('T');
        }
      }
      if (this.bombPlanted) {
        this.bombTime -= dt;
        const beepEvery = this.bombTime < 10 ? 0.35 : this.bombTime < 20 ? 0.7 : 1.2;
        if (now >= this.nextBeep) {
          this.nextBeep = now + beepEvery;
          this.onEvent('beep', { time: this.bombTime });
        }
        if (this.bombTime <= 0) {
          this.onEvent('explode', { bomb: this.bomb });
          this.endRound('T', 'Bomba wybuchła');
          return;
        }
      }
      this.checkElimination();
      if (this.phase !== 'live') return;
      if (!this.bombPlanted && this.phaseTime <= 0) {
        this.endRound('CT', 'Czas minął');
      }
    } else if (this.phase === 'roundend') {
      this.phaseTime -= dt;
      if (this.phaseTime <= 0) {
        if (this.score.T >= C.WIN_SCORE || this.score.CT >= C.WIN_SCORE) {
          this.phase = 'matchover';
          this.onEvent('matchover', { winner: this.score.T > this.score.CT ? 'T' : 'CT' });
        } else {
          this.startRound();
        }
      }
    }
  }

  checkElimination() {
    const tAlive = this.actors.some((a) => a.team === 'T' && a.alive);
    const ctAlive = this.actors.some((a) => a.team === 'CT' && a.alive);
    if (!tAlive && this.bombPlanted) return; // bomba może jeszcze wybuchnąć
    if (!tAlive) this.endRound('CT', 'Terroryści zlikwidowani');
    else if (!ctAlive) this.endRound('T', 'Antyterroryści zlikwidowani');
  }

  endRound(winner, reason) {
    if (this.phase !== 'live') return;
    this.phase = 'roundend';
    this.phaseTime = C.ROUND_END_TIME;
    this.winner = winner;
    this.reason = reason;
    this.score[winner]++;
    this.losses[winner] = 0;
    const loser = winner === 'T' ? 'CT' : 'T';
    this.losses[loser]++;
    const bonus = Math.min(3400, 1400 + Math.max(0, this.losses[loser] - 1) * 500);
    for (const a of this.actors) {
      a.money = Math.min(C.MAX_MONEY, a.money + (a.team === winner ? 3250 : bonus));
    }
    this.onEvent('roundend', { winner, reason, score: { ...this.score } });
  }

  get timeText() {
    const t = this.bombPlanted ? this.bombTime : this.phaseTime;
    const s = Math.max(0, Math.ceil(t));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }
}
