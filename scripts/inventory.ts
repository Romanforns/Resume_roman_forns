/**
 * Scans _source (and optionally repos/) and produces _source/_inventory.json and _source/_snippets.md.
 * Run: npm run inventory
 */
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const sourceDir = path.join(root, '_source');
const reposDir = path.join(root, 'repos');

interface InventoryEntry {
  path: string;
  type: string;
  size: number;
  lastModified: string;
}

const inventory: InventoryEntry[] = [];
const snippets: string[] = [];

function scanDir(dir: string, basePath: string) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    const rel = path.join(basePath, e.name);
    if (e.isDirectory()) {
      scanDir(full, rel);
    } else {
      const ext = path.extname(e.name).toLowerCase();
      const types = ['.md', '.txt', '.pdf', '.docx', '.pptx', '.xlsx', '.py', '.java', '.sql', '.yml', '.yaml', '.json'];
      if (types.includes(ext) || types.some((t) => t === ext)) {
        const stat = fs.statSync(full);
        inventory.push({
          path: rel,
          type: ext.slice(1),
          size: stat.size,
          lastModified: stat.mtime.toISOString(),
        });
        if (['.md', '.txt'].includes(ext)) {
          try {
            const content = fs.readFileSync(full, 'utf-8');
            const title = content.split('\n').find((l) => l.startsWith('# '))?.slice(2) || e.name;
            snippets.push(`## ${rel}\n${title}\n`);
          } catch {
            snippets.push(`## ${rel}\n(no text extracted)\n`);
          }
        } else {
          snippets.push(`## ${rel}\n(filename: ${e.name})\n`);
        }
      }
    }
  }
}

scanDir(sourceDir, '_source');
if (fs.existsSync(reposDir)) scanDir(reposDir, 'repos');

const outInventory = path.join(sourceDir, '_inventory.json');
const outSnippets = path.join(sourceDir, '_snippets.md');
if (!fs.existsSync(sourceDir)) fs.mkdirSync(sourceDir, { recursive: true });
fs.writeFileSync(outInventory, JSON.stringify(inventory, null, 2));
fs.writeFileSync(outSnippets, snippets.join('\n') || '# No snippets\n');

console.log(`Wrote ${inventory.length} entries to _source/_inventory.json and _source/_snippets.md`);
