#!/usr/bin/env bash
# Buduje podpisany plik APK gry Drift Masters 2K26.
# Wymaga: JDK 17, Android SDK platform 35 + build-tools 35.0.0, zip.
# Na urządzeniach ARM wymagane jest qemu-user-static oraz libc6-amd64-cross.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SDK="${ANDROID_SDK_ROOT:-$HOME/.android-sdk}"
VER="${BUILD_TOOLS_VERSION:-35.0.0}"
PLAT="${ANDROID_PLATFORM:-android-35}"
AJAR="$SDK/platforms/$PLAT/android.jar"
TOOLS="$ROOT/android/tools"
BUILD="$ROOT/android/build"
OUT="$ROOT/release"
APK="$OUT/DriftMasters2K26-v1.0.apk"
KEYSTORE="$ROOT/android/debug.keystore"

if [ ! -f "$AJAR" ]; then
  echo "Brak $AJAR. Ustaw ANDROID_SDK_ROOT lub uruchom android/setup-sdk.sh" >&2
  exit 1
fi

echo ">> Bundling gry (dist/)"
(cd "$ROOT" && npm run build >/dev/null)

rm -rf "$BUILD"
mkdir -p "$BUILD/assets" "$BUILD/gen" "$BUILD/classes" "$BUILD/dex" "$OUT"
cp "$ROOT"/dist/* "$BUILD/assets/"

echo ">> Zasoby i manifest"
"$TOOLS/aapt2" compile --dir "$ROOT/android/res" -o "$BUILD/res.flata"
"$TOOLS/aapt2" link -o "$BUILD/unsigned.apk" -I "$AJAR" \
  --manifest "$ROOT/android/AndroidManifest.xml" \
  --java "$BUILD/gen" --min-sdk-version 24 --target-sdk-version 35 \
  "$BUILD/res.flata"

echo ">> Kompilacja Java i DEX"
mapfile -t SOURCES < <(find "$ROOT/android/src" "$BUILD/gen" -name '*.java')
javac -source 8 -target 8 -encoding UTF-8 -classpath "$AJAR" -d "$BUILD/classes" "${SOURCES[@]}" 2>/dev/null
mapfile -t CLASSES < <(find "$BUILD/classes" -name '*.class')
"$TOOLS/d8" --lib "$AJAR" --min-api 24 --output "$BUILD/dex" "${CLASSES[@]}"
cp "$BUILD/dex/classes.dex" "$BUILD/classes.dex"

echo ">> Pakowanie APK"
(cd "$BUILD" && zip -q -r unsigned.apk assets)
(cd "$BUILD" && zip -q -j unsigned.apk classes.dex)
"$TOOLS/zipalign" -f -p 4 "$BUILD/unsigned.apk" "$BUILD/aligned.apk"

if [ ! -f "$KEYSTORE" ]; then
  echo ">> Tworzenie klucza debugowego"
  keytool -genkeypair -keystore "$KEYSTORE" -storepass android -keypass android \
    -alias androiddebugkey -dname "CN=Drift Masters 2K26, OU=Mobile, O=DM2K26, L=Warszawa, ST=PL, C=PL" \
    -keyalg RSA -keysize 2048 -validity 10000 >/dev/null 2>&1
fi

echo ">> Podpisywanie"
"$TOOLS/apksigner" sign --ks "$KEYSTORE" --ks-pass pass:android --key-pass pass:android \
  --v1-signing-enabled true --v2-signing-enabled true \
  --out "$APK" "$BUILD/aligned.apk"
"$TOOLS/apksigner" verify --print-certs "$APK" | head -8

ls -lh "$APK"
echo "GOTOWE: $APK"
