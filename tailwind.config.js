/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617',
        card: '#0f172a',
        primary: '#6366f1',
        gold: '#f59e0b',
        success: '#10b981',
      },
    },
  },
  plugins: [],
}
