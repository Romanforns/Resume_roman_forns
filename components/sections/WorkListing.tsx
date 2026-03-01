'use client';

import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import type { CaseStudyWithSlug } from '@/lib/content';

const domains = [
  'data-engineering',
  'analytics-bi',
  'architecture-integration',
  'blockchain-web3',
  'ml-ai',
  'sap-salesforce',
  'devops-platform',
] as const;

export function WorkListing({ studies }: { studies: CaseStudyWithSlug[] }) {
  type Domain = (typeof domains)[number];
  const [domainFilter, setDomainFilter] = useState<Domain | null>(null);

  const filtered = useMemo(() => {
    if (!domainFilter) return studies;
    return studies.filter((s) => {
      const d = s.domain;
      if (Array.isArray(d)) return d.includes(domainFilter);
      return d === domainFilter;
    });
  }, [studies, domainFilter]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          type="button"
          onClick={() => setDomainFilter(null)}
          className={`badge cursor-pointer ${domainFilter === null ? 'border-neon-cyan text-neon-cyan' : ''}`}
        >
          All
        </button>
        {domains.map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDomainFilter(d)}
            className={`badge cursor-pointer ${domainFilter === d ? 'border-neon-cyan text-neon-cyan' : ''}`}
          >
            {d.replace(/-/g, ' ')}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {filtered.map((s) => (
          <article
            key={s.slug}
            id={s.slug}
            className="card scroll-mt-24"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h2 className="text-xl font-semibold text-text">{s.title}</h2>
              {s.confidentialityLevel && s.confidentialityLevel !== 'public' && (
                <Badge variant="confidential">{s.confidentialityLevel}</Badge>
              )}
            </div>
            <p className="text-sm text-muted mb-3">{s.timeframe}</p>
            {s.approach && <p className="text-muted text-sm mb-3 line-clamp-2">{s.approach}</p>}
            <div className="flex flex-wrap gap-1">
              {(Array.isArray(s.stack) ? s.stack : []).map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-muted">No case studies match the selected filter.</p>
      )}
    </>
  );
}
