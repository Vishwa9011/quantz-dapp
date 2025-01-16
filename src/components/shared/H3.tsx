import { cn } from "@/lib/utils";
import React from "react";

interface H3Props {
   children?: React.ReactNode;
   className?: string;
}

const H3: React.FC<H3Props> = ({ children, className }) => {
   return <p className={cn(`text-center text-[1.5rem] font-[700] uppercase leading-[2rem] tracking-[-0.0375rem]`, className)}>{children}</p>;
};

export default H3;
