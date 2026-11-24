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

cp "$SRC/README.md" "$TMP/README.md"

cd "$TMP"
git config user.name "OpenCode"
git config user.email "assistant@opencode.local"
git add -A
if git diff --cached --quiet; then
  echo ">> Brak zmian do zatwierdzenia"
else
  git commit -q -m "Drift Masters 2K26 v1.2: fizyka kołowa w stylu Live For Speed i nowy APK"
fi
git push -q origin HEAD
git remote set-url origin "https://github.com/${REPO}.git"
echo ">> Wypchnięto na https://github.com/${REPO}"
