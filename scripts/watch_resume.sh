#!/bin/bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

generate() {
	pnpm generate-resume-data
}

generate

cd resume

while IFS= read -r variant; do
	typst watch "${variant}/Robert_Babaev_resume.typ" --root . &
done < <("$root/scripts/list_resume_variants.sh")

if command -v entr >/dev/null 2>&1; then
	cd "$root"
	find config/resume_data.toml config/resume_variants scripts/generate_resume_data.ts src/lib/resume -type f | entr -d bash -c 'pnpm generate-resume-data' &
fi

wait
