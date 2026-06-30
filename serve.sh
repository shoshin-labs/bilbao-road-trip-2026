#!/usr/bin/env bash
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HOST="${HOST:-127.0.0.1}"
START_PORT="${1:-8093}"
MAX_PORT="${MAX_PORT:-100}"

pick_port() {
  python3 - "$START_PORT" "$MAX_PORT" <<'PY'
import socket, sys
start = int(sys.argv[1])
limit = int(sys.argv[2])
for port in range(start, start + limit):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.bind(("127.0.0.1", port))
    except OSError:
        continue
    else:
        print(port)
        break
    finally:
        sock.close()
else:
    raise SystemExit(f"No free port found in range {start}-{start + limit - 1}")
PY
}

PORT="$(pick_port)"
echo "Serving $DIR on http://$HOST:$PORT"
exec python3 -m http.server "$PORT" --bind "$HOST" --directory "$DIR"
