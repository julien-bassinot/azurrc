/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'azur': '#06144f',
        'blue-night': '#0d88bd',
        'white-soft': '#F8F9FA',
        'grey-stone': '#8A8F94',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'cormorant': ['Cormorant SC', 'serif'],
      },
    },
  },
  plugins: [],
}
