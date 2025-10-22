# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

The Ticker Tipper is a marketing website for a custom stock scanner subscription service. The site is built with Next.js 15, TypeScript, Tailwind CSS, and Turbopack for fast development builds.

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Turbopack** for faster development builds
- **FormSubmit.co** for contact form email handling

## Commands

### Development
```bash
npm run dev        # Start dev server with Turbopack at http://localhost:3000
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
```

### Testing Changes
- Open `http://localhost:3000` in browser for the homepage
- Navigate to `/promo` for the 5-day free trial page
- Navigate to `/get-in-touch` for the contact form page

## Architecture

### Project Structure

```
app/
  ├── layout.tsx           # Root layout with metadata
  ├── page.tsx             # Homepage route (/)
  ├── globals.css          # Global styles + Tailwind directives
  ├── promo/
  │   └── page.tsx         # Promo page route (/promo)
  └── get-in-touch/
      └── page.tsx         # Contact page route (/get-in-touch)
components/
  └── Footer.tsx           # Shared footer component
```

### Routing
- Uses Next.js **App Router** (not Pages Router)
- Each route is a `page.tsx` file in its folder
- Homepage: `app/page.tsx` → `/`
- Promo: `app/promo/page.tsx` → `/promo`
- Contact: `app/get-in-touch/page.tsx` → `/get-in-touch`

### Pages Overview

1. **Homepage (`app/page.tsx`)**
   - Hero section with main value proposition
   - Features grid (6 feature cards)
   - How It Works section (4-step process)
   - Pricing cards (3 tiers: Starter $49, Professional $149, Enterprise $349)
   - Contact CTA section with email
   - Server component (no 'use client')

2. **Promo Page (`app/promo/page.tsx`)**
   - 5-day free trial promotional content
   - Animated sections using Intersection Observer
   - Trial timeline breakdown (Setup, Experience, What's Included)
   - Testimonial and urgency CTAs
   - Client component for animations ('use client')

3. **Contact Page (`app/get-in-touch/page.tsx`)**
   - Two-column layout: contact form + contact info
   - Form posts to FormSubmit.co API
   - FAQ accordion section
   - Success message handling via URL params
   - Client component for form handling ('use client')

## Design System

### Tailwind Configuration

Custom colors defined in `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    DEFAULT: '#f9a825',  // Primary brand color
    dark: '#f57c00',     // Hover states
  },
  dark: {
    DEFAULT: '#1a1a1a',  // Primary dark
    light: '#2d2d2d',    // Secondary dark
  },
}
```

### Component Classes (in `app/globals.css`)

- `.cta-button` - Primary call-to-action buttons (gold background, rounded pill shape)
- `.feature-card` - Feature display cards with left gold border and gradient background

### Typography
- Font: System font stack via Tailwind's `font-sans`
- Hero Titles: `text-6xl` to `text-7xl`
- Section Titles: `text-4xl` to `text-5xl`
- Body: Default with `leading-relaxed` for readability

### Spacing & Layout
- Container: `max-w-7xl mx-auto` for content sections
- Padding: `px-8` horizontal, `py-12` to `py-24` vertical
- Grid gaps: `gap-8` to `gap-12` for responsive layouts

## Key Implementation Details

### Client vs Server Components
- Homepage uses server components (default)
- Promo and contact pages use client components ('use client') for:
  - Form state management
  - URL search params
  - Scroll animations
  - Browser APIs

### Navigation
- Uses Next.js `<Link>` component for client-side navigation
- Internal links: `/`, `/promo`, `/get-in-touch`
- Anchor links for same-page navigation: `/#pricing`, `/#features`

### Form Submission
- Contact form action: `https://formsubmit.co/info@thetickertipper.com`
- Hidden fields configure FormSubmit behavior:
  - `_subject`: Email subject line
  - `_captcha`: Disabled for better UX
  - `_template`: Uses table format
  - `_honey`: Honeypot spam protection
- No backend required - FormSubmit handles email delivery

### Animations
- Promo page uses Intersection Observer API for scroll animations
- Elements with `.animate-on-scroll` class fade in on scroll
- Smooth transitions via Tailwind's `transition-all` utility

## Styling Approach

1. **Tailwind-First**: Use Tailwind utility classes for most styling
2. **Custom CSS**: Only for reusable component patterns (`.cta-button`, `.feature-card`)
3. **Inline Styles**: Avoid except for dynamic values
4. **Responsive Design**: Mobile-first with `md:` and `lg:` breakpoints

## Making Changes

### Adding New Pages
1. Create folder in `app/` directory
2. Add `page.tsx` file with default export
3. Use 'use client' if you need interactivity

### Modifying Styles
- Edit `tailwind.config.ts` for global design tokens
- Edit `app/globals.css` for component classes
- Use Tailwind utilities inline for one-off styles

### Updating Content
- Page content is in respective `page.tsx` files
- Metadata (title, description) in `app/layout.tsx`
- Shared content (footer links) in `components/Footer.tsx`

## Deployment

Recommended platform: **Vercel** (optimized for Next.js)

Deploy steps:
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Next.js and configures build
4. Deploy to production URL

Alternative platforms: Netlify, Cloudflare Pages, or any Node.js hosting
