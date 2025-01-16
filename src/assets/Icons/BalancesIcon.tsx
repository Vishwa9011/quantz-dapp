import { IconProps } from "@/lib/types/icon.types";

const BalancesIcon: React.FC<IconProps> = ({ className, color = "white" }) => {
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
            d="M19.6251 4.86084H5.37512C3.92537 4.86084 2.75012 6.03609 2.75012 7.48584V17.2358C2.75012 18.6856 3.92537 19.8608 5.37512 19.8608H19.6251C21.0749 19.8608 22.2501 18.6856 22.2501 17.2358V7.48584C22.2501 6.03609 21.0749 4.86084 19.6251 4.86084Z"
            stroke={color} // Use the color prop for stroke color
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M2.75012 9.35938H22.2501H2.75012ZM6.50012 14.4219H8.75012V15.3594H6.50012V14.4219Z"
            stroke={color} // Use the color prop for stroke color
            strokeLinejoin="round"
         />
      </svg>
   );
};

export default BalancesIcon;
