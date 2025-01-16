import BackgroundCard from "@/components/shared/BackgroundCard";
import GreetTab from "@/components/shared/GreetTab";
import { useContext } from "react";
import TabHeading from "../TabHeading";
import ProcessorIcon from "@/assets/Icons/ProcessorIcon";
import CustomButton from "@/components/shared/CustomButton";
import H3 from "@/components/shared/H3";
import { PCBrandNames, PCModelNames, Processors, ram, whySystemDetails } from "@/lib/data/custom.data";
import HowItWorksCard from "../HowItWorksCard";
import { Select } from "antd";
import DropDownIcon from "@/assets/Icons/DropDownIcon";
import { ManageFormProviderContext } from "@/context/ManageForm";
import { toast } from "sonner";

const SystemDetails = () => {
   const data = useContext(ManageFormProviderContext);
   if (data === null) throw new Error("Provider context is null");
   const { systemDetails, onSystemDetailsChange, nextTab, previousTab } = data;

   return (
      <>
         <GreetTab
            heading="Provide System Details"
            descrtiption="Select your system specs from the dropdowns to help us optimize tasks for maximum efficiency and smooth integration into the network."
         />

         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col gap-[1.5rem]">
               <TabHeading heading="System Details" icon={ProcessorIcon} />
               <div className="grid grid-cols-1 gap-[.75rem] font-roboto-mono 884:grid-cols-2">
                  <div className="">
                     <Select
                        className="custom-select-styling w-full rounded-none"
                        showSearch
                        placeholder="Select your PC Brand Name"
                        suffixIcon={<DropDownIcon />}
                        filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                        value={systemDetails.brandName}
                        options={PCBrandNames}
                        onChange={(value) => onSystemDetailsChange("brandName", value)}
                     />
                  </div>

                  <div className="mt-[.75rem] 884:mt-0">
                     <Select
                        className="custom-select-styling w-full rounded-none"
                        showSearch
                        placeholder="Select your PC Model"
                        suffixIcon={<DropDownIcon />}
                        filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                        options={systemDetails.brandName ? PCModelNames[systemDetails.brandName].map((option) => ({ ...option, value: String(option.value) })) : []}
                        value={systemDetails.modelName}
                        onChange={(value) => onSystemDetailsChange("modelName", value)}
                     />
                  </div>

                  <div className="mt-[.75rem]">
                     <Select
                        className="custom-select-styling w-full rounded-none"
                        showSearch
                        placeholder="Select Processor Brand"
                        suffixIcon={<DropDownIcon />}
                        filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                        value={systemDetails.processor}
                        options={Processors}
                        onChange={(value) => onSystemDetailsChange("processor", value)}
                     />
                  </div>

                  <div className="mt-[.75rem]">
                     <Select
                        className="custom-select-styling w-full rounded-none"
                        showSearch
                        placeholder="Enter RAM"
                        suffixIcon={<DropDownIcon />}
                        filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                        options={ram}
                        value={systemDetails.ram}
                        onChange={(value) => onSystemDetailsChange("ram", value)}
                     />
                  </div>
               </div>

               <div className="flex w-full flex-col-reverse gap-3 922:flex-row">
                  <CustomButton className="w-full !text-[1rem]" text="Back" styletype="secondary" onClick={previousTab} />
                  <CustomButton
                     className="w-full !text-[1rem]"
                     text="Next"
                     disabled={!(systemDetails.brandName && systemDetails.modelName && systemDetails.processor && systemDetails.ram)}
                     onClick={() => {
                        if (systemDetails.brandName && systemDetails.modelName && systemDetails.processor && systemDetails.ram) {
                           nextTab();
                        } else {
                           toast.warning("Please fill all the details");
                        }
                     }}
                  />
               </div>
            </div>
         </BackgroundCard>

         <div className="flex flex-col gap-[1.25rem]">
            <H3>Why System Details Are Required</H3>
            <div className="flex flex-col gap-[1rem] 1093:flex-row">
               {whySystemDetails.map((data) => (
                  <HowItWorksCard icon={data.icon} title={data.title} description={data.description} key={data.id} />
               ))}
            </div>
         </div>
      </>
   );
};

export default SystemDetails;
