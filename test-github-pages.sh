#!/bin/bash

# Test script to simulate GitHub Pages locally
# This serves the dist/ directory with the correct base path structure

echo "🚀 Starting local GitHub Pages simulation..."
echo ""
echo "Creating temporary directory structure to simulate GitHub Pages..."

# Create a temporary directory with the GitHub Pages structure
TEMP_DIR=$(mktemp -d)
mkdir -p "$TEMP_DIR/ZuoGuoHuaDiao"

# Copy the dist contents into the subdirectory
cp -r dist/* "$TEMP_DIR/ZuoGuoHuaDiao/"

echo "✅ Temporary directory created at: $TEMP_DIR"
echo ""
echo "📂 Directory structure:"
echo "$TEMP_DIR/"
echo "└── ZuoGuoHuaDiao/"
echo "    ├── index.html"
echo "    ├── assets/"
echo "    └── ..."
echo ""
echo "🌐 Starting server on http://localhost:9999"
echo ""
echo "Access your site at:"
echo "  👉 http://localhost:9999/ZuoGuoHuaDiao/"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the server
npx serve "$TEMP_DIR" -l 9999

# Cleanup on exit
echo ""
echo "🧹 Cleaning up temporary directory..."
rm -rf "$TEMP_DIR"
echo "✅ Done!"
