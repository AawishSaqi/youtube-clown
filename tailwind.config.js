module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serifCustom: ['mont'],
      },
    },
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
      },
  ],
}