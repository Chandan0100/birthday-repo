/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00FF66',
          300: '#7CFFB2',
          400: '#39FF88',
          500: '#00FF66',
          600: '#00D957',
        },
        zen: {
          DEFAULT: '#00FF66',
          400: '#39FF88',
          500: '#00FF66',
          600: '#00D957',
        },
        gold: {
          DEFAULT: '#FFD166',
          300: '#FFE6A3',
          400: '#FFDC85',
          500: '#FFD166',
          600: '#F5BE47',
        },
        dark: {
          950: '#050505',
          900: '#080808',
          850: '#0B0D0C',
          800: '#101312',
          700: '#181C1B',
          border: '#1F2624',
          muted: '#666666',
          subtle: '#A0A0A0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        neonGlow: {
          '0%': { boxShadow: '0 0 10px rgba(0, 255, 102, 0.15)' },
          '100%': { boxShadow: '0 0 25px rgba(0, 255, 102, 0.4)' },
        }
      }
    },
  },
  plugins: [],
}
