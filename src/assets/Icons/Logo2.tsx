import { IconProps } from "@/lib/types/icon.types";
import React from "react";

const Logo2: React.FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="29" height="38" viewBox="0 0 29 38" fill="none">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.7839 10.3377L14.6139 3.9209L3.44391 10.3377V23.1713L14.6139 29.5881L20.4013 26.2634L25.7839 29.3504V23.0921L20.3969 20.0025L25.7839 16.9129L25.7839 10.3377ZM20.3969 13.5065L14.6931 10.2585L8.98927 13.5065V20.0025L14.6931 23.2505L20.3969 20.0025L20.3969 13.5065Z"
            fill="#DEF141"
         />
      </svg>
   );
};

export default Logo2;
