#!/bin/bash
set -e

# Run the OpenNext Cloudflare build
npx opennextjs-cloudflare build

# Copy worker.js to _worker.js for Cloudflare Pages compatibility
cp .open-next/worker.js .open-next/_worker.js

echo "Cloudflare Pages build complete."
