import React from "react";
import { IconProps } from "@/lib/types/icon.types";
import H3 from "../shared/H3";

interface TabHeadingProps {
   icon: React.FC<IconProps>;
   heading: string;
}

const TabHeading: React.FC<TabHeadingProps> = ({ icon: Icon, heading }) => {
   return (
      <div className="flex flex-col items-center gap-[.75rem]">
         <Icon />
         <H3>{heading}</H3>
      </div>
   );
};

export default TabHeading;
