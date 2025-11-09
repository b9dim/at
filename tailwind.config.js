
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        ios: "24px",
        "ios-lg": "32px"
      },
      boxShadow: {
        ios: "0 10px 30px rgba(0,0,0,0.06)"
      },
      colors: {
        sys: "rgb(var(--bg))",
        card: "rgb(var(--card))",
        label: "rgb(var(--label))",
        slabel: "rgb(var(--slabel))",
        tint: "rgb(var(--tint))"
      }
    }
  },
  corePlugins: {
    preflight: true
  }
};
