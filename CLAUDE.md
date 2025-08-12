# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fuel Mechanical LLC is a professional SvelteKit website for a heating and cooling services company. The project is built with modern web technologies and designed for deployment on Vercel.

## Current State

**Framework:** SvelteKit 2.28.0 with Svelte 5.38.1
**Build Tool:** Vite 7.1.2
**Deployment:** Vercel with `@sveltejs/adapter-vercel`
**Styling:** Custom CSS with utility classes and CSS custom properties

### Existing Structure:
- `src/app.html` - Main HTML template with SEO meta tags
- `src/app.css` - Global styles with company color scheme and utility classes
- `src/routes/+layout.svelte` - Basic layout component
- `src/routes/+page.svelte` - Hero homepage with company branding
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
**Color Scheme:**
- Primary Blue: `#3b82f6`
- Secondary Blue: `#1d4ed8`
- Accent Orange: `#fbbf24`
- Accent Red: `#ef4444`
- Text Colors: `#1f2937` (dark), `#6b7280` (light)

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

**Next Development Priorities:**
1. Navigation system with service categories
2. About page with company information
3. Services pages for different specialties
4. Contact page with form integration
5. Project portfolio section
6. Enhanced responsive design
7. Performance optimization