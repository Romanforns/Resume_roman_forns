# Deploy — Resume Roman Forns

## Vercel

1. **Connect repository**  
   Push this repo to GitHub/GitLab/Bitbucket and import the project in [Vercel](https://vercel.com).

2. **Build settings**  
   - **Framework preset**: Next.js  
   - **Build command**: `npm run build` (default)  
   - **Output directory**: (leave default)  
   - **Install command**: `npm install`

3. **Environment variables**  
   None required for the current static/content-driven setup. Add any if you introduce API keys or feature flags.

4. **Domain**  
   In Vercel: Project → Settings → Domains. Add your custom domain (e.g. `romanforns.com`) and follow DNS instructions.

5. **Deploy**  
   Each push to the main branch triggers a production deploy. Preview deployments are created for pull requests.

## Other platforms

- **Netlify**: Use build command `npm run build`, publish directory `.next` (or use Next.js runtime).
- **Self-hosted**: Run `npm run build` then `npm run start`; set `PORT` if needed.

## Build checks

Before deploying, run locally:

```bash
npm run build
npm run start
```

Then open the site and test Home, Work, CV, About, Contact and print/PDF view for `/cv`.
