import Button from "@/components/shared/Button";
import GreetTab from "@/components/shared/GreetTab";
import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";

type NFTProps = {};

const tabs = [
   { text: "AI Creation", to: "create" },
   { text: "Your NFT's", to: "own" },
];

const NFT = ({}: NFTProps) => {
   const { pathname } = useLocation();
   const isActive = (tab: string) => pathname.includes(tab) || (tab === "create" && pathname === "/nft");

   if (pathname.includes("mint")) {
      return (
         <>
            <Outlet />
         </>
      );
   }

   return (
      <div>
         <div className="space-y-8">
            <GreetTab
               heading="NFT Lock - NFT Storage Agent"
               descrtiption="Protect your digital assets. Store and secure your NFTs on a decentralised network, strengthening the ecosystem and locking in the future of digital ownership."
            />

            <div className="grid grid-cols-2 gap-2 rounded-md border border-grayish-100 p-1">
               {tabs.map((tab, index) => (
                  <Button
                     btnType="link"
                     key={index}
                     to={`/nft/${tab.to}`}
                     className={cn("rounded-md border-none py-3 hover:scale-100", !isActive(tab.to) && "bg-transparent text-Gray-200")}
                  >
                     {tab.text}
                  </Button>
               ))}
            </div>

            <Outlet />
         </div>
      </div>
   );
};

export default NFT;
