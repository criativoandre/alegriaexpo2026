import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: '#070708',
        paper: '#ffffff',
        cream: '#f3e9d6',
        electric: '#0100f4',
        magenta: '#fb00e4',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config
