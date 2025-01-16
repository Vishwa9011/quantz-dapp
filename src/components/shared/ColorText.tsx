import React from "react";
import { cn } from "@/lib/utils";

type ColorTextProps = React.ComponentPropsWithRef<"span"> & {
   color: "yellow";
   text?: string;
};

const ColorText = ({ children, className, text, ...rest }: ColorTextProps) => {
   return (
      <span
         className={cn("text-inherit", className, {
            "text-color-yellow-60": rest.color === "yellow",
         })}
         {...rest}
      >
         {text ? text : children}
      </span>
   );
};

export default ColorText;
