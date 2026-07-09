/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071022',
        ember: '#ff4b12',
        emberDark: '#e84412',
        cloud: '#f8f7f6',
      },
      boxShadow: {
        panel: '0 24px 65px rgba(15, 23, 42, 0.12)',
        item: '0 12px 28px rgba(15, 23, 42, 0.06)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
