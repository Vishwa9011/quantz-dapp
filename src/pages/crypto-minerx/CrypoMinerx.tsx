import Button from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";

const CrypoMinerx = () => {
   const { pathname } = useLocation();
   const isBalance = pathname.includes("balance");
   return (
      <div className="relative">
         <div className="sticky mb-5 flex gap-1 rounded-md border border-[#ffffff33] p-1">
            <Button className={cn("rounded-md border-none text-center", isBalance && "bg-transparent text-white")} btnType="link" to="/crypto-minerx/provider">
               Provider
            </Button>
            <Button className={cn("rounded-md border-none text-center", !isBalance && "bg-transparent text-white")} btnType="link" to="/crypto-minerx/balance">
               Balance
            </Button>
         </div>
         <Outlet />
      </div>
   );
};

export default CrypoMinerx;
