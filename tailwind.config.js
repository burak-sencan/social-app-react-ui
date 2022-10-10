/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteBackground: 'rgb(245, 247, 248)',
        red: 'rgb(245, 68, 97)',
        green: 'rgb(92,155,146)',
        sidebarSociality: 'rgb(49,54,59)',
        sidebarBrand: 'rgb(42,47,51)',
        sidebar: 'rgb(57,61,66)',
        sidebarActive: 'rgb(245,86,97)',

        published: 'rgb(172, 172, 172)',
        scheduled: 'rgb(58, 192, 131)',
        needApproval: 'rgb(247, 191, 56)',
        error: 'rgb(251, 100, 80)',
        notes: 'rgb(171, 211, 245)',
      },
    },
  },
  plugins: [],
}
