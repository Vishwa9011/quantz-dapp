import React from "react";
import { NavLink } from "react-router-dom";
import { IconProps } from "@/lib/types/icon.types";

interface NavButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
   title: string;
   icon: React.FC<IconProps>;
   to?: string;
}

const NavButton = ({ title, to = "#", icon: Icon, ...props }: NavButtonProps) => {
   const normalStyle = "w-full border border-[#fff0] gap-[.75rem] leading-[1.25rem] text-[.875rem] font-[500] items-center flex p-[1.25rem]";

   return (
      <NavLink {...props} to={to} className={({ isActive }) => (isActive ? `border !border-echelon-io-starship-30 text-color-yellow-60 ${normalStyle}` : normalStyle)}>
         {({ isActive }) => {
            return (
               <>
                  <Icon color={isActive ? "var(--color-yellow-60)" : "#fff"} />
                  <p>{title}</p>
               </>
            );
         }}
      </NavLink>
   );
};

export default NavButton;
