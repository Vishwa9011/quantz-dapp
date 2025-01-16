import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

type ButtonProps = {
   to?: string;
   variant?: 1;
   children: React.ReactNode;
   btnType?: "button" | "link";
} & React.ComponentPropsWithRef<"button" | "a">;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(({ btnType = "button", to, className, style, children, ...rest }, ref) => {
   const variant1 = "bg-transparent text-color-yellow-60 hover:scale-100";
   const baseStyles = cn(
      "h-full w-full border text-black text-center bg-color-yellow-60 border-echelon-io-starship-30 px-[1.5rem] py-[1rem] font-[600] uppercase leading-[1rem] transition-all duration-500 hover:scale-105 active:scale-95 tablet:text-[1.25rem]",
      { [variant1]: rest.variant === 1 },
      className,
   );

   if (btnType === "link") {
      if (!to) {
         console.error("The 'to' prop is required when btnType is 'link'.");
         return null;
      }

      return (
         <a href={to} className={baseStyles} ref={ref as React.Ref<HTMLAnchorElement>} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
            {children}
         </a>
      );
   }

   return (
      <button type="button" className={baseStyles} ref={ref as React.Ref<HTMLButtonElement>} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
         {children}
      </button>
   );
});

Button.displayName = "Button";

export default Button;
