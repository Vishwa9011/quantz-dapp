/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const getBrowserName = (userAgent: string): string => {
   const ua = userAgent.toLowerCase();

   if (ua.includes("firefox")) {
      return "firefox";
   } else if (ua.includes("samsungbrowser")) {
      return "Samsung Internet";
   } else if (ua.includes("opr") || ua.includes("opera")) {
      return "opera";
   } else if (ua.includes("edg")) {
      return "edge";
   } else if (ua.includes("edge")) {
      return "edge";
   } else if (ua.includes("chrome")) {
      return "chrome";
   } else if (ua.includes("safari")) {
      return "safari";
   } else {
      return "other";
   }
};

export const useBrowserName = (): string => {
   const [broswerName, setBrowserName] = useState<string>("");
   useEffect(() => {
      async function detectBrowser() {
         if (typeof window !== "undefined") {
            let name = getBrowserName(window.navigator.userAgent);
            if (window.navigator.userAgent.toLowerCase().includes("torbrowser")) {
               name = "tor";
            }
            if (name === "chrome" && (window.navigator as any).brave) {
               const isBrave = await (window.navigator as any).brave.isBrave();
               if (isBrave) {
                  name = "brave";
               }
            }
            setBrowserName(name);
         }
      }
      detectBrowser();
   }, []);
   return broswerName;
};
