#!/usr/bin/env bash
# Wrzuca grę do repozytorium GitHub (domyślnie FastJarek/Stretto-Forza2K26).
# Użycie:  GITHUB_TOKEN=ghp_xxx bash scripts/push-to-github.sh
# Opcjonalnie: GITHUB_REPO=login/nazwa bash scripts/push-to-github.sh
set -euo pipefail

TOKEN="${GITHUB_TOKEN:-${1:-}}"
REPO="${GITHUB_REPO:-FastJarek/Stretto-Forza2K26}"
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
TMP="${PUSH_WORKDIR:-/tmp/opencode/dm-github-push}"

if [ -z "$TOKEN" ]; then
  echo "Użycie: GITHUB_TOKEN=ghp_xxx bash scripts/push-to-github.sh" >&2
  exit 1
fi

rm -rf "$TMP"
echo ">> Klonowanie $REPO"
git clone -q "https://x-access-token:${TOKEN}@github.com/${REPO}.git" "$TMP"

echo ">> Kopiowanie gry"
mkdir -p "$TMP/drift-masters-2k26"
tar --exclude=node_modules --exclude=android/build --exclude='*.idsig' \
  --exclude=payload.json --exclude=result.json \
  -C "$SRC/drift-masters-2k26" -cf - . | tar -C "$TMP/drift-masters-2k26" -xf -

if [ -f "$TMP/README.md" ]; then
  cat >> "$TMP/README.md" <<'EOF'

## Drift Masters 2K26

Gra wyścigowo-driftingowa 3D w stylu Assetto Corsa: Skipad, Bihoku, Tor Poznań,
Suzuka, free roam, ocena Meyer, 6 aut, setup i tuning.
Sterowanie: dotyk / żyroskop / klawiatura + mysz.
Gotowy APK: `drift-masters-2k26/release/DriftMasters2K26-v1.0.apk`.
[Szczegóły i instrukcja budowy](drift-masters-2k26/README.md).
EOF
else
  cp "$SRC/README.md" "$TMP/README.md"
fi

cd "$TMP"
git config user.name "OpenCode"
git config user.email "assistant@opencode.local"
git add -A
if git diff --cached --quiet; then
  echo ">> Brak zmian do zatwierdzenia"
else
  git commit -q -m "Drift Masters 2K26: skipad/bihoku, Tor Poznań/Suzuka, free roam, setupy, żyroskop i APK"
fi
git push -q origin HEAD
git remote set-url origin "https://github.com/${REPO}.git"
echo ">> Wypchnięto na https://github.com/${REPO}"
