/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primeryFirst: "#FF5534",
        primerySecond: "#5CAC88",
        primeryThird: "#C7EBC5",
      },
      screens: {
        'xs': '475px',      // Extra small devices
        'sm': '640px',      // Small devices
        'md': '768px',      // Medium devices
        'lg': '1024px',     // Large devices
        'xl': '1280px',     // Extra large devices
        '2xl': '1536px',    // 2X large devices
        '3xl': '1700px',    // 3X large devices
      },
    },
  },
  plugins: [],
};

