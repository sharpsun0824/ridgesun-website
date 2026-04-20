# DESIGN.md 模板参考

基于VoltAgent/awesome-design-md项目的格式，以下是设计系统的基本结构：

## 基本结构

```markdown
# [品牌名称] Design System

## Overview
[品牌介绍和设计理念]

## Colors
### Primary
- `#xxxxxx` - 主色
- `#xxxxxx` - 辅助色

### Semantic
- `#xxxxxx` - Success
- `#xxxxxx` - Warning
- `#xxxxxx` - Error
- `#xxxxxx` - Info

### Neutrals
- `#xxxxxx` - Background
- `#xxxxxx` - Surface
- `#xxxxxx` - Border
- `#xxxxxx` - Text

## Typography
### Font Families
- Display: [字体名称]
- Body: [字体名称]
- Mono: [字体名称]

### Scale
- `text-xs`: 0.75rem
- `text-sm`: 0.875rem
- `text-base`: 1rem
- `text-lg`: 1.125rem
- `text-xl`: 1.25rem
- `text-2xl`: 1.5rem
- `text-3xl`: 1.875rem
- `text-4xl`: 2.25rem

## Spacing
### Scale
- `0`: 0px
- `1`: 0.25rem (4px)
- `2`: 0.5rem (8px)
- `3`: 0.75rem (12px)
- `4`: 1rem (16px)
- `6`: 1.5rem (24px)
- `8`: 2rem (32px)
- `12`: 3rem (48px)
- `16`: 4rem (64px)

## Components
### Buttons
```html
<!-- Primary Button -->
<button class="btn btn-primary">Button</button>

<!-- Secondary Button -->
<button class="btn btn-secondary">Button</button>
```

### Cards
```html
<div class="card">
  <h3 class="card-title">Title</h3>
  <p class="card-content">Content</p>
</div>
```

### Forms
```html
<div class="form-group">
  <label class="form-label">Label</label>
  <input class="form-input" type="text" placeholder="Placeholder">
</div>
```

## Layout
### Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Grid items -->
</div>
```

### Container
```html
<div class="container mx-auto px-4">
  <!-- Content -->
</div>
```

## Icons
- Use [图标库名称] icons
- Size: 20px, 24px, 32px
- Color: Inherit from text or use semantic colors

## Motion
### Durations
- Fast: 150ms
- Medium: 300ms
- Slow: 500ms

### Easing
- Ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
- Ease-out: cubic-bezier(0, 0, 0.2, 1)

## Accessibility
### Focus States
```css
:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}
```

### Contrast Ratios
- Text: 4.5:1 minimum
- Large Text: 3:1 minimum
- UI Components: 3:1 minimum

## Implementation
### Tailwind Config
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#xxxxxx',
          secondary: '#xxxxxx',
        }
      },
      fontFamily: {
        display: ['Font Name', 'sans-serif'],
        body: ['Font Name', 'sans-serif'],
      }
    }
  }
}
```

## Usage Examples
### Landing Page
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Title</title>
  <!-- Include design system -->
</head>
<body class="bg-background text-foreground">
  <!-- Page content -->
</body>
</html>
```

## Resources
- [Figma File](链接)
- [Icon Library](链接)
- [Font Files](链接)
```

## 工业设计系统特点

基于BMW、Tesla、SpaceX等工业品牌，应该包含：

1. **坚固耐用的美学**
   - 锐利的边缘和清晰的线条
   - 高对比度色彩
   - 金属质感元素

2. **技术感**
   - 数据可视化组件
   - 技术参数展示
   - 图表和指标

3. **可靠性**
   - 一致的布局
   - 清晰的层次结构
   - 可预测的交互

4. **专业性**
   - 精致的细节
   - 高质量的图像
   - 精确的排版