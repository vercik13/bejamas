/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },



    extend: {
      colors: {
        primary: '#E4E4E4',
        secondary: '#656565',
      },
      borderColor: (theme) => ({
        ...theme('colors'),
      }),
    },
  },
  plugins: [],
}
