export interface IconProps {
   className?: string;
   color?: string;
}

export interface CheckboxIconProps extends IconProps {
   strokeWidth?: number;
   checked?: boolean;
   isActive?: boolean;
}
