/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regu: ["Al-Jazeera-Arabic-Regular", "sans-serif"],
      },
    },
    colors:{
      'green' : '#38761d',
      'lightGreen' : '#93c47d'
    },
  },
  plugins: [],
}
