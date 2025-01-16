import React from "react";
import { ButtonProps } from "@/lib/types/components.types";

const CustomButton: React.FC<ButtonProps> = ({ text, className, styletype, ...props }: ButtonProps) => {
   return (
      <button
         onClick={props.onClick}
         className={`${className} h-full w-full border border-echelon-io-starship-30 px-[1.5rem] py-[1rem] font-[600] uppercase leading-[1rem] transition-all duration-500 hover:scale-105 active:scale-95 tablet:text-[1.25rem] ${styletype === "secondary" ? "text-color-yellow-60" : "bg-color-yellow-60 text-black"}`}
      >
         <p>{text}</p>
      </button>
   );
};

export default CustomButton;
