#!/bin/bash
set -euxo pipefail

cd resume

typst compile dev/Robert_Babaev_resume.typ --root .
typst compile devops/Robert_Babaev_resume.typ --root .

cd ..
