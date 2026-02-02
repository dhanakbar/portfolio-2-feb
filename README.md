# Portfolio Website

A stunning portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ **Modern Design**: Beautiful, premium UI with smooth animations
- 🎨 **Customizable Theme**: Easy-to-change color scheme via Tailwind config
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎭 **Framer Motion Animations**: Smooth scroll animations and interactions
- ⚡ **Next.js 14**: Built with the latest App Router
- 🎯 **TypeScript**: Type-safe code throughout
- 🌈 **Glassmorphism Effects**: Modern design aesthetics

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🎨 Customizing Theme Colors

The portfolio uses a customizable color system defined in `tailwind.config.ts`. You can easily change the entire theme by modifying the color values.

### How to Change Colors

1. Open `tailwind.config.ts`
2. Find the `colors` section in the `theme.extend` object
3. Modify the color values for:
   - **Primary**: Main brand color (used for buttons, links, accents)
   - **Secondary**: Secondary brand color (used for gradients, highlights)
   - **Accent**: Accent color (used for special highlights)
   - **Dark**: Background and surface colors

### Example: Changing to a Green/Blue Theme

```typescript
colors: {
  primary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Main primary color
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
    950: '#042f2e',
  },
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main secondary color
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  // ... keep accent and dark as is, or customize them too
}
```

### Quick Theme Presets

#### Purple/Pink Theme (Current)

- Primary: Sky Blue (#0ea5e9)
- Secondary: Fuchsia (#d946ef)
- Accent: Orange (#f97316)

#### Professional Blue Theme

```typescript
primary: { 500: '#0284c7' }    // Sky Blue
secondary: { 500: '#6366f1' }  // Indigo
accent: { 500: '#8b5cf6' }     // Violet
```

#### Warm Sunset Theme

```typescript
primary: { 500: '#f59e0b' }    // Amber
secondary: { 500: '#ef4444' }  // Red
accent: { 500: '#ec4899' }     // Pink
```

#### Fresh Green Theme

```typescript
primary: { 500: '#10b981' }    // Emerald
secondary: { 500: '#14b8a6' }  // Teal
accent: { 500: '#06b6d4' }     // Cyan
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and custom CSS
│   │   ├── layout.tsx        # Root layout with metadata
│   │   └── page.tsx          # Main page
│   └── components/
│       ├── Hero.tsx          # Hero section
│       ├── Services.tsx      # Services/Skills section
│       ├── Journey.tsx       # Experience timeline
│       ├── Testimonials.tsx  # Testimonials section
│       └── Footer.tsx        # Footer with contact info
├── tailwind.config.ts        # Tailwind configuration (THEME COLORS HERE)
└── package.json
```

## 🎯 Sections

1. **Hero**: Introduction with animated background and social links
2. **Services**: Showcase of skills and expertise
3. **Journey**: Professional experience timeline
4. **Testimonials**: Reviews from colleagues and mentors
5. **Footer**: Contact information and quick links

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📝 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.tsx`):
   - Update name, title, description
   - Change social media links

2. **Services Section** (`src/components/Services.tsx`):
   - Modify the `services` array with your skills

3. **Journey Section** (`src/components/Journey.tsx`):
   - Update the `experiences` array with your work history

4. **Testimonials Section** (`src/components/Testimonials.tsx`):
   - Replace the `testimonials` array with real testimonials

5. **Footer** (`src/components/Footer.tsx`):
   - Update contact information
   - Change social media links

### Modify Animations

All animations are controlled by Framer Motion. You can adjust:

- Animation duration
- Easing functions
- Stagger delays
- Viewport triggers

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build the project
npm run build

# Deploy the .next folder
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Maulana Akbar Ramadhan**

- Location: Bojongsong, Bandung, West Java
- LinkedIn: [maulana-akbar-ramadhan](https://linkedin.com/in/maulana-akbar-ramadhan)
- Email: maulana.akbar@example.com

---

Made with ❤️ using Next.js and Tailwind CSS
