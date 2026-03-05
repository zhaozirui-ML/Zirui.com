/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: '#F2F2F2',
        'text-primary': '#1a1a2e',
        'text-muted': '#6b7280',
        'text-caption': '#9ca3af',
        accent: '#4f46e5',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        content: '1200px',
        article: '720px',
      },
      zIndex: {
        nav: '100',
        lightbox: '200',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
