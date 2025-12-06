#!/usr/bin/env bash
set -e

# Read in the patch directory from the first argument.
PATCH_DIR="$1"
if [ -z "$PATCH_DIR" ]; then
    echo "Error: Patch directory argument is required."
    exit 1
fi

# Update the CI workflow to deploy an extension preview.
git apply "$PATCH_DIR/patches/04-github-ci.patch"
