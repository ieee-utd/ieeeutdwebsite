/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ieeeorange: "#F27E2E",
        ieeeorangedim: "#F6AA76",
        ieeeblue: "#2C6A9B",
        fadedblue: "#BFD2E1",
      },
    },
  },
  plugins: [],
};
