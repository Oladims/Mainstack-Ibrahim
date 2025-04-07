/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#131316',
        accent: '#f32d6a',
        grey: '#56616B',
      },
    },
  },
  plugins: [],
};
