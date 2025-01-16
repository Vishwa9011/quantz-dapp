import H3 from "@/components/shared/H3";
import Globe from "@/assets/Icons/Globe";
import Button from "@/components/shared/Button";
import Delete from "@/components/shared/Delete";
import Divider from "@/components/shared/Divider";
import TerminalIcon from "@/assets/Icons/Terminalcon";

const ResourceConfig = () => {
   return (
      <div className="space-y-8">
         <div className="m-auto w-full space-y-5 md:w-[70%]">
            <div className="flex flex-col items-center gap-2">
               <TerminalIcon />
               <H3 className="font-chakra-patch">App</H3>
            </div>
            <div className="">
               <Divider />
               <div className="my-4 grid grid-cols-2">
                  <div className="flex items-center gap-2">
                     <TerminalIcon />
                     <p>Dolphin-App</p>
                  </div>
                  <div className="">
                     <p>1 resource</p>
                     <p>+1 new</p>
                  </div>
               </div>
            </div>
            <div className="">
               <Divider />
               <div className="my-4 grid grid-cols-2">
                  <div className="flex items-center gap-2">
                     <Globe />
                     <p>Sample-nodejs</p>
                  </div>
                  <div className="flex flex-col gap-2 md:flex-row">
                     <div>
                        <p>Web Service 1 GB RAM</p>
                        <p>1 vCPU x 2</p>
                        <p>150 GB bandwidth</p>
                     </div>
                     <div className="flex gap-2">
                        <Button className="h-max w-max border-transparent bg-transparent text-color-yellow-60 hover:scale-100">
                           <Delete />
                        </Button>
                        <Button className="h-max w-max md:w-auto" variant={1} btnType="link" to="/host-sphere/resources/config/edit">
                           Edit
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Divider />
         </div>

         <div className="flex gap-2">
            <Button variant={1}>Skip to review</Button>
            <Button className="" btnType="link" to="/host-sphere/env">
               Next
            </Button>
         </div>
      </div>
   );
};

export default ResourceConfig;
