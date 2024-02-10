/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-yellow': 'hsl(47, 88%, 63%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-grey': 'hsl(0, 0%, 50%)',
        'custom-black': 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        primary: 'Figtree',
        italic: 'FigtreeItalic',
      },
      boxShadow: {
        card: '0px 0px 0px 0px hsl(0, 0%, 7%)',
      },
    },
  },
  plugins: [],
};
