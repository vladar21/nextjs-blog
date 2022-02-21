module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './components/**/*.{html,tsx}',
    './pages/**/*.{html,tsx}',
    './index.tsx'
  ],
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
      },
      padding: {
        '5/6': '83.3333333%'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
