import { StepsTabProps } from "@/lib/types/components.types";
import CheckBoxIcon from "../../assets/Icons/CheckboxIcons";

const StepsTab = ({ isActive, isStepCompleted, text }: StepsTabProps) => {
   return (
      <div className="flex w-full flex-col gap-[.75rem]">
         <div className={`${isActive ? "bg-color-yellow-60" : "bg-Gray-200"} h-[0.25rem] w-full`}></div>
         <div className={`flex ${isStepCompleted ? "gap-[.5rem]" : "gap-[.25rem]"} items-center`}>
            <CheckBoxIcon isActive={isActive} isStepCompleted={isStepCompleted} />
            <p className={`${isActive ? "text-color-yellow-60" : "text-Gray-200"} text-[.875rem] font-[500] leading-[1.25rem]`}>{text}</p>
         </div>
      </div>
   );
};

export default StepsTab;
