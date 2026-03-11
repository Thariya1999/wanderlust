# 🌍 Wanderlust — Tourism Website

A modern, luxury tourism website built with **Next.js 14**, **Tailwind CSS**, **CSS Animations**, and **React Icons**.

## ✨ Features

- **5 Full Pages**: Homepage, Destinations, Tour Packages, Package Detail, Contact
- **Luxury Editorial Design** — Cormorant Garamond + DM Sans typography, copper/gold palette
- **Custom Cursor** — Animated dot + ring follower
- **Scroll Reveal Animations** — Elements animate in as you scroll
- **Animated Counter** — Stats count up when in view
- **Hero Zoom Animation** — Cinematic background on load
- **Destination Filter** — Filter by continent/region
- **Package Filter** — Filter by category (Cultural, Adventure, Luxury, Romantic)
- **Image Gallery** — Thumbnail switcher on package detail pages
- **Contact Form** — With success state animation
- **Google Maps Embed** — On contact page
- **Fully Responsive** — Mobile, tablet, desktop
- **SEO Meta Tags** — Title, description, Open Graph

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| Next.js 14 | App Router, SSR, Image optimization |
| Tailwind CSS | Utility-first styling |
| CSS Animations | Hero zoom, fade-up, scroll-line, float |
| React Icons | Navigation, cards, contact details |
| Google Fonts | Cormorant Garamond, DM Sans |

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts + metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + animations
│   ├── destinations/
│   │   └── page.tsx        # Destinations listing + filter
│   ├── packages/
│   │   ├── page.tsx        # Packages listing + filter
│   │   └── [id]/
│   │       └── page.tsx    # Package detail + gallery
│   └── contact/
│       └── page.tsx        # Contact form + map
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with scroll effect
│   │   └── Footer.tsx      # Full footer with links
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── DestinationsSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── Cursor.tsx       # Custom animated cursor
│       ├── PackageCard.tsx  # Reusable package card
│       └── RevealWrapper.tsx
├── data/
│   └── index.ts            # All static data
└── lib/
    └── useReveal.ts        # Scroll reveal + counter hooks
```

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload .next folder to Netlify
```

## 📄 License

MIT — Built for Wanderlust Tourism Technical Task
