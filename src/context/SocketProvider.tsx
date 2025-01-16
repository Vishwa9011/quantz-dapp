import { useAccount } from "wagmi";
import useOs from "../hooks/useOs";
import { socket } from "@/lib/utils/socketConnection";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type SocketContextType = {
   rewards: number;
   activeUsers: number;
   isConnected: boolean;
   terminalUserData: any[];
   connectSocket: () => void;
   disconnectSocket: () => void;
};

export const SocketContext = createContext<SocketContextType | null>(null);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
   const os = useOs();
   const { address } = useAccount();
   const userId = address;
   const [rewards, setRewards] = useState(0);
   const [activeUsers, setActiveUsers] = useState(0);
   const [terminalUserData, setTerminalUserData] = useState<any[]>([]);
   const [isConnected, setIsConnected] = useState(false);

   const connectSocket = () => {
      if (!userId || isConnected) return;
      socket.connect();
      socket.emit("join", { userId, os });
      setIsConnected(true);
   };

   const disconnectSocket = () => {
      if (!userId) return;
      socket.off("active_users");
      socket.off("user_updates");
      socket.emit("disconnect_user", { userId });
      socket.disconnect();
      setIsConnected(false);
   };

   useEffect(() => {
      if (!userId || !isConnected) return;

      const intervalId = startTracking();
      socket.on("active_users", (count: number) => {
         setActiveUsers(count);
      });

      socket.on("user_updates", (data: any) => {
         console.log("data: ", data);
         setTerminalUserData((previousUpdate) => [...previousUpdate, data]);
         setRewards(data.rewards);
      });

      return () => {
         clearInterval(intervalId);
         disconnectSocket();
      };
   }, [userId, isConnected]);

   useEffect(() => {
      if (userId && !isConnected) connectSocket();
      return () => disconnectSocket();
   }, [userId, os]);

   const startTracking = () => {
      const delay = 5;
      return setInterval(() => {
         console.log("tracking started");
         socket.emit("start_monitoring", { userId, sec: delay });
      }, delay * 1000);
   };

   return (
      <SocketContext.Provider
         value={{
            rewards,
            activeUsers,
            connectSocket,
            disconnectSocket,
            terminalUserData,
            isConnected,
         }}
      >
         {children}
      </SocketContext.Provider>
   );
};

export const useSocketProvider = () => {
   const context = useContext(SocketContext);
   if (!context) {
      throw new Error("useSocketProvider must be used within a SocketProvider");
   }
   return context;
};
