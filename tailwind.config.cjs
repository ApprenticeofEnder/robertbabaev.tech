/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'text': '#e9fbed',
        'background': '#000000',
        'primary': {
          50: '#ebfbe9',
          100: '#d6f7d4',
          200: '#adf0a8',
          300: '#84e87d',
          400: '#5be052',
          500: '#32d926',
          600: '#28ad1f',
          700: '#1e8217',
          800: '#14570f',
          900: '#0a2b08',
          950: '#051604',
        },
        'secondary': {
          50: '#edfbe9',
          100: '#dbf7d4',
          200: '#b7f0a8',
          300: '#92e87d',
          400: '#6ee052',
          500: '#4ad926',
          600: '#3bad1f',
          700: '#2c8217',
          800: '#1e570f',
          900: '#0f2b08',
          950: '#071604',
        },
        'accent': {
          50: '#ecfbe9',
          100: '#daf7d4',
          200: '#b4f0a8',
          300: '#8fe87d',
          400: '#69e052',
          500: '#44d926',
          600: '#36ad1f',
          700: '#298217',
          800: '#1b570f',
          900: '#0e2b08',
          950: '#071604',
        },
      },
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
      },
      fontFamily: {
        heading: 'Victor Mono',
        body: 'Victor Mono',
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      }
    },
  },
  plugins: [],
}
