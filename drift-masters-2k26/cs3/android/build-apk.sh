#!/usr/bin/env bash
# Buduje podpisany plik APK gry Tactical Strike (WebGL w pełnoekranowym WebView).
# Wymaga: JDK 17, Android SDK platforma android-35 + build-tools 35.0.0, zip.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SDK="${ANDROID_SDK_ROOT:-$HOME/.android-sdk}"
VER="${BUILD_TOOLS_VERSION:-35.0.0}"
PLAT="${ANDROID_PLATFORM:-android-35}"
AJAR="$SDK/platforms/$PLAT/android.jar"

AND="$ROOT/android"
TOOLS="$AND/tools"
BUILD="$AND/build"
OUT="$ROOT/release"
APK="$OUT/CS3-v1.0.apk"
KEYSTORE="$AND/debug.keystore"
MAIN_JAVA="$AND/src/com/tacticalstrike/mobile/MainActivity.java"

fail() {
  echo "BŁĄD: $*" >&2
  exit 1
}

echo ">> Sprawdzanie wymagań"
command -v javac >/dev/null 2>&1 || fail "Brak javac — zainstaluj JDK 17."
command -v keytool >/dev/null 2>&1 || fail "Brak keytool — zainstaluj JDK 17."
command -v zip >/dev/null 2>&1 || fail "Brak polecenia zip."
[ -f "$AJAR" ] || fail "Brak $AJAR. Ustaw ANDROID_SDK_ROOT lub uruchom android/setup-sdk.sh"
for tool in aapt2 d8 zipalign apksigner; do
  [ -x "$TOOLS/$tool" ] || fail "Brak lub nieexecutable wrapper: $TOOLS/$tool"
done
[ -f "$AND/AndroidManifest.xml" ] || fail "Brak $AND/AndroidManifest.xml"
[ -d "$AND/res/values" ] || fail "Brak katalogu $AND/res/values"
[ -f "$AND/res/values/strings.xml" ] || fail "Brak $AND/res/values/strings.xml"
[ -f "$MAIN_JAVA" ] || fail "Brak $MAIN_JAVA"
grep -q 'package="com.tacticalstrike.mobile"' "$AND/AndroidManifest.xml" \
  || fail "Manifest ma zły pakiet — oczekiwano com.tacticalstrike.mobile"
grep -q '^package com.tacticalstrike.mobile;' "$MAIN_JAVA" \
  || fail "$MAIN_JAVA ma zły package — oczekiwano com.tacticalstrike.mobile"
for asset in index.html styles.css game.js; do
  [ -f "$ROOT/dist/$asset" ] || fail "Brak $ROOT/dist/$asset — zbuduj najpierw grę (npm run build)."
done

echo ">> Bundling gry (dist/)"
rm -rf "$BUILD"
mkdir -p "$BUILD/assets" "$BUILD/gen" "$BUILD/classes" "$BUILD/dex" "$OUT"
cp -R "$ROOT"/dist/. "$BUILD/assets/"

echo ">> Zasoby i manifest"
"$TOOLS/aapt2" compile --dir "$AND/res" -o "$BUILD/res.flata"
"$TOOLS/aapt2" link -o "$BUILD/unsigned.apk" -I "$AJAR" \
  --manifest "$AND/AndroidManifest.xml" \
  --java "$BUILD/gen" --min-sdk-version 24 --target-sdk-version 35 \
  "$BUILD/res.flata"

echo ">> Kompilacja Java i DEX"
mapfile -t SOURCES < <(find "$AND/src" "$BUILD/gen" -name '*.java' | sort)
[ "${#SOURCES[@]}" -gt 0 ] || fail "Nie znaleziono plików źródłowych Java."
javac -nowarn -source 8 -target 8 -encoding UTF-8 -classpath "$AJAR" \
  -d "$BUILD/classes" "${SOURCES[@]}"
mapfile -t CLASSES < <(find "$BUILD/classes" -name '*.class' | sort)
[ "${#CLASSES[@]}" -gt 0 ] || fail "javac nie wygenerował żadnych klas."
"$TOOLS/d8" --lib "$AJAR" --min-api 24 --output "$BUILD/dex" "${CLASSES[@]}"
[ -f "$BUILD/dex/classes.dex" ] || fail "d8 nie wygenerował classes.dex"
cp "$BUILD/dex/classes.dex" "$BUILD/classes.dex"

echo ">> Pakowanie APK"
(cd "$BUILD" && zip -q -r unsigned.apk assets)
(cd "$BUILD" && zip -q -j unsigned.apk classes.dex)
"$TOOLS/zipalign" -f -p 4 "$BUILD/unsigned.apk" "$BUILD/aligned.apk"

if [ ! -f "$KEYSTORE" ]; then
  echo ">> Tworzenie klucza debugowego"
  keytool -genkeypair -keystore "$KEYSTORE" -storepass android -keypass android \
    -alias androiddebugkey -dname "CN=Tactical Strike, OU=Mobile, O=TacticalStrike, L=Warszawa, ST=PL, C=PL" \
    -keyalg RSA -keysize 2048 -validity 10000 >/dev/null 2>&1
fi

echo ">> Podpisywanie (v1 + v2)"
"$TOOLS/apksigner" sign --ks "$KEYSTORE" --ks-pass pass:android --key-pass pass:android \
  --v1-signing-enabled true --v2-signing-enabled true \
  --out "$APK" "$BUILD/aligned.apk"
"$TOOLS/apksigner" verify --print-certs "$APK" | head -8

ls -lh "$APK"
echo "GOTOWE: $APK"
