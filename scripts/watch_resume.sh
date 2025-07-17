#!/bin/bash
set -euo pipefail

cd resume

typst watch dev/Robert_Babaev_resume.typ --root .

cd ..
