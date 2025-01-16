import { cn } from "@/lib/utils";
import React from "react";

type DividerProps = React.ComponentPropsWithRef<"div"> & {};

const Divider = ({ className, ...props }: DividerProps) => {
   return <div className={cn("h-[1px] w-full bg-grayish-100")} {...props} />;
};

export default Divider;
