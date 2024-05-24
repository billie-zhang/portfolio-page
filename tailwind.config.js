/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#8fb8ff',
        'medium-blue': '#C5DBFF',
        'lighter-blue': '#e0ecff',
        'light-grey': '#f0f2f4',
        'grey': '#babec4',
        'medium-grey': '#888b91',
        'almost-black': '#070b13',
        'dark-dark-navy': '#0f141f',
        'dark-navy': '#151b28',
        'navy': '#001a4d',
        'pale-blue': '#ebf1ff',
      },
      boxShadow: {
        'navBar': '0 4px 4px hsla(218, 25%, 43%, 0.3)',
      }
    },
    fontFamily: {
      signature: ["Libre Baskerville"],
    },
  },
  plugins: [],
}
