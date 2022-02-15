module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './components/**/*.{html,tsx}',
    './pages/**/*.{html,tsx}',
    './index.tsx'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
