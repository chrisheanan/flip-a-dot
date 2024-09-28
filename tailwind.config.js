/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');


export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font)`, ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: 'rgb(var(--black))',
        white: 'rgb(var(--white))',
      }
    },
  },
  plugins: [],
}