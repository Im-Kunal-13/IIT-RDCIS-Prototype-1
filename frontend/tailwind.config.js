module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        start: "100px",
        sm1: "700px",
        md1: "800px",
        md2: "900px",
        lg1: "1100px",
        lg2: "1200px",
        lg3: "1300px",
        lg4: "1400px",
        xl: "1280px",
        xl1: "1400px",
        xl2: "1500px",
      },
      colors: () => ({
        darkBlue: "#2437DA",
        lightBlue: "#1340E8",
        lightBlue1: "#00c4cc",
        lightBlue2: "#015FF3",
        themeViolet1: "#BA01FF",
        themeBlue1: "#7944F6",
        lightCyan: "#77EFEC",
        deepViolet: "#8b3dff",
        lightViolet: "#9e77f3",
        semiDeepViolet: "#7300e6",
        nav1Hover: "#1341e825",
        nav2Hover: "rgba(255, 255, 255, 0.200)",
        nav2Selected: "rgba(255, 255, 255, 0.300)",
        offCanvasHover: "rgba(0, 0, 0, 0.100)",
        offCanvasSelected: "rgba(0, 0, 0, 0.150)",
        accordianBgBlue: "#e7f1ff",
        lightBlack1: "#101010",
        bgGray: "#f1f1f1",
        infoCardLightGreen: "#E1FCD9",
        infoCardDarkGreen: "#31E802",
        infoCardDarkYellow: "rgb(255, 193, 7)",
        infoCardLightRed: "#FFD9DE",
        infoCardDarkRed: "#FF0022",
        bgCardWhiteOutline: "#E8EAFB",
        pieChartGray: "rgb(158 158 158)",
      }),
      boxShadow: {
        nav2Hover: "0 0 2px 1px rgba(255, 255, 255, 0.200)",
        cardCut: "inset 2px 0px 8px rgba(0, 0, 0, 0.450)",
        logCard: "0px 0px 10px 2px rgba(0, 0, 0, 0.5)",
        carouselArrowHoverPurple: "0px 0px 10px 2px #7944F6",
        carouselArrowHoverBlue: "0px 0px 10px 2px #015FF3",
        themeGlowPurple: "0 0 10px 1px #7944F6",
        themeGlowBlue: "0 0 10px 1px #015ff3",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
