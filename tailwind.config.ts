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
        // Pipeline (image reference)
        'pipeline-bronze': '#3E2D12',
        'pipeline-bronze-border': '#CE8F3F',
        'pipeline-silver': '#4d4d4d',
        'pipeline-silver-border': '#8a8a8a',
        'pipeline-gold': '#5c4a1f',
        'pipeline-gold-border': '#CE8F3F',
        'pipeline-node': '#202020',
        'pipeline-node-border': '#404040',
        'pipeline-line': '#FFD700',
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
        'pipeline-layer': '0 4px 24px rgba(0,0,0,0.3)',
        'pipeline-node': 'inset 0 1px 0 rgba(255,255,255,0.06), 0 2px 8px rgba(0,0,0,0.4)',
        'pipeline-node-hover': '0 0 0 2px rgba(255, 215, 0, 0.9), 0 0 20px 2px rgba(255, 215, 0, 0.35)',
      },
      spacing: {
        section: '4rem',
      },
    },
  },
  plugins: [],
};

export default config;
