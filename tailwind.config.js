/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      display: ["Nunito"],
      body: ['"Open Sans"'],
    },
  },
  darkMode: "selector",
  plugins: [],
};
