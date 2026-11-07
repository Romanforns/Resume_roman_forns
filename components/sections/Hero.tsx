import Link from 'next/link';
import copy from '@/content/copy.json';

export function Hero() {
  const hero = copy.hero;
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl">
        <p className="text-neon-cyan font-mono text-sm uppercase tracking-wider mb-2">{hero.subline}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">{hero.headline}</h1>
        <p className="text-lg text-muted mb-8">{hero.subheadline}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/work" className="btn-primary">
            {hero.ctaWork}
          </Link>
          <Link href="/contact" className="btn-secondary">
            {hero.ctaContact}
          </Link>
        </div>
      </div>
    </section>
  );
}
