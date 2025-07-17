#!/bin/bash
set -euxo pipefail

aws configure set aws_access_key_id $DO_SPACES_ACCESS_KEY
aws configure set aws_secret_access_key $DO_SPACES_SECRET_KEY
aws configure set default.region $DO_SPACES_REGION

aws s3 cp \
  resume/dev/Robert_Babaev_resume.pdf \
  s3://$DO_SPACES_BUCKET/resumes/dev/Robert_Babaev_resume.pdf \
  --endpoint https://$DO_SPACES_REGION.digitaloceanspaces.com \
  --acl public-read
