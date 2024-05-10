/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
    },
  },
  plugins: [],
};
