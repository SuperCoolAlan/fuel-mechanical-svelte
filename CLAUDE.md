# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fuel Mechanical LLC is a professional SvelteKit website for a heating and cooling services company. The project is built with modern web technologies and designed for deployment on Vercel.

## Current State

**Framework:** SvelteKit 2.28.0 with Svelte 5.38.1
**Build Tool:** Vite 7.1.2
**Deployment:** Vercel with `@sveltejs/adapter-vercel`
**Styling:** Custom CSS with utility classes and CSS custom properties
**Typography:** Oswald font for brand headings, system fonts for body text

### Existing Structure:
- `src/app.html` - Main HTML template with SEO meta tags and Google Fonts
- `src/app.css` - Global styles with company color scheme and utility classes
- `src/routes/+layout.svelte` - Layout with navigation and footer components
- `src/routes/+page.svelte` - Hero homepage with company branding
- `src/routes/about/+page.svelte` - About page with company story and services
- `src/routes/contact/+page.svelte` - Contact page with form and contact information
- `src/routes/portfolio/+page.svelte` - Portfolio page with project showcase
- `src/lib/components/Navigation.svelte` - Navigation bar with brand styling
- `src/lib/components/Footer.svelte` - Footer with company info and links
- `static/` - Logo assets (PNG, SVG, favicon)
- `inspiration/` - Design reference files from mechanical contracting websites
- `vercel.json` - Deployment configuration

## Architecture Notes

1. **SvelteKit App Router:** Uses file-based routing in `src/routes/`
2. **Component-First:** Built for reusable Svelte components
3. **CSS Custom Properties:** Color scheme defined in `:root` variables
4. **Responsive Design:** Mobile-first approach with utility classes
5. **SEO Ready:** Proper meta tags and semantic HTML structure

## Brand Identity

**Company:** Fuel Mechanical LLC - Heating & Cooling Services
**Location:** Tulsa Metro Area
**Phone:** (918) 991-2324
**Email:** info@fuelmechanical.com
**Facebook:** https://www.facebook.com/fuelmechanical

**Color Scheme:**
- Primary Blue: `#3b82f6`
- Secondary Blue: `#1d4ed8`
- Accent Orange: `#fbbf24`
- Accent Red: `#ef4444`
- Text Colors: `#1f2937` (dark), `#6b7280` (light)

**Typography:**
- Brand text: Oswald font with italic styling and -8deg skew transform
- Headings: Oswald font family for consistency
- Body text: System font stack for readability

## Design Inspiration

The `./inspiration/` directory contains analysis of two professional mechanical contracting websites:
- Oil Capital Electric: Bold industrial design with split-screen video layout
- Platinum Mechanical: Clean modern design with service categorization

Key patterns to implement:
- Service categorization (HVAC, heating, cooling)
- Trust indicators (experience, certifications)
- Project showcases with professional imagery
- Prominent contact information
- Industry-focused content strategy

## Development Setup

**Available Commands:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Type checking and validation

## Current Features

**Navigation System:**
- Responsive navigation bar with light blue background
- Brand logo and Oswald-styled company name
- Home, About, Portfolio, Contact links
- Active page highlighting

**Pages Implemented:**
1. **Home** - Hero section with company branding and call-to-action buttons
2. **About** - Company story, services list, and why choose us features
3. **Portfolio** - Project showcase page ready for Facebook integration
4. **Contact** - Contact form, business information, and service area details

**Components:**
- Navigation component with brand consistency
- Footer with company information and quick links
- Responsive design across all pages
- Professional styling matching HVAC industry standards

**Services Offered:**
- HVAC Installation & Repair
- Heating System Maintenance  
- Air Conditioning Services
- Water Heater Installation
- Ductwork Installation
- Emergency Repairs
- System Inspections

**Key Features:**
- Licensed & Insured business
- Tulsa Metro Area service coverage
- Quality workmanship and precision focus
- Professional contact information integration