import Link from 'next/link';
import copy from '@/content/copy.json';

export function Connect() {
  const c = copy.contact;
  return (
    <section className="container mx-auto px-4 py-section">
      <div className="card max-w-xl">
        <h2 className="section-heading">Connect</h2>
        <p className="text-muted mb-6">{c.ctaSecondary}</p>
        <Link href="/contact" className="btn-primary">
          {c.ctaPrimary}
        </Link>
      </div>
    </section>
  );
}
