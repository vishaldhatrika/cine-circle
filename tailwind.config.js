/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        alice: ['Alice', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
        dmSans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

