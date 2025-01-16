import React from "react";
import Logo from "@/assets/Icons/Logo";
import WalletIcon from "@/assets/Icons/WalletIcon";
import PictureIcon from "@/assets/Icons/PictureIcon";
import BalancesIcon from "@/assets/Icons/BalancesIcon";
import ProviderIcon from "@/assets/Icons/ProviderIcon";
import ActivitiesIcon from "@/assets/Icons/ActivitiesIcon";
import DeploymentsIcon from "@/assets/Icons/DeployentsIcon";
import CustomConnectButton from "./CustomConnectButton";
import NavButton from "./NavButton";

const navMenus = [
   { to: "/crypto-minerx", title: "Crypto Minerx", icon: ProviderIcon },
   { to: "/quantum-vault", title: "Quantum Vault", icon: BalancesIcon },
   { to: "/host-sphere", title: "Host Sphere", icon: DeploymentsIcon },
   { to: "/nft", title: "NFT Lock", icon: PictureIcon },
   { to: "/brain-hub", title: "Brain Hub", icon: ActivitiesIcon },
];

const Sidebar: React.FC<{ isMenuOpen?: boolean; setMenuOpen?: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isMenuOpen = true, setMenuOpen }) => {
   const closeMenu = () => {
      if (setMenuOpen) {
         setMenuOpen(false);
      }
   };

   const handlePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation(); // Prevent event from bubbling up to outer div
   };

   return (
      <div
         onClick={closeMenu}
         className={`absolute z-[10] transition-backdrop-blur duration-200 ${isMenuOpen ? "w-full backdrop-blur-[10px]" : "w-0 backdrop-blur-[0px]"} tablet:w-auto`}
      >
         <nav
            onClick={handlePropagation}
            className={`border-r duration-500 ease-in-out ${isMenuOpen ? "translate-x-[0%]" : "translate-x-[-100%]"} mob-res-height flex h-full w-[var(--w-sidebar)] flex-col justify-between border-r-echelon-io-starship-30 bg-black uppercase tablet:min-w-sidebar`}
         >
            <div>
               <header className="hidden border-b border-b-echelon-io-starship-30 py-[2rem] tablet:block">
                  <div className="flex flex-col items-center gap-[.38rem]">
                     <Logo />
                     <p className="text-[1.09925rem] font-[600] uppercase">Quantz</p>
                  </div>
               </header>

               <div className="res-height mt-[1.25rem] flex flex-col gap-[.75rem] overflow-auto px-[1.25rem] pb-[1rem] tablet:mt-[2.5rem]">
                  {navMenus.map((menu, index) => (
                     <NavButton onClick={closeMenu} key={index} to={menu.to} title={menu.title} icon={menu.icon} />
                  ))}
               </div>
            </div>

            <div className="h-auto border-t border-t-echelon-io-starship-30 bg-color-white-10 px-[1.25rem] py-[2rem]">
               <div className="flex w-full items-center justify-center gap-2 border bg-color-yellow-60 px-[1.25rem] py-[1.125rem] uppercase text-black">
                  <CustomConnectButton icon={<WalletIcon />} />
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Sidebar;
