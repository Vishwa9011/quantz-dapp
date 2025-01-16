import { IconProps } from "@/lib/types/icon.types";

const PictureIcon: React.FC<IconProps> = ({ className, color = "#D1D5DB" }) => {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className={className}>
         <path
            d="M19.9999 4.11328H4.99988C3.75724 4.11328 2.74988 5.12064 2.74988 6.36328V18.3633C2.74988 19.6059 3.75724 20.6133 4.99988 20.6133H19.9999C21.2425 20.6133 22.2499 19.6059 22.2499 18.3633V6.36328C22.2499 5.12064 21.2425 4.11328 19.9999 4.11328Z"
            stroke={color}
            strokeWidth="1.5"
            strokeLinejoin="round"
         />
         <path
            d="M16.2499 10.1152C17.0784 10.1152 17.7499 9.44366 17.7499 8.61523C17.7499 7.78681 17.0784 7.11523 16.2499 7.11523C15.4215 7.11523 14.7499 7.78681 14.7499 8.61523C14.7499 9.44366 15.4215 10.1152 16.2499 10.1152Z"
            stroke={color}
            strokeWidth="1.5"
            strokeMiterlimit="10"
         />
         <path
            d="M14.7499 16.105L10.5002 11.8633C10.2298 11.5929 9.8663 11.4361 9.48408 11.4247C9.10186 11.4134 8.72974 11.5485 8.44378 11.8024L2.74988 16.8649M10.9999 20.6149L16.7814 14.8333C17.0458 14.5684 17.3998 14.4118 17.7737 14.3945C18.1475 14.3772 18.5144 14.5002 18.8022 14.7395L22.2499 17.6149"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default PictureIcon;
