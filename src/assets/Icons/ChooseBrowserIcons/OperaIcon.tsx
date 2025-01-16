import { IconProps } from "@/lib/types/icon.types";
import React from "react";

const OperaIcon: React.FC<IconProps> = ({ className }) => {
   return (
      <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path
            d="M10.7328 25.0176C8.9632 22.928 7.8176 19.8432 7.7408 16.3776C7.7408 16.368 7.7408 15.632 7.7408 15.6224C7.8176 12.1568 8.9632 9.072 10.7328 6.9824C13.0304 4.0032 16.4416 2.112 20.2496 2.112C22.592 2.112 24.7872 2.8288 26.6624 4.0736C23.8464 1.552 20.1344 0.016 16.0608 0C16.0416 0 16.0192 0 16 0C7.1648 0 0 7.1648 0 16C0 24.5824 6.7552 31.584 15.2384 31.9808C15.4912 31.9936 15.744 32 16 32C20.096 32 23.8336 30.4608 26.6624 27.9296C24.7872 29.1712 22.5952 29.888 20.2496 29.888C16.4416 29.888 13.0304 27.9968 10.7328 25.0176Z"
            fill="url(#paint0_linear_580_1223)"
         />
         <path
            d="M10.7329 6.98222C12.2017 5.24782 14.0961 4.20462 16.1697 4.20462C20.8289 4.20462 24.6017 9.48462 24.6017 15.9998C24.6017 22.515 20.8257 27.795 16.1697 27.795C14.0993 27.795 12.2017 26.7486 10.7329 25.0174C13.0305 27.9966 16.4417 29.8878 20.2497 29.8878C22.5921 29.8878 24.7873 29.171 26.6625 27.9294C29.9393 24.9982 32.0001 20.739 32.0001 15.9998C32.0001 11.2606 29.9393 7.00142 26.6625 4.07342C24.7873 2.82862 22.5953 2.11182 20.2497 2.11182C16.4417 2.11182 13.0305 4.00302 10.7329 6.98222Z"
            fill="url(#paint1_linear_580_1223)"
         />
         <defs>
            <linearGradient id="paint0_linear_580_1223" x1="13.3319" y1="0.521728" x2="13.3319" y2="31.5343" gradientUnits="userSpaceOnUse">
               <stop offset="0.3" stopColor="#FF1B2D" />
               <stop offset="0.4381" stopColor="#FA1A2C" />
               <stop offset="0.5939" stopColor="#ED1528" />
               <stop offset="0.7581" stopColor="#D60E21" />
               <stop offset="0.9272" stopColor="#B70519" />
               <stop offset="1" stopColor="#A70014" />
            </linearGradient>
            <linearGradient id="paint1_linear_580_1223" x1="21.3668" y1="2.34944" x2="21.3668" y2="29.7785" gradientUnits="userSpaceOnUse">
               <stop stopColor="#9C0000" />
               <stop offset="0.7" stopColor="#FF4B4B" />
            </linearGradient>
         </defs>
      </svg>
   );
};

export default OperaIcon;
