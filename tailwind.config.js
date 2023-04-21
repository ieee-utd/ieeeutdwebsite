/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "tw-",
  theme: {
    extend: {
      colors: {
        ieeeorange: "#C85B12",
        ieeeorangedim: "#F27E2E",
        ieeeorangedark: "#AD4E0F",
        ieeeblue: "#2C6A9B",
        fadedblue: "#BFD2E1",
        lightgray: "#e9e9e9",
      },
    },
    screens: {

      "lg-sm": "821px",
    },
    minWidth: {
      '24': '7rem',
      'input': '20rem'
    }
  },
  plugins: [],
};
