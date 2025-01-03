/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans'],
        montserrat: ['Montserrat', 'sans'],
        notoSerifBengali: ['"Noto Serif Bengali"'],
        notoSerifDevanagari: ['"Noto Serif Devanagari"', 'serif'],
        poppins: ['Poppins', 'sans'],
        roboto: ['Roboto', 'sans'],
      },
      backgroundImage: {
        'hero-pattern': "url('/bg-main.jpg')",
        // 'footer-texture': "url('/images/footer-texture.png')",
      },
    },
  },
  plugins: [],
}