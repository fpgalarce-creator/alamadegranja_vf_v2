/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        linen: '#f6f2ea',
        olive: {
          900: '#253321',
          700: '#3d5433',
        },
        clay: '#b46f4c',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(37, 51, 33, 0.08)',
      },
    },
  },
  plugins: [],
};
