import CustomButton from "@/components/shared/CustomButton";
import { useContext } from "react";
import { useBrowserName } from "@/hooks/useBrowserInfo";
import BackgroundCard from "@/components/shared/BackgroundCard";
import { ManageFormProviderContext } from "@/context/ManageForm";
import EarthIcon from "@/assets/Icons/ChooseBrowserIcons/EarthIcon";
import { browsersData, howItWorksData } from "@/lib/data/custom.data";
import { toast } from "sonner";
import TabHeading from "../TabHeading";
import HowItWorksCard from "../HowItWorksCard";
import GreetTab from "@/components/shared/GreetTab";
import H3 from "@/components/shared/H3";

const ChooseBrowser = () => {
   const data = useContext(ManageFormProviderContext);
   if (data === null) throw new Error("Provider context is null");
   const { selectedBrowser, onBrowserSelect, nextTab, previousTab } = data;

   const browserName = useBrowserName();
   console.log("browserName", browserName);

   const selectRightBroswer = () => {
      if (selectedBrowser !== browserName) {
         toast.info("Please select the browser you are using");
         return;
      }
      nextTab();
   };
   return (
      <>
         <GreetTab
            heading="Select Your Browser"
            descrtiption="Choose the browser you’re using to access QuantZ and start earning tokens effortlessly. For the best experience, select a browser that ensures secure, seamless connectivity!"
         />

         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
               <TabHeading heading="Choose Browser" icon={EarthIcon} />

               <div className="flex flex-col gap-[1.25rem] mobile:gap-[2rem] 1326:flex-row">
                  <div className="flex flex-wrap items-center justify-center gap-[1.25rem] mobile:gap-[2rem]">
                     {browsersData.map((data) => (
                        <div
                           onClick={() => onBrowserSelect(data.id)}
                           key={data.id}
                           className={`cursor-pointer border-2 p-[.88rem] hover:border-2 hover:border-color-yellow-60 ${data.id === selectedBrowser ? "border-color-yellow-60" : "border-[#fff0]"}`}
                        >
                           <data.icon />
                        </div>
                     ))}
                  </div>

                  <div
                     onClick={() => onBrowserSelect("other")}
                     className={`${selectedBrowser === "other" ? "border-color-yellow-60" : "border-grayish-100"} flex cursor-pointer items-center justify-center border px-6 py-4 font-[600] uppercase leading-[1rem] hover:border hover:border-color-yellow-60`}
                  >
                     <p>Other Browser</p>
                  </div>
               </div>

               <div className="flex w-full flex-col-reverse gap-3 922:flex-row">
                  <CustomButton className="w-full !text-[1rem]" text="Back" styletype="secondary" onClick={previousTab} />
                  <CustomButton className="w-full !text-[1rem]" text="Select Browser" onClick={selectRightBroswer} />
               </div>
            </div>
         </BackgroundCard>

         <div className="flex flex-col gap-[1.25rem]">
            <H3>How It Works</H3>
            <div className="flex flex-col gap-[1rem] 1093:flex-row">
               {howItWorksData.map((data) => (
                  <HowItWorksCard icon={data.icon} title={data.title} description={data.description} key={data.id} />
               ))}
            </div>
         </div>
      </>
   );
};

export default ChooseBrowser;
