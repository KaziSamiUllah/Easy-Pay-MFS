/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7469B6",
          "secondary": "#E1AFD1",
          "accent": "#FFE6E6",
          "neutral": "#3d4451",
          "base-100": "#FFF8F3",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}

