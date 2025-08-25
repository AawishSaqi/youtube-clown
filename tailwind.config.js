/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  
  plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/line-clamp'),
      function ({ addUtilities }) {
          addUtilities({
              '.scrollbar-hide': {
                  /* Firefox */
                  'scrollbar-width': 'none',
                  /* Safari and Chrome */
                  '&::-webkit-scrollbar': {
                      display: 'none',
                  },
              },
          });
      },x
  ],
};
