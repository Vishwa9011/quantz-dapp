import BackgroundVideo from "./BackGroundVideo";
import introVideo from "@/assets/videos/introVideo.mp4";

const CommingSoon = () => {
   return (
      <>
         <BackgroundVideo src={introVideo} />
         <div className="relative mt-11 text-center text-[2.75rem] font-[600] uppercase tablet:ml-20 tablet:text-left tablet:text-[5.6875rem]">
            <p>Coming</p>
            <p>Soon</p>
         </div>
      </>
   );
};

export default CommingSoon;
