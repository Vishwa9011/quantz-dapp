import { Mime } from "@/lib/types";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import Button from "@/components/shared/Button";
import { cn, convertTime, getSpaceOccupied, truncateFilename } from "@/lib/utils";
import GreetTab from "@/components/shared/GreetTab";
import DragAndDrop from "@/components/shared/DragAndDrop";
import { getIpfsFiles, uploadFile } from "@/lib/actions/vault";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { MAXIMUM_FILE_SIZE_VAULT } from "@/lib/constants";
import { useAccount } from "wagmi";

const tabs = [
   { name: "All Files", value: undefined },
   { name: "Images", value: "image" },
   { name: "Documents", value: "document" },
   { name: "Videos", value: "video" },
   { name: "Audio", value: "audio" },
] as const;

const QuantumVault = () => {
   const { address } = useAccount();
   const queryClient = useQueryClient();
   const { mutateAsync } = useMutation({ mutationFn: uploadFile });
   const [activeTab, setActiveTab] = useState<Mime | undefined>(tabs[0].value);
   const { data } = useQuery({ queryKey: ["ipfsFiles", activeTab], queryFn: getIpfsFiles(activeTab) });

   const handleFileUpload = async (file: File) => {
      if (!address) return toast.error("Please connect your wallet first");
      const totalSize = data?.totalSize || 0;
      if (file.size + totalSize > MAXIMUM_FILE_SIZE_VAULT * 1024 * 1024) {
         toast.error(`You have exceeded the storage limit of ${MAXIMUM_FILE_SIZE_VAULT}MB`);
      }
      const formData = new FormData();
      formData.append("file", file);
      await mutateAsync(formData);
      await queryClient.invalidateQueries({ queryKey: ["ipfsFiles"] });
   };

   const storageSpaceOccupied = getSpaceOccupied(data?.totalSize || 0);

   return (
      <div>
         <div className="flex flex-col gap-5">
            <GreetTab
               heading="Quantum Vault - File Storage Agent"
               descrtiption="Guard the future of data. Every file you store boosts speed, security, and the unstoppable power of the decentralized web."
            />

            <div className="overflowStyle overflow-x-auto rounded-md border border-grayish-100">
               <div className="flex w-full p-1 tablet:flex-wrap">
                  {tabs.map((tab, index) => (
                     <Button
                        key={index}
                        className={cn(
                           "hover:scale-1 flex-1 whitespace-nowrap rounded-md border-none bg-transparent text-xs text-Gray-200 tablet:text-[1rem]",
                           activeTab === tab.value && "bg-color-yellow-60 text-black",
                        )}
                        onClick={() => setActiveTab(tab.value)}
                     >
                        {tab.name}
                     </Button>
                  ))}
               </div>
            </div>

            <div className="flex grid-cols-2 flex-col-reverse gap-5 lg:grid">
               <DragAndDrop className="md:max-h-[500px]" onFileUpload={handleFileUpload} />

               <div className="grid grid-cols-1 gap-5">
                  <div className="flex h-full w-full items-center justify-center border border-grayish-100">
                     <div className="w-full space-y-3 p-8 font-semibold">
                        <div className="flex">
                           <p>My Storage Space</p>
                           <p className="ml-auto">{storageSpaceOccupied}%</p>
                        </div>
                        <div className="h-4 w-full overflow-hidden bg-grayish-100/10">
                           <div className={cn("h-full bg-red-300")} style={{ width: `${storageSpaceOccupied}%` }} />
                        </div>
                        <p className="text-red-500">Buy More Storage</p>
                     </div>
                  </div>

                  <div className="flex items-center justify-center gap-5 border border-grayish-100 p-8">
                     <div className="flex aspect-square w-[70px] items-center justify-center rounded-full bg-[#25D7FD] md:w-[100px]">
                        <div className="flex aspect-square w-[50px] items-center justify-center rounded-full bg-black text-xs md:w-[80px] md:text-sm">500GB</div>
                     </div>
                     <div className="flex flex-col">
                        <p>My storage</p>
                        <div className="flex items-center gap-2 text-sm">
                           <div className="aspect-square w-2 bg-[#25D7FD]" />
                           <p className="text-[#25D7FD]">Free space 500GB</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                           <div className="aspect-square w-2 bg-[#1058FB]" />
                           <p className="text-[#1058FB]">Used space 0GB</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-5 w-full space-y-5">
               <table className="w-full text-grayish-100">
                  <thead>
                     <tr className="py-2">
                        <th className="py-2 font-semibold">File Name</th>
                        <th className="py-2 font-semibold">File Size</th>
                        <th className="py-2 font-semibold">Uploaded</th>
                     </tr>
                  </thead>
                  <tbody className="">
                     {data &&
                        data.files.length > 0 &&
                        data.files.map((file, index) => (
                           <tr key={index} className="text-center">
                              <td className="flex items-center justify-center gap-2 py-2">
                                 {truncateFilename(file.name)}
                                 <a href={file.url} target="_blank" rel="noopener noreferrer">
                                    <FiExternalLink />
                                 </a>
                              </td>
                              <td className="py-2">{`${file.fileSize.value}${file.fileSize.symbol}`}</td>
                              <td className="py-2">{convertTime(new Date(file.createdAt))}</td>
                           </tr>
                        ))}
                  </tbody>
               </table>
               {data && data.files.length === 0 && (
                  <div className="border border-grayish-100 p-5 text-center text-Gray-200">
                     <p>No files uploaded!</p>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default QuantumVault;
