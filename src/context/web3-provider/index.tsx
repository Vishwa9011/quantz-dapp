/* eslint-disable @typescript-eslint/no-explicit-any */
import { WagmiProvider } from "wagmi";
import { mainnet } from "wagmi/chains";
import "@rainbow-me/rainbowkit/styles.css";
import { fetchWrapper } from "@/lib/utils/api";
import { createContext, useCallback } from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { authenticationAdapter } from "./authentication-adapter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { AuthenticationStatus, darkTheme, getDefaultConfig, RainbowKitAuthenticationProvider, RainbowKitProvider } from "@rainbow-me/rainbowkit";

export type ChildrenType = {
   children: React.ReactNode;
};

const queryClient = new QueryClient();

const wagmiConfig = getDefaultConfig({
   appName: "Quantz Dapp",
   projectId: "086f11131ad5c8228f25563c52b81dfa",
   chains: [mainnet],
   ssr: false, // If your dApp uses server side rendering (SSR)
});

type Web3ContextType = {
   isAdmin: boolean;
   isAuthenticated: boolean;
   fetchMe: () => Promise<void>;
   authenticationStatus: AuthenticationStatus;
};

export const Web3Context = createContext<Web3ContextType | null>(null);

export function Web3Provider({ children }: ChildrenType) {
   const verifyingRef = useRef(false);
   const fetchingMeRef = useRef(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [authenticationStatus, setAuthenticationStatus] = useState<AuthenticationStatus>("loading");

   const fetchMe = useCallback(async () => {
      if (fetchingMeRef.current || verifyingRef.current) return;
      fetchingMeRef.current = true;
      try {
         const res = await fetchWrapper<any>(`/user/me`);
         setAuthenticationStatus(res.address ? "authenticated" : "unauthenticated");
         setIsAdmin(res.role === "ADMIN");
         await queryClient.invalidateQueries({
            queryKey: ["user", "static-personal-videos"],
         });
      } catch (error) {
         setAuthenticationStatus("unauthenticated");
      } finally {
         fetchingMeRef.current = false;
      }
   }, []);

   useEffect(() => {
      fetchMe();
      window.addEventListener("focus", fetchMe);
      return () => window.removeEventListener("focus", fetchMe);
   }, []);

   useEffect(() => {
      setIsAuthenticated(authenticationStatus === "authenticated");
   }, [authenticationStatus]);

   return (
      <WagmiProvider config={wagmiConfig} reconnectOnMount={true}>
         <QueryClientProvider client={queryClient}>
            <RainbowKitAuthenticationProvider adapter={authenticationAdapter(verifyingRef, setAuthenticationStatus)} status={authenticationStatus}>
               <RainbowKitProvider
                  theme={darkTheme({
                     accentColor: "#DEF141",
                     accentColorForeground: "#1A1A1A",
                  })}
               >
                  <Web3Context.Provider
                     value={{
                        authenticationStatus,
                        fetchMe,
                        isAuthenticated,
                        isAdmin,
                     }}
                  >
                     {children}
                  </Web3Context.Provider>
               </RainbowKitProvider>
            </RainbowKitAuthenticationProvider>
         </QueryClientProvider>
      </WagmiProvider>
   );
}

export const useWeb3 = () => {
   const context = useContext(Web3Context);
   if (!context) {
      throw new Error("useWeb3 must be used within a Web3Provider");
   }
   return context;
};
