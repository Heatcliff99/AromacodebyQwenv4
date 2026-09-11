# Aroma Flowers Corner — Flowers by Kirti | Nagpur Florist

A women-owned floral atelier website built with React, Vite, Tailwind CSS, and TypeScript. This is a full-featured e-commerce website for a Nagpur-based flower shop offering hand-tied bouquets, varmalas, floral jewellery, and event décor.

## Features

- **Home Page** — Hero slider, featured product, curated collection, testimonials, and Instagram feed
- **Shop Page** — Categorized product listings (Bouquets, Varmalas, Floral Jewellery, Event Décor)
- **Customise Page** — Interactive bouquet builder with occasion selection, budget tiers, bloom picker, and live preview
- **Journal Page** — About section, process steps, values, and blog articles
- **Responsive Design** — Mobile-first with desktop sidebar and mobile bottom bar
- **Clean Deployment** — No references to base44 or replit; ready for Vercel

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast builds
- **Tailwind CSS v4** for styling
- **React Router v6** for client-side routing
- **Lucide React** for icons
- **Google Fonts** — Playfair Display (display) + Inter (body)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

### Vercel (Recommended)

The project includes a `vercel.json` for clean SPA routing:

1. Push this repo to GitHub
2. Import the repo in [Vercel](https://vercel.com)
3. Deploy — done!

### Other Platforms

The build output is in `dist/`. Any static hosting service (Netlify, GitHub Pages, etc.) will work.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#7a1f2b` | Maroon — headings, buttons |
| Background | `#faf7f2` | Cream — page background |
| Secondary | `#e8c25a` | Gold — accents, stars |
| Muted | `#f0ebe4` | Subtle backgrounds |
| Border | `#e0d8cf` | Dividers, borders |
| Foreground | `#2d2926` | Body text |

## Project Structure

```
src/
├── App.tsx              # Router setup
├── main.tsx             # Entry point
├── index.css            # Tailwind + custom styles
├── components/
│   └── Layout.tsx       # Header, sidebar, mobile bar
├── pages/
│   ├── Home.tsx         # Landing page
│   ├── Shop.tsx         # Product listings
│   ├── Customise.tsx    # Bouquet builder
│   └── Journal.tsx      # About + blog
└── data/
    └── products.ts      # Product data, blooms, occasions
```

## Credits

- **Design Inspiration**: Aroma Flowers Corner, Nagpur
- **Contact**: +91 9923106684
- **Locations**: Manish Nagar & Khamla, Nagpur

---

Built with ❤️ for Kirti and the Aroma Flowers Corner team.
