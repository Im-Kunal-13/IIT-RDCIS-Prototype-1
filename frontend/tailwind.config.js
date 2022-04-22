module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm1: "700px",
        md1: "800px",
        md2: "900px",
        lg1: "1100px",
        lg2: "1200px",
        xl: "1280px",
        xl1: "1400px",
        xl2: "1500px",
      },
      colors: () => ({
        darkBlue: "#2437DA",
        lightBlue: "#1340E8",
        lightBlue1: "#00c4cc",
        deepViolet: "#8b3dff",
        lightViolet: "#9e77f3",
        semiDeepViolet: "#7300e6",
        nav1Hover: "#1341e825",
        nav2Hover: "rgba(255, 255, 255, 0.200)",
        nav2Selected: "rgba(255, 255, 255, 0.300)",
        offCanvasHover: "rgba(0, 0, 0, 0.100)",
        offCanvasSelected: "rgba(0, 0, 0, 0.150)",
        accordianBgBlue: "#e7f1ff",
      }),
      boxShadow: {
        nav2Hover: "0 0 2px 1px rgba(255, 255, 255, 0.200)",
      },
    },
  },
  plugins: [],
};
