// import path from "path";
// import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

/** @type {import('tailwindcss').Config} */
export default defineConfig({
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#f58832",
        white: "#fff",
        accent: "#235391",
        secondary: "#bcbcbc",
      },
      boxShadow: {
        "3xl": " 0 0 5px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        'logo': "url(./src/assets/logo.png)",
        "login-side-image": "url('./src/assets/loginPage.jpg')",
        "home-hero": "url('./src/assets/home-hero.jpg')"
      },
    },
  },
  plugins: [],
});
