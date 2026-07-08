#!/usr/bin/env bash
# Run commands in devenv shell with retry for Nix GC race conditions.
# GitHub Actions: defaults.run.shell: ./scripts/devenv-ci.sh {0}
#
# Workaround for NixOS/nix#15469 until Nix 2.35+ is available in CI.
# @see https://github.com/cachix/devenv/issues/2729

set -uo pipefail

# #region agent log
_debug_log() {
  local message="$1" hypothesis_id="$2" data_json="$3"
  if [[ -n "${DEBUG_SESSION_ID:-}" && -n "${DEBUG_LOG_ENDPOINT:-}" ]]; then
    curl -sf "${DEBUG_LOG_ENDPOINT}" \
      -X POST \
      -H 'Content-Type: application/json' \
      -H "X-Debug-Session-Id: ${DEBUG_SESSION_ID}" \
      -d "{\"sessionId\":\"${DEBUG_SESSION_ID}\",\"location\":\"scripts/devenv-ci.sh\",\"message\":\"${message}\",\"data\":${data_json},\"timestamp\":$(date +%s000),\"hypothesisId\":\"${hypothesis_id}\"}" \
      >/dev/null 2>&1 || true
  fi
}
# #endregion

is_gc_race_error() {
  grep -qE "error: path '/nix/store/[^']+' is not valid" "$1" 2>/dev/null
}

extract_missing_path() {
  grep -oE "path '/nix/store/[^']+'" "$1" 2>/dev/null | head -1 | sed "s/path '\\(.*\\)'/\\1/"
}

with_gc_race_retry() {
  local max="${NIX_GC_RACE_MAX_RETRIES:-10}" attempt=1 log rc missing_path
  while [[ "$attempt" -le "$max" ]]; do
    log=$(mktemp)
    set +e
    "$@" 2> >(tee "$log" >&2)
    rc=$?
    set -e
    if [[ $rc -eq 0 ]]; then
      rm -f "$log"
      # #region agent log
      _debug_log "command succeeded" "A" "{\"attempt\":${attempt}}"
      # #endregion
      return 0
    fi
    if ! is_gc_race_error "$log"; then
      # #region agent log
      _debug_log "non-GC error" "E" "{\"attempt\":${attempt},\"exitCode\":${rc}}"
      # #endregion
      rm -f "$log"
      return "$rc"
    fi
    missing_path=$(extract_missing_path "$log")
    rm -f "$log"
    # #region agent log
    _debug_log "GC race detected" "A" "{\"attempt\":${attempt},\"missingPath\":\"${missing_path}\"}"
    # #endregion
    echo "::warning::Nix GC race detected (attempt ${attempt}/${max}): ${missing_path:-unknown path}" >&2
    if [[ -n "$missing_path" ]]; then
      nix-store --realise "$missing_path" 2>/dev/null || true
    fi
    rm -rf "${XDG_CACHE_HOME:-$HOME/.cache}"/nix/eval-cache-* 2>/dev/null || true
    attempt=$((attempt + 1))
  done
  echo "::error::Nix GC race retry exhausted (${max} attempts)" >&2
  # #region agent log
  _debug_log "retry exhausted" "A" "{\"maxRetries\":${max}}"
  # #endregion
  return 1
}

if [[ "${DEVENV_CI_LIB_ONLY:-}" != "1" ]]; then
  if [[ $# -lt 1 ]]; then
    echo "usage: $0 <github-actions-step-script>" >&2
    exit 2
  fi

  with_gc_race_retry devenv shell bash -- -e "$1"
fi
