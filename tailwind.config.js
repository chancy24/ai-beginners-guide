/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#6C5CE7', light: '#A78BFA', dark: '#5B4BD6' },
        accent: { DEFAULT: '#00D2FF', light: '#66E3FF', dark: '#00A8CC' },
        surface: { DEFAULT: '#0F0F1A', light: '#1A1A2E', card: '#16213E' },
      },
      fontFamily: { sans: ['"Noto Sans SC"', '"Inter"', 'system-ui', 'sans-serif'] },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        glow: { '0%': { boxShadow: '0 0 20px rgba(108,92,231,0.3)' }, '100%': { boxShadow: '0 0 40px rgba(0,210,255,0.4)' } },
        fadeIn: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
