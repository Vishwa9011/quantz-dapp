import React, { createContext, ReactNode, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { PCModelNames } from "@/lib/data/custom.data";
import { Browsers } from "@/lib/types/components.types";
import { useBrowserName } from "@/hooks/useBrowserInfo";

type ManageFormProviderContextType = {
   activeStepIndex: number;
   nextTab: () => void;
   previousTab: () => void;
   selectedBrowser: Browsers;
   systemDetails: SystemDetailsType;
   onBrowserSelect: (browser: Browsers) => void;
   onSystemDetailsChange: (detail: keyof SystemDetailsType, value: string) => void;
};

type SystemDetailsType = Partial<{
   ram: string;
   modelName: string;
   processor: string;
   brandName: keyof typeof PCModelNames;
}>;

export const ManageFormProviderContext = createContext<ManageFormProviderContextType>({
   activeStepIndex: 0,
   nextTab: () => {},
   previousTab: () => {},
   selectedBrowser: "chrome",
   onBrowserSelect: () => {},
   systemDetails: {},
   onSystemDetailsChange: () => {},
});

export const ManageFormProvider = ({ children }: { children: ReactNode }) => {
   const browserName = useBrowserName();
   const { address } = useAccount();

   const [activeStepIndex, setActiveStepIndex] = useState<number>(() => {
      const savedIndex = sessionStorage.getItem("activeStepIndex");
      return savedIndex ? parseInt(savedIndex, 10) : 0;
   });

   const [selectedBrowser, setSelectedBrowser] = useState<Browsers>(() => {
      try {
         return (sessionStorage.getItem("selectedBrowser") as Browsers) || (browserName as Browsers);
      } catch {
         return browserName as Browsers;
      }
   });

   const [systemDetails, setSystemDetails] = useState<SystemDetailsType>(() => {
      try {
         const savedDetails = sessionStorage.getItem("systemDetails");
         return savedDetails ? JSON.parse(savedDetails) : {};
      } catch {
         return {};
      }
   });

   const nextTab = () => {
      setActiveStepIndex((index) => {
         const newIndex = index + 1;
         sessionStorage.setItem("activeStepIndex", String(newIndex));
         return newIndex;
      });
   };

   const previousTab = () => {
      setActiveStepIndex((index) => {
         const newIndex = index - 1;
         sessionStorage.setItem("activeStepIndex", String(newIndex));
         return newIndex;
      });
   };

   const onBrowserSelect = (browser: Browsers) => {
      setSelectedBrowser(browser);
      sessionStorage.setItem("selectedBrowser", browser);
   };

   const onSystemDetailsChange = (key: keyof SystemDetailsType, value: string) => {
      setSystemDetails((details) => {
         const updatedDetails = { ...details, [key]: value };
         sessionStorage.setItem("systemDetails", JSON.stringify(updatedDetails));
         return updatedDetails;
      });
   };

   useEffect(() => {
      if (address && activeStepIndex === 0) {
         setActiveStepIndex(1);
         sessionStorage.setItem("activeStepIndex", "1");
      } else if (!address && activeStepIndex !== 0) {
         setActiveStepIndex(0);
         sessionStorage.setItem("activeStepIndex", "0");
      }
   }, [address, activeStepIndex]);

   return (
      <ManageFormProviderContext.Provider
         value={{
            activeStepIndex,
            nextTab,
            previousTab,
            selectedBrowser,
            onBrowserSelect,
            systemDetails,
            onSystemDetailsChange,
         }}
      >
         {children}
      </ManageFormProviderContext.Provider>
   );
};

export const useProviderForm = () => {
   const context = React.useContext(ManageFormProviderContext);
   if (!context) {
      throw new Error("useProviderForm must be used within a ManageFormProvider");
   }
   return context;
};
