import { IconProps } from "@/lib/types/icon.types";

const ProviderIcon: React.FC<IconProps> = ({ className, color = "white" }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width="25"
         height="25"
         viewBox="0 0 25 25"
         fill="none"
         className={className} // Apply className for styling
      >
         <g clipPath="url(#clip0_505_1289)">
            <path
               d="M19.8819 13.6934C22.6414 15.9077 24.1761 17.8652 23.6464 18.7816C22.8097 20.2277 17.1411 18.5248 10.9855 14.9777C4.82984 11.4307 0.517338 7.38304 1.35359 5.93742C1.87671 5.03367 4.28703 5.35992 7.52422 6.59789"
               stroke={color} // Use the color prop for stroke color
               strokeWidth="1.5"
               strokeMiterlimit="10"
            />
            <path
               d="M12.4999 19.8589C16.642 19.8589 19.9999 16.501 19.9999 12.3589C19.9999 8.21675 16.642 4.85889 12.4999 4.85889C8.35774 4.85889 4.99988 8.21675 4.99988 12.3589C4.99988 16.501 8.35774 19.8589 12.4999 19.8589Z"
               stroke={color} // Use the color prop for stroke color
               strokeWidth="1.5"
               strokeMiterlimit="10"
            />
         </g>
         <defs>
            <clipPath id="clip0_505_1289">
               <rect width="24" height="24" fill="white" transform="translate(0.5 0.361816)" />
            </clipPath>
         </defs>
      </svg>
   );
};

export default ProviderIcon;
