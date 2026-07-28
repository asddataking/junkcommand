# Junk Command Images

Drop optimized WebP assets into these folders. Until files exist, `MediaImage` falls back to a neon gradient so pages still render.

## Brand / Hero
- `/images/junk-command-hero.webp` — OG + hero (1200×630+)
- `/images/dan-gage-luna.webp` — crew with Luna
- `/images/luna-mascot.webp` — mascot badge
- `/images/trailer.webp` — truck/trailer

## Crew (`/images/crew/`)
- `dan.webp`
- `gage.webp`
- `luna.webp`

## Services (`/images/services/`)
One WebP per service slug, e.g.:
- `furniture-removal.webp`
- `appliance-removal.webp`
- `mattress-removal.webp`
- `couch-removal.webp`
- `garage-cleanout.webp`
- `basement-cleanout.webp`
- `estate-cleanout.webp`
- `storage-unit-cleanout.webp`
- `hoarder-cleanout.webp`
- `foreclosure-cleanout.webp`
- `hot-tub-removal.webp`
- `shed-removal.webp`
- `deck-removal.webp`
- `construction-debris-removal.webp`
- `yard-debris-removal.webp`
- `brush-removal.webp`
- `electronics-recycling.webp`
- `tv-removal.webp`
- `refrigerator-removal.webp`

## Cities (`/images/cities/`)
One WebP per city slug (port-huron, marysville, …).

## Gallery (`/images/gallery/`)
Before/after pairs referenced in `src/data/gallery.ts`.

## Blog (`/images/blog/`)
Feature images referenced in `src/data/blog.ts`.

## Guidelines
- Prefer WebP/AVIF, max ~200KB where possible
- Descriptive filenames matching data slugs
- All UI uses meaningful `alt` text already wired in components
- `next/image` handles lazy loading; heroes use `priority`
