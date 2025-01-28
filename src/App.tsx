import "./App.css";
import { toast } from "sonner";
import { useAccount } from "wagmi";
import AllRoutes from "@/routes/AppRoutes";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { socket } from "@/lib/utils/socketConnection";
import MobileNav from "@components/shared/MobileNav";
import Sidebar from "@components/shared/Sidebar";

function App() {
   const { address } = useAccount();
   const userId = address;
   const url = useLocation();
   const pathname = url.pathname;
   const [isTerminalDisconnected, setIsTerminalDisconnected] = useState(false);
   const prevPathname = useRef(pathname);

   useEffect(() => {
      if (prevPathname.current === "/provider" && pathname !== "/provider") {
         if (userId) {
            socket.off("active_users");
            socket.off("user_updates");
            socket.emit("disconnect_user", { userId });
            socket.disconnect();
            setIsTerminalDisconnected(true);
         }
      } else {
         setIsTerminalDisconnected(false);
      }

      if (isTerminalDisconnected) {
         toast.info("Server Page Disconnected");
         setIsTerminalDisconnected(false);
      }

      prevPathname.current = pathname;

      return () => {
         socket.off("active_users");
         socket.off("user_updates");
      };
   }, [userId, pathname, isTerminalDisconnected]);

   return (
      <>
         <MobileNav />
         <div className="h-dynamic mt-[6.875rem] flex overflow-hidden tablet:mt-[0]">
            <div className="hidden tablet:block">
               <Sidebar />
            </div>
            <div className="w-dynamic w-full overflow-auto p-[1.25rem] mobile:p-[2rem]">
               <div className="flex gap-2">ENV - {import.meta.env.VITE_TEST_ENV}</div>
               <AllRoutes />
            </div>
         </div>
      </>
   );
}

export default App;
