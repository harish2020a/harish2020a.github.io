/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    cursor: {
      default: "url(/cursor/xenon/blue/loc.cur), default",
      pointer: "url(/cursor/xenon/blue/link.cur), pointer",
      text: "url(/cursor/xenon/blue/text.cur), text",
    },
    extend: {
      colors: {
        customBlue: "#030712",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-bg": "url('/assets/noiseNew.png')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
