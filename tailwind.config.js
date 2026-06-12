/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0b132b',
          blue: '#1c2541',
          indigo: '#3a506b',
          gold: '#c9972b',
          goldLight: '#e8b84b',
          goldDark: '#a67c1f',
          cream: '#f9f6f0',
          sand: '#efe7da',
        },
        bg: {
          light: '#f8fafc',
          dark: '#0f172a',
          card: '#ffffff',
        },
        text: {
          primary: '#0f172a',
          body: '#334155',
          muted: '#64748b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Outfit"', 'sans-serif'],
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '32px',
        lg: '64px',
        xl: '100px',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};
