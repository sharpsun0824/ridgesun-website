# Ridgesun PureRing Website

Professional industrial air filtration system website for Ridgesun PureRing products.

## 🚀 Quick Deployment to Cloudflare Pages

1. **Go to Cloudflare Dashboard** → Pages → Create project
2. **Connect to Git** → Select this repository
3. **Configure build settings**:
   - Build command: (leave empty)
   - Build output directory: `ridgesun-website/src`
4. **Click "Save and Deploy"**

## 📁 Website Structure

```
ridgesun-website/src/
├── index.html              # Homepage
├── go.html                # QR landing page
├── products.html          # Products overview (redirects to 1000 series)
├── products-1000-series.html # PureRing 1000 series details
├── support.html           # Support overview (redirects to support center)
├── support-center.html    # Full support center
├── contact.html           # Contact information
├── blog.html              # Blog & resources
├── about.html             # About us
├── 404.html              # Error page
├── styles/
│   └── industrial-design.css # Design system
└── scripts/
    └── main.js           # JavaScript functionality
```

## 🌐 URL Routes

- `/` → `index.html` (Homepage)
- `/go` → `go.html` (QR landing page)
- `/products` → `products.html` → `products-1000-series.html`
- `/support` → `support.html` → `support-center.html`
- `/contact` → `contact.html`
- `/blog` → `blog.html`
- `/about` → `about.html`
- Any other route → `404.html`

## 🎯 Core Features

- **Mobile-first design** with QR-optimized landing page
- **Industrial design system** for professional appearance
- **Complete product showcase** with technical specifications
- **Comprehensive support center** to reduce customer service load
- **Responsive design** works on all devices

## 📱 Mobile Optimization

- Touch-friendly buttons (≥44×44px)
- Fast loading performance
- Simplified navigation for mobile users
- QR code scanning optimized interface

## 🔧 Local Development

Simply open any HTML file in your browser. No build process required.

## 📄 License

Proprietary - All rights reserved by Ridgesun.