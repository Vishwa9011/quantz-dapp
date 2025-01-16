import { DarkenVideoOverlay } from "./DarkenVidoOverlay";

const BackgroundVideo = ({ src, className }: { src: string; className?: string }) => {
   return (
      <>
         <video
            playsInline
            webkit-playsinline="true" // For older iOS versions
            className={`${className} fixed left-0 top-0 h-full w-full object-cover`}
            autoPlay
            muted
            loop
         >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
         </video>

         <DarkenVideoOverlay />
      </>
   );
};

export default BackgroundVideo;
