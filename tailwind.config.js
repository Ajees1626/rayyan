/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Cinzel"', 'Georgia', 'serif'],
        heading: ['"Bodoni Moda"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        sans: ['"Poppins"', 'sans-serif'],
        grotesque: ['"Bricolage Grotesque"', 'sans-serif'],
        merienda: ['"Merienda"', 'cursive'],
        nunito: ['"Nunito"', 'sans-serif'],
        raleway: ['"Raleway"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        notosans: ['"Noto Sans"', 'sans-serif'],
        spacegrotesk: ['"Space Grotesk"', 'sans-serif'],
        gruppo: ['"Gruppo"', 'sans-serif'],
        julius: ['"Julius Sans One"', 'sans-serif'],
      },
      colors: {
        primary: '#13877e',
        accent: '#f3a31f',
        secondary: '#66c5b7',
      },
    },
  },
  plugins: [],
}

