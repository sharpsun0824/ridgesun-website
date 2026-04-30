#!/bin/bash
set -e

# Run the OpenNext Cloudflare build
npx opennextjs-cloudflare build

# Copy worker.js to _worker.js for Cloudflare Pages compatibility
cp .open-next/worker.js .open-next/_worker.js

# Create _routes.json to ensure Pages routes all requests through the worker
cat > .open-next/_routes.json << 'EOF'
{
  "version": 1,
  "include": ["/*"],
  "exclude": []
}
EOF

echo "Cloudflare Pages build complete."
