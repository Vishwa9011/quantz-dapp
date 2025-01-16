import { GreetTabProps } from "@/lib/types/components.types";
import React from "react";

const GreetTab: React.FC<GreetTabProps> = ({ heading, descrtiption }: GreetTabProps) => {
   return (
      <div className="flex flex-col gap-[1rem] bg-color-yellow-60 px-[1.75rem] py-[1.25rem] text-black">
         <p className="text-[1.5rem] font-[700] leading-[2rem] tracking-[-0.0375rem]">{heading}</p>
         <p className="font-saira font-[400]">{descrtiption}</p>
      </div>
   );
};

export default GreetTab;
