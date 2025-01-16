export const DarkenVideoOverlay = ({ className }: { className?: string }) => {
   return <div className={`${className} z-3 overlay-gradient fixed left-0 top-0 h-full w-full`}></div>;
};
