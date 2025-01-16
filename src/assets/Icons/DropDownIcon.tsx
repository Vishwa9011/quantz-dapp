import { IconProps } from "@/lib/types/icon.types";
import React from "react";

const DropDownIcon: React.FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
         <path
            d="M3.06264 5.94174L7.43077 11.0392C7.50118 11.1214 7.58852 11.1873 7.6868 11.2325C7.78508 11.2777 7.89197 11.3011 8.00014 11.3011C8.10832 11.3011 8.21521 11.2777 8.31349 11.2325C8.41177 11.1873 8.49911 11.1214 8.56952 11.0392L12.9376 5.94174C13.3545 5.45518 13.0089 4.70361 12.3683 4.70361H3.63077C2.99014 4.70361 2.64452 5.45518 3.06264 5.94174Z"
            fill="white"
         />
      </svg>
   );
};

export default DropDownIcon;
