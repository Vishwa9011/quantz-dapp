import { videoLink } from "@/lib/data/video.data";
import { useNavigate } from "react-router-dom";
import VideoComponent from "../shared/VideoComponent";
import WhyButton from "../shared/WhyButton";

const WhyDeployer = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/create");
   };
   return (
      <div className="py-4">
         <div>
            <h1 className="text-center font-chakra-patch text-[2rem] font-bold uppercase text-white">Why Choose QuantZ Deployer?</h1>

            <div className="my-8 grid grid-cols-1 gap-4 922:grid-cols-2 1093:grid-cols-2">
               <div className="flex flex-col gap-3.5 border border-white/10 px-6 py-8 shadow">
                  <div className="relative h-[232px] w-full overflow-hidden">
                     <VideoComponent
                        url={videoLink.video4}
                        containerClassName="h-[200%] w-[200%] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        className="h-full !w-full object-cover"
                     />
                  </div>
                  <p className="font-chakra-patch text-2xl font-bold leading-normal text-white">
                     Simplify Decentralized <span className="text-[#def141]">Deployment</span>
                  </p>
                  <p className="font-saira text-base font-normal leading-normal text-gray-300">
                     With QuantZ Deployer, you can effortlessly launch tasks across a secure, decentralized network without the hassle of traditional infrastructure.
                  </p>
               </div>

               <div className="flex flex-col gap-3.5 border border-white/10 px-6 py-8 shadow">
                  <div className="relative h-[232px] w-full overflow-hidden">
                     <VideoComponent
                        url={videoLink.video1}
                        containerClassName="h-[150%] w-[150%] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        className="h-full w-full object-cover"
                     />
                  </div>
                  <p className="font-chakra-patch text-2xl font-bold leading-normal text-white">
                     Leverage <span className="text-[#def141]">Distributed</span> Power
                  </p>
                  <p className="font-saira text-base font-normal leading-normal text-gray-300">
                     Tap into a global pool of processing power to handle your deployments with efficiency and scalability, all while supporting a decentralized community.
                  </p>
               </div>
            </div>

            <div className="mx-auto w-fit">
               <WhyButton text="COMING SOON" handleClick={handleClick} />
            </div>
         </div>
      </div>
   );
};

export default WhyDeployer;
