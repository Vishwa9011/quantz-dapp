import React from "react";
import { IconProps } from "./icon.types";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   styletype?: "primary" | "secondary";
   text: string;
   to?: string;
}

export interface DashboardGuideCardProps {
   image: string;
   title: string;
   heading: string;
   descrtiption: string;
   buttonText1: string;
   buttonLink1?: string;
   buttonText2: string;
   buttonLink2?: string;
   bgClassName: string;
}

export interface QuantzLiteCardProps extends Omit<DashboardGuideCardProps, "image"> {
   id?: string;
}

export interface GreetTabProps {
   heading: string;
   descrtiption: string;
}

export interface StepsTabProps {
   isActive: boolean;
   isStepCompleted: boolean;
   text: string;
}

export interface HowItWorksCardProps {
   title: string;
   icon: React.FC<IconProps>;
   description: string;
}

export type Browsers = "chrome" | "brave" | "firefox" | "safari" | "edge" | "opera" | "tor" | "other";

export interface BrowserData {
   browser: string;
   icon: React.FC<IconProps>;
   id: Browsers;
}
