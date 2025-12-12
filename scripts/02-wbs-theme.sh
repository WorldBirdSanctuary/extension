#!/usr/bin/env bash
set -e

# Read in the patch directory from the first argument.
PATCH_DIR="$1"
if [ -z "$PATCH_DIR" ]; then
    echo "Error: Patch directory argument is required."
    exit 1
fi

# Add the WBS theme colors to the Tailwind CSS configuration.
git apply --3way "$PATCH_DIR/patches/02-wbs-theme.patch"

# Replace all occurrences of the Alveus theme colors with the WBS theme colors.
sed -i '' 's/alveus-green/wbs-blue/g' $(find src -name '*.tsx' -o -name '*.ts' -o -name '*.css')
sed -i '' 's/alveus-tan/wbs-grey/g' $(find src -name '*.tsx' -o -name '*.ts' -o -name '*.css')
