import { FC } from "react";
import { useNavigate } from "react-router-dom";

type BalanceCardProps = {
   dashboard?: boolean;
   rewards?: number;
   claimRewards?: () => void;
   claimLoading?: boolean;
};

const BalanceCard: FC<BalanceCardProps> = ({ dashboard, rewards, claimLoading, claimRewards }) => {
   const navigate = useNavigate();
   const handleNavigate = () => {
      navigate("/balances");
   };
   const handleClaimRewards = () => {
      if (claimRewards) {
         claimRewards();
      }
   };
   return (
      <div className="bg-color-yellow-60 px-[1.25rem] py-[1.25rem] font-[600] uppercase text-black tablet:px-[1.75rem] tablet:py-[2rem]">
         <div className="flex flex-col gap-[1.25rem]">
            <div className="flex w-full flex-col items-center justify-between gap-[1rem] 884:flex-row 884:items-stretch 884:gap-0">
               <p className="text-[1.25rem] leading-[2rem] tracking-[-0.0375rem] tablet:text-[1.5rem]">QUANTZ BALANCE</p>
               {/* Visible on Mobile Screen */}
               <p className="text-[2rem] leading-none tablet:text-[2.5rem] 884:hidden">{rewards} Quantz</p>

               {dashboard ? (
                  <button
                     onClick={handleNavigate}
                     className="w-full border border-black px-[1.5rem] py-[1rem] uppercase transition-all duration-500 hover:scale-105 active:scale-95 tablet:text-[1.25rem] 884:w-auto"
                  >
                     <p className="leading-[1rem]">{claimLoading ? "Claiming..." : "Claim Quantz"}</p>
                  </button>
               ) : (
                  <button
                     onClick={handleClaimRewards}
                     className="w-full border border-black px-[1.5rem] py-[1rem] uppercase transition-all duration-500 hover:scale-105 active:scale-95 tablet:text-[1.25rem] 884:w-auto"
                  >
                     <p className="leading-[1rem]">{claimLoading ? "Claiming..." : "Claim Quantz"}</p>
                  </button>
               )}
            </div>
            {/* Visibe on Desktop only */}
            <div className="hidden 884:block">
               <p className="text-[2.5em] leading-none">{rewards} Quantz</p>
            </div>
         </div>
      </div>
   );
};

export default BalanceCard;
