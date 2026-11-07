import Image from 'next/image';
import { getCV } from '@/lib/content';
import Link from 'next/link';

export function CVPage() {
  const cv = getCV();
  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-neon-cyan/30 shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/images/avatar.jpg`}
            alt=""
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-text">{cv.name}</h1>
          <p className="text-neon-cyan font-medium mt-1">{cv.headline}</p>
        </div>
      </header>

      <section className="mb-8">
        <h2 className="section-heading">Summary</h2>
        <p className="text-muted">{cv.summary}</p>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Core strengths</h2>
        <ul className="list-disc list-inside space-y-1 text-muted">
          {cv.coreStrengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Experience</h2>
        <div className="space-y-8">
          {cv.experience.map((job, i) => (
            <div key={i}>
              <h3 className="font-semibold text-text">{job.title}</h3>
              <p className="text-sm text-muted">
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}{' '}
                · {job.start} – {job.end}
              </p>
              <p className="text-muted mt-1">{job.summary}</p>
              {job.impact && job.impact.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-muted text-sm space-y-1">
                  {job.impact.map((imp, j) => (
                    <li key={j}>{imp}</li>
                  ))}
                </ul>
              )}
              {job.projects && job.projects.length > 0 && (
                <div className="mt-4 space-y-4">
                  {job.projects.map((proj) => (
                    <div key={proj.slug ?? proj.client} className="border-l-2 border-neon-cyan/40 pl-4">
                      <h4 className="font-medium text-text text-sm">
                        {proj.slug ? (
                          <Link href={`/work#${proj.slug}`} className="hover:text-neon-cyan">
                            {proj.client}
                          </Link>
                        ) : (
                          proj.client
                        )}
                        <span className="text-muted font-normal"> · {proj.timeframe}</span>
                        {proj.kind === 'business-development' && (
                          <span className="badge ml-2 align-middle">Business development</span>
                        )}
                      </h4>
                      <p className="text-muted text-sm mt-1">{proj.summary}</p>
                      {proj.outcome && (
                        <p className="text-muted text-sm mt-1">
                          <span className="text-text">
                            {proj.kind === 'business-development' ? 'Proposal. ' : 'Outcome. '}
                          </span>
                          {proj.outcome}
                        </p>
                      )}
                      {proj.stack && proj.stack.length > 0 && (
                        <ul className="flex flex-wrap gap-1 mt-2 list-none">
                          {proj.stack.map((item) => (
                            <li key={item} className="badge">{item}</li>
                          ))}
                        </ul>
                      )}
                      {proj.proposal && (
                        <div className="mt-3 border-l-2 border-neon-purple/40 pl-3">
                          <h5 className="font-medium text-text text-sm">
                            {proj.proposal.label}
                            <span className="text-muted font-normal"> · {proj.proposal.timeframe}</span>
                            {proj.proposal.kind === 'business-development' && (
                              <span className="badge ml-2 align-middle">Business development</span>
                            )}
                          </h5>
                          <p className="text-muted text-sm mt-1">{proj.proposal.summary}</p>
                          {proj.proposal.outcome && (
                            <p className="text-muted text-sm mt-1">
                              <span className="text-text">
                                {proj.proposal.kind === 'business-development' ? 'Proposal. ' : 'Outcome. '}
                              </span>
                              {proj.proposal.outcome}
                            </p>
                          )}
                          {proj.proposal.stack && proj.proposal.stack.length > 0 && (
                            <ul className="flex flex-wrap gap-1 mt-2 list-none">
                              {proj.proposal.stack.map((item) => (
                                <li key={item} className="badge">{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {cv.earlierCareer && (
          <div className="mt-8 pt-6 border-t border-border">
            <h3 className="font-semibold text-text">{cv.earlierCareer.heading}</h3>
            <p className="text-xs text-muted mt-1">{cv.earlierCareer.period}</p>
            <p className="text-muted text-sm mt-2">{cv.earlierCareer.summary}</p>
            <ul className="mt-4 space-y-3 list-none">
              {cv.earlierCareer.roles.map((role) => (
                <li key={`${role.company}-${role.start}`}>
                  <p className="text-sm font-medium text-text">{role.title}</p>
                  <p className="text-sm text-muted">
                    {role.companyUrl ? (
                      <a href={role.companyUrl} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                        {role.company}
                      </a>
                    ) : (
                      role.company
                    )}{' '}
                    · {role.start} – {role.end}
                  </p>
                  <p className="text-muted text-sm">{role.note}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {cv.personalProjects && cv.personalProjects.length > 0 && (
        <section className="mb-8">
          <h2 className="section-heading">Personal &amp; Side Projects</h2>
          <p className="text-muted text-sm mb-4">Local infrastructure first, the tools the lab runs on. Then the products.</p>
          {(
            [
              ["infrastructure", "Local infrastructure"],
              ["product", "Products"],
            ] as const
          ).map(([group, heading]) => {
            const items = cv.personalProjects!.filter((proj) => (proj.group ?? "product") === group);
            if (items.length === 0) return null;
            return (
              <div key={group} className="mb-6">
                <h3 className="font-semibold text-text mb-3">{heading}</h3>
                <div className="space-y-5">
                  {items.map((proj) => (
                    <div key={proj.slug ?? proj.title} className="border-l-2 border-neon-purple/50 pl-4">
                      <h4 className="font-semibold text-text text-base">
                        {proj.slug ? (
                          <Link href={`/work#${proj.slug}`} className="hover:text-neon-cyan">
                            {proj.title}
                          </Link>
                        ) : (
                          proj.title
                        )}
                      </h4>
                      <p className="text-xs text-muted">{proj.timeframe}</p>
                      <p className="text-muted text-sm mt-1">{proj.description}</p>
                      {proj.outcome && (
                        <p className="text-muted text-sm mt-1">
                          <span className="text-text">Outcome. </span>
                          {proj.outcome}
                        </p>
                      )}
                      {proj.stack && proj.stack.length > 0 && (
                        <ul className="flex flex-wrap gap-1 mt-2 list-none">
                          {proj.stack.map((item) => (
                            <li key={item} className="badge">{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      )}

      <section className="mb-8">
        <h2 className="section-heading">Skills</h2>
        <ul className="space-y-2">
          {cv.skills.map((s, i) => (
            <li key={i} className="flex justify-between gap-4">
              <span className="text-muted">{s.category}: {s.items}</span>
              {s.level != null && (
                <span className="font-mono text-sm text-neon-cyan">{s.level}%</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Areas of expertise</h2>
        <ul className="list-disc list-inside space-y-1 text-muted">
          {cv.areasOfExpertise.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Professional attributes</h2>
        <ul className="list-disc list-inside space-y-1 text-muted">
          {cv.professionalAttributes.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Languages</h2>
        <p className="text-muted">
          {cv.languages.map((l) => `${l.name}${l.level ? ` (${l.level})` : ''}`).join(' · ')}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-3">
          {cv.education.map((e, i) => (
            <div key={i}>
              <h3 className="font-semibold text-text">{e.degree}</h3>
              <p className="text-sm text-muted">
                {e.institutionUrl ? (
                  <a href={e.institutionUrl} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                    {e.institution}
                  </a>
                ) : (
                  e.institution
                )}{' '}
                · {e.start} – {e.end}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="section-heading">Contact</h2>
        <ul className="text-muted space-y-1 list-none">
          {cv.contact.location && <li>{cv.contact.location}</li>}
          {cv.contact.phone && (
            <li>
              <a href={`tel:${cv.contact.phone.replace(/\s/g, '')}`} className="text-neon-cyan hover:underline">{cv.contact.phone}</a>
            </li>
          )}
          {cv.contact.skype && (
            <li>
              <a
                href={cv.contact.skypeId ? `skype:${cv.contact.skypeId}?call` : '#'}
                className="text-neon-cyan hover:underline"
              >
                Skype: {cv.contact.skype}
              </a>
            </li>
          )}
          <li>
            <a href={`mailto:${cv.contact.email}`} className="text-neon-cyan hover:underline">{cv.contact.email}</a>
          </li>
          {cv.contact.linkedin && (
            <li>
              <a href={cv.contact.linkedin.startsWith('http') ? cv.contact.linkedin : `https://${cv.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
                LinkedIn — Román Forns
              </a>
            </li>
          )}
        </ul>
      </section>

      <div className="no-print pt-8 border-t border-border">
        <p className="text-sm text-muted mb-2">Download or share</p>
        <p className="text-sm text-muted">
          Use your browser&apos;s Print → Save as PDF for a PDF copy. For the full site, visit{' '}
          <Link href="/" className="text-neon-cyan hover:underline">romanforns.com</Link>.
        </p>
      </div>
    </article>
  );
}
