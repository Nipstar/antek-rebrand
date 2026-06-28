/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Brand Guidelines v2.0 — neo-brutalist dark system.
      // See docs/ANTEK-BRAND-GUIDELINES.md (source of truth).
      colors: {
        coral: '#CD5C3C', // primary accent: headline phrase, bars, numerals, CTAs
        cream: '#E8DCC8', // display headings, high-contrast text on dark
        charcoal: '#2C2C2C', // base background (was #1A1A1A pre-rebrand)
        ink: '#1A1A1A', // panels, cards, text on coral
        sage: '#C8D8D0', // rare secondary accent
        body: '#CFC6B6', // body text on dark
        muted: '#8C8880', // mono labels, captions
        hairline: 'rgba(232,220,200,0.10)', // dividers, borders between rows
        // Deprecated alias → coral. Lets unmigrated pages keep their accent
        // during the phased rollout. Remove once all pages are migrated.
        terracotta: '#CD5C3C',
      },
      fontFamily: {
        display: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'], // H1/H2/numerals, uppercase
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'], // body, UI, buttons (also default)
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'], // eyebrows, labels, price strips
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      },
      boxShadow: {
        // Hard offset shadows only — no soft/blur. ink (#1A1A1A) or coral.
        'brutal': '6px 6px 0 #1A1A1A',
        'brutal-sm': '4px 4px 0 #1A1A1A',
        'brutal-lg': '10px 10px 0 #1A1A1A',
        'brutal-xs': '2px 2px 0 #1A1A1A',
        'brutal-chat': '8px 8px 0 #1A1A1A',
        'brutal-msg': '2px 2px 0 #1A1A1A',
        'brutal-coral': '6px 6px 0 rgba(205,92,60,0.35)', // price box
        'brutal-coral-sm': '4px 4px 0 rgba(205,92,60,0.35)',
      },
      letterSpacing: {
        'tight-xl': '-2px',
        'tight-lg': '-1px',
        'eyebrow': '0.22em', // mono eyebrow/label tracking
      },
    },
  },
  plugins: [],
};
