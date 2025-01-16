import React from "react";
import { cn } from "@/lib/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";

type CustomConnectButtonProps = React.ComponentPropsWithRef<"div"> & {
   icon?: React.ReactNode;
};

const CustomConnectButton = ({ className, icon }: CustomConnectButtonProps) => {
   return (
      <div className={cn("flex w-full items-center justify-center border border-echelon-io-starship-30 bg-color-yellow-60 font-[600] text-black", className)}>
         <ConnectButton.Custom>
            {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
               // Note: If your app doesn't use authentication, you
               // can remove all 'authenticationStatus' checks
               const ready = mounted && authenticationStatus !== "loading";
               const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");

               return (
                  <div
                     className="w-full"
                     {...(!ready && {
                        "aria-hidden": true,
                        style: {
                           opacity: 0,
                           pointerEvents: "none",
                           userSelect: "none",
                        },
                     })}
                  >
                     {(() => {
                        if (!connected) {
                           return (
                              <button onClick={openConnectModal} className="flex w-full items-center justify-center gap-2 px-2 py-[0.3rem] uppercase leading-[1rem]" type="button">
                                 {icon} Connect Wallet
                              </button>
                           );
                        }

                        if (chain.unsupported) {
                           return (
                              <button onClick={openChainModal} className="px-2 py-[0.3rem] leading-[1rem]" type="button">
                                 Wrong network
                              </button>
                           );
                        }

                        return (
                           <div className="flex h-[2rem] w-full flex-row items-center justify-center py-[0.3rem] leading-[1rem]" style={{ display: "flex", gap: 12 }}>
                              <button onClick={openChainModal} style={{ display: "flex", alignItems: "center" }} type="button">
                                 {chain.hasIcon && (
                                    <div
                                       style={{
                                          background: chain.iconBackground,
                                          width: 12,
                                          height: 12,
                                          borderRadius: 999,
                                          overflow: "hidden",
                                          marginRight: 4,
                                       }}
                                    >
                                       {chain.iconUrl && <img alt={chain.name ?? "Chain icon"} src={chain.iconUrl} style={{ width: 12, height: 12 }} />}
                                    </div>
                                 )}
                                 {chain.name?.slice(0, 3)}
                              </button>
                              <button type="button" onClick={openAccountModal} className="text-nowrap hover:underline">
                                 {account.displayName}
                              </button>
                           </div>
                        );
                     })()}
                  </div>
               );
            }}
         </ConnectButton.Custom>
      </div>
   );
};

export default CustomConnectButton;
