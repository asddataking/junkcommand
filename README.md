# Junk Command — Port Huron Junk Removal

Production homepage for **Junk Command** (`junkcommand.com`).

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Hook Form + Zod

## Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Set your GoHighLevel inbound webhook:

```
GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID
```

The quote API (`POST /api/quote`) validates the form, then posts JSON to that URL via `src/lib/ghl.ts`. Without the env var, submissions still succeed locally and log the payload.

## Images

Drop WebP assets into `public/images/` (see `public/images/README.md`):

| Path | Use |
|------|-----|
| `public/images/junk-command-hero.webp` | Hero background |
| `public/images/dan-gage-luna.webp` | Hero portrait (Dan, Gage, Luna) |
| `public/images/luna-mascot.webp` | Footer / mascot badge |
| `public/images/trailer.webp` | Why Choose Us |
| `public/images/services/*.webp` | Service cards |

Until real photos are added, UI falls back to dark neon gradients.

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com/new)
3. Add `GHL_WEBHOOK_URL` under Project → Settings → Environment Variables
4. Deploy (Vercel auto-detects Next.js)

Or CLI:

```bash
npm i -g vercel
vercel
```

## Brand

- Name: **Junk Command** (not "Junk Commander")
- Email: `info@junkcommand.com`
- Phone: `810-242-0429`
- Tagline: Take Command of Your Clutter.
- Luna vest: **JUNK COMMAND** / **K-9 CLEANUP UNIT**
