import { cn } from "@/lib/utils/tailwindMerge";
import { FC } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

type WhyButtonProp = {
   text: string;
   buttonStyle?: string;
   textStyles?: string;
   customIcon?: JSX.Element;
   handleClick?: () => void;
};

const WhyButton: FC<WhyButtonProp> = ({ text, buttonStyle, textStyles, customIcon, handleClick }) => {
   return (
      <button
         onClick={handleClick}
         className={cn(
            "group relative flex h-14 w-[311px] items-center justify-center gap-5 overflow-hidden border border-[#def141]/30 bg-[#00000099] px-6 py-4 backdrop-blur-[12.60px] transition-all duration-500 hover:!border-[#def141]",
            buttonStyle,
         )}
      >
         <span
            className={cn(
               "relative block translate-x-[1rem] font-chakra-patch font-semibold uppercase leading-none text-[#def141] transition-transform duration-500 group-hover:translate-x-0 tablet:text-xl",
               textStyles,
            )}
         >
            {text}
         </span>
         <span className="relative block h-6 w-6 translate-y-[3rem] text-[#def141] transition-transform duration-500 group-hover:translate-y-0">
            {customIcon ? customIcon : <HiOutlineExternalLink className="h-full w-full" />}
         </span>
      </button>
   );
};

export default WhyButton;
