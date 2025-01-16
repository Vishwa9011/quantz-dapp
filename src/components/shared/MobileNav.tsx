import { useState } from "react";
import { useAccount } from "wagmi";
import RightSquareIcon from "./RightSquareIcon";
import WalletIcon3 from "@/assets/Icons/WalletIcon3";
import LeftSquareIcon from "@/assets/Icons/LeftSquareIcon";
import Logo2 from "@/assets/Icons/Logo2";
import Sidebar from "./Sidebar";

const MobileNav = () => {
   const { isConnected } = useAccount();
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   return (
      <>
         <nav className="bg-[rgba(0, 0, 0, 0.10)] fixed top-0 z-30 w-full border-b border-b-echelon-io-starship-30 px-5 pb-5 pt-[3.25rem] backdrop-blur-[10px] tablet:hidden">
            <div className="flex justify-between gap-[.75rem] mobile:gap-[1.25rem]">
               <div onClick={toggleMenu} className="cursor-pointer border border-color-white-30 p-[.56rem]">
                  <div className={`navMobileMenu cursor-pointer ${isMenuOpen ? "navMobileMenuActive" : ""}`}>
                     <span className="menubar my-1 block h-[2px] w-[20px] bg-[#000000] transition-all duration-300 ease-in-out dark:bg-[#ffffff]"></span>
                     <span className="menubar my-1 block h-[2px] w-[20px] bg-[#000000] transition-all duration-300 ease-in-out dark:bg-[#ffffff]"></span>
                     <span className="menubar my-1 block h-[2px] w-[20px] bg-[#000000] transition-all duration-300 ease-in-out dark:bg-[#ffffff]"></span>
                  </div>
               </div>

               {/* Visible on mibile screen only  */}
               <div className="flex-1">
                  <div className="tracking-letter-spacing-1_92 flex flex-col gap-[.6rem] border-t border-t-echelon-io-white-20 pt-[.43rem] text-[.375rem] font-[600] leading-[.875em]">
                     <p>MENU</p>
                     <p>{isMenuOpen ? "OPENED" : "CLOSED"}</p> {/* dynamically change if menu is open or close */}
                  </div>
               </div>

               <div className="flex justify-between gap-[1.1rem] tablet:w-full">
                  <div className="flex gap-[1rem]">
                     <LeftSquareIcon />
                     <Logo2 />
                     <RightSquareIcon />
                  </div>
               </div>

               {/* Visible on mibile screen only  */}
               <div className="block flex-1 tablet:hidden">
                  <div className="tracking-letter-spacing-1_92 flex justify-end border-t border-t-echelon-io-white-20 pt-[.43rem] text-[.375rem] font-[600] leading-[.875em]">
                     <div className="flex flex-col gap-[.6rem] uppercase">
                        <p>WALLET</p>
                        <p>{isConnected ? "CONNECTED" : "DISCONNECTED"}</p>
                     </div>
                  </div>
               </div>

               {/* open dapp icon visible on mobile screen only */}
               <div className="border border-color-white-30 p-[0.4375rem]">
                  <WalletIcon3 />
               </div>
            </div>
         </nav>

         <Sidebar isMenuOpen={isMenuOpen} setMenuOpen={setIsMenuOpen} />
      </>
   );
};

export default MobileNav;
