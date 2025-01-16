import { cn } from "@/lib/utils";
import React, { DragEvent } from "react";

type DropContainerProps = React.ComponentPropsWithRef<"div"> & {
   dragging: boolean;
   setFiles: (files: File[]) => void;
   setDragging: (dragging: boolean) => void;
};

const DropContainer = ({ setFiles, setDragging, dragging, children, className, ...rest }: DropContainerProps) => {
   const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(true);
      console.log("drop enter");
   };

   const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      dragging && setDragging(false);
      console.log("drop leave");
   };

   const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(true);
      console.log("drop over");
   };

   const handleDrop = (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);

      const files = e.dataTransfer.files;
      setFiles(Array.from(files));
      console.log("drop");
   };

   return (
      <>
         <div onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} className={cn("h-full w-full", className)} {...rest}>
            {children}
         </div>
      </>
   );
};

export default DropContainer;
