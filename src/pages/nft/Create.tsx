import React, { useState } from "react";
import DummyNFT from "@/assets/dummy.png";
import useToggle from "@/hooks/useToggle";
import { HiDownload } from "react-icons/hi";
import { GoArrowRight } from "react-icons/go";
import Modal from "@/components/shared/Modal";
import Button from "@/components/shared/Button";

type CreateProps = {};

const Create: React.FC<CreateProps> = () => {
   const [prompt, setPrompt] = useState("");
   const [isRegenerateMode, setIsRegenerateMode] = useState(false);

   const handleGenerateNft = () => {
      setIsRegenerateMode(true);
      console.log("Generating NFT with prompt:", prompt);
   };

   return (
      <section className="space-y-8 font-saira">
         <h1 className="text-center text-xl font-thin sm:text-2xl md:text-4xl">
            “Create your Own <span className="bg-text-gradient bg-clip-text text-transparent">NFT!</span>”
         </h1>
         {isRegenerateMode ? (
            <RegenerateNft prompt={prompt} setPrompt={setPrompt} onGenerate={handleGenerateNft} />
         ) : (
            <>
               <PromptInput prompt={prompt} setPrompt={setPrompt} btnText="Generate NFT" onSubmit={handleGenerateNft} />
               <RecentGenerations />
            </>
         )}
      </section>
   );
};

export default Create;

type PromptInputProps = {
   prompt: string;
   setPrompt: React.Dispatch<React.SetStateAction<string>>;
   btnText: string;
   onSubmit: () => void;
};

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, btnText, onSubmit }) => (
   <div className="flex flex-col gap-3 tablet:flex-row">
      <input
         type="text"
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}
         className="h-12 flex-1 border border-grayish-100 bg-transparent p-2 pl-4"
         placeholder="Enter your prompt here, and let NFT AI bring your NFT to life."
      />
      <Button onClick={onSubmit} className="flex h-11 items-center justify-center gap-2 text-sm font-normal tablet:w-max">
         {btnText}
         <GoArrowRight />
      </Button>
   </div>
);

type RegenerateNftProps = {
   prompt: string;
   setPrompt: React.Dispatch<React.SetStateAction<string>>;
   onGenerate: () => void;
};

const RegenerateNft: React.FC<RegenerateNftProps> = ({ prompt, setPrompt, onGenerate }) => (
   <div className="space-y-8">
      <PromptInput prompt={prompt} setPrompt={setPrompt} btnText="Regenerate NFT" onSubmit={onGenerate} />
      <h2 className="text-2xl">✨ Your AI-generated masterpieces are ready! ✨</h2>
      <ul className="space-y-1 text-Gray-200">
         <li>Preview your creations below and explore their unique details.</li>
         <li>Love what you see? Save them or mint them as NFTs!</li>
         <li>Not satisfied? Feel free to regenerate with a new prompt.</li>
      </ul>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
         {Array.from({ length: 3 }).map((_, index) => (
            <NFTCard key={index} />
         ))}
      </div>
   </div>
);

const RecentGenerations = () => (
   <div>
      <h2 className="text-lg">Recent Generations:</h2>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
         {Array.from({ length: 8 }).map((_, index) => (
            <NFTCard key={index} />
         ))}
      </div>
   </div>
);

const NFTCard = () => {
   const [isOpen, toggle] = useToggle(false);
   return (
      <>
         <ImageOptionModal toggle={toggle} isOpen={isOpen} />
         <div className="aspect-square" onClick={() => toggle()}>
            <img className="aspect-square object-cover" src={DummyNFT} alt="Generated NFT" />
         </div>
      </>
   );
};

const ImageOptionModal = ({ isOpen, toggle }: { isOpen: boolean; toggle: (value?: boolean) => void }) => {
   return (
      <Modal isOpen={isOpen} onClose={() => toggle(false)} className="h-max w-full max-w-xl space-y-2 bg-[#3B3B3B] p-6">
         <img className="max-h-[400px] w-full object-cover" src={DummyNFT} alt="NFT Preview" />
         <div className="flex gap-2">
            <Button className="flex h-max items-center justify-center gap-2 border border-Gray-200 bg-transparent capitalize text-white">
               Download Image <HiDownload className="text-[1rem]" />
            </Button>
            <Button className="h-full capitalize">Mint NFT</Button>
         </div>
      </Modal>
   );
};
