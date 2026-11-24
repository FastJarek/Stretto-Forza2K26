# CS3 Tactical Strike — powłoka Android

Pełnoekranowa powłoka WebView ładująca grę z `file:///android_asset/index.html`.
Pakiet: `com.tacticalstrike.mobile`, wersja `1.0` (versionCode 1), minSdk 24, targetSdk 35.

## Budowa

1. Zbuduj grę w katalogu głównym projektu, aby powstały `dist/index.html`,
   `dist/styles.css` i `dist/game.js` (np. `npm run build`).
2. Uruchom `./android/build-apk.sh` z katalogu głównego projektu.
3. Wynik: `release/CS3-v1.0.apk` (podpisany, v1+v2).

Wymagania: JDK 17, Android SDK w `~/.android-sdk` (platforma `android-35`,
build-tools `35.0.0`) oraz `zip`. Skrypt `android/setup-sdk.sh` może pobrać
brakujące elementy SDK. Skrypt jest odporny na brak plików — wypisuje jasny
błąd po polsku. Nie uruchamia `npm` samodzielnie.

`android/debug.keystore` to klucz debugowy CS3 (hasło `android`, alias
`androiddebugkey`, CN=`CS3 Tactical Strike`). **Tylko do debugowania — nie
publikuj tego klucza.** Jeśli plik zniknie, skrypt wygeneruje nowy klucz.

Narzędzia w `android/tools/` to wrappery wywołujące binaria z
`$ANDROID_SDK_ROOT/build-tools/35.0.0` (na ARM przez qemu, jeśli dostępne).

## Mostek myszy / klawiatury

`MainActivity.dispatchTouchEvent()` i `dispatchGenericMotionEvent()` wykrywają
uroszenia z `InputDevice.SOURCE_MOUSE` (także `SOURCE_MOUSE_RELATIVE`) i
konsumują je, aby WebView nie podwajał zdarzeń JS:

| Zdarzenie Androida | Wywołanie JS |
| --- | --- |
| `ACTION_MOVE` / `ACTION_HOVER_MOVE` | `window.__nativeLook(dx, dy)` — delta od ostatniej pozycji kursora |
| `ACTION_DOWN`, `ACTION_UP`, `ACTION_BUTTON_PRESS`, `ACTION_BUTTON_RELEASE` | `window.__nativeMouse(button, down)`, gdzie `button`: 0=lewy, 1=prawy, 2=środkowy |
| `ACTION_SCROLL` | `window.__nativeWheel(axisVScroll)` |

Klawiatura fizyczna nie jest przechwytywana — WebView dostaje keydown/keyup
bezpośrednio. Przycisk BACK wywołuje `window.tsBack()` zamiast zamykać
aktywność (`onBackPressed()` + `OnBackInvokedCallback` na API 33+).

Gra powinna zdefiniować `window.__nativeLook`, `window.__nativeMouse`,
`window.__nativeWheel` i `window.tsBack`; wywołania są zabezpieczone
sprawdzeniem istnienia funkcji.
