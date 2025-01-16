import { IconProps } from "@/lib/types/icon.types";
import React from "react";

const Logo: React.FC<IconProps> = ({ className }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="37"
         height="42"
         viewBox="0 0 37 42"
         fill="none"
         className={className} // Apply className
      >
         <path d="M18.5 0L36.5 10.3404V31.0213L18.5 41.3617L0.5 31.0213V10.3404L18.5 0Z" fill="#DEF141" />
         <path d="M18.6276 10.2129L27.8191 15.4469V25.915L18.6276 31.1491L9.43616 25.915V15.4469L18.6276 10.2129Z" fill="black" />
         <path d="M27.8192 25.9148L36.5 20.936V30.8935L27.8192 25.9148Z" fill="black" />
         <path d="M27.8192 36.0002L36.5 31.0215V40.9789L27.8192 36.0002Z" fill="#DEF141" fillOpacity="0.3" />
      </svg>
   );
};

export default Logo;
