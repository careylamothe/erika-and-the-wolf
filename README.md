# Erika & the Wolf Website

A performant, accessible website for a woodwind quintet, built with Astro + TypeScript.

## Tech Stack

| Layer      | Choice                          | Why                                              |
|------------|---------------------------------|--------------------------------------------------|
| Framework  | [Astro](https://astro.build) 4  | SSR + SSG, minimal JS by default, great SEO      |
| Language   | TypeScript (strict)             | Type safety throughout                           |
| Styling    | Tailwind CSS + CSS custom props | Utility classes + design tokens                  |
| Validation | Zod                             | Schema validation shared between frontend/API    |
| Email      | Resend                          | Modern transactional email API                   |
| Deploy     | Vercel / Node standalone        | Zero-config CI/CD from GitHub                    |

## Project Structure

```
src/
├── pages/
│   ├── index.astro          # Home
│   ├── about.astro          # Members & bio
│   ├── concerts.astro       # Upcoming & past concerts
│   ├── repertoire.astro     # Filterable repertoire list
│   ├── media.astro          # Audio, video, press kit
│   ├── contact.astro        # Contact form (SSR POST handler)
│   └── api/
│       ├── contact.ts       # JSON API for JS-enhanced form
│       └── newsletter.ts    # Newsletter signup endpoint
├── layouts/
│   ├── BaseLayout.astro     # HTML shell, SEO meta, JSON-LD
│   └── PageLayout.astro     # Inner page wrapper with heading
├── components/
│   ├── ui/                  # Nav, Footer, Button, AudioPlayer
│   └── sections/            # ConcertCard, RepertoireTable, ContactForm, MemberCard
├── content/
│   ├── concerts/schema.ts   # Zod schema for concert data
│   ├── repertoire/schema.ts # Zod schema for repertoire entries
│   └── members/schema.ts    # Zod schema for member profiles
├── lib/
│   ├── concerts.ts          # Data helpers (filter, sort, format)
│   ├── email.ts             # Resend email sender
│   └── validate.ts          # Form validation with Zod
├── styles/
│   ├── tokens.css           # Design tokens (colors, spacing, fonts)
│   └── global.css           # Global styles + component CSS
└── types/
    └── index.ts             # Shared TypeScript interfaces
```

## Design Decisions

- **SSR mode** — enables server-side form handling and dynamic concert data without a client-side framework
- **Progressive enhancement** — the contact form works without JavaScript via native POST to `/contact`, then is enhanced with JS for inline validation
- **Zod schemas** — validation logic lives in `src/lib/validate.ts` and is reused by both the HTML POST handler and the JSON API route
- **CSS custom properties** — design tokens in `tokens.css` allow full re-theming by editing one file
- **JSON-LD structured data** — `MusicGroup` schema in `BaseLayout.astro` improves search engine understanding

## Getting Started

```bash
npm install
cp .env.example .env       # Add your Resend API key
npm run dev                # http://localhost:4321
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Environment Variables

See `.env.example` for all required variables.

| Variable       | Description                              |
| :------------- | :--------------------------------------- |
| `RESEND_API_KEY` | API key from resend.com                |
| `EMAIL_TO`       | Address contact form submissions go to |

## Deployment

```bash
npm run build
# Output: dist/ — deploy to Vercel, Fly.io, or any Node host
```
