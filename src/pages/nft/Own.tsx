import Dummy from "@/assets/dummy.png";

type OwnProps = {};

const Own = ({}: OwnProps) => {
   return (
      <div>
         <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
               <>
                  <div className="w-full" key={index}>
                     <img src={Dummy} className="aspect-square h-full w-full object-cover" alt="" />
                  </div>
               </>
            ))}
         </div>
      </div>
   );
};

export default Own;
