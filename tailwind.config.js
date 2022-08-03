/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^from-(gray|green|blue)-/,
    },
    {
      pattern: /^to-(gray|green|blue)-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
