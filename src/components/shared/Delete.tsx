import React from "react";

type DeleteProps = React.ComponentPropsWithRef<"svg"> & {};

const Delete = ({ ...props }: DeleteProps) => {
   return (
      <>
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
            <path
               d="M11.5625 2.49807H8.43752C8.39635 2.4976 8.3555 2.50536 8.31738 2.5209C8.27925 2.53643 8.24461 2.55943 8.2155 2.58855C8.18639 2.61766 8.16339 2.6523 8.14785 2.69042C8.13231 2.72855 8.12455 2.7694 8.12502 2.81057V3.74807H11.875V2.81057C11.8755 2.7694 11.8677 2.72855 11.8522 2.69042C11.8367 2.6523 11.8137 2.61766 11.7845 2.58855C11.7554 2.55943 11.7208 2.53643 11.6827 2.5209C11.6445 2.50536 11.6037 2.4976 11.5625 2.49807Z"
               fill="#F14141"
            />
            <path
               d="M16.875 3.75098H13.125V2.81348C13.125 2.39908 12.9604 2.00165 12.6674 1.70862C12.3743 1.4156 11.9769 1.25098 11.5625 1.25098H8.4375C8.0231 1.25098 7.62567 1.4156 7.33265 1.70862C7.03962 2.00165 6.875 2.39908 6.875 2.81348V3.75098H3.125C2.95924 3.75098 2.80027 3.81682 2.68306 3.93403C2.56585 4.05124 2.5 4.21022 2.5 4.37598C2.5 4.54174 2.56585 4.70071 2.68306 4.81792C2.80027 4.93513 2.95924 5.00098 3.125 5.00098H3.78906L4.53125 16.9119C4.58672 17.9607 5.39062 18.751 6.40625 18.751H13.5937C14.6145 18.751 15.4023 17.9783 15.4687 16.915L16.2109 5.00098H16.875C17.0408 5.00098 17.1997 4.93513 17.3169 4.81792C17.4342 4.70071 17.5 4.54174 17.5 4.37598C17.5 4.21022 17.4342 4.05124 17.3169 3.93403C17.1997 3.81682 17.0408 3.75098 16.875 3.75098ZM7.52227 16.251H7.5C7.33803 16.2511 7.18234 16.1883 7.06575 16.0759C6.94916 15.9634 6.88077 15.8101 6.875 15.6482L6.5625 6.89824C6.55659 6.73248 6.61678 6.57116 6.72981 6.44978C6.84285 6.32839 6.99947 6.25688 7.16523 6.25098C7.33099 6.24507 7.49231 6.30526 7.6137 6.41829C7.73508 6.53132 7.80659 6.68795 7.8125 6.85371L8.125 15.6037C8.12798 15.6858 8.11474 15.7677 8.08605 15.8446C8.05736 15.9216 8.01378 15.9922 7.95781 16.0523C7.90183 16.1124 7.83455 16.1609 7.75981 16.195C7.68508 16.2291 7.60436 16.2481 7.52227 16.251ZM10.625 15.626C10.625 15.7917 10.5592 15.9507 10.4419 16.0679C10.3247 16.1851 10.1658 16.251 10 16.251C9.83424 16.251 9.67527 16.1851 9.55806 16.0679C9.44085 15.9507 9.375 15.7917 9.375 15.626V6.87598C9.375 6.71022 9.44085 6.55124 9.55806 6.43403C9.67527 6.31682 9.83424 6.25098 10 6.25098C10.1658 6.25098 10.3247 6.31682 10.4419 6.43403C10.5592 6.55124 10.625 6.71022 10.625 6.87598V15.626ZM11.875 3.75098H8.125V2.81348C8.12453 2.77231 8.13229 2.73146 8.14783 2.69333C8.16337 2.65521 8.18637 2.62057 8.21548 2.59146C8.24459 2.56234 8.27923 2.53934 8.31736 2.5238C8.35548 2.50827 8.39633 2.50051 8.4375 2.50098H11.5625C11.6037 2.50051 11.6445 2.50827 11.6826 2.5238C11.7208 2.53934 11.7554 2.56234 11.7845 2.59146C11.8136 2.62057 11.8366 2.65521 11.8522 2.69333C11.8677 2.73146 11.8755 2.77231 11.875 2.81348V3.75098ZM13.125 15.6482C13.1192 15.8101 13.0508 15.9634 12.9343 16.0759C12.8177 16.1883 12.662 16.2511 12.5 16.251H12.4773C12.3953 16.2481 12.3146 16.229 12.2399 16.1949C12.1652 16.1608 12.098 16.1123 12.0421 16.0522C11.9861 15.992 11.9426 15.9215 11.9139 15.8446C11.8852 15.7676 11.872 15.6858 11.875 15.6037L12.1875 6.85371C12.1904 6.77163 12.2095 6.69094 12.2436 6.61623C12.2777 6.54152 12.3262 6.47426 12.3863 6.41829C12.4464 6.36232 12.5169 6.31874 12.5939 6.29003C12.6708 6.26132 12.7527 6.24805 12.8348 6.25098C12.9168 6.2539 12.9975 6.27296 13.0722 6.30707C13.147 6.34118 13.2142 6.38967 13.2702 6.44978C13.3262 6.50988 13.3697 6.58042 13.3984 6.65737C13.4272 6.73432 13.4404 6.81617 13.4375 6.89824L13.125 15.6482Z"
               fill="#F14141"
            />
         </svg>
      </>
   );
};

export default Delete;
