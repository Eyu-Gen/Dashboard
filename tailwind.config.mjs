/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primaryColor)",
        secondaryColor: "var(--secondaryColor)",
      },

      backgroundImage: {
        bgImage: "url('/bg-image.jpg')",
      },
    },
  },
  plugins: [],
};
