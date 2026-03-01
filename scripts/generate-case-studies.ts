/**
 * Reads _source/_inventory.json and produces draft MDX files under content/case-studies/.
 * Run: npm run generate:cases
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const inventoryPath = path.join(root, '_source', '_inventory.json');
const caseStudiesDir = path.join(root, 'content', 'case-studies');

interface InventoryEntry {
  path: string;
  type: string;
}

const keywords = ['Airflow', 'Talend', 'BigQuery', 'Snowflake', 'Salesforce', 'SAP', 'ETL', 'pipeline', 'DAG', 'SDGUtils', 'HYBRIS', 'carrito', 'Tryton', 'dbt', 'Fabric'];

if (!fs.existsSync(inventoryPath)) {
  console.log('No _source/_inventory.json found. Run npm run inventory first.');
  process.exit(0);
}

const inventory: InventoryEntry[] = JSON.parse(fs.readFileSync(inventoryPath, 'utf-8'));
const toProcess = inventory.filter((e) => {
  const lower = e.path.toLowerCase();
  return e.type === 'md' || e.type === 'txt' || lower.includes('readme');
});

if (toProcess.length === 0) {
  console.log('No README/md/txt files in inventory. Add sources to _source/ and run npm run inventory.');
  process.exit(0);
}

if (!fs.existsSync(caseStudiesDir)) fs.mkdirSync(caseStudiesDir, { recursive: true });

let created = 0;
for (const entry of toProcess.slice(0, 10)) {
  const base = path.basename(entry.path, path.extname(entry.path));
  const slug = base.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  if (!slug) continue;
  const outPath = path.join(caseStudiesDir, `${slug}.mdx`);
  if (fs.existsSync(outPath)) continue;
  const draft = `---
slug: ${slug}
title: "${base} — (draft from inventory)"
timeframe: "TBD"
domain: ["data-engineering"]
stack: []
problem: ""
approach: ""
outcome: ""
confidentialityLevel: public
---

What I built
Architecture
Key decisions
Impact
Tech stack
Confidentiality note: update as needed.
`;
  fs.writeFileSync(outPath, draft);
  created++;
  console.log('Created draft:', outPath);
}
console.log(`Created ${created} draft(s). Edit content/case-studies/*.mdx and remove or merge as needed.`);
