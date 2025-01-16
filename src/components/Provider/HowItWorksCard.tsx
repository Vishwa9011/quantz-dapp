import React from "react";
import BackgroundCard from "../shared/BackgroundCard";
import { HowItWorksCardProps } from "@/lib/types/components.types";

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({ icon: Icon, description, title }) => {
   return (
      <div className="flex flex-1">
         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col items-center gap-[.5rem] tablet:gap-[1.5rem]">
               <div className="flex flex-col items-center gap-[.75rem]">
                  <Icon />
                  <p className="text-center text-[1.25rem] capitalize leading-[1.75rem]">{title}</p>
               </div>

               <p className="text-center font-saira leading-[1.5rem] text-Cool-300 tablet:leading-[2rem]">{description}</p>
            </div>
         </BackgroundCard>
      </div>
   );
};

export default HowItWorksCard;
