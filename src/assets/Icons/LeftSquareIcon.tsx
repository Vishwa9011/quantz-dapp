import { IconProps } from "@/lib/types/icon.types";

const LeftSquareIcon: React.FC<IconProps> = ({ className, color = "white" }) => {
   return (
      <svg className={className} xmlns="http://www.w3.org/2000/svg" width={10} height={38} viewBox="0 0 10 38" fill="none">
         <mask id="path-1-inside-1_24_292" fill="white">
            <path d="M0 0H10V38H0V0Z" />
         </mask>
         <path d="M0 1H10V-1H0V1ZM10 37H0V39H10V37Z" fill={color} fillOpacity="0.2" mask="url(#path-1-inside-1_24_292)" />
         <rect x="8" y="1" width="2" height="4" fill={color} fillOpacity="0.2" />
         <rect x="8" y="33" width="2" height="4" fill={color} fillOpacity="0.2" />
      </svg>
   );
};

export default LeftSquareIcon;
