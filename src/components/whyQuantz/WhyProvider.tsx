import { useNavigate } from "react-router-dom";
import { videoLink } from "@/lib/data/video.data";
import VideoComponent from "../shared/VideoComponent";
import WhyButton from "../shared/WhyButton";

const WhyProvider = () => {
   const navigate = useNavigate();
   const handleClick = () => {
      navigate("/provider");
   };
   return (
      <div className="py-4">
         <div>
            <h1 className="text-center font-chakra-patch text-[2rem] font-bold uppercase text-white">Why Become a Power Provider with QuantZ?</h1>

            <div className="my-8 grid grid-cols-1 gap-4 mobile:grid-cols-2 tablet:grid-cols-1 922:grid-cols-2 1093:grid-cols-3">
               <div className="flex flex-col gap-3.5 border border-white/10 px-6 py-8 shadow">
                  <div className="relative h-[232px] w-full overflow-hidden">
                     <VideoComponent
                        url={videoLink.video2}
                        containerClassName="h-[200%] w-[200%] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        className="h-full !w-full object-cover"
                     />
                  </div>
                  <p className="font-chakra-patch text-2xl font-bold leading-normal text-white">
                     Become part of the backbone of <span className="text-[#def141]">QuantZ!</span>
                  </p>
                  <p className="font-saira text-base font-normal leading-normal text-gray-300">Join a network of Providers transforming idle processing power into real rewards.</p>
               </div>

               <div className="flex flex-col gap-3.5 border border-white/10 px-6 py-8 shadow">
                  <div className="relative h-[232px] w-full overflow-hidden">
                     <VideoComponent
                        url={videoLink.video5}
                        containerClassName="h-[150%] w-[150%] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        className="h-full w-full object-cover"
                     />
                  </div>
                  <p className="font-chakra-patch text-2xl font-bold leading-normal text-white">
                     Fuel a decentralized <span className="text-[#def141]">ecosystem</span>
                  </p>
                  <p className="font-saira text-base font-normal leading-normal text-gray-300">
                     Your contributions help power a robust, distributed system, making you a vital part of QuantZ’s vision.
                  </p>
               </div>

               <div className="flex flex-col gap-3.5 border border-white/10 px-6 py-8 shadow">
                  <div className="relative h-[232px] w-full overflow-hidden">
                     <VideoComponent
                        url={videoLink.video3}
                        containerClassName="h-[200%] w-[200%] absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                        className="h-full w-full object-cover"
                     />
                  </div>
                  <p className="font-chakra-patch text-2xl font-bold leading-normal text-white">
                     Turn unused resources into <span className="text-[#def141]">value</span>
                  </p>
                  <p className="font-saira text-base font-normal leading-normal text-gray-300">
                     Earn tokens effortlessly while supporting a community that’s reshaping the future of computing.
                  </p>
               </div>
            </div>

            <div className="mx-auto w-fit">
               <WhyButton text="START PROVIDING" handleClick={handleClick} />
            </div>
         </div>
      </div>
   );
};

export default WhyProvider;
