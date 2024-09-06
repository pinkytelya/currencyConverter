/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['"Raleway"', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        main: ['"DM Serif Display"', 'serif'],
      },
      colors: {
        customPink: '#917373',
        customGreen: '#003331',
        customBlack: '#4c4d55',
        fontColor: '#7bffe0'
      }
    },
  },

}
