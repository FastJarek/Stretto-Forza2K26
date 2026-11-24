// CS3 – obsługa klawiatury, myszy (OTG/Bluetooth), wskaźnika i dotyku.

const ACTION_KEYS = {
  KeyR: 'reload', KeyG: 'grenade', KeyB: 'buy', KeyV: 'view',
  Digit1: 'weapon1', Digit2: 'weapon2', Digit3: 'weapon3', Digit4: 'weapon4',
  KeyF: 'interact', KeyQ: 'cycle', KeyM: 'mute', KeyH: 'help',
};

export class Input {
  constructor(canvas, settings) {
    this.canvas = canvas;
    this.settings = settings;
    this.keys = new Set();
    this.mouse = { left: false, right: false, middle: false };
    this.actions = new Set();
    this.lookX = 0;
    this.lookY = 0;
    this.touchMove = { x: 0, y: 0 };
    this.touchLook = { x: 0, y: 0 };
    this.touchActive = false;
    this.pausePressed = false;
    this.nativeMouseSeen = false;
    this.pointerLocked = false;
    this.virtualKeys = new Set();
    this.lastPointer = { x: 0, y: 0 };
    this.install();
  }

  install() {
    window.addEventListener('keydown', (e) => {
      if (['Tab', 'Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
        e.preventDefault();
      }
      if (!this.keys.has(e.code)) {
        if (e.code === 'Escape') this.pausePressed = true;
        if (ACTION_KEYS[e.code]) this.actions.add(ACTION_KEYS[e.code]);
      }
      this.keys.add(e.code);
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.code));
    window.addEventListener('blur', () => {
      this.keys.clear();
      this.mouse.left = this.mouse.right = this.mouse.middle = false;
      this.touchMove.x = this.touchMove.y = 0;
    });

    this.canvas.addEventListener('mousedown', (e) => {
      if (this.nativeMouseSeen) return; // natywny most już to obsłużył
      this.setMouseButton(e.button, true);
      if (this.settings.controlMode !== 'touch' && !this.pointerLocked) {
        this.canvas.requestPointerLock?.();
      }
    });
    window.addEventListener('mouseup', (e) => {
      if (this.nativeMouseSeen) return;
      this.setMouseButton(e.button, false);
    });
    this.canvas.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('pointerlockchange', () => {
      this.pointerLocked = document.pointerLockElement === this.canvas;
    });

    window.addEventListener('mousemove', (e) => {
      if (this.nativeMouseSeen) return;
      const locked = this.pointerLocked;
      const dragging = this.mouse.left || this.mouse.right || this.mouse.middle;
      if (locked || dragging) {
        this.lookX += e.movementX || 0;
        this.lookY += e.movementY || 0;
      }
      this.lastPointer.x = e.clientX;
      this.lastPointer.y = e.clientY;
    });
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.addWheel(e.deltaY);
    }, { passive: false });

    // Most z natywnej powłoki Androida (OTG / Bluetooth).
    window.__nativeLook = (dx, dy) => {
      this.nativeMouseSeen = true;
      this.lookX += dx;
      this.lookY += dy;
    };
    window.__nativeMouse = (button, down) => {
      this.nativeMouseSeen = true;
      this.setMouseButton(button, down);
    };
    window.__nativeWheel = (v) => this.addWheel(v * 120);
    window.tsBack = () => { this.pausePressed = true; };

    this.installTouch();
  }

  addWheel(delta) {
    if (delta < 0) this.actions.add('weaponNext');
    else if (delta > 0) this.actions.add('weaponPrev');
  }

  setMouseButton(btn, down) {
    if (btn === 0) {
      if (!this.mouse.left && down) this.actions.add('fire');
      this.mouse.left = down;
    } else if (btn === 1) {
      this.mouse.right = down;
    } else if (btn === 2) {
      if (!this.mouse.middle && down) this.actions.add('weaponNext');
      this.mouse.middle = down;
    }
  }

  installTouch() {
    const setupStick = (id, out) => {
      const base = document.getElementById(id);
      const knob = document.getElementById(id + '-knob');
      if (!base || !knob) return;
      let pointer = null;
      let last = null;
      const radius = () => base.clientWidth * 0.36;
      const move = (e) => {
        if (e.pointerId !== pointer) return;
        const r = base.getBoundingClientRect();
        let dx = e.clientX - (r.left + r.width / 2);
        let dy = e.clientY - (r.top + r.height / 2);
        const len = Math.hypot(dx, dy) || 1;
        const max = radius();
        if (len > max) { dx = dx / len * max; dy = dy / len * max; }
        knob.style.transform = `translate(${dx}px, ${dy}px)`;
        if (out === this.touchMove) {
          out.x = dx / max;
          out.y = -dy / max;
        } else {
          if (last) {
            out.x += (dx - last.x) * 2.4;
            out.y += (dy - last.y) * 2.4;
          }
          last = { x: dx, y: dy };
        }
        this.touchActive = true;
      };
      base.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        pointer = e.pointerId;
        last = null;
        base.setPointerCapture(e.pointerId);
        move(e);
      });
      base.addEventListener('pointermove', move);
      const end = (e) => {
        if (e.pointerId !== pointer) return;
        pointer = null;
        last = null;
        knob.style.transform = 'translate(0px, 0px)';
        out.x = out.y = 0;
      };
      base.addEventListener('pointerup', end);
      base.addEventListener('pointercancel', end);
    };
    setupStick('stick-left', this.touchMove);
    setupStick('stick-right', this.touchLook);

    const bind = (id, action) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        el.setPointerCapture(e.pointerId);
        this.touchActive = true;
        el.classList.add('pressed');
        if (action === 'fire') this.mouse.left = true;
        else if (action === 'ads') this.mouse.right = true;
        else if (action === 'jump') this.virtualKeys.add('Space');
        else if (action === 'crouch') this.virtualKeys.add('ControlLeft');
        else if (action === 'walk') this.virtualKeys.add('ShiftLeft');
        else if (action === 'use') this.virtualKeys.add('KeyF');
        else this.actions.add(action);
      });
      const end = () => {
        el.classList.remove('pressed');
        if (action === 'fire') this.mouse.left = false;
        else if (action === 'ads') this.mouse.right = false;
        else if (action === 'jump') this.virtualKeys.delete('Space');
        else if (action === 'crouch') this.virtualKeys.delete('ControlLeft');
        else if (action === 'walk') this.virtualKeys.delete('ShiftLeft');
        else if (action === 'use') this.virtualKeys.delete('KeyF');
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    bind('btn-fire', 'fire');
    bind('btn-ads', 'ads');
    bind('btn-jump', 'jump');
    bind('btn-crouch', 'crouch');
    bind('btn-walk', 'walk');
    bind('btn-reload', 'reload');
    bind('btn-weapon', 'cycle');
    bind('btn-use', 'use');
    bind('btn-buy', 'buy');
    bind('btn-nade', 'grenade');
    bind('btn-pause', 'pause');
    bind('btn-knife', 'weapon4');
  }

  down(code) { return this.keys.has(code) || this.virtualKeys.has(code); }

  moveInput() {
    let f = (this.down('KeyW') ? 1 : 0) - (this.down('KeyS') ? 1 : 0);
    let s = (this.down('KeyD') ? 1 : 0) - (this.down('KeyA') ? 1 : 0);
    if (Math.abs(this.touchMove.x) > 0.08 || Math.abs(this.touchMove.y) > 0.08) {
      f = this.touchMove.y;
      s = this.touchMove.x;
    }
    if (this.down('ArrowUp')) f = 1;
    if (this.down('ArrowDown')) f = -1;
    if (this.down('ArrowLeft')) s = -1;
    if (this.down('ArrowRight')) s = 1;
    return {
      forward: f, strafe: s,
      jump: this.down('Space'),
      crouch: this.down('ControlLeft') || this.down('ControlRight') || this.down('KeyC'),
      walk: this.down('ShiftLeft') || this.down('ShiftRight'),
    };
  }

  consumeLook() {
    const sx = this.settings.sensitivity || 1;
    const inv = this.settings.invertY ? -1 : 1;
    let dx = (this.lookX + this.touchLook.x) * 0.0022 * sx;
    let dy = (this.lookY + this.touchLook.y) * 0.0022 * sx * inv;
    this.lookX = this.lookY = 0;
    this.touchLook.x = this.touchLook.y = 0;
    // Strzałki jako awaryjne patrzenie bez myszy
    const keyLook = 1.7 * (this.settings.sensitivity || 1);
    if (this.down('ArrowLeft')) dx -= 0.9 * keyLook / 60;
    if (this.down('ArrowRight')) dx += 0.9 * keyLook / 60;
    if (this.down('ArrowUp')) dy += 0.7 * keyLook / 60;
    if (this.down('ArrowDown')) dy -= 0.7 * keyLook / 60;
    return { dx, dy };
  }

  consumeAction(name) {
    if (!this.actions.has(name)) return false;
    this.actions.delete(name);
    return true;
  }

  consumePause() {
    if (!this.pausePressed) return false;
    this.pausePressed = false;
    return true;
  }

  releasePointerLock() {
    if (document.pointerLockElement) document.exitPointerLock?.();
  }
}
