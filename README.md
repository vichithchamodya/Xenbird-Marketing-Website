# Xenbird Marketing Website

A marketing and showcase website for Xenbird - a platform that helps businesses launch custom-coded eCommerce websites in days, not months.

## Overview

Xenbird is a platform that provides ready-to-use demo eCommerce websites across 12+ industries. Customers can explore demos before making a decision, and based on their requirements, Xenbird delivers a fully customized eCommerce website.

### Key Features

- **Demo-first approach** - Real, working demos (not generic templates)
- **Custom-coded websites** - Tailored to exact requirements
- **Fast launch** - Days instead of months
- **No technical complexity** - Built for non-technical founders

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **React 19** - UI library

## Project Structure

```
xenbird-marketing/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── how-it-works/      # How It Works page
│   │   ├── demos/             # Demos showcase
│   │   │   └── [category]/    # Dynamic demo category pages
│   │   ├── admin/             # Admin dashboard overview
│   │   ├── vision/            # Vision & Roadmap
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections (Hero, Features, etc.)
│   │   └── ui/                # Reusable UI components
│   └── styles/
│       └── globals.css        # Global styles & CSS variables
├── public/                    # Static assets (logo, images)
└── designs/                   # Design references & mockups
```

## Available Routes

- `/` - Home page
- `/how-it-works` - Process and timeline
- `/demos` - All industry demos
- `/demos/[category]` - Category-specific demos (fashion, technology, etc.)
- `/admin` - Admin dashboard overview
- `/vision` - Vision and roadmap
- `/contact` - Contact form

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Development Notes

### What's Implemented

✅ Full routing structure with catch-all routes
✅ Responsive header and footer
✅ Home page with all sections
✅ How It Works page (process, timeline, FAQ)
✅ Demos page with industry grid
✅ Dynamic demo category pages
✅ Admin dashboard overview
✅ Vision & Roadmap page
✅ Contact page with form
✅ Loading and error states
✅ SEO metadata for all pages

### Out of Scope (Currently)

❌ Backend integration
❌ Form submission handling
❌ Advanced animations
❌ Production deployment configuration
❌ Analytics integration

### Placeholder Content

- Demo images/thumbnails
- Testimonials
- Contact information (email, phone)
- Social media links
- Actual demo websites (links point to #)

## Industries Covered

1. Fashion
2. Technology
3. Beauty
4. Wellness
5. Sports
6. Jewellery
7. Appliances
8. Construction
9. Horology (Watches)
10. Food
11. Realty
12. Automotive

## Admin Dashboard Tiers

- **Lite** - For new businesses
- **Standard** - For growing businesses
- **Pro** - For established businesses (Most Popular)
- **Enterprise** - For large-scale operations

## Contributing

This is a marketing website project. Follow these guidelines:

- Keep components simple and focused
- Use Tailwind CSS for styling
- Maintain responsive design
- Add proper TypeScript types
- Keep placeholder content clearly marked

## License

Private project for Xenbird.
