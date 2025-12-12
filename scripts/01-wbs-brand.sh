#!/usr/bin/env bash
set -e

# Read in the patch directory from the first argument.
PATCH_DIR="$1"
if [ -z "$PATCH_DIR" ]; then
    echo "Error: Patch directory argument is required."
    exit 1
fi

# Update the extension branding to World Bird Sanctuary (WBS).
git apply --3way "$PATCH_DIR/patches/01-wbs-brand.patch"

# Remove the Alveus logo
rm src/assets/alveus.png

# Copy in the WBS logo
cp "$PATCH_DIR/assets/wbs.png" src/assets/wbs.png
