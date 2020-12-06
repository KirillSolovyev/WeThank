module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          '300': '#E5E5E5',
          '400': '#C4C4C4'
        }
      },
      width: {
        'content': '1200px'
      },
      opacity: {
        '15': '0.15'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
