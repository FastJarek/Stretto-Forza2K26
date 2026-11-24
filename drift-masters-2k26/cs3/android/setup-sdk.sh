#!/usr/bin/env bash
# Pobiera minimalny Android SDK potrzebny do zbudowania APK (platforma 35 + build-tools 35).
set -euo pipefail
SDK="${ANDROID_SDK_ROOT:-$HOME/.android-sdk}"
TMP="$(mktemp -d)"

if [ ! -f "$SDK/platforms/android-35/android.jar" ]; then
  echo ">> Pobieranie platformy Android 35"
  curl -fL --retry 2 -o "$TMP/platform.zip" https://dl.google.com/android/repository/platform-35_r02.zip
  mkdir -p "$SDK/platforms"
  unzip -q -o "$TMP/platform.zip" -d "$TMP/platform"
  mv "$TMP/platform/android-35" "$SDK/platforms/android-35"
fi

if [ ! -f "$SDK/build-tools/35.0.0/aapt2" ]; then
  echo ">> Pobieranie build-tools 35.0.0"
  curl -fL --retry 2 -o "$TMP/build-tools.zip" https://dl.google.com/android/repository/build-tools_r35_linux.zip
  mkdir -p "$SDK/build-tools"
  unzip -q -o "$TMP/build-tools.zip" -d "$TMP/bt"
  mv "$TMP/bt/android-15" "$SDK/build-tools/35.0.0"
fi

if [ "$(uname -m)" != "x86_64" ] && ! command -v qemu-x86_64-static >/dev/null 2>&1; then
  echo ">> Instalacja qemu (natywne narzędzia SDK są x86_64)"
  DEBIAN_FRONTEND=noninteractive apt-get update -qq
  DEBIAN_FRONTEND=noninteractive apt-get install -y -qq \
    openjdk-17-jdk-headless qemu-user-static libc6-amd64-cross libstdc++6-amd64-cross libgcc-s1-amd64-cross
fi

rm -rf "$TMP"
echo "SDK gotowe w $SDK"
