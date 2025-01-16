import StepsTab from "@/components/Provider/StepsTab";
import GreetTab from "@/components/shared/GreetTab";
import { Outlet } from "react-router-dom";

const tabs = [
   { text: "Connect Wallet", to: "" },
   { text: "Resources", to: "resource" },
   { text: "Environment Variables", to: "env" },
   { text: "Info", to: "info" },
   { text: "Review", to: "review" },
];

const HostSphere = () => {
   return (
      <div>
         <div className="space-y-8">
            <div className="flex gap-2">
               {tabs.map((tab, index) => (
                  <StepsTab key={index} text={tab.text} isActive={false} isStepCompleted={false} />
               ))}
            </div>
            <GreetTab
               heading="Resources"
               descrtiption="Decentralized, secure, and high-performance web hosting, engineered to scale with your needs. Built for tomorrow, designed to evolve with you."
            />
            <div className="space-y-8 border border-echelon-io-starship-30 p-4 md:p-8">
               <Outlet />
            </div>
         </div>
      </div>
   );
};

export default HostSphere;
