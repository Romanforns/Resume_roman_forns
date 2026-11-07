import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cvSchema, type CVData } from '@/content/_schema';
import type { CaseStudyFrontmatter } from '@/content/_schema';

const contentDir = path.join(process.cwd(), 'content');
const caseStudiesDir = path.join(contentDir, 'case-studies');

export function getCV(): CVData {
  const filePath = path.join(contentDir, 'cv.json');
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return cvSchema.parse(raw);
}

export interface CaseStudyWithSlug extends CaseStudyFrontmatter {
  slug: string;
  excerpt?: string;
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(caseStudiesDir)) return [];
  return fs.readdirSync(caseStudiesDir).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''));
}

export function getCaseStudyBySlug(slug: string): CaseStudyWithSlug | null {
  const p = path.join(caseStudiesDir, `${slug}.mdx`);
  if (!fs.existsSync(p)) return null;
  const raw = fs.readFileSync(p, 'utf-8');
  const { data } = matter(raw);
  return { ...data, slug } as CaseStudyWithSlug;
}

export function getAllCaseStudies(): CaseStudyWithSlug[] {
  const slugs = getCaseStudySlugs();
  const studies = slugs.map((s) => getCaseStudyBySlug(s)).filter((x): x is CaseStudyWithSlug => x !== null);
  return studies.sort((a, b) => (b.timeframe || '').localeCompare(a.timeframe || ''));
}

export function getFeaturedCaseStudies(limit = 3): CaseStudyWithSlug[] {
  const all = getAllCaseStudies();
  return all.slice(0, limit);
}
