import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'space': {
          black: '#0a0e17',
          darker: '#060912',
          dark: '#0d1321',
          medium: '#121a2f',
          light: '#1a2440',
          border: '#1e2d50',
          text: '#94a3b8',
          heading: '#e2e8f0',
        },
        'accent': {
          blue: '#3b82f6',
          'blue-light': '#60a5fa',
          'blue-dark': '#1d4ed8',
          amber: '#f59e0b',
          'amber-light': '#fbbf24',
          purple: '#8b5cf6',
          teal: '#14b8a6',
          green: '#22c55e',
          red: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.8' },
        },
      },
      maxWidth: {
        'content': '720px',
        'wide': '1120px',
      },
    },
  },
  plugins: [],
};
export default config;
