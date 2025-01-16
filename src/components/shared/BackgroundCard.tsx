import React, { ReactNode } from "react";

interface BackgroundCardProps {
   children?: ReactNode; // ReactNode type to accept any valid JSX content
   bgClassName?: string;
   isborder?: boolean;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({ children, bgClassName, isborder = true }) => {
   return <div className={`${bgClassName} ${isborder ? "border border-echelon-io-starship-30" : ""} p-[1.25rem] mobile:p-[2.5rem]`}>{children}</div>;
};

export default BackgroundCard;
