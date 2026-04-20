# Ridgesun PureRing Design System

## Overview
Industrial-grade design system for Ridgesun PureRing air filtration products. Emphasizes reliability, precision, and technical excellence with a focus on mobile-first industrial applications.

## Design Principles
1. **Industrial Reliability** - Robust, durable, and trustworthy aesthetic
2. **Technical Precision** - Clear data presentation and technical specifications
3. **Mobile-First** - Touch-friendly interfaces for factory floor use
4. **High Contrast** - Readable in various lighting conditions
5. **Performance** - Fast loading for low-bandwidth environments

## Colors
### Primary Palette
- `#0f172a` - Industrial Midnight (Primary)
- `#1e293b` - Slate Steel (Secondary)
- `#2563eb` - Precision Blue (Accent)
- `#dc2626` - Safety Red (Danger/Warning)

### Semantic Colors
- `#059669` - Success Green (Operational)
- `#f59e0b` - Warning Amber (Maintenance)
- `#dc2626` - Danger Red (Critical)
- `#3b82f6` - Info Blue (Information)

### Neutral Scale
- `#f8fafc` - Factory White (Background)
- `#f1f5f9` - Light Steel (Surface)
- `#e2e8f0` - Machine Gray (Border)
- `#64748b` - Industrial Gray (Text Secondary)
- `#0f172a` - Midnight Black (Text Primary)

### Gradients
- Primary Gradient: `linear-gradient(135deg, #1e40af 0%, #2563eb 100%)`
- Success Gradient: `linear-gradient(135deg, #059669 0%, #10b981 100%)`
- Warning Gradient: `linear-gradient(135deg, #d97706 0%, #f59e0b 100%)`

## Typography
### Font Families
- **Display**: `Inter, system-ui, -apple-system, sans-serif` (Bold, technical)
- **Body**: `Inter, system-ui, -apple-system, sans-serif` (Readable, clean)
- **Mono**: `Roboto Mono, monospace` (Technical specifications, code)

### Type Scale
- `text-xs`: 0.75rem (12px) - Labels, captions
- `text-sm`: 0.875rem (14px) - Small text
- `text-base`: 1rem (16px) - Body text
- `text-lg`: 1.125rem (18px) - Enhanced readability
- `text-xl`: 1.25rem (20px) - Subheadings
- `text-2xl`: 1.5rem (24px) - Section headings
- `text-3xl`: 1.875rem (30px) - Page headings
- `text-4xl`: 2.25rem (36px) - Hero text
- `text-5xl`: 3rem (48px) - Large displays

### Font Weights
- `400` - Regular (Body text)
- `500` - Medium (Emphasis)
- `600` - Semibold (Headings)
- `700` - Bold (Important headings)
- `800` - Extrabold (Hero text)

## Spacing
### Scale (8px base)
- `0`: 0px
- `1`: 0.25rem (4px) - Micro spacing
- `2`: 0.5rem (8px) - Element spacing
- `3`: 0.75rem (12px) - Component spacing
- `4`: 1rem (16px) - Default spacing
- `6`: 1.5rem (24px) - Section spacing
- `8`: 2rem (32px) - Large spacing
- `12`: 3rem (48px) - Hero spacing
- `16`: 4rem (64px) - Page spacing

### Container Widths
- `xs`: 20rem (320px) - Mobile
- `sm`: 24rem (384px) - Small screens
- `md`: 28rem (448px) - Medium screens
- `lg`: 32rem (512px) - Large screens
- `xl`: 36rem (576px) - Extra large
- `2xl`: 42rem (672px) - Max content width
- `full`: 100% - Full width

## Components
### Buttons
```html
<!-- Primary Button -->
<button class="bg-industrial-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
  Primary Action
</button>

<!-- Secondary Button -->
<button class="bg-white text-industrial-primary border-2 border-industrial-primary px-6 py-3 rounded-lg font-semibold hover:bg-industrial-primary hover:text-white transition-colors">
  Secondary Action
</button>

<!-- Danger Button -->
<button class="bg-industrial-danger text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
  Critical Action
</button>

<!-- Icon Button -->
<button class="flex items-center justify-center bg-industrial-accent text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
  <svg class="w-5 h-5 mr-2">...</svg>
  Action
</button>
```

### Cards
```html
<!-- Standard Card -->
<div class="bg-white rounded-xl border-2 border-machine-gray p-6 shadow-sm hover:shadow-md transition-shadow">
  <h3 class="text-2xl font-bold text-industrial-primary mb-3">Card Title</h3>
  <p class="text-industrial-gray">Card content with description and details.</p>
</div>

<!-- Feature Card -->
<div class="bg-gradient-to-br from-factory-white to-light-steel rounded-2xl border-2 border-machine-gray p-8">
  <div class="w-12 h-12 bg-precision-blue rounded-xl flex items-center justify-center mb-4">
    <span class="text-white text-xl">⚙️</span>
  </div>
  <h4 class="text-xl font-bold text-industrial-primary mb-2">Feature</h4>
  <p class="text-industrial-gray">Feature description with technical details.</p>
</div>

<!-- Stats Card -->
<div class="bg-industrial-primary text-white rounded-xl p-6">
  <div class="text-3xl font-bold mb-2">99.97%</div>
  <div class="text-factory-white opacity-80">Filtration Efficiency</div>
</div>
```

### Forms
```html
<!-- Form Group -->
<div class="space-y-2">
  <label class="block text-sm font-medium text-industrial-primary">Serial Number</label>
  <input type="text" class="w-full px-4 py-3 border-2 border-machine-gray rounded-lg focus:border-industrial-accent focus:ring-2 focus:ring-blue-200 outline-none transition-colors" placeholder="Enter serial number">
  <p class="text-sm text-industrial-gray">Located on the back of the unit</p>
</div>

<!-- Select -->
<select class="w-full px-4 py-3 border-2 border-machine-gray rounded-lg bg-white focus:border-industrial-accent focus:ring-2 focus:ring-blue-200 outline-none transition-colors">
  <option>Select model</option>
  <option>PureRing 1000</option>
  <option>PureRing 1000ie</option>
</select>

<!-- Checkbox -->
<label class="flex items-center space-x-3">
  <input type="checkbox" class="w-5 h-5 text-industrial-accent rounded border-machine-gray focus:ring-industrial-accent">
  <span class="text-industrial-primary">I agree to terms</span>
</label>
```

### Alerts
```html
<!-- Success Alert -->
<div class="bg-success-green bg-opacity-10 border-l-4 border-success-green p-4 rounded-r">
  <div class="flex items-center">
    <div class="flex-shrink-0 text-success-green">✓</div>
    <div class="ml-3">
      <p class="text-sm text-success-green font-medium">Operation successful</p>
    </div>
  </div>
</div>

<!-- Warning Alert -->
<div class="bg-warning-amber bg-opacity-10 border-l-4 border-warning-amber p-4 rounded-r">
  <div class="flex items-center">
    <div class="flex-shrink-0 text-warning-amber">⚠️</div>
    <div class="ml-3">
      <p class="text-sm text-warning-amber font-medium">Maintenance required</p>
    </div>
  </div>
</div>

<!-- Danger Alert -->
<div class="bg-industrial-danger bg-opacity-10 border-l-4 border-industrial-danger p-4 rounded-r">
  <div class="flex items-center">
    <div class="flex-shrink-0 text-industrial-danger">✗</div>
    <div class="ml-3">
      <p class="text-sm text-industrial-danger font-medium">Critical error detected</p>
    </div>
  </div>
</div>
```

## Layout
### Grid System
```html
<!-- Responsive Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>

<!-- Feature Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <!-- Feature items -->
</div>

<!-- Stats Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
  <!-- Stat items -->
</div>
```

### Container
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Page content -->
</div>
```

### Section Spacing
```html
<section class="py-12 md:py-16 lg:py-20">
  <!-- Section content -->
</section>
```

## Icons
### Icon Sizes
- `w-4 h-4` - Extra small (16px)
- `w-5 h-5` - Small (20px)
- `w-6 h-6` - Medium (24px)
- `w-8 h-8` - Large (32px)
- `w-12 h-12` - Extra large (48px)

### Icon Colors
- Primary: `text-industrial-primary`
- Accent: `text-industrial-accent`
- Success: `text-success-green`
- Warning: `text-warning-amber`
- Danger: `text-industrial-danger`
- Neutral: `text-industrial-gray`

### Common Icons
- ⚙️ Settings/Configuration
- 📊 Analytics/Data
- 🔧 Maintenance/Tools
- ⚡ Power/Energy
- 🏭 Factory/Industrial
- 📱 Mobile/App
- 🔌 Connectivity
- 📋 Documentation

## Motion
### Durations
- `duration-150` - Fast (150ms) - Hover effects
- `duration-300` - Medium (300ms) - Transitions
- `duration-500` - Slow (500ms) - Page transitions

### Transitions
```css
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-colors {
  transition-property: color, background-color, border-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
```

### Animations
```css
@keyframes pulse-industrial {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse-industrial {
  animation: pulse-industrial 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## Accessibility
### Focus States
```css
:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 0.25rem;
}
```

### Contrast Requirements
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum
- Interactive elements: Clear visual feedback

### Screen Reader Support
- Semantic HTML elements
- ARIA labels where needed
- Descriptive alt text for images
- Proper heading hierarchy

## Implementation
### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        industrial: {
          primary: '#0f172a',
          secondary: '#1e293b',
          accent: '#2563eb',
          danger: '#dc2626',
        },
        success: {
          green: '#059669',
        },
        warning: {
          amber: '#f59e0b',
        },
        neutral: {
          background: '#f8fafc',
          surface: '#f1f5f9',
          border: '#e2e8f0',
          text: {
            primary: '#0f172a',
            secondary: '#64748b',
          }
        }
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'industrial-lg': '1.125rem',
        'industrial-xl': '1.25rem',
        'industrial-2xl': '1.5rem',
        'industrial-3xl': '1.875rem',
        'industrial-4xl': '2.25rem',
      }
    }
  }
}
```

### HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ridgesun PureRing | Page Title</title>
  
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'industrial': {
              'primary': '#0f172a',
              'secondary': '#1e293b',
              'accent': '#2563eb',
              'danger': '#dc2626',
            }
          },
          fontFamily: {
            'display': ['Inter', 'system-ui', 'sans-serif'],
            'mono': ['Roboto Mono', 'monospace'],
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet">
  
  <!-- Favicon -->
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏭</text></svg>">
  
  <style>
    /* Custom styles */
  </style>
</head>
<body class="bg-neutral-background text-neutral-text-primary font-body">
  <!-- Page content -->
</body>
</html>
```

## Usage Guidelines
### Do's
- Use high contrast colors for readability
- Maintain consistent spacing
- Use appropriate font weights
- Provide clear visual feedback
- Optimize for mobile touch

### Don'ts
- Don't use light text on light backgrounds
- Don't overcrowd interfaces
- Don't use decorative fonts
- Don't hide important information
- Don't ignore loading states

## Examples
### Landing Page
```html
<section class="bg-industrial-primary text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-industrial-4xl font-bold mb-6">PureRing Industrial Air Filtration</h1>
    <p class="text-xl opacity-90 max-w-2xl mx-auto mb-8">Professional-grade air purification for industrial environments</p>
    <button class="bg-industrial-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
      Get Started
    </button>
  </div>
</section>
```

### Product Card
```html
<div class="bg-white rounded-2xl border-2 border-neutral-border p-8 hover:border-industrial-accent transition-colors">
  <div class="flex items-center justify-between mb-6">
    <h3 class="text-industrial-2xl font-bold text-industrial-primary">PureRing 1000</h3>
    <span class="bg-industrial-accent text-white px-4 py-1 rounded-full text-sm font-medium">STANDARD</span>
  </div>
  <p class="text-neutral-text-secondary mb-6">Robust industrial air filtration system with manual controls</p>
  <div class="space-y-4">
    <div class="flex items-center text-neutral-text-secondary">
      <span class="text-industrial-accent mr-2">✓</span>
      <span>HEPA H13 Filtration</span>
    </div>
    <!-- More features -->
  </div>
</div>
```

## Resources
- **Figma File**: [Link to design file]
- **Icon Library**: [Heroicons, Lucide]
- **Font Files**: [Google Fonts - Inter, Roboto Mono]
- **Color Palette**: [Coolors.co export]
- **Component Library**: [Storybook documentation]

## Version
- **Version**: 1.0.0
- **Last Updated**: 2026-04-20
- **Status**: Active

## Changelog
### v1.0.0 (2026-04-20)
- Initial design system creation
- Industrial color palette defined
- Typography system established
- Component library started
- Mobile-first guidelines added

## Contributing
1. Follow the established design principles
2. Maintain consistency with existing components
3. Test on mobile devices first
4. Ensure accessibility compliance
5. Document all changes

## Testing
### Devices to Test
- iPhone SE (375px)
- iPhone 14 Pro (393px)
- iPad (768px)
- Desktop (1440px)

### Browser Support
- Chrome (latest)
- Safari (latest)
- Firefox (latest)
- Edge (latest)

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## License
This design system is proprietary to Ridgesun Industries. All rights reserved.

---

*Designed for reliability, built for performance.*