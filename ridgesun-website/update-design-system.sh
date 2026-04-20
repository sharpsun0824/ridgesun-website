#!/bin/bash

# Update all HTML files to use the new design system

echo "Updating HTML files with new design system..."

# Function to update a single HTML file
update_html_file() {
    local file="$1"
    echo "Updating $file..."
    
    # Create backup
    cp "$file" "$file.backup"
    
    # Update Tailwind config reference
    sed -i '' 's|<script src="https://cdn.tailwindcss.com"></script>|<script src="https://cdn.tailwindcss.com"></script>\n    <script>\n        tailwind.config = {\n            theme: {\n                extend: {\n                    colors: {\n                        \"industrial\": {\n                            \"primary\": \"#0f172a\",\n                            \"secondary\": \"#1e293b\",\n                            \"accent\": \"#2563eb\",\n                            \"danger\": \"#dc2626\",\n                        },\n                        \"success\": {\n                            \"green\": \"#059669\",\n                        },\n                        \"warning\": {\n                            \"amber\": \"#f59e0b\",\n                        },\n                        \"neutral\": {\n                            \"background\": \"#f8fafc\",\n                            \"surface\": \"#f1f5f9\",\n                            \"border\": \"#e2e8f0\",\n                            \"text\": {\n                                \"primary\": \"#0f172a\",\n                                \"secondary\": \"#64748b\",\n                            }\n                        }\n                    },\n                    fontFamily: {\n                        \"display\": [\"Inter\", \"system-ui\", \"sans-serif\"],\n                        \"body\": [\"Inter\", \"system-ui\", \"sans-serif\"],\n                        \"mono\": [\"Roboto Mono\", \"monospace\"],\n                    },\n                    fontSize: {\n                        \"industrial-lg\": \"1.125rem\",\n                        \"industrial-xl\": \"1.25rem\",\n                        \"industrial-2xl\": \"1.5rem\",\n                        \"industrial-3xl\": \"1.875rem\",\n                        \"industrial-4xl\": \"2.25rem\",\n                    }\n                }\n            }\n        }\n    </script>|' "$file"
    
    # Add shared CSS link
    sed -i '' 's|</head>|    <link rel="stylesheet" href="/styles/industrial.css">\n</head>|' "$file"
    
    # Update body classes
    sed -i '' 's|class="[^"]*"|class="bg-neutral-background text-neutral-text-primary font-body"|' "$file" 2>/dev/null || true
    
    echo "  ✓ $file updated"
}

# Update all HTML files in src directory
for html_file in src/*.html; do
    if [ -f "$html_file" ]; then
        update_html_file "$html_file"
    fi
done

echo ""
echo "Design system update complete!"
echo ""
echo "Summary of changes:"
echo "1. Added unified Tailwind configuration"
echo "2. Added shared industrial.css stylesheet"
echo "3. Updated body classes for consistency"
echo "4. Created backups of original files (.backup)"
echo ""
echo "Next steps:"
echo "1. Test all pages locally"
echo "2. Check mobile responsiveness"
echo "3. Verify accessibility"
echo "4. Deploy to Cloudflare Pages"