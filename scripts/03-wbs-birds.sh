#!/usr/bin/env bash
set -e

# Read in the patch directory from the first argument.
PATCH_DIR="$1"
if [ -z "$PATCH_DIR" ]; then
    echo "Error: Patch directory argument is required."
    exit 1
fi

# Update the ambassadors hook to load WBS birds.
git apply --3way "$PATCH_DIR/patches/03-wbs-birds.patch"

# Copy across the WBS birds + species data + images.
mkdir -p src/data/
cp -r "$PATCH_DIR/data/"* src/data/
mkdir -p src/assets/birds/
cp -r "$PATCH_DIR/assets/birds/"* src/assets/birds/
