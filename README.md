# Ridgesun PureRing Website

Professional industrial air filtration system website for Ridgesun PureRing products.

## 🏭 Project Overview

This is a complete website redesign for Ridgesun PureRing industrial air filtration systems, featuring:

- **Mobile-first design** with optimized QR landing pages
- **Industrial design system** with professional aesthetics
- **Technical product showcases** with detailed specifications
- **Comprehensive support center** to reduce after-sales pressure

## 📁 Repository Structure

```
ridgesun-website/
├── src/
│   ├── go-new.html              # Mobile QR landing page (primary entry point)
│   ├── index-homepage.html      # Brand homepage with engineering excellence showcase
│   ├── products-1000-series.html # Product comparison page (PureRing 1000 series)
│   ├── support-center.html      # Comprehensive support center
│   ├── scripts/
│   │   └── main.js              # Main JavaScript functionality
│   └── styles/
│       └── industrial-design.css # Industrial design system CSS
├── tailwind.config.js           # Tailwind CSS configuration
└── *.md                         # Documentation files
```

## 🎨 Design System

### Key Features
- **Industrial Color Palette**: Deep blues, grays, and safety colors
- **Mobile-First Approach**: Touch-optimized interfaces (≥44×44px touch targets)
- **Performance Optimized**: Fast loading (<2s on mobile)
- **Accessibility Compliant**: WCAG 2.1 AA standards
- **Responsive Design**: Works on all devices from mobile to desktop

### Core Pages
1. **QR Landing Page (`/go`)**: Simplified mobile-first page for QR code scanning
2. **Brand Homepage**: Showcases 20+ years of engineering excellence
3. **Product Pages**: Detailed technical specifications and comparisons
4. **Support Center**: Self-service portal to reduce support requests

## 🚀 Deployment

The website is designed for deployment on **Cloudflare Pages**:

1. Connect this repository to Cloudflare Pages
2. Set build command: (none - static HTML)
3. Set output directory: `ridgesun-website/src/`
4. Deploy!

## 📚 Documentation

- `NEW_DESIGN_SUMMARY.md` - Complete design overview and implementation details
- `DESIGN_DELIVERY_SUMMARY.md` - Project delivery summary
- `DESIGN_DECISIONS.md` - Key design decisions and rationale
- `DEPLOYMENT_CHECKLIST.md` - Step-by-step deployment guide
- `MOBILE_TEST_REPORT.md` - Mobile compatibility test results
- `WEBSITE_PLAN.md` - Overall development plan
- `cloudflare-config.md` - Cloudflare Pages configuration guide

## 🛠️ Technology Stack

- **HTML5**: Semantic markup with ARIA attributes
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: Lightweight interactivity
- **Cloudflare Pages**: Global CDN hosting

## 📱 Mobile Optimization

- Touch-friendly interfaces (≥44×44px targets)
- Fast loading (<2s on 3G)
- Simplified navigation for QR landing pages
- Responsive images and layouts

## 🔧 Development

To work with this project locally:

1. Clone the repository
2. Open HTML files in a browser
3. For CSS changes, edit `industrial-design.css`
4. For configuration changes, edit `tailwind.config.js`

## 📄 License

Proprietary - All rights reserved by Ridgesun.