/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"],
        mono: ["Roboto Mono", "monospace"]
      },
      keyframes: {
        moveleft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        moveleftsecond:{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        moveright: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moverightecond:{
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(200%)' },
        }
      },
      animation: {
        moveleft: 'moveleft 40s linear infinite',
        moveleftsecond: 'moveleftsecond 40s linear infinite',
        moveright: 'moveright 40s linear infinite',
        moverightecond: 'moverightecond 40s linear infinite',
        
      },
      transitionDelay: {
        '2000': '2000ms',
      },
      translate: {
        'minus100': '-100%',
      },
      width: {
        '125': '12.5vw',
      }
                
    },
  },
  plugins: [],
}

