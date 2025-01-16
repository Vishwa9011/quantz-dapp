import BalanceCard from "@/components/shared/BalanceCard";
import TxHistoryTable from "@/components/Balances/TxHistoryTable";
import { useEffect, useState } from "react";
import BackgroundCard from "@/components/shared/BackgroundCard";
import TabHeading from "@/components/Provider/TabHeading";
import TicketIcon from "@/assets/Icons/TicketIcon";
import { fetchWrapper } from "@/lib/utils";
import { useAccount } from "wagmi";
import { UserInfo } from "@/lib/types/userInfo.type";
import { toast } from "sonner";
import { TransactionHistory } from "@/lib/types/transactionHistory.type";
import { calculateClaimableBalance } from "@/lib/utils/calculateClaimableBalance";
import GreetTab from "@/components/shared/GreetTab";

const Balances = () => {
   const { address } = useAccount();
   const userId = address;
   const [userDetails, setUserDetails] = useState<UserInfo | null>(null);
   const [transctionHistory, setTransactionHistory] = useState<TransactionHistory[]>([]);
   const [txLoading, setTxLoading] = useState(false);
   const [claimLoading, setClaimLoading] = useState(false);

   const fetchTransactionHistory = async () => {
      try {
         setTxLoading(true);
         const tx = await fetchWrapper<TransactionHistory[]>("/tx");
         console.log("transaction history", tx);
         setTransactionHistory(tx);
         setTxLoading(false);
      } catch (error) {
         console.log("error: ", error);
         setTxLoading(false);
      } finally {
         setTxLoading(false);
      }
   };

   const handleClaim = async () => {
      if (!userId) {
         toast.warning("Please connect your wallet to claim tokens");
         return;
      }
      try {
         setClaimLoading(true);
         const claim = await fetchWrapper("/tx/claim-tokens", {
            method: "POST",
         });
         console.log("claim reward", claim);
         setClaimLoading(false);
         fetchTransactionHistory();
      } catch (error) {
         console.log("error: ", error);
         toast.error("Error claiming tokens");
         setClaimLoading(false);
      } finally {
         setClaimLoading(false);
      }
   };

   const fetchUser = async () => {
      try {
         const user = await fetchWrapper<UserInfo>("/user/me/latest");
         console.log(user);
         setUserDetails(user);
      } catch (error) {
         console.log("error: ", error);
      }
   };

   useEffect(() => {
      if (userId) {
         fetchUser();
         fetchTransactionHistory();
      }
   }, [userId]);

   const claimableRewards = calculateClaimableBalance(userDetails?.rewards || 0, 1000);

   return (
      <>
         {/* <div className="hidden tablet:block">
            <BackgroundVideo src={balancesVideo} />
         </div> */}

         <div className="relative flex flex-col gap-[2rem]">
            <p className="text-[1.125rem] font-[700]">Balances</p>
            <BalanceCard rewards={userDetails?.rewards || 0} claimLoading={claimLoading} claimRewards={handleClaim} />

            <GreetTab
               heading="Claim Rewards"
               descrtiption="Collect your earned tokens with a single click. Watch your rewards accumulate as your contributions power the QuantZ network!"
            />

            <BackgroundCard bgClassName="developer-card-gradient">
               <div className="flex flex-col items-center justify-center gap-[1.5rem]">
                  <TabHeading heading="Claim Tokens" icon={TicketIcon} />
                  <div className="claim-tokens-table flex flex-col gap-[2rem] uppercase">
                     <table>
                        <tbody>
                           <tr>
                              <td>Total Collected</td>
                              <td>{userDetails?.claimed || 0} $Quantz</td>
                           </tr>
                           <tr>
                              <td>Total Balance</td>
                              <td>{userDetails?.rewards || 0} $Quantz</td>
                           </tr>
                           <tr>
                              <td>Claimable Tokens</td>
                              <td>{claimableRewards.claimable} $Quantz</td>
                           </tr>
                        </tbody>
                     </table>

                     <div className="flex flex-col items-center gap-[.5rem] font-[600] tablet:gap-[1rem]">
                        <p className="text-[1.5rem] leading-[2rem] tracking-[-0.0375rem]">{claimableRewards.claimable} $QUANTZ</p>
                        <button
                           type="button"
                           className="border px-[1.5rem] py-[1rem] leading-[1rem] text-color-yellow-60 transition-all duration-500 hover:scale-105 active:scale-95"
                           onClick={handleClaim}
                        >
                           {claimLoading ? "Claiming..." : "Claim Tokens"}
                        </button>
                     </div>
                  </div>
               </div>
            </BackgroundCard>

            <div className="flex flex-col gap-[1.25rem]">
               <p className="text-[1.125rem] font-[700]">Transaction History</p>
               <div className="overflow-auto">
                  <TxHistoryTable txData={transctionHistory} txLoading={txLoading} />
               </div>
            </div>
         </div>
      </>
   );
};

export default Balances;
