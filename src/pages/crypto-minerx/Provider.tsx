import { cn } from "@/lib/utils/tailwindMerge";
import StepsTab from "@/components/Provider/StepsTab";
import { useProviderForm } from "@/context/ManageForm";
import { SocketProvider } from "@/context/SocketProvider";
import TerminalTab from "@/components/Provider/Tabs/Terminal";
import ChooseBrowser from "@/components/Provider/Tabs/ChooseBrowser";
import SystemDetails from "@/components/Provider/Tabs/SystemDetails";
import ConnectWalletTab from "@/components/Provider/Tabs/ConnectWalletTab";

const tabs = [
   {
      id: "rar345",
      text: "Connect Wallet",
      RenderElement: ConnectWalletTab,
   },
   {
      id: "rar346",
      text: "Choose Browser",
      RenderElement: ChooseBrowser,
   },
   {
      id: "rar347",
      text: "System Details",
      RenderElement: SystemDetails,
   },
   {
      id: "rar348",
      text: "Terminal",
      RenderElement: TerminalTab,
   },
];

const Provider = () => {
   const { activeStepIndex } = useProviderForm();
   const activeText = tabs[activeStepIndex].text;
   const ActiveRender = tabs[activeStepIndex].RenderElement;

   const renderActiveTab = () => {
      if (activeText === "Terminal") {
         return (
            <SocketProvider>
               <ActiveRender />
            </SocketProvider>
         );
      }
      return <ActiveRender />;
   };

   return (
      <div className="flex flex-col gap-[2.5rem] overflow-hidden">
         <div className="overflowStyle relative top-0 flex w-[66.8rem] gap-[.25rem] overflow-x-auto bg-black 1061:w-full">
            <div
               className={cn(
                  "flex w-full transition-transform duration-300 ease-out",
                  activeStepIndex === 1 && "translate-x-[-16.7rem] transform mobile:translate-x-[-10rem] 1061:translate-x-0",
                  activeStepIndex === 2 && "translate-x-[-33.4rem] transform mobile:translate-x-[-27rem] 1061:translate-x-0",
                  activeStepIndex === 3 && "translate-x-[-50.1rem] transform mobile:translate-x-[-44rem] 1061:translate-x-0",
               )}
            >
               {tabs.map((tab, index) => (
                  <StepsTab key={tab.id} text={tab.text} isActive={activeStepIndex === index} isStepCompleted={index < activeStepIndex} />
               ))}
            </div>
         </div>

         <div className="flex flex-col gap-[2.5rem]">{renderActiveTab()}</div>
      </div>
   );
};

export default Provider;
