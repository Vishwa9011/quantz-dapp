import { cn } from "@/lib/utils/tailwindMerge";
import { FC } from "react";
import { useInView } from "react-intersection-observer";
// import videoPoster from "../assets/images/quatzlogo.png"

type VideoComponentProps = {
   url: string;
   className?: string;
   containerClassName?: string;
};
const VideoComponent: FC<VideoComponentProps> = ({ url, className, containerClassName }) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
   });

   return (
      <div ref={ref} className={cn(containerClassName)}>
         {inView && (
            <video muted playsInline autoPlay poster={""} loop className={cn(className)} aria-label="Video player" preload="none">
               <source src={url} type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         )}
      </div>
   );
};

export default VideoComponent;
