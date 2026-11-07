import { getCV } from '@/lib/content';

export function ContactContent() {
  const cv = getCV();
  const c = cv.contact;
  return (
    <article className="max-w-xl">
      <h1 className="section-heading">Contact</h1>
      <p className="text-muted mb-6">
        For project discussions, consulting inquiries, or collaboration, reach out via email or LinkedIn.
      </p>
      <div className="card space-y-4">
        <p>
          <strong className="text-text">Email</strong>
          <br />
          <a href={`mailto:${c.email}`} className="text-neon-cyan hover:underline">
            {c.email}
          </a>
        </p>
        {c.linkedin && (
          <p>
            <strong className="text-text">LinkedIn</strong>
            <br />
            <a href={c.linkedin} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
              Román Forns
            </a>
          </p>
        )}
        {c.github && (
          <p>
            <strong className="text-text">GitHub</strong>
            <br />
            <a href={c.github} target="_blank" rel="noopener noreferrer" className="text-neon-cyan hover:underline">
              {c.github.replace('https://', '')}
            </a>
          </p>
        )}
        {c.location && (
          <p>
            <strong className="text-text">Location</strong>
            <br />
            <span className="text-muted">{c.location}</span>
          </p>
        )}
      </div>
      <p className="mt-6 text-sm text-muted">
        I typically respond within 1–2 business days. For scheduling a call, suggest a few time slots in your
        message and I will confirm.
      </p>
    </article>
  );
}
