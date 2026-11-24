# Gry 3D i 2D w przeglądarce

Repozytorium zawiera sześć gier: **Drift Masters 2K26** (drift 3D na Androida
z gotowym APK), **Operacja: Widmo** (strzelanka FPS 3D),
**Samoloty 3D** (swobodny lot z fizyką), **Omijaj przeszkody 3D**,
**Omijaj przeszkody 2D** oraz wersję pygame tej ostatniej.

## Drift Masters 2K26 (drift 3D, Android + przeglądarka)

Gra wyścigowo-driftingowa single player w stylu Assetto Corsa: 4 trasy treningowe
(Skipad, Bihoku i dwie dodatkowe), wyścigi na Torze Poznań i Suzuce, 3 areny
driftu w free roam, 6 aut (AE86/E36/S13 oraz E60/Miata/Gokart), szczegółowy setup,
ocena driftu „Meyer”, tuning i ustawienia grafiki/dźwięku. Sterowanie:
dotyk, żyroskop lub klawiatura + mysz. Wersja 1.2 ma czterokołowy model jazdy
w stylu Live For Speed (poślizgi opon, przenoszenie masy, sprzęgło, dyferencjał).
Gotowy podpisany plik: `drift-masters-2k26/release/DriftMasters2K26-v1.2.apk` ·
[pobierz bezpośrednio z release v1.2](https://github.com/FastJarek/Stretto-Forza2K26/releases/download/v1.2/DriftMasters2K26-v1.2.apk).

Szczegóły, sterowanie i instrukcja zbudowania APK:
[`drift-masters-2k26/README.md`](drift-masters-2k26/README.md).

## Operacja: Widmo (strzelanka 3D)

FPS na małej arenie: wybierz postać, wpisz imię, pokonaj sześciu wrogów,
uruchom terminal i ewakuuj się ze strefy. Sterowanie wyłącznie klawiaturą i myszką.
Na Androidzie wymagana jest fizyczna klawiatura i mysz (USB-C/Bluetooth) – działa
identycznie jak na PC. Kontrol dotykowych nie ma.

### Uruchomienie

```bash
python3 -m http.server 8000
```

Otwórz http://localhost:8000/strzelec3d.html (wymagany serwer HTTP i WebGL;
Three.js jest lokalny w `lib/three.module.js`).

### Sterowanie

| Klawisz / akcja | Funkcja |
| --- | --- |
| `W A S D` | chodzenie |
| `Q` / `E` | strafe lewo / prawo |
| Mysz | patrzenie (klik obraz przejmuje kursor; bez pointer lock działa przeciąganie) |
| `Shift` | sprint (zużywa kondycję) |
| `Ctrl` | kucanie i skradanie (wolniej wykrywany) |
| `Space` | skok |
| `PPM` | strzał |
| `LPM` | tryb celowania |
| `Kółko myszy` | zoom karabinu M24 (1×–12×) |
| `E` lub `F` | interakcja (apteczka, amunicja, terminal, ewakuacja) |
| `R` | przeładowanie |
| `1` / `2` / `3` | pistolet / AK-47 / M24 |
| `Esc` | pauza |

`E` pełni dwie role: przy przedmiocie lub terminalu wykonuje interakcję,
w pozostałych przypadkach jest strafem w prawo. `F` zawsze wykonuje interakcję.
Sterowanie dotykowe zostało usunięte. W menu pauzy dostępny jest pełny ekran.

### Testy logiki

```bash
node --test testy-strzelca.mjs
```

Sprawdzają ruch, kolizje, skok, przełączanie broni, przeładowanie, zoom,
strzelanie, interakcje i zakończenie misji.

## Samoloty 3D

Pełny swobodny lot z fizyką sił: ciąg, opór, siła nośna, grawitacja, kąt natarcia
i przeciągnięcie. Samolot startuje z pasa, można go lądować, tankować i planować
trasę klikami na minimapie. Autopilot potrafi wystartować i poprowadzić samolot
przez punkty trasy.

### Uruchomienie

```bash
python3 -m http.server 8000
```

Otwórz http://localhost:8000/samoloty.html

Wymagana jest przeglądarka z WebGL i obsługą import maps (aktualne Chrome, Edge,
Firefox, Safari). Pliki muszą być podawane przez serwer HTTP – same `file://`
mogą zostać zablokowane przez CORS dla modułów JS. Three.js jest zapisany
lokalnie w `lib/three.module.js`, więc internet nie jest potrzebny.

### Sterowanie

| Klawisz | Funkcja |
| --- | --- |
| `W` / `S` | ster wysokości (nuszenie / podciąganie) |
| `A` / `D` | lotki – przechył i skręt |
| `Q` / `E` | ster kierunku |
| `Shift` / `Ctrl` | więcej / mniej gazu |
| `G` / `F` | podwozie / klapy |
| `Space` | hamulce na ziemi |
| `C` | kamera: za samolotem / kokpit |
| `P` | autopilot włącz/wyłącz |
| `R` | reset samolotu |
| `H` | pomoc |

Kliknięcie na minimapę dodaje punkt trasy, prawy klik usuwa ostatni.
Przyciski pod obrazem robią to samo oraz czyszczą trasę i przełączają kamerę.

### Zasady

- Start: dodaj gaz (`Shift`), przy prędkości ok. 35 m/s podciągnij (`S`),
  po oderwaniu się od ziemi schowaj podwozie (`G`).
- Lądowanie: podwozie w dół, klapy (`F`), mała prędkość pionowa (poniżej 4,5 m/s).
  Zbyt twarde lądowanie lub lądowanie bez podwozia kończy się crashem i resetem.
- Paliwo zużywa się wraz z gazem. Po zatrzymaniu na ziemi zbiornik uzupełnia się automatycznie.
- Przy zbyt dużym kącie natarcia pojawia się ostrzeżenie o przeciągnięciu – siła nośna spada.
- Punkty trasy są zaznaczane na minimapie i w 3D (pierścienie wraz z linią trasy).

### Testy fizyki

```bash
node testy-lot.mjs
```

Sprawdzają m.in. start, przeciągnięcie, paliwo, twarde lądowanie, tankowanie
i przejście autopilota po trasie.

## Omijaj przeszkody

Wersje gry, w której zielony samochód omija czerwone pojazdy:

- 3D: http://localhost:8000/gra3d.html
- 2D: http://localhost:8000/gra.html
- pygame: `python3 gra.py` (po `python3 -m pip install -r requirements.txt`)

## Pliki

- `strzelec3d.html`, `strzelec3d.mjs`, `logika-strzelca.mjs`, `testy-strzelca.mjs` – Operacja: Widmo
- `samoloty.html`, `samoloty.mjs`, `fizyka-lotu.mjs`, `testy-lot.mjs` – Samoloty 3D
- `gra3d.html`, `gra3d.mjs`, `logika3d.mjs` – Omijaj przeszkody 3D
- `gra.html`, `gra-browser.js` – Omijaj przeszkody 2D
- `gra.py` – Omijaj przeszkody w pygame
- `lib/three.module.js` – lokalna kopia Three.js r160
- `requirements.txt` – zależności pygame
