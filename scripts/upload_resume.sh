#!/bin/bash
set -euo pipefail

root="$(cd "$(dirname "$0")/.." && pwd)"
cd "$root"

while IFS= read -r variant; do
	aws s3 cp \
		"resume/${variant}/Robert_Babaev_resume.pdf" \
		"s3://$DO_SPACES_BUCKET/resumes/${variant}/Robert_Babaev_resume.pdf" \
		--endpoint "https://$DO_SPACES_REGION.digitaloceanspaces.com" \
		--acl public-read
done < <("$root/scripts/list_resume_variants.sh")
