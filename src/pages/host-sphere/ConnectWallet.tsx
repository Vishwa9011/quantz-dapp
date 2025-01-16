import H3 from "@/components/shared/H3";
import WalletIcon2 from "@/assets/Icons/WalletIcon2";
import WalletConnect from "@/components/shared/WalletConnect";

const ConnectWallet = () => {
   return (
      <>
         <div className="flex flex-col items-center space-y-5">
            <div className="flex flex-col items-center gap-2">
               <WalletIcon2 />
               <H3>Connect Wallet</H3>
            </div>
            <div className="flex gap-1 text-Gray-200">
               <h2 className="font-bold text-white">Connect your wallet</h2>
               <p>to access customized hosting solutions.</p>
            </div>
            <WalletConnect />
         </div>
      </>
   );
};

export default ConnectWallet;
