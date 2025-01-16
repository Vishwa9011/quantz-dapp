import { useState, useEffect } from "react";

export type OS = "windows" | "mac" | "linux" | "android" | "ios" | "unknown";

const useOs = () => {
   const [os, setOs] = useState("unknown");

   useEffect(() => {
      const detectOS = () => {
         const userAgent = window.navigator.userAgent.toLowerCase();

         if (userAgent.includes("win")) {
            return "windows";
         } else if (userAgent.includes("mac")) {
            return "mac";
         } else if (userAgent.includes("linux")) {
            return "linux";
         } else if (userAgent.includes("android")) {
            return "android";
         } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
            return "ios";
         } else {
            return "unknown";
         }
      };

      if (typeof window !== "undefined") {
         setOs(detectOS());
      }
   }, []);

   return os;
};

export default useOs;
