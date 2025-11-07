# SpudBlocks Web3 Consultancy - Design Guidelines

## Design Approach
**System**: Custom dark-mode design inspired by modern Web3/tech platforms (Stripe's restraint + Linear's precision + Web3 innovation aesthetics)

**Core Principle**: Establish trust and professionalism while embracing cutting-edge Web3 identity through bold typography, strategic use of purple accent, and data-driven credibility markers.

---

## Typography Hierarchy

**Font Families**: 
- Primary: "Inter" for body and UI elements
- Display: "Sora" for headlines and emphasis

**Scale**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl font-bold (Sora)
- Section Headers: text-4xl md:text-5xl font-bold (Sora)
- Subsection Headers: text-2xl md:text-3xl font-semibold (Sora)
- Body Large: text-lg md:text-xl (Inter)
- Body Standard: text-base md:text-lg (Inter)
- Small/Meta: text-sm (Inter)

**Color Application**:
- Primary text: text-gray-100
- Secondary text: text-gray-400
- Purple accent text: text-purple-400
- Muted text: text-gray-500

---

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Container Strategy**:
- Max width: max-w-7xl mx-auto px-6 md:px-8
- Full-width sections with inner containers for content control

---

## Component Library

### Navigation
Fixed header with dark blur backdrop (bg-gray-900/95 backdrop-blur-md), logo left, nav links center, "Get Connected" CTA button right

### Hero Section
- Full viewport height (min-h-screen) with gradient overlay on background image
- Background: Dark abstract Web3/blockchain visual (nodes, networks, digital grid)
- Content: Centered, "SpudBlocks" brand + "Empowering Your Business in the Web3 Universe" tagline
- Dual CTAs: Primary purple button + secondary outline button
- Buttons with backdrop-blur-lg bg-purple-600/90 for primary

### Service Cards (8 services in 2x4 grid on desktop, 1 col mobile)
- Dark cards: bg-gray-800/50 backdrop-blur-sm border border-gray-700
- Hover: border-purple-500 transition
- Layout: Number badge (top-left, small purple circle), icon placeholder, title (text-xl), description
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4

### Statistics Dashboard
Split layout:
- Left: Timeline of success rates (2020-2023) as vertical progression with large percentage numbers (text-5xl) in purple
- Right: Service breakdown as visual bar chart representation (not donut - simpler for web)
- Background: Subtle grid pattern overlay

### Recognition Section
Horizontal card layout with award badges:
- 4 awards in grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: Year badge, exchange logo placeholder, award title
- Dark cards with purple accent borders

### Partners Section
Logo grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-6) with partner logos in grayscale, hover to color filter

### Contact/Footer
Two-column layout (md:grid-cols-2):
- Left: Large "Thank You" message + SpudBlocks branding
- Right: Contact details (email, phone, website) as list with icons
- Full-width bottom bar with copyright and social links

---

## Images

**Hero Background**: 
Large full-width hero image depicting abstract Web3 concepts - interconnected nodes, blockchain visualization, or digital network patterns. Dark, purple-tinted overlay (bg-gradient-to-br from-purple-900/40 via-gray-900/60 to-black/80) to ensure text readability. Image should convey innovation and technology.

**Award/Recognition Logos**:
Exchange logos (BIGONE, TAPBIT, MEXC, HOTBIT) as white/grayscale SVGs on dark backgrounds

**Partner Logos**:
Company logos (TAPBIT, NEO, ERA7) displayed in grid format

---

## Visual Treatments

**Gradients**:
- Purple accent gradients: bg-gradient-to-r from-purple-600 to-purple-800
- Section backgrounds: bg-gradient-to-b from-gray-900 to-black

**Borders & Dividers**:
- Border color: border-gray-800
- Accent borders: border-purple-500
- Thickness: border or border-2

**Shadows**:
- Cards: shadow-xl shadow-purple-500/10
- Elevated elements: shadow-2xl

**Animations**: 
Minimal - subtle fade-in on scroll for sections, smooth hover transitions (transition-all duration-300)

---

## Accessibility
- Maintain WCAG AA contrast ratios (purple on dark backgrounds meets this)
- Focus states: ring-2 ring-purple-500 ring-offset-2 ring-offset-gray-900
- All interactive elements have clear hover states
- Semantic HTML structure for screen readers