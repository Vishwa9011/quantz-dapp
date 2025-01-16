import { CheckboxIconProps } from "@/lib/types/icon.types";

const ActiveUncheckedCheckboxIcon: React.FC<CheckboxIconProps> = ({
   className,
   color = "#DEF141",
   strokeWidth = 4, // Default stroke width
}) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={16}
         height={16}
         viewBox="0 0 16 16"
         fill="none"
         className={className} // Apply className for additional styling
      >
         <rect
            x="2"
            y="2"
            width="12"
            height="12"
            stroke={color} // Use color prop for stroke color
            strokeWidth={strokeWidth} // Use strokeWidth prop for border width
         />
      </svg>
   );
};

const UncheckedCheckboxIcon: React.FC<CheckboxIconProps> = ({
   className,
   color = "#9FACC5",
   strokeWidth = 1.5, // Default stroke width
}) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={17}
         height={16}
         viewBox="0 0 17 16"
         fill="none"
         className={className} // Apply className for additional styling
      >
         <rect
            x="1.15002"
            y="0.75"
            width="14.5"
            height="14.5"
            stroke={color} // Use color prop for stroke color
            strokeWidth={strokeWidth} // Use strokeWidth prop for border width
         />
      </svg>
   );
};

const CheckedCheckBoxIcon: React.FC<CheckboxIconProps> = ({
   className,
   color = "#D1D8E6", // Default fill color
}) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={16}
         height={16}
         viewBox="0 0 16 16"
         fill="none"
         className={className} // Apply className for additional styling
      >
         <path
            d="M16 0L16 16H0V0H16ZM7.10355 12.1036L12.8535 6.35356C13.0488 6.15831 13.0488 5.84172 12.8535 5.64647L12.1465 4.93937C11.9512 4.74409 11.6346 4.74409 11.4393 4.93937L6.74999 9.62869L4.56064 7.43934C4.36539 7.24409 4.0488 7.24409 3.85352 7.43934L3.14642 8.14644C2.95117 8.34169 2.95117 8.65828 3.14642 8.85353L6.39642 12.1035C6.59171 12.2988 6.90827 12.2988 7.10355 12.1036Z"
            fill={color} // Use fill prop for color
         />
      </svg>
   );
};

const CheckBoxIcon = ({ isActive = false, isStepCompleted = false }: { isActive?: boolean; isStepCompleted?: boolean }) => {
   return isActive ? <ActiveUncheckedCheckboxIcon /> : isStepCompleted ? <CheckedCheckBoxIcon /> : <UncheckedCheckboxIcon />;
};

export default CheckBoxIcon;
