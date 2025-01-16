import { IconProps } from "@/lib/types/icon.types";
import React from "react";

const WalletIcon3: React.FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
         <path
            d="M19.5001 6.74707H4.50012C3.25748 6.74707 2.25012 7.75443 2.25012 8.99707V17.9971C2.25012 19.2397 3.25748 20.2471 4.50012 20.2471H19.5001C20.7428 20.2471 21.7501 19.2397 21.7501 17.9971V8.99707C21.7501 7.75443 20.7428 6.74707 19.5001 6.74707Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
         />
         <path
            d="M19.2826 6.7512V5.34495C19.2825 5.00005 19.2063 4.65942 19.0594 4.34737C18.9125 4.03532 18.6985 3.75954 18.4327 3.53971C18.1669 3.31988 17.8559 3.16141 17.5219 3.07562C17.1878 2.98983 16.8389 2.97882 16.5001 3.04339L4.15512 5.15042C3.61902 5.25258 3.13538 5.53863 2.78761 5.95922C2.43984 6.37981 2.24975 6.90858 2.25012 7.45432V9.7512"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
         />
         <path
            d="M17.2501 14.998C16.9534 14.998 16.6634 14.9101 16.4167 14.7453C16.17 14.5804 15.9778 14.3462 15.8642 14.0721C15.7507 13.798 15.721 13.4964 15.7789 13.2054C15.8368 12.9144 15.9796 12.6472 16.1894 12.4374C16.3992 12.2276 16.6665 12.0847 16.9574 12.0269C17.2484 11.969 17.55 11.9987 17.8241 12.1122C18.0982 12.2258 18.3324 12.418 18.4973 12.6647C18.6621 12.9114 18.7501 13.2014 18.7501 13.498C18.7501 13.8959 18.592 14.2774 18.3107 14.5587C18.0294 14.84 17.6479 14.998 17.2501 14.998Z"
            fill="white"
         />
      </svg>
   );
};

export default WalletIcon3;
