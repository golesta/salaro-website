/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': '#0f172a',
        'navy-light': '#1e293b',
        'amber': '#f59e0b',
        'amber-light': '#fbbf24',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero': "url('/images/hero_bg.png')",
        'contact': "url('/images/contact_bg.png')",
      }, 
    },
  },
  plugins: [],
}