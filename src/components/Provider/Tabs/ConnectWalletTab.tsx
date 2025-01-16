import WalletIcon2 from "@/assets/Icons/WalletIcon2";
import BackgroundCard from "@/components/shared/BackgroundCard";
import GreetTab from "@/components/shared/GreetTab";
import CustomConnectButton from "@/components/shared/CustomConnectButton";
import TabHeading from "../TabHeading";
import { howItWorksData } from "@/lib/data/custom.data";
import HowItWorksCard from "../HowItWorksCard";
import H3 from "@/components/shared/H3";

const ConnectWalletTab = () => {
   return (
      <>
         <GreetTab
            heading="Step into the World of QuantZ!"
            descrtiption="Where your device’s processing power transforms into token rewards! Simply stay on our dedicated farming page, and watch your contributions generate value in real-time."
         />

         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col gap-[1.5rem]">
               <div className="flex w-full flex-col gap-[1rem]">
                  <TabHeading heading="Connect Wallet" icon={WalletIcon2} />
                  <p className="text-center font-saira text-Cool-300">Link your wallet to start farming tokens and tracking rewards instantly!</p>
               </div>

               <div className="mx-auto flex h-[3.5rem] w-full mobile:w-[20rem]">
                  <CustomConnectButton />
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

export default ConnectWalletTab;
