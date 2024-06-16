/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{svelte,ts}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s infinite",
      },
      keyframes: {
        blink: {
          "35%": { opacity: 1 },
          "50%": { opacity: 0 },
          "85%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
