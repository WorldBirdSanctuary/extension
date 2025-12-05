#!/usr/bin/env bash
set -e

# Check we're running from the root of the repository by checking for the src directory.
if [ ! -d "src" ]; then
    echo "Error: This script must be run from the root of the repository."
    exit 1
fi

# Add the upstream remote if it doesn't already exist.
if ! git remote | grep -q upstream; then
    git remote add upstream git@github.com:alveusgg/extension.git
fi

# Reset the repository to match the upstream main branch.
git fetch upstream
git reset --hard upstream/main

# Get the directory this script is located in.
PATCH_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Locate all the bash scripts in the scripts directory.
SCRIPTS=$(find "$PATCH_DIR/scripts" -maxdepth 1 -name '*.sh' | sort)

# Execute each script, from the root of the repository.
for SCRIPT in $SCRIPTS; do
    echo "Running patch: $(basename "$SCRIPT")"
    "$SCRIPT" "$PATCH_DIR"

    # Commit any changes made by the script.
    if [ -n "$(git status --porcelain)" ]; then
        git add --all
        git commit -m "Apply patch: $(basename "$SCRIPT")"
    else
        echo "No changes made by $(basename "$SCRIPT")"
    fi
done
