import React from "react";
import CustomButton from "../shared/CustomButton";
import { DashboardGuideCardProps } from "@/lib/types/components.types";
import { useNavigate } from "react-router-dom";

const DashboardGuideCard: React.FC<DashboardGuideCardProps> = ({ bgClassName, buttonText1, descrtiption, heading, image, title, buttonLink1 }) => {
   const navigate = useNavigate();
   const handleNavigate = (link: string) => {
      navigate(link);
   };
   return (
      <div className={`flex flex-1 flex-col justify-between gap-[1.25rem] p-[1.5rem] tablet:gap-[2.5rem] ${bgClassName} border border-echelon-io-starship-30`}>
         <div>
            <div className="flex items-center gap-[1rem]">
               <img className="w-[3.5rem]" src={image} alt="" />
               <p className="text-[1.25rem] leading-[1.75rem]">{title}</p>
            </div>

            <p className="mt-[2rem] text-[1.5rem] font-[700] leading-[2.25rem] tracking-[-0.04688rem] tablet:mt-[4rem] tablet:text-[1.875rem]">{heading}</p>

            <p className="mt-[1.5rem] font-saira text-[.875rem] leading-[1.5rem] text-Cool-300 tablet:text-[1rem] tablet:leading-[2rem]">{descrtiption}</p>
         </div>

         <div className="flex flex-col items-center gap-[0.69813rem] 1242:flex-row">
            <CustomButton className="w-full" text={buttonText1} onClick={() => handleNavigate(buttonLink1 || "")} />
         </div>
      </div>
   );
};

export default DashboardGuideCard;
