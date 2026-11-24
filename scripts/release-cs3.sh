#!/usr/bin/env bash
# Publikuje wydanie CS3 v1.0 w repozytorium Stretto-Forza2K26.
# Wymaga: gh zalogowanego (gh auth login) oraz remote origin.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TAG="cs3-v1.0"
APK="$ROOT/drift-masters-2k26/release/CS3-v1.0.apk"
if [ ! -f "$APK" ]; then
  APK="$ROOT/drift-masters-2k26/cs3/release/CS3-v1.0.apk"
fi
NOTES="$ROOT/RELEASE-CS3.md"

if ! command -v gh >/dev/null 2>&1; then
  echo "Brak GitHub CLI. Zainstaluj gh i uruchom 'gh auth login'." >&2
  exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
  echo "Nie jesteś zalogowany do GitHub. Uruchom 'gh auth login'." >&2
  exit 1
fi
if [ ! -f "$APK" ]; then
  echo "Brak pliku $APK" >&2
  exit 1
fi
if ! git -C "$ROOT" remote get-url origin >/dev/null 2>&1; then
  echo "Brak remote origin." >&2
  exit 1
fi

echo ">> Wypychanie tagu $TAG"
git -C "$ROOT" push origin "$TAG" || true

if gh release view "$TAG" >/dev/null 2>&1; then
  echo ">> Wydanie $TAG istnieje – dodaję/aktualizuję asset"
  gh release upload "$TAG" "$APK" --clobber
else
  echo ">> Tworzenie wydania $TAG"
  gh release create "$TAG" "$APK" \
    --title "CS3 v1.0 — Tactical Strike" \
    --notes-file "$NOTES"
fi

echo "GOTOWE: https://github.com/FastJarek/Stretto-Forza2K26/releases/tag/$TAG"
