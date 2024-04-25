/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
         "color-green":"#1A4D2E",
         "color-primary":"#01051e",
         "color-primary-light":"#02076",
         "color-primary-dark":"#010417",
         "color-gray":"#333",
         "color-white":"#fff",
         "color-blob":"#A427DF",
      }
    },
    container:{
      center:true,
      padding: {
        default: '20px',
        md: '50px',
      }
    }
  },
  plugins: [],
}