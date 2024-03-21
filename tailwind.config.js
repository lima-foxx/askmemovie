/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      // fontFamily: {
      //   display: 'Pentor, sans-serif', // Adds a new `font-display` class
      // },
      
      // screens:{
      //   'lg' : '1050px'
      // },

      colors: {
        greenLink: 'rgba(0, 220, 130, 0.1) ',
        greenBorder:'rgba(0, 220, 130, 0.25)',
        primaryGreen: {
          100: '#ccf8e6',
          200: '#99f1cd',
          300: '#66eab4',
          400: '#33e39b',
          500: '#00dc82',
          600: '#00b068',
          700: '#00844e',
          800: '#005834',
          900: '#002c1a',
        },
        grays: {
          100: '#ebedef',
          200: '#d7dadf',
          300: '#c4c8cf',
          400: '#b0b5bf',
          500: '#9ca3af',
          600: '#7d828c',
          700: '#5e6269',
          800: '#3e4146',
          900: '#1f2123',
        },

        blacks: {
          100: '#cfd1d4',
          200: '#9fa2aa',
          300: '#6f747f',
          400: '#3f4555',
          500: '#0f172a',
          600: '#0c1222',
          700: '#090e19',
          800: '#060911',
          900: '#030508',
        },

      },
    },
  },
  plugins: [],
};
