import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0d0d0f',
        surface: '#16161a',
        'surface-hover': '#1c1c22',
        text: '#e4e4e7',
        muted: '#71717a',
        border: '#27272a',
        'neon-cyan': '#22d3ee',
        'neon-cyan-dim': '#0891b2',
        'neon-purple': '#a78bfa',
        'neon-purple-dim': '#7c3aed',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '0.5rem',
        badge: '0.25rem',
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(34, 211, 238, 0.25)',
        'glow-purple': '0 0 20px -5px rgba(167, 139, 250, 0.25)',
      },
      spacing: {
        section: '4rem',
      },
    },
  },
  plugins: [],
};

export default config;
