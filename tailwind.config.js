/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        unbounded: ['Unbounded', 'sans-serif'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors:{
        "main": '#00296B',
        "second": '#34b1eb',
        "accent": '#FFD500'
      },
      gridTemplateColumns:{
        'square': 'repeat(2, 400px)'
      },
      backgroundImage:{
        'hero': "url('/img/car.jpg')"
      },
    },
  },
  plugins: [],
}

