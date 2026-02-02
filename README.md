# WuSxo Corporate Website

A modern corporate website built with Next.js 15, featuring a sleek dark theme design and comprehensive service showcase.

**Original Design**: This project was migrated from a Figma design available at [Corporate Website Design](https://www.figma.com/design/enpBUfCLhZYZPbOfRXzGeg/Corporate-Website-Design).

## 🚀 Tech Stack

### Core Framework
- **Next.js** `^15.1.4` - React framework with App Router
- **React** `^19.0.0` - UI library
- **React DOM** `^19.0.0` - React rendering
- **TypeScript** `^5.7.3` - Type-safe JavaScript

### Styling
- **Tailwind CSS** `^3.4.17` - Utility-first CSS framework
- **PostCSS** `^8.4.49` - CSS transformations
- **tailwind-merge** `3.2.0` - Merge Tailwind classes
- **tw-animate-css** `1.3.8` - Extended Tailwind animations
- **clsx** `2.1.1` - Conditional class names

### UI Components & Libraries

#### Radix UI Primitives
- `@radix-ui/react-accordion` `1.2.3`
- `@radix-ui/react-alert-dialog` `1.1.6`
- `@radix-ui/react-aspect-ratio` `1.1.2`
- `@radix-ui/react-avatar` `1.1.3`
- `@radix-ui/react-checkbox` `1.1.4`
- `@radix-ui/react-collapsible` `1.1.3`
- `@radix-ui/react-context-menu` `2.2.6`
- `@radix-ui/react-dialog` `1.1.6`
- `@radix-ui/react-dropdown-menu` `2.1.6`
- `@radix-ui/react-hover-card` `1.1.6`
- `@radix-ui/react-label` `2.1.2`
- `@radix-ui/react-menubar` `1.1.6`
- `@radix-ui/react-navigation-menu` `1.2.5`
- `@radix-ui/react-popover` `1.1.6`
- `@radix-ui/react-progress` `1.1.2`
- `@radix-ui/react-radio-group` `1.2.3`
- `@radix-ui/react-scroll-area` `1.2.3`
- `@radix-ui/react-select` `2.1.6`
- `@radix-ui/react-separator` `1.1.2`
- `@radix-ui/react-slider` `1.2.3`
- `@radix-ui/react-slot` `1.1.2`
- `@radix-ui/react-switch` `1.1.3`
- `@radix-ui/react-tabs` `1.1.3`
- `@radix-ui/react-toggle` `1.1.2`
- `@radix-ui/react-toggle-group` `1.1.2`
- `@radix-ui/react-tooltip` `1.1.8`

#### Material-UI
- `@mui/material` `7.3.5` - Material Design components
- `@mui/icons-material` `7.3.5` - Material Design icons
- `@emotion/react` `11.14.0` - CSS-in-JS library
- `@emotion/styled` `11.14.1` - Styled components

#### Other UI Libraries
- **lucide-react** `0.487.0` - Icon library
- **motion** `12.23.24` - Framer Motion animations
- **cmdk** `1.1.1` - Command menu component
- **vaul** `1.1.2` - Drawer component
- **sonner** `2.0.3` - Toast notifications

### Forms & Validation
- **react-hook-form** `7.55.0` - Form state management
- **input-otp** `1.4.2` - OTP input component
- **react-day-picker** `8.10.1` - Date picker

### Utilities
- **class-variance-authority** `0.7.1` - Component variants
- **date-fns** `3.6.0` - Date utilities
- **@popperjs/core** `2.11.8` - Positioning engine
- **react-popper** `2.3.0` - React wrapper for Popper

### Interactive Components
- **react-dnd** `16.0.1` - Drag and drop
- **react-dnd-html5-backend** `16.0.1` - HTML5 backend for DnD
- **embla-carousel-react** `8.6.0` - Carousel component
- **react-slick** `0.31.0` - Carousel/slider component
- **react-resizable-panels** `2.1.7` - Resizable panel layouts
- **react-responsive-masonry** `2.7.1` - Masonry layout

### Data Visualization
- **recharts** `2.15.2` - Chart library

### Theming
- **next-themes** `0.4.6` - Theme management for Next.js

### Development Tools
- **ESLint** `^9.18.0` - Code linting
- **eslint-config-next** `^15.1.4` - Next.js ESLint configuration
- **@types/node** `^22.10.5` - Node.js type definitions
- **@types/react** `^19.0.6` - React type definitions
- **@types/react-dom** `^19.0.2` - React DOM type definitions

## 📦 Installation

Install dependencies:

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🔍 Linting

Run ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   ├── outsourcing/
│   │   └── page.tsx            # Services page
│   ├── products/
│   │   ├── smartflow/
│   │   │   └── page.tsx        # SmartFlow product
│   │   └── cloudvault/
│   │       └── page.tsx        # CloudVault product
│   └── components/
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Site footer
└── styles/
    ├── index.css               # Global styles
    ├── tailwind.css            # Tailwind directives
    ├── theme.css               # Theme variables
    └── fonts.css               # Font imports
```

## 🎨 Features

- ✅ Modern dark theme design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ SEO-friendly with Next.js metadata
- ✅ Type-safe with TypeScript
- ✅ Comprehensive UI component library
- ✅ Fast development with hot module replacement
- ✅ Production-ready build optimization

## 📄 Available Pages

- **Home** (`/`) - Landing page with hero, products, services
- **About** (`/about`) - Company information, mission, vision, timeline
- **Services** (`/outsourcing`) - Software development services
- **Contact** (`/contact`) - Contact form and information
- **SmartFlow** (`/products/smartflow`) - Project management product
- **CloudVault** (`/products/cloudvault`) - Cloud storage product

## 🚢 Deployment

This Next.js application can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

## 📝 License

Private project - All rights reserved

## 🤝 Contributing

This is a private project. For any questions or contributions, please contact the team.