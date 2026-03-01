/**
 * Generates public/resume.pdf from the built /cv page (same content as "View full CV").
 * Run after `npm run build`. Requires the static export output in `out/`.
 */
import fs from 'fs';
import path from 'path';
import http from 'http';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serveHandler = require('serve-handler');

const rootDir = process.cwd();
const outDir = path.join(rootDir, 'out');
const publicDir = path.join(rootDir, 'public');
const pdfPath = path.join(publicDir, 'resume.pdf');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const port = 37542;

async function main() {
  if (!fs.existsSync(outDir)) {
    console.error('Missing "out" folder. Run "npm run build" first.');
    process.exit(1);
  }

  const server = http.createServer((req, res) =>
    serveHandler(req, res, { public: outDir, cleanUrls: false })
  );

  await new Promise<void>((resolve, reject) => {
    server.listen(port, () => resolve()).on('error', reject);
  });

  const baseUrl = `http://127.0.0.1:${port}`;
  const cvPath = basePath ? `${basePath}/cv` : '/cv';
  const cvUrl = `${baseUrl}${cvPath}`;

  const puppeteer = require('puppeteer');
  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.emulateMediaType('print');
    await page.goto(cvUrl, { waitUntil: 'networkidle0', timeout: 30000 });

    await page.evaluate(() => document.querySelector('.no-print')?.remove());

    if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
    });

    fs.copyFileSync(pdfPath, path.join(outDir, 'resume.pdf'));
    console.log('Generated:', pdfPath);
  } finally {
    if (browser) await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

