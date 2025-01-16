import { TransactionHistory } from "@/lib/types/transactionHistory.type";
import { formatDateTime } from "@/lib/utils/formatDateAndTime";
import { shortenTxId } from "@/lib/utils/utils";
import { FC, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { useAccount } from "wagmi";

type TxHistoryTableRowProps = {
   txData: TransactionHistory[];
   txLoading: boolean;
};

const TxHistoryTable: FC<TxHistoryTableRowProps> = ({ txData, txLoading }) => {
   const { address } = useAccount();
   const userId = address;

   return (
      <>
         <div className="relative w-full">
            {!userId && (
               <div className="flex min-h-[15rem] items-center justify-center">
                  <p className="text-center text-color-yellow-60">Please connect your wallet to view transaction history</p>
               </div>
            )}
            {txLoading && (
               <div className="flex min-h-[15rem] items-center justify-center">
                  <p className="text-color-yellow-60">Loading...</p>
               </div>
            )}
            {!txLoading && userId && txData.length === 0 && (
               <div className="flex min-h-[15rem] items-center justify-center text-color-yellow-60">
                  <p>No transaction history found</p>
               </div>
            )}
            {userId && (
               <table className="tx-history-table uppercase">
                  <thead>
                     <tr>
                        <th>Transaction ID</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>To</th>
                     </tr>
                  </thead>
                  <tbody>
                     {txData.map((tx) => (
                        <TxHistoryTableRow key={tx?._id} txID={tx?.txHash} amount={tx?.amount} date={tx?.createdAt} to={tx?.to} />
                     ))}
                  </tbody>
               </table>
            )}
         </div>
      </>
   );
};

const TxHistoryTableRow = ({ txID, amount, date, to }: { txID: string; amount: number; date: string; to: string }) => {
   const [isCopied, setIsCopied] = useState(false);

   const handleCopy = async (value: string) => {
      try {
         await navigator.clipboard.writeText(value);
         setIsCopied(true);
         setTimeout(() => setIsCopied(false), 500); // Reset copied status after 2 seconds
      } catch (error) {
         console.error("Failed to copy: ", error);
      }
   };

   const explorerLink = `${import.meta.env.VITE_EXPLORER_URL}/${txID}`;

   return (
      <tr>
         <td>
            <div className="flex items-center gap-2">
               <a href={explorerLink} target="_blank" className="cursor-pointer text-blue-400">
                  <p>{shortenTxId(txID)}</p>
               </a>

               <div className="hover:text-blue-400">{isCopied ? <SiTicktick /> : <FaRegCopy onClick={() => handleCopy(txID)} cursor={"pointer"} />}</div>
            </div>
         </td>
         <td>{amount} $Quantz</td>
         <td>{formatDateTime(date)}</td>
         <td>
            <div className="flex items-center gap-2">
               {shortenTxId(to)}
               <div className="hover:text-blue-400">{isCopied ? <SiTicktick /> : <FaRegCopy onClick={() => handleCopy(to)} cursor={"pointer"} />}</div>
            </div>
         </td>
      </tr>
   );
};

export default TxHistoryTable;
