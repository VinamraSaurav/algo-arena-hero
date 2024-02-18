/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "color-1": "#E1C3FF",
      "color-2": "#9D5AE3",
      "color-3": "#663B9C",
      "color-4": "#3C3D8E",
      "color-5": "#3D306F",
      "color-6": "#161A33",
      primary: "#0F1629",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      poppins: ["Poppins", "sans-serif"],
      the_bold_font:['The Bold Font']
    },
    extend: {
      backgroundImage: {
     
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "gradient-horizon":"linear-gradient(90deg, #FFF 2.09%, #9D5AE3 75.49%)",
          "gradient-hero-img":"radial-gradient(50% 50% at 50% 50%, rgba(128, 116, 255, 0.67) 0%, rgba(123, 112, 238, 0.00) 100%)"
      },
    },
  },
  plugins: [],
};