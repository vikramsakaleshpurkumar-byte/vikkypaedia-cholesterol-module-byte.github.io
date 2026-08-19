#!/usr/bin/env bash
# Cholesterol MOOC — local server launcher (macOS / Linux)
cd "$(dirname "$0")" || exit 1
PORT=${1:-8080}

LANIP=$(hostname -I 2>/dev/null | awk '{print $1}')
[ -z "$LANIP" ] && LANIP=$(ipconfig getifaddr en0 2>/dev/null)

echo
echo "  Cholesterol: From Molecule to Management"
echo "  Serving on port $PORT"
echo
echo "  On this computer:    http://localhost:$PORT"
[ -n "$LANIP" ] && echo "  On your Wi-Fi / LAN: http://$LANIP:$PORT"
echo "  Self-test page:      http://localhost:$PORT/check.html"
echo
echo "  Ctrl+C to stop."
echo

if   command -v python3 >/dev/null; then exec python3 -m http.server "$PORT"
elif command -v python  >/dev/null; then exec python  -m http.server "$PORT"
elif command -v npx     >/dev/null; then exec npx --yes serve -l "$PORT" .
elif command -v php     >/dev/null; then exec php -S "0.0.0.0:$PORT"
else
  echo "  [!] No server found. Install python3 or node, then rerun."
  exit 1
fi
