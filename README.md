# Resume — Roman Forns

Portfolio and CV site: **Data Architect & BI Consultant**. Minimal dark theme with neon accents (cyan/purple), consultant tone.

## Tech stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** (design tokens: dark graphite, neon cyan/purple)
- **MDX** for case studies
- **Content**: `content/cv.json`, `content/case-studies/*.mdx`, `content/copy.json`

## Routes

| Route    | Description                |
| -------- | -------------------------- |
| `/`      | Home (Hero, Stats, Work, Services, Connect) |
| `/work`  | Case studies with domain filters |
| `/cv`    | CV (print/PDF friendly)    |
| `/about` | About & principles         |
| `/contact` | Contact & links         |

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — Development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — ESLint
- `npm run inventory` — Scan `_source` and produce inventory (see playbook)
- `npm run generate:cases` — Generate case study drafts from inventory
- `npm run highlights` — Repo highlights (when `repos/` exists)

## Content

- **CV data**: Edit `content/cv.json` (experience, skills, education, contact).
- **Case studies**: Add or edit `.mdx` files in `content/case-studies/` with frontmatter (slug, title, timeframe, domain, stack, confidentialityLevel, etc.).
- **Copy**: Edit `content/copy.json` for hero, stats, services, contact CTAs.

See `docs/CONTENT_GUIDE.md` for details.

## Deploy

See `docs/DEPLOY.md` for Vercel (or other) deployment steps.
