'use client';

import Link from 'next/link';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/cv', label: 'CV' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="no-print sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <nav className="container mx-auto flex flex-wrap items-center justify-end gap-4 px-4 py-3" aria-label="Main">
        <ul className="flex flex-wrap gap-6">
          {nav.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-muted hover:text-neon-cyan transition-colors focus-visible:text-neon-cyan"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
