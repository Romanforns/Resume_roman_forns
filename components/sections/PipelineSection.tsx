'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { CVData } from '@/content/_schema';
import { PipelineIcon } from './PipelineIcons';

type PipelineNodeId =
  | 'education'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'summary'
  | 'contact'
  | 'resume';

interface PipelineSectionProps {
  cv: CVData;
}

function PipelineConnector({ lineClass }: { lineClass: string }) {
  return <div className={`pipeline-connector-line ${lineClass}`} aria-hidden />;
}

export function PipelineSection({ cv }: PipelineSectionProps) {
  const [activeNode, setActiveNode] = useState<PipelineNodeId | null>(null);
  const pipelineAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (pipelineAreaRef.current && !pipelineAreaRef.current.contains(e.target as Node)) {
        setActiveNode(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="border-y border-border bg-surface/50 font-sans">
      <div
        ref={pipelineAreaRef}
        className={`container mx-auto px-4 pt-4 md:pt-6 ${activeNode === null ? 'pb-4 md:pb-6' : 'pb-10 md:pb-14'}`}
      >
        {/* Vidit-style pipeline: horizontal flow with layer sections and connector lines */}
        <div className={`pipeline-container ${activeNode === null ? 'pipeline-container--symmetric' : 'mb-12'}`}>
          <div className="pipeline-flow">
            {/* Bronze Layer */}
            <div className="pipeline-layer-section bronze-layer" id="bronze">
              <div className="pipeline-layer-label bronze-label">BRONZE LAYER</div>
              <button
                type="button"
                onClick={() => setActiveNode('education')}
                onMouseEnter={() => setActiveNode('education')}
                onFocus={() => setActiveNode('education')}
                className={`pipeline-card bronze-card ${activeNode === 'education' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="education" />
                </span>
                <span className="pipeline-card-title">Education</span>
              </button>
            </div>

            <PipelineConnector lineClass="transition-line" />

            {/* Silver Layer */}
            <div className="pipeline-layer-section silver-layer" id="silver">
              <div className="pipeline-layer-label silver-label">SILVER LAYER</div>
              <button
                type="button"
                onClick={() => setActiveNode('skills')}
                onMouseEnter={() => setActiveNode('skills')}
                onFocus={() => setActiveNode('skills')}
                className={`pipeline-card pipeline-card--wide silver-card ${activeNode === 'skills' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="skills" />
                </span>
                <span className="pipeline-card-title">Skills</span>
              </button>
              <PipelineConnector lineClass="silver-line" />
              <button
                type="button"
                onClick={() => setActiveNode('experience')}
                onMouseEnter={() => setActiveNode('experience')}
                onFocus={() => setActiveNode('experience')}
                className={`pipeline-card silver-card ${activeNode === 'experience' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="experience" />
                </span>
                <span className="pipeline-card-title">Experience</span>
              </button>
              <PipelineConnector lineClass="silver-line" />
              <button
                type="button"
                onClick={() => setActiveNode('projects')}
                onMouseEnter={() => setActiveNode('projects')}
                onFocus={() => setActiveNode('projects')}
                className={`pipeline-card silver-card ${activeNode === 'projects' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="projects" />
                </span>
                <span className="pipeline-card-title">Projects</span>
              </button>
            </div>

            <PipelineConnector lineClass="transition-line" />

            {/* Gold Layer */}
            <div className="pipeline-layer-section gold-layer" id="gold">
              <div className="pipeline-layer-label gold-label">GOLD LAYER</div>
              <button
                type="button"
                onClick={() => setActiveNode('summary')}
                onMouseEnter={() => setActiveNode('summary')}
                onFocus={() => setActiveNode('summary')}
                className={`pipeline-card gold-card ${activeNode === 'summary' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="summary" />
                </span>
                <span className="pipeline-card-title">Summary</span>
              </button>
              <PipelineConnector lineClass="gold-line" />
              <button
                type="button"
                onClick={() => setActiveNode('contact')}
                onMouseEnter={() => setActiveNode('contact')}
                onFocus={() => setActiveNode('contact')}
                className={`pipeline-card gold-card ${activeNode === 'contact' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="contact" />
                </span>
                <span className="pipeline-card-title">Contact</span>
              </button>
              <PipelineConnector lineClass="gold-line" />
              <button
                type="button"
                onClick={() => setActiveNode('resume')}
                onMouseEnter={() => setActiveNode('resume')}
                onFocus={() => setActiveNode('resume')}
                className={`pipeline-card gold-card ${activeNode === 'resume' ? 'active' : ''}`}
              >
                <span className="flex items-center justify-center [&_svg]:w-5 [&_svg]:h-5" aria-hidden>
                  <PipelineIcon id="resume" />
                </span>
                <span className="pipeline-card-title">Resume</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content panel: only visible when hovering or after clicking a node; hidden when activeNode is null */}
        {activeNode !== null && (
          <div
            className="rounded-card border border-border bg-surface p-6 md:p-8 min-h-[200px] mb-6"
            role="region"
            aria-label="Pipeline content"
          >
          {activeNode === 'education' && (
            <>
              <h2 className="section-heading text-neon-cyan">Education</h2>
              <div className="space-y-3">
                {cv.education.map((e, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-text">{e.degree}</h3>
                    <p className="text-sm text-muted">
                      {e.institutionUrl ? (
                        <a
                          href={e.institutionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-cyan hover:underline"
                        >
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
            </>
          )}
          {activeNode === 'skills' && (
            <>
              <h2 className="section-heading text-neon-cyan">Skills</h2>
              <ul className="space-y-2">
                {cv.skills.map((s, i) => (
                  <li key={i} className="flex justify-between gap-4 text-muted">
                    <span>{s.category}: {s.items}</span>
                    {s.level != null && (
                      <span className="font-mono text-sm text-neon-cyan">{s.level}%</span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
          {activeNode === 'experience' && (
            <>
              <h2 className="section-heading text-neon-cyan">Work Experience</h2>
              <div className="space-y-6">
                {cv.experience.slice(0, 4).map((job, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-text">{job.title}</h3>
                    <p className="text-sm text-muted">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-cyan hover:underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}{' '}
                      · {job.start} – {job.end}
                    </p>
                    <p className="text-muted mt-1 text-sm">{job.summary}</p>
                  </div>
                ))}
                <p className="text-sm text-muted">
                  <Link href="/cv" className="text-neon-cyan hover:underline">
                    View full experience →
                  </Link>
                </p>
              </div>
            </>
          )}
          {activeNode === 'projects' && (
            <>
              <h2 className="section-heading text-neon-cyan">Projects</h2>
              <div className="space-y-3">
                {(cv.personalProjects ?? []).slice(0, 4).map((proj, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-text text-sm">
                      {proj.slug ? (
                        <Link href={`/case-studies/${proj.slug}`} className="text-neon-cyan hover:underline">
                          {proj.title}
                        </Link>
                      ) : (
                        proj.title
                      )}
                    </h3>
                    <p className="text-xs text-muted">{proj.timeframe}</p>
                    <p className="text-muted text-sm mt-0.5">{proj.description}</p>
                  </div>
                ))}
                <p className="text-sm text-muted">
                  <Link href="/work" className="text-neon-cyan hover:underline">
                    View all work →
                  </Link>
                </p>
              </div>
            </>
          )}
          {activeNode === 'summary' && (
            <>
              <h2 className="section-heading text-neon-cyan">Summary</h2>
              <p className="text-muted leading-relaxed">{cv.summary}</p>
              <p className="mt-4 text-sm text-muted">
                <Link href="/about" className="text-neon-cyan hover:underline">
                  About me →
                </Link>
              </p>
            </>
          )}
          {activeNode === 'contact' && (
            <>
              <h2 className="section-heading text-neon-cyan">Contact</h2>
              <ul className="text-muted space-y-1 list-none">
                {cv.contact.location && <li>{cv.contact.location}</li>}
                {cv.contact.phone && (
                  <li>
                    <a
                      href={`tel:${cv.contact.phone.replace(/\s/g, '')}`}
                      className="text-neon-cyan hover:underline"
                    >
                      {cv.contact.phone}
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${cv.contact.email}`} className="text-neon-cyan hover:underline">
                    {cv.contact.email}
                  </a>
                </li>
                {cv.contact.linkedin && (
                  <li>
                    <a
                      href={cv.contact.linkedin.startsWith('http') ? cv.contact.linkedin : `https://${cv.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:underline"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
              <p className="mt-4 text-sm text-muted">
                <Link href="/contact" className="text-neon-cyan hover:underline">
                  Contact page →
                </Link>
              </p>
            </>
          )}
          {activeNode === 'resume' && (
            <>
              <h2 className="section-heading text-neon-cyan">Resume</h2>
              <p className="text-muted mb-4">
                Full CV with experience, skills, education, and certifications.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/cv" className="btn-primary">
                  View full CV
                </Link>
                <a
                  href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/resume.pdf`}
                  download="Resume.pdf"
                  className="btn-primary"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </>
          )}
        </div>
        )}
      </div>
    </section>
  );
}
