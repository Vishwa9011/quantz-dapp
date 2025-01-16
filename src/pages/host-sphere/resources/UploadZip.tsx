import { cn } from "@/lib/utils";
import Done from "@/assets/Icons/Done";
import H3 from "@/components/shared/H3";
import React, { useState } from "react";
import Upload from "@/assets/Icons/Upload";
import Button from "@/components/shared/Button";
import ColorText from "@/components/shared/ColorText";
import TerminalIcon from "@/assets/Icons/Terminalcon";
import DropContainer from "@/components/shared/DropContainer";

const UploadZip = () => {
   return (
      <div>
         <div className="space-y-4">
            <div className="flex flex-col items-center gap-2">
               <TerminalIcon />
               <H3>Create Resource from Source COde</H3>
            </div>
            <p className="text-center text-Gray-200">
               Ready to host your project with us? Submit your source code to QuantZ, where we handle the decentralized infrastructure, security, and scalability. Focus on building
               while we take care of the rest—ensuring smooth, reliable performance.
            </p>

            <DragAndDropZip />
            <div className="flex gap-2">
               <Button className="bg-transparent text-color-yellow-60 hover:scale-100">Learn More</Button>
               <Button className="hover:scale-100" btnType="link" to="/host-sphere/resources/config">
                  Next
               </Button>
            </div>
         </div>
      </div>
   );
};

export default UploadZip;

type DragAndDropZipProps = React.ComponentPropsWithRef<"div"> & {};

const DragAndDropZip = ({ className, ...rest }: DragAndDropZipProps) => {
   const [files, setFiles] = useState<File[]>([]);
   const [dragging, setDragging] = useState(false);
   console.log("files: ", files);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (files) {
         setFiles(Array.from(files));
      }
   };
   console.log(handleChange);

   const isTrue = false;

   return (
      <div className={cn("m-auto h-72 max-w-xl border border-dashed border-color-yellow-60", isTrue && "border-green-600", className)} {...rest}>
         {isTrue ? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-7 p-4">
               <Done />
               <H3 className="">File - {files.length}</H3>
               <Button className="h-max border-red-800 bg-transparent text-red-600 hover:scale-100">Remove</Button>
            </div>
         ) : (
            <DropContainer dragging={dragging} setFiles={setFiles} setDragging={setDragging} className="">
               <div className="flex h-full w-full flex-col items-center justify-center gap-10 p-4">
                  <Upload />
                  <H3 className="">
                     Drag & drop <ColorText text="zip file or build file" color="yellow" />
                  </H3>
               </div>
            </DropContainer>
         )}
      </div>
   );
};
