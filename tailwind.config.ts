import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111F",
        violet: "#7C3AED",
        cyan: "#06B6D4"
      },
      boxShadow: {
        glow: "0 0 60px rgba(124,58,237,.18)",
        card: "0 18px 70px rgba(7,17,31,.08)"
      }
    }
  },
  plugins: []
};
export default config;
