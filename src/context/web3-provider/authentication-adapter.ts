import { MutableRefObject } from "react";
import { createSiweMessage } from "viem/siwe";
import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";

const baseUrl = `${import.meta.env.VITE_API_URL}/api`;

export const authenticationAdapter = (verifyingRef: MutableRefObject<boolean>, fn: Function) =>
   createAuthenticationAdapter({
      getNonce: async () => {
         const response = await fetch(`${baseUrl}/user/nonce`, { credentials: "include" });
         const data = await response.json();
         return data.data.nonce;
      },
      createMessage: ({ nonce, address, chainId }) => {
         return createSiweMessage({
            domain: window.location.host,
            address,
            statement: "Sign in with Ethereum to the app.",
            uri: window.location.origin,
            version: "1",
            chainId,
            nonce,
         });
      },
      verify: async ({ message, signature }) => {
         try {
            verifyingRef.current = true;
            const res = await fetch(`${baseUrl}/user/verify`, {
               method: "POST",
               credentials: "include",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify({ message, signature }),
            });
            const data = await res.json();
            verifyingRef.current = false;
            if (data.success) fn("authenticated");
            return data.success;
         } catch (error) {
            verifyingRef.current = false;
            return false;
         }
      },
      signOut: async () => {
         await fetch(`${baseUrl}/user/logout`, { method: "POST", credentials: "include" });
      },
   });
