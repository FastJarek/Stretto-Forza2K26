# CS3 — Tactical Strike

Taktyczna strzelanka 3D (FPS) inspirowana mechaniką Counter-Strike 2, napisana w
Three.js i spakowana jako aplikacja Android (WebView + WebGL). Gra jest w
**oryginalnym** klimacie pustynnym (mapa „Dust Sector”) — nie zawiera assetów,
logotypów ani nazw Valve.

## Co jest w grze

- **4v4 z botami** – gracz + 3 sojuszników przeciwko 4 botom, trzy poziomy trudności.
- **Tryb bomby** – jedna drużyna zakłada C4 w strefie A lub B, druga rozbraja;
  wygrana przez eliminację, wybuch, rozbrojenie lub upływ czasu.
- **Rundy i ekonomia** – 7 s przygotowania, 1:55 walki, pieniądze za zabicia,
  rundy, założenie i rozbrojenie bomby; sklep (`B`) z bronią, pancerzem, hełmem,
  zestawem rozbrajania i amunicją. Pierwsza do 13 rund.
- **Broń i strzelanie** – pistolet, karabin AK-R, M4-A, snajper AWM, nóż i C4;
  odrzut, rozrzut zależny od ruchu/kucania, celowanie (`PPM`), przeładowanie,
  obrażenia z podziałem na głowę/tułów/nogi i przebicie pancerza.
- **Boty** – nawigacja A* po siatce, linia wzroku, reakcja, celowanie z błędem
  zależnym od trudności, strafe, zmiana strefy, zakładanie/rozbrajanie bomby.
- **Grafika** – proceduralne tekstury, niebo, mgła, cienie, oświetlenie,
  modele postaci i broni z prymitywów, smugi pocisków, iskry, krew, łuski,
  wybuchy, widok broni w osobnym renderze.
- **Dźwięk** – w pełni syntetyzowany WebAudio (strzały, kroki, reload, bomba).

## Sterowanie

| Akcja | Klawiatura / mysz | Dotyk |
| --- | --- | --- |
| Ruch | `W A S D` | lewy dżojstik |
| Patrzenie | mysz (pointer lock) lub natywny most OTG | prawy dżojstik |
| Strzał | `LPM` | przycisk ◉ |
| Celowanie | `PPM` | przycisk ⊕ |
| Skok | `Space` | ↑ |
| Kucanie | `Ctrl` / `C` | ↓ |
| Chód (cicho) | `Shift` | W |
| Przeładowanie | `R` | R |
| Broń | `1` pistolet, `2` karabin, `3` snajper, `4` nóż, kółko myszy | ⇄, 🔪 |
| Użyj / złóż / rozbrój | `E` lub `F` | E |
| Granat | `G` | (brak przycisku – dostępne z klawiatury) |
| Sklep | `B` | $ |
| Wyniki | `Tab` (przytrzymaj) | — |
| Pauza | `Esc` | II |

**Pełne wsparcie klawiatury i myszki przez OTG / Bluetooth** zapewnia natywna
powłoka Androida: `MainActivity` przechwytuje zdarzenia `SOURCE_MOUSE`, liczy
relatywny ruch kursora i przekazuje go do JS przez `window.__nativeLook(dx, dy)`,
a przyciski i kółko przez `__nativeMouse(button, down)` oraz `__nativeWheel(v)`.
Dzięki temu działa patrzenie bez pointer locku, którego WebView na Androidzie
często nie obsługuje. Klawiatura HID jest obsługiwana normalnie przez WebView.

## Uruchomienie w przeglądarce

```bash
npm install
npm run build
npm run serve
```

Otwórz http://localhost:8000/ (wymagany serwer HTTP i WebGL). Wersja
`dist/game.js` jest zbudowanym, samowystarczalnym plikiem — Three.js jest
zawarty w bundle.

## Testy

```bash
npm test
```

Testy Node sprawdzają kolizje, promienie, obrażenia, przeładowanie, A*,
przejścia rund, bomby, ekonomię i zachowanie botów.

## Build APK

Wymagane: JDK 17, Android SDK platform 35 + build-tools 35.0.0, zip.
Na maszynach ARM potrzebny jest `qemu-user-static` i `libc6-amd64-cross`
(wrappery w `android/tools` uruchamiają x86_64 binaria przez qemu).

```bash
bash android/build-apk.sh
```

Wynik: `release/CS3-v1.0.apk` (podpisany kluczem debugowym z
`android/debug.keystore`). `build-apk.sh` najpierw wykonuje `npm run build`,
pakuje `dist/` do `assets/`, kompiluje `MainActivity`, tworzy DEX, wyrównuje
i podpisuje APK (v1 + v2). Szczegóły: [`android/README.md`](android/README.md).

## Struktura

- `src/config.js` – mapa, bronie, economy, stałe
- `src/math.js` – kolizje, raycasting, A*
- `src/actor.js`, `src/bots.js`, `src/match.js` – logika rozgrywki (testowalna w Node)
- `src/input.js` – klawiatura, mysz, most natywny, dotyk
- `src/world.js`, `src/textures.js`, `src/actors3d.js`, `src/weapons3d.js`, `src/effects.js` – grafika
- `src/audio.js` – dźwięk, `src/hud.js` – interfejs, `src/main.js` – pętla gry
- `android/` – powłoka WebView i skrypt budowy APK
