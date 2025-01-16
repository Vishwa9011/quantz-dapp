import { IconProps } from "@/lib/types/icon.types";

const DeploymentsIcon: React.FC<IconProps> = ({ className, color = "#D1D5DB" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="25"
         height="25"
         viewBox="0 0 25 25"
         fill="none"
         className={className} // Apply className for styling
      >
         <path
            d="M7.99994 17.6084L1.99994 12.3584L7.99994 7.1084M16.9999 17.6084L22.9999 12.3584L16.9999 7.1084M14.7499 4.8584L10.2499 19.8584"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default DeploymentsIcon;
