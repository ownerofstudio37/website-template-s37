import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0c12",
          800: "#111624",
          700: "#1b2234"
        },
        brand: {
          500: "#5b8cff",
          600: "#4b78e6",
          700: "#3b63cc"
        },
        accent: {
          500: "#8ef0e7",
          600: "#61d7cd"
        }
      },
      boxShadow: {
        glow: "0 0 32px rgba(91, 140, 255, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;
