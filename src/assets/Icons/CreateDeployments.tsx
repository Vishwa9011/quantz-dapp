import { IconProps } from "@/lib/types/icon.types";

const CreateDeploymentIcon: React.FC<IconProps> = ({ className, color = "#D1D5DB" }) => {
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
            d="M19.2501 12.3608H5.75012M12.5001 5.61084V19.1108"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default CreateDeploymentIcon;
