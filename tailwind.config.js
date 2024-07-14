/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      active: '/images/btn_arc-pressed.png',
      fontFamily: {
        jerseyCharted: ["Jersey 25 Charted", "sans-serif"],
        slikScreen: ["Silkscreen", "sans-serif"],
        AntonSc: ["Anton SC", "sans-serif"],
        sixtyfour: ["Sixtyfour", "sans-serif"],
      },
      boxShadow: {
        '2xl': '0px 0px 31px 0px rgba(255,213,0,0.91)',
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      }
    }
  },
  plugins: [
            require('tailwind-scrollbar'),
  ],
}