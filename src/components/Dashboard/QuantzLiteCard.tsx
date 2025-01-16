import React from "react";
import CustomButton from "../shared/CustomButton";
import { QuantzLiteCardProps } from "@/lib/types/components.types";
import { useNavigate } from "react-router-dom";

export const QuantzLiteCard: React.FC<QuantzLiteCardProps> = ({ bgClassName, buttonText1, buttonText2, descrtiption, heading, title, buttonLink1, buttonLink2 }) => {
   const navigate = useNavigate();
   const handleNavigate = (link: string) => {
      navigate(link);
   };
   return (
      <div className={`${bgClassName} px-[1.5rem] py-[2rem]`}>
         <div className="flex flex-col gap-4 tablet:gap-[1.5rem]">
            <p className="text-[1.5rem] font-[700] uppercase leading-[2.25rem] tracking-[-0.04688rem] text-color-yellow-60 tablet:text-[1.875rem]">{title}</p>
            <p className="text-[1.25rem] font-[700] leading-[2.25rem] tracking-[-0.04688rem]">{heading}</p>
            <p className="font-saira text-[.875rem] leading-[2rem] tablet:text-[1rem]">{descrtiption}</p>
         </div>

         <div className="mt-[2.5rem] flex flex-col items-center gap-[0.69813rem] tablet:mt-[4.8rem] 797:flex-row">
            <CustomButton className="w-full" text={buttonText1} onClick={() => handleNavigate(buttonLink1 || "")} />
            <CustomButton className="w-full" text={buttonText2} styletype="secondary" to={buttonLink2} />
         </div>
      </div>
   );
};
