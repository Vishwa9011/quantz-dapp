import { useSocketProvider } from "@/context/SocketProvider";
import { useEffect } from "react";
import { toast } from "sonner";
import { useAccount } from "wagmi";

const TabWatcher = () => {
   const { address } = useAccount();
   const userId = address;
   const { disconnectSocket, connectSocket } = useSocketProvider();
   useEffect(() => {
      const handleVisibilityChange = () => {
         if (!userId) return;
         if (document.visibilityState === "hidden") {
            disconnectSocket();
            toast.info("Server disconnected due to Tab change");
         }
      };

      const handleBlur = () => {
         if (!userId) return;
         disconnectSocket();
         toast.info("Server disconnected", {
            action: {
               label: "Reconnect",
               onClick: () => {
                  connectSocket();
               },
            },
         });
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);
      window.addEventListener("blur", handleBlur);

      return () => {
         document.removeEventListener("visibilitychange", handleVisibilityChange);
         window.removeEventListener("blur", handleBlur);
      };
   }, []);
   return <></>;
};

export default TabWatcher;
