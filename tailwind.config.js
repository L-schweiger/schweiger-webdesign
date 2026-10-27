/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9fa',
          100: '#d7eff2',
          200: '#b4e1e6',
          300: '#7fc9d3',
          400: '#46aab7',
          500: '#2b8793',
          600: '#24656d', // Exact primary teal from screenshot
          700: '#1c5259',
          800: '#174349',
          900: '#13373c',
          950: '#0a1f22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        sketch: ['Architects Daughter', 'Caveat', 'Patrick Hand', 'cursive', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'paper': '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
        'paper-lg': '0 20px 50px -10px rgba(0, 0, 0, 0.12), 0 10px 20px -5px rgba(0, 0, 0, 0.06)',
        'glow': '0 0 35px -5px rgba(13, 148, 136, 0.35)',
      }
    },
  },
  plugins: [],
}
