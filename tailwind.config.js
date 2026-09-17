/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FFF9F2',
          200: '#FFF4E8',
          300: '#FFEDE1',
          400: '#FFE4D1',
        },
        zenOrange: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        zenGold: {
          DEFAULT: '#FFD166',
          300: '#FFE6A3',
          400: '#FFDC85',
          500: '#FFD166',
          600: '#F5BE47',
        },
        zenRose: {
          DEFAULT: '#F7A8B8',
          400: '#F9B7C4',
          500: '#F7A8B8',
          600: '#EE889E',
        },
        warmCharcoal: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          400: '#A8A29E',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
          950: '#0C0A09',
        },
        neon: {
          DEFAULT: '#00FF66',
          300: '#7CFFB2',
          400: '#39FF88',
          500: '#00FF66',
          600: '#00D957',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'Cambria', 'serif'],
        handwriting: ['Caveat', 'cursive', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
