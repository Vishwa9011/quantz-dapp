import BackgroundCard from "@/components/shared/BackgroundCard";
import CustomButton from "@/components/shared/CustomButton";
import { useContext } from "react";
import TabHeading from "../TabHeading";
import TicketIcon from "@/assets/Icons/TicketIcon";
import { Link, useNavigate } from "react-router-dom";
import { claimRewards } from "@/lib/actions/tx.actions";
import { useMutation } from "@tanstack/react-query";
import { ManageFormProviderContext } from "@/context/ManageForm";
import GreetTab from "@/components/shared/GreetTab";

const ClaimRewards = () => {
   const claim = useMutation({
      mutationFn: claimRewards,
   });

   const navigate = useNavigate();
   const data = useContext(ManageFormProviderContext);
   if (data === null) throw new Error("Provider context is null");
   const { previousTab } = data;

   const handleClaim = () => {
      claim.mutateAsync();
   };

   return (
      <>
         <GreetTab
            heading="Claim Rewards"
            descrtiption="Lorem ipsum dolor sit amet consectetur. In diam amet sit ullamcorper fringilla tempor velit pulvinar. Tortor pretium fusce laoreet maecenas sed justo commodo. Enim accumsan dui ante sed. Convallis egestas urna non quam."
         />

         <BackgroundCard bgClassName="developer-card-gradient">
            <div className="flex flex-col items-center justify-center gap-[1.5rem]">
               <TabHeading heading="Claim Tokens" icon={TicketIcon} />
               <div className="claim-tokens-table flex flex-col gap-[2rem] uppercase">
                  <table>
                     <tbody>
                        <tr>
                           <td>Total Collected</td>
                           <td>100 $Quantz</td>
                        </tr>
                        <tr>
                           <td>Total Balance</td>
                           <td>100 $Quantz</td>
                        </tr>
                        <tr>
                           <td>Claimable Tokens</td>
                           <td>100 $Quantz</td>
                        </tr>
                     </tbody>
                  </table>

                  <div className="flex flex-col items-center gap-[.5rem] font-[600] tablet:gap-[1rem]">
                     <p className="text-[1.5rem] leading-[2rem] tracking-[-0.0375rem]">1000 $QUANTZ</p>
                     <p className="px-[1.5rem] py-[1rem] leading-[1rem] text-color-yellow-60" onClick={handleClaim}>
                        {claim.isPending ? "Claiming..." : "Claim Tokens"}
                     </p>
                  </div>
               </div>
            </div>

            <div className="mt-[.75rem] flex w-full flex-col-reverse gap-3 tablet:mt-[1.5rem] 922:flex-row">
               <CustomButton className="w-full !text-[1rem]" text="Back" styletype="secondary" onClick={previousTab} />
               <Link to="/" className="w-full">
                  <CustomButton className="w-full !text-[1rem]" text="Dashboard" onClick={() => navigate("/dashboard")} />
               </Link>
            </div>
         </BackgroundCard>
      </>
   );
};

export default ClaimRewards;
