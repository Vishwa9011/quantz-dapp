import { IconProps } from "@/lib/types/icon.types";

const DashboardIcon: React.FC<IconProps> = ({ className, color = "#DEF141" }) => {
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
            d="M10.0626 2.6123H3.68762C3.16986 2.6123 2.75012 3.03204 2.75012 3.5498V9.92481C2.75012 10.4426 3.16986 10.8623 3.68762 10.8623H10.0626C10.5804 10.8623 11.0001 10.4426 11.0001 9.92481V3.5498C11.0001 3.03204 10.5804 2.6123 10.0626 2.6123Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M21.3126 2.6123H14.9376C14.4199 2.6123 14.0001 3.03204 14.0001 3.5498V9.92481C14.0001 10.4426 14.4199 10.8623 14.9376 10.8623H21.3126C21.8304 10.8623 22.2501 10.4426 22.2501 9.92481V3.5498C22.2501 3.03204 21.8304 2.6123 21.3126 2.6123Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M10.0626 13.8623H3.68762C3.16986 13.8623 2.75012 14.282 2.75012 14.7998V21.1748C2.75012 21.6926 3.16986 22.1123 3.68762 22.1123H10.0626C10.5804 22.1123 11.0001 21.6926 11.0001 21.1748V14.7998C11.0001 14.282 10.5804 13.8623 10.0626 13.8623Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M21.3126 13.8623H14.9376C14.4199 13.8623 14.0001 14.282 14.0001 14.7998V21.1748C14.0001 21.6926 14.4199 22.1123 14.9376 22.1123H21.3126C21.8304 22.1123 22.2501 21.6926 22.2501 21.1748V14.7998C22.2501 14.282 21.8304 13.8623 21.3126 13.8623Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default DashboardIcon;
