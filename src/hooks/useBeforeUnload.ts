import { useEffect } from "react";

const useBeforeUnload = (cb: () => void) => {
   useEffect(() => {
      window.onbeforeunload = () => {
         cb();
         return "Are you sure you want to leave?";
      };
   }, []);
};

export default useBeforeUnload;
