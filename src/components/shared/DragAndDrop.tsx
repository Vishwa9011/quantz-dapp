import ColorText from "./ColorText";
import React, { useEffect, useState } from "react";
import Upload from "@/assets/Icons/Upload";
import DropContainer from "./DropContainer";
import { FiUpload } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { MAXIMUM_FILE_SIZE_VAULT } from "@/lib/constants";

type DragAndDropProps = React.ComponentPropsWithRef<"div"> & {
   onFileUpload: (file: File) => void;
};

const DragAndDrop = ({ className, onFileUpload, ...rest }: DragAndDropProps) => {
   const [files, setFiles] = useState<File[]>([]);
   const [dragging, setDragging] = useState(false);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
         setFiles(Array.from(files));
      }
   };

   useEffect(() => {
      if (files.length > 0) {
         onFileUpload(files[0]);
      }
   }, [files]);

   return (
      <div className={cn("border border-dashed border-color-yellow-60", className)} {...rest}>
         <DropContainer dragging={dragging} setFiles={setFiles} setDragging={setDragging} className="transition-all duration-300">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 transition-all duration-300">
               <Upload className="w-20" />
               <p className="font-semibold uppercase text-white">
                  Drag & drop <ColorText text="file" color="yellow" />
               </p>
               <div
                  className={cn(
                     "flex flex-col items-center justify-center gap-4 overflow-hidden transition-all duration-300",
                     dragging ? "max-h-0 scale-95 opacity-0" : "max-h-[500px] scale-100 opacity-100",
                  )}
               >
                  <p className="text-lg">OR</p>
                  <label className="flex w-[300px] cursor-pointer items-center justify-center gap-2 bg-color-yellow-60 px-5 py-2 font-semibold uppercase text-black transition-all duration-150 hover:scale-[1.03] active:scale-90">
                     <input type="file" className="hidden" max={1} onChange={handleChange} />
                     UPLOAD FILE <FiUpload />
                  </label>
                  <p className="font-semibold uppercase text-white">
                     maximum file size <ColorText color="yellow" text={`${MAXIMUM_FILE_SIZE_VAULT} MB`} />
                  </p>
               </div>
            </div>
         </DropContainer>
      </div>
   );
};

export default DragAndDrop;
