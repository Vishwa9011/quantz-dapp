import type { Config } from "tailwindcss";

const config: Config = {
   darkMode: ["class"],
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "text-gradient": "linear-gradient(91deg, #90A955 32.19%, #C8CEAD 69.88%)",
         },
         colors: {
            bg: "#000000",
            "color-yellow-60": "#DEF141",
            "Cool-300": "#D1D5DB",
            "Cool-400": "#9CA3AF",
            "echelon-io-starship-30": "rgba(222, 241, 65, 0.30)",
            "color-white-10": "rgba(255, 255, 255, 0.10)",
            "grayish-100": "rgba(255, 255, 255, 0.30)",
            "Gray-200": "#C1C9D2",
            "echelon-io-white-20": "rgba(255, 255, 255, 0.20)",
            "echelon-io-starship": "#DEF141",
            "color-white-30": "rgba(255, 255, 255, 0.30)",
            "color-white-40": "rgba(255, 255, 255, 0.60)",
            "echelon-io-white-80": "rgba(255, 255, 255, 0.80)",
         },
         fontFamily: {
            "chakra-patch": ["Chakra Petch", "sans-serif"],
            saira: ["Saira", "sans-serif"],
            "roboto-mono": ["Roboto Mono", "monospace"],
            Hacker: ["Anonymous Pro", "monospace"],
         },
         minWidth: {
            sidebar: "var(--w-sidebar, 19.125rem)",
         },
         transitionProperty: {
            "backdrop-blur": "backdrop-filter",
         },
         screens: {
            388: "388px",
            797: "797px",
            884: "884px",
            922: "922px",
            1000: "1000px",
            1061: "1061px",
            1063: "1063px",
            1093: "1093px",
            1242: "1242px",
            1326: "1326px",
            tablet: "772px",
            mobile: "580px",
         },
         borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
         },
      },
   },
   plugins: [require("tailwindcss-animate")],
};

export default config;
