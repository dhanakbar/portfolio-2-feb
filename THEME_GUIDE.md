# 🎨 Theme Customization Guide

This guide will help you quickly change the color theme of your portfolio.

## Quick Start

All theme colors are defined in **`tailwind.config.ts`** in the root directory.

## Step-by-Step Instructions

### 1. Open the Configuration File

Open `tailwind.config.ts` in your code editor.

### 2. Locate the Colors Section

Find the `colors` object inside `theme.extend`:

```typescript
theme: {
  extend: {
    colors: {
      primary: { ... },
      secondary: { ... },
      accent: { ... },
      dark: { ... },
    }
  }
}
```

### 3. Change the Main Colors

You only need to change the **500** values for a quick theme change:

```typescript
primary: {
  500: '#0ea5e9', // ← Change this color
}
secondary: {
  500: '#d946ef', // ← Change this color
}
accent: {
  500: '#f97316', // ← Change this color
}
```

### 4. Save and See Changes

The changes will automatically reflect in your browser if the dev server is running.

## 🎨 Ready-to-Use Theme Presets

Copy and paste these complete color configurations:

### 1. Ocean Blue Theme

```typescript
primary: {
  50: '#f0f9ff',
  100: '#e0f2fe',
  200: '#bae6fd',
  300: '#7dd3fc',
  400: '#38bdf8',
  500: '#0ea5e9',
  600: '#0284c7',
  700: '#0369a1',
  800: '#075985',
  900: '#0c4a6e',
  950: '#082f49',
},
secondary: {
  50: '#ecfeff',
  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4',
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
  950: '#083344',
},
```

### 2. Forest Green Theme

```typescript
primary: {
  50: '#f0fdf4',
  100: '#dcfce7',
  200: '#bbf7d0',
  300: '#86efac',
  400: '#4ade80',
  500: '#22c55e',
  600: '#16a34a',
  700: '#15803d',
  800: '#166534',
  900: '#14532d',
  950: '#052e16',
},
secondary: {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  950: '#042f2e',
},
```

### 3. Royal Purple Theme

```typescript
primary: {
  50: '#faf5ff',
  100: '#f3e8ff',
  200: '#e9d5ff',
  300: '#d8b4fe',
  400: '#c084fc',
  500: '#a855f7',
  600: '#9333ea',
  700: '#7e22ce',
  800: '#6b21a8',
  900: '#581c87',
  950: '#3b0764',
},
secondary: {
  50: '#fdf4ff',
  100: '#fae8ff',
  200: '#f5d0fe',
  300: '#f0abfc',
  400: '#e879f9',
  500: '#d946ef',
  600: '#c026d3',
  700: '#a21caf',
  800: '#86198f',
  900: '#701a75',
  950: '#4a044e',
},
```

### 4. Sunset Orange Theme

```typescript
primary: {
  50: '#fff7ed',
  100: '#ffedd5',
  200: '#fed7aa',
  300: '#fdba74',
  400: '#fb923c',
  500: '#f97316',
  600: '#ea580c',
  700: '#c2410c',
  800: '#9a3412',
  900: '#7c2d12',
  950: '#431407',
},
secondary: {
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444',
  600: '#dc2626',
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
},
```

### 5. Professional Navy Theme

```typescript
primary: {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
  950: '#172554',
},
secondary: {
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#4338ca',
  800: '#3730a3',
  900: '#312e81',
  950: '#1e1b4b',
},
```

## 🎯 Color Meanings

- **Primary (500)**: Main brand color - used for:
  - Buttons
  - Links
  - Important highlights
  - Scroll indicators

- **Secondary (500)**: Secondary brand color - used for:
  - Gradients (combined with primary)
  - Alternative highlights
  - Hover effects

- **Accent (500)**: Accent color - used for:
  - Special elements
  - Call-to-action items
  - Decorative elements

- **Dark**: Background colors - usually don't need to change

## 🔧 Advanced Customization

### Gradient Colors

The portfolio uses gradients in several places. These are controlled by CSS variables in `globals.css`:

```css
:root {
  --gradient-start: #0ea5e9; /* Primary color */
  --gradient-end: #d946ef; /* Secondary color */
}
```

### Custom Scrollbar

The scrollbar gradient uses the same gradient variables, so it will automatically match your theme.

## 💡 Tips

1. **Use Color Generators**: Tools like [Tailwind Color Generator](https://uicolors.app/create) can help you create complete color palettes from a single color.

2. **Test Contrast**: Make sure your colors have enough contrast for accessibility.

3. **Preview Changes**: The dev server hot-reloads, so you can see changes instantly.

4. **Keep Backups**: Save your original `tailwind.config.ts` before making major changes.

## 🚀 After Changing Colors

1. Save the file
2. The browser will automatically reload
3. Check all sections to ensure colors look good
4. Adjust if needed

## Need Help?

If you want to create a custom color palette:

1. Choose your main color
2. Use [Tailwind Shades Generator](https://www.tailwindshades.com/)
3. Copy the generated shades
4. Paste into your config

---

Happy customizing! 🎨
