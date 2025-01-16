import { IconProps } from "@/lib/types/icon.types";

const ActivitiesIcon: React.FC<IconProps> = ({ className, color = "#D1D5DB" }) => {
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
            d="M15.2785 1.91016L5.00018 14.6133H11.0002L9.52315 22.7334C9.52034 22.7494 9.52106 22.7657 9.52526 22.7814C9.52945 22.797 9.53702 22.8115 9.54744 22.8239C9.55785 22.8362 9.57085 22.8462 9.58553 22.853C9.6002 22.8598 9.61619 22.8633 9.63237 22.8633V22.8633C9.64959 22.8633 9.66656 22.8592 9.68194 22.8515C9.69732 22.8438 9.71068 22.8326 9.72097 22.8188L20.0002 10.1133H14.0002L15.4842 1.99219C15.4862 1.97601 15.4848 1.95959 15.4799 1.94402C15.4751 1.92846 15.467 1.9141 15.4562 1.9019C15.4454 1.88971 15.4321 1.87996 15.4172 1.8733C15.4023 1.86664 15.3862 1.86323 15.3699 1.86328V1.86328C15.352 1.86335 15.3344 1.86763 15.3186 1.87578C15.3027 1.88393 15.2889 1.8957 15.2785 1.91016V1.91016Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default ActivitiesIcon;
