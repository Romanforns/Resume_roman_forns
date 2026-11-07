import Link from 'next/link';
import { getFeaturedCaseStudies } from '@/lib/content';
import { Badge } from '@/components/ui/Badge';

export function RecentWork() {
  const studies = getFeaturedCaseStudies(3);
  return (
    <section className="container mx-auto px-4 py-section">
      <h2 className="section-heading">Recent work</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {studies.map((s) => (
          <Link key={s.slug} href={`/work#${s.slug}`} className="card block group">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-semibold text-text group-hover:text-neon-cyan transition-colors">{s.title}</h3>
              {s.confidentialityLevel && s.confidentialityLevel !== 'public' && (
                <Badge variant="confidential">{s.confidentialityLevel}</Badge>
              )}
            </div>
            <p className="text-sm text-muted mb-3">{s.timeframe}</p>
            <div className="flex flex-wrap gap-1">
              {(Array.isArray(s.stack) ? s.stack.slice(0, 4) : []).map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/work" className="btn-secondary">
          View all case studies
        </Link>
      </div>
    </section>
  );
}
