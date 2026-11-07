import Link from 'next/link';

export function Footer() {
  return (
    <footer className="no-print border-t border-border bg-surface mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-muted">© {new Date().getFullYear()} Roman Forns. Data Architect & BI Consultant.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="text-sm text-muted hover:text-neon-cyan transition-colors">
            Contact
          </Link>
          <Link href="/cv" className="text-sm text-muted hover:text-neon-cyan transition-colors">
            CV
          </Link>
        </div>
      </div>
    </footer>
  );
}
