/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'Light-slate-blue': 'hsl(252, 100%, 67%)',
        'Light-royal-blue': 'hsl(241, 81%, 54%)',
        'Violet-blue': 'hsla(256, 72%, 46%, 1)',
        'Persian-blue': 'hsla(241, 72%, 46%, 0)',
        'White': 'hsl(0, 0%, 100%)',
        'Pale-blue': 'hsl(221, 100%, 96%)',
        'Light-lavender': 'hsl(241, 100%, 89%)',
        'Dark-gray-blue': 'hsl(224, 30%, 27%)',
        'Light-blue': '#CAC9FF',
        'Dark-Navy': '#303B59',
        'Light-red': '#FF5555',
        'Orangey-yellow': '#FFB21E',
        'Green-teal': '#00BB8F',
        'Cobalt-blue': '#1125D6',
        'red-opacity': '',
        'yellow-opacity': '',
        borderRadius: {
        },
        keyframes: {
        },
        animation: {
        },
      },
    },
    plugins: [require("tailwindcss-animate")],
  }
}