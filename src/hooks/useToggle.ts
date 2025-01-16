import { useState } from "react";

const useToggle = (defaultValue = false) => {
   const [value, setValue] = useState(defaultValue);

   const toggle = (value?: boolean) => {
      setValue((prev) => value ?? !prev);
   };

   return [value, toggle] as const;
};

export default useToggle;
