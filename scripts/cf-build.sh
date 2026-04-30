#!/bin/bash
set -e

# Run the OpenNext Cloudflare build
npx opennextjs-cloudflare build

# Do NOT copy to _worker.js - this will be deployed as a Worker via wrangler deploy
# The wrangler.jsonc contains the Workers config with main, assets, etc.

echo "Build complete. Ready for wrangler deploy."
