import React from "react";
import { cn } from "@/lib/utils";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

type ModalProps = React.ComponentPropsWithRef<"section"> & {
   isOpen: boolean;
   onClose: () => void;
};

const Modal = ({ children, onClose, isOpen, className, ...rest }: ModalProps) => {
   if (!isOpen) return null;
   return createPortal(
      <>
         <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
            <section className={cn("relative h-96 w-96", className)} {...rest}>
               <button className="absolute -right-3 -top-3 rounded-full bg-white p-1 text-black" onClick={onClose}>
                  <IoClose />
               </button>
               {children}
            </section>
         </div>
      </>,
      document.getElementById("modal-root") as HTMLElement,
   );
};

export default Modal;
