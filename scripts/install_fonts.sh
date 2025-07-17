#!/bin/bash
set -euxo pipefail

PROJECT_ROOT=$PWD
cd $(mktemp -d /tmp/script.XXXXXXX)
TEMP_DIR=$PWD

# Install Source Sans Pro (not available in Ubuntu repos)
cp $PROJECT_ROOT/assets/source_sans_pro.zip .
unzip source_sans_pro.zip
mkdir -p /usr/share/fonts/opentype/source-sans-pro
cp source-sans-2.020R-ro-1.075R-it/OTF/*.otf /usr/share/fonts/opentype/source-sans-pro
rm -rf ./*

# Install Source Sans 3 (not available in Ubuntu repos)
cp $PROJECT_ROOT/assets/Source_Sans_3.zip .
unzip Source_Sans_3.zip
mkdir -p /usr/share/fonts/truetype/source-sans-3
cp *.ttf static/*.ttf /usr/share/fonts/truetype/source-sans-3/
rm -rf ./*

# Install FontAwesome 6
cp $PROJECT_ROOT/assets/fontawesome-free-6.7.2-desktop.zip .
unzip fontawesome-free-6.7.2-desktop.zip
mkdir -p /usr/share/fonts/opentype/fontawesome-6
cp fontawesome-free-6.7.2-desktop/otfs/*.otf /usr/share/fonts/opentype/fontawesome-6
rm -rf ./*

# Reload font cache
fc-cache -f -v

cd ~
rm -rf $TEMP_DIR
