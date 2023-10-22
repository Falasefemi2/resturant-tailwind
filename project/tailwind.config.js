/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '3xl': {'min': '2000px'},
      // => @media (min-width: 2000px) { ... }
      '2xl': {'max': '1150px'},
      // => @media (max-width: 1150px) { ... }
      'xl': {'max': '850px'},
      // => @media (max-width: 850px) { ... }
      'lg': {'max': '650px'},
      // => @media (max-width: 650px) { ... }
      'md': {'max': '450px'},
      // => @media (max-width: 450px) { ... }
    },
  },
  plugins: [],
}