/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['"Poppins"', 'serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'merriweather': ['"Merriweather"', 'serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
        'native': ['"Tiro Bangla"', 'serif']
      },
    },
  },
  plugins: [],
}