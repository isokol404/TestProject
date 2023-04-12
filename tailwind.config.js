/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /grid-+/,
    },
    {
      pattern: /bg-+/,
    },
    {
      pattern: /shadow-+/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

