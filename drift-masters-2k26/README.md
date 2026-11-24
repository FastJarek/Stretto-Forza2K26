# Drift Masters 2K26

Gra wyścigowa/driftowa 3D na Androida i do przeglądarki, w klimacie Assetto Corsa:
własna fizyka jazdy z poślizgiem bocznym, ocena driftu „Meyer”, trzy tryby gry,
stawki aut, szczegółowy setup samochodu oraz trzy sposoby sterowania.

Wersja 1.1 przestylizowana została na realistyczną oprawę Assetto Corsa:
dzienne niebo, oświetlenie słoneczne z cieniami, asfalt z teksturą, czerwono-białe
krawężniki, drzewa/budynki przy torze, dopracowane nadwozia oraz minimalistyczny
HUD z wskaźnikami gazu i hamulca.

## Gotowy plik APK

- [`release/DriftMasters2K26-v1.1.apk`](release/DriftMasters2K26-v1.1.apk) — podpisany, wersja 1.1 z realistyczną oprawą w stylu Assetto Corsa (`com.driftmasters2k26`, Android 7.0 / API 24+).
- Po skopiowaniu na telefon zainstaluj plik, zezwalając na instalację z nieznanych źródeł.
- Podpisano kluczem debugowym (`android/debug.keystore`); do Google Play wygeneruj własny klucz release.

## Tryby i trasy

| Tryb | Trasy |
| --- | --- |
| **Trening** | Skipad, Bihoku, Pętla Startowa, Slalom Miejski |
| **Wyścig** | Tor Poznań, Suzuka (bramki w kolejności, 2 okrążenia, medale za czas) |
| **Drift / Free roam** | Strefa Przemysłowa, Górska Przełęcz, Port Nocą (bez bramek i limitu czasu) |

## Samochody

- **Drift:** Toyota AE86, BMW E36, Nissan S13.
- **Wyścig:** BMW E60, Mazda Miata, Gokart.

Każde auto ma własną masę, moc, przyczepność osi, kąt skrętu i tendencję do driftu.
W garażu dostępne są: kolor, felgi, spoiler, neon, ulepszenia oraz indywidualny
setup zapisywany osobno dla każdego auta:

- silnik (mapa mocy),
- kąt skrętu przednich kół,
- przełożenie końcowe,
- przyczepność przód / tył,
- rozkład hamowania,
- zawieszenie,
- blokada dyferencjału,
- skrzynia automatyczna lub manualna.

Wszystkie suwaki realnie zmieniają parametry modelu jazdy (siły opon, moment,
prędkość maksymalną, hamowanie i reakcję na sterowanie).

## Sterowanie

| Dotyk / żyroskop | Klawiatura i mysz |
| --- | --- |
| Pole po lewej — kierownica (tryb dotyk) | `A` / `D` lub `←` / `→` — kierownica |
| Przechył telefonu — kierownica (żyroskop, kalibracja w ustawieniach) | `W` gaz, `S` hamulec / bieg wsteczny |
| Przyciski `GAZ`, `HAM`, `RĘCZNY`, `NOS`, `SPRZĘGŁO` | `Spacja` hamulec ręczny, `Shift` nitro |
| Przyciski `Q+` / `E−` — biegi | `Q` bieg +, `E` bieg −, `C` sprzęgło |
| Przycisk `II` — pauza | `Tab` widok kamery, `R` reset do linii startu, `Esc` menu |

Myszą obsługujesz menu, ustawienia i wybory. Dodatkowo w trybie klawiatura + mysz
przytrzymanie LPM na obrazie i przeciągnięcie steruje kierownicą.
Na Androidzie klawiatura i mysz (USB-C/Bluetooth) działają w WebView.
Przycisk Wstecz urządzenia otwiera pauzę lub wraca do menu.

## Ustawienia

- sterowanie: dotyk / żyroskop / klawiatura + mysz,
- czułość sterowania i żyroskopu, odwrócenie kierownicy/żyroskopu,
- kamera: za autem / kokpit / zderzak, dystans, wysokość, FOV,
- grafika: jakość, cienie, dym i ślady, zasięg, skala rozdzielczości,
- dźwięk: głośność główna, silnik, efekty (synteza Web Audio, bez plików audio).

## Punktacja driftu

Punkty rosną z prędkości i kąta poślizgu (14°–65°), a mnożnik `combo` z czasu
ciągłego poślizgu. HUD pokazuje kąt, przyrost punktów i ocenę:
`LEKKI POŚLIZG`, `DRIFT`, `DUŻY KĄT`, `MEYER!`, a po dłuższym poślizgu `MEYER! 🔥`.
Wyniki i medale zapisują się lokalnie; za przejazdy dostajesz kredyty na tuning.

## Uruchomienie w przeglądarce

```bash
python3 -m http.server 8000
```

Otwórz `http://localhost:8000/drift-masters-2k26/dist/` (katalog `dist/` zawiera
gotową wersję gry: `index.html`, `styles.css`, `game.js`).

## Budowa od źródła

```bash
npm install          # esbuild (tylko do złożenia plików)
npm test             # testy logiki (fizyka, trasy, samochody, setup, punktacja)
npm run build        # dist/index.html + dist/game.js

android/setup-sdk.sh             # pobiera Android SDK 35 + build-tools 35 (jeśli brak)
ANDROID_SDK_ROOT=$HOME/.android-sdk android/build-apk.sh
```

Wynik: `release/DriftMasters2K26-v1.1.apk`.
Na ARM build-tools Google są binarniami x86_64 — skrypt używa wtedy
`qemu-x86_64-static` z sysrootem `/usr/x86_64-linux-gnu`.

## Struktura

- `src/core.js` — zapis, trasy, samochody, fizyka, setup, punktacja (czysty JS, testowalny w Node).
- `src/world.js` — scena 3D, trasy, sylwetki aut, efekty, kamery, minimapa (Three.js).
- `src/game.js` — interfejs, wejście (dotyk/żyroskop/klawiatura/mysz), pętla gry.
- `src/audio.js` — synteza dźwięku.
- `src/index.template.html`, `src/styles.css` — interfejs w stylu AC.
- `scripts/build.mjs` — bundlowanie esbuild.
- `android/` — powłoka WebView, manifest, skrypty budowy APK.
- `tests/core.test.mjs` — testy logiki.

Licencja Three.js: MIT (plik `src/lib/three.module.js`, revision 160).
