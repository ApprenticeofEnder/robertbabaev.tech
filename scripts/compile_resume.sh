#!/bin/bash
set -euxo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

pnpm generate-resume-data

cd resume

while IFS= read -r variant; do
	typst compile "${variant}/Robert_Babaev_resume.typ" --root .
done < <("$root/scripts/list_resume_variants.sh")
