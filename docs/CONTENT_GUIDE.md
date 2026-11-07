# Content guide

How to add and update content for the portfolio/CV site.

## CV data (`content/cv.json`)

Edit the JSON file directly. Structure:

- **name**, **headline**, **summary**: Main title and description.
- **coreStrengths**: Array of bullet strings.
- **experience**: Array of jobs with **title**, **company**, **companyUrl**, **start**, **end**, **summary**, **impact** (array), **projects** (optional).
- **skills**: Array of `{ category, items, level? }` (level 0–100).
- **areasOfExpertise**, **professionalAttributes**: Arrays of strings.
- **languages**: Array of `{ name, level?, levelPercent? }`.
- **education**: Array of `{ degree, institution, institutionUrl?, start, end }`.
- **certifications**: Optional array of `{ name, issuer? }`.
- **contact**: `{ location?, phone?, email, linkedin?, github?, website? }`.
- **selectedProjectSlugs**: Optional array of case study slugs to feature (used for “Selected projects” if you add that section).

After editing, run `npm run build` (or refresh in dev) to see changes.

## Case studies (`content/case-studies/*.mdx`)

Each case study is one `.mdx` file. **Frontmatter** (YAML at the top) is required; the body is optional (used for future full MDX rendering).

Required / recommended frontmatter:

- **slug**: Unique id (e.g. `inditex-bi-sustainability`). Use lowercase and hyphens.
- **title**: Display title.
- **timeframe**: e.g. `"2025"`, `"2024–2026 (ongoing)"`.
- **domain**: One or more of: `data-engineering`, `analytics-bi`, `architecture-integration`, `blockchain-web3`, `ml-ai`, `sap-salesforce`, `devops-platform`.
- **stack**: Array of technologies (e.g. `Power BI`, `Snowflake`, `dbt`).
- **confidentialityLevel**: `public` | `confidential` | `internal` (default `public`).

Optional: **role**, **problem**, **approach**, **outcome**, **metrics**, **highlights**, **tags**, **artifacts**.

Example:

```yaml
---
slug: my-project
title: "My Project — Short description"
timeframe: "2025"
domain: [ "data-engineering", "analytics-bi" ]
stack: [ "dbt", "Snowflake", "Airflow" ]
confidentialityLevel: public
---
Optional body text (MDX) for future detail page.
```

After adding or changing a file, the Work page and Home “Recent work” will update on next build or dev refresh.

## Copy (`content/copy.json`)

- **hero**: headline, subline, subheadline, ctaWork, ctaContact.
- **stats**: Array of `{ label, value, safe }` for the “At a glance” cards.
- **services**: Array of `{ title, description }` for the Services section.
- **contact**: ctaPrimary, ctaSecondary.

Edit and save; no script needed.

## Adding a new case study (manual)

1. Create `content/case-studies/your-slug.mdx`.
2. Add frontmatter as above.
3. Optionally add body content (MDX) for future use.
4. If you want it featured on the home page, ensure it’s among the first by timeframe (or adjust `getFeaturedCaseStudies(3)` in `RecentWork` to pick by slug).

## Scripts (playbook)

- **inventory**: Scans `_source` (and optionally `repos/`) and writes `_source/_inventory.json` and `_source/_snippets.md`. Run after adding source materials.
- **generate:cases**: Reads the inventory and creates draft MDX files under `content/case-studies/` (heuristics-based). Run once, then edit the drafts.
- **build:case**: Interactive CLI to create one case study (when implemented).
- **highlights**: Scans `repos/` and produces `content/_generated/repo-highlights.json` (when implemented).

See the main playbook `cursor_playbook_portfolio_cv.md` for full prompt descriptions.
