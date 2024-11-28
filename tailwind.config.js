/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
     colors:{
      'button-org-color':'#E92577',

     },

    },
  },
  plugins: [],
}
