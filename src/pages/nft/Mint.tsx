import Dummy from "@/assets/dummy.png";
import Button from "@/components/shared/Button";

const Mint = () => {
   return (
      <div className="font-saira">
         <div className="">
            <h1 className="text-xl md:text-3xl">NFT Minting</h1>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
               <div className="bg-[#3B3B3B] p-4">
                  <img className="max-h-[400px] w-full object-cover object-center" src={Dummy} alt="" />
               </div>
               <div className="flex flex-col justify-between gap-5 px-4 font-semibold">
                  <div className="flex h-full flex-col justify-between">
                     <div className="flex justify-between">
                        <p>NFT Name</p>
                        <p>Standard NFT</p>
                     </div>
                     <div className="flex justify-between">
                        <p>Price</p>
                        <p>0.2 BNB</p>
                     </div>
                     <div className="flex justify-between">
                        <p>Total Supply</p>
                        <p>3000</p>
                     </div>
                     <div className="flex justify-between">
                        <p>NFTs Minter by you</p>
                        <p>00</p>
                     </div>
                     <div className="flex justify-between">
                        <p>Total NFTs Minted</p>
                        <p>24</p>
                     </div>
                     <div className="flex justify-between">
                        <p>Mint Limit</p>
                        <p>100</p>
                     </div>
                     <div className="flex justify-between">
                        <p>NFTs Owned</p>
                        <p>01</p>
                     </div>
                     <div className="flex justify-between">
                        <p>NFTs needed to be Minted</p>
                        <p>00</p>
                     </div>
                  </div>
                  <div className="flex flex-col gap-4">
                     <Button className="h-max bg-transparent font-normal text-white hover:scale-100 tablet:text-base">Transfer</Button>
                     <Button className="h-max font-normal hover:scale-100 tablet:text-base">Mint</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Mint;
