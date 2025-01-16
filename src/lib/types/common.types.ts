export type Mime = "audio" | "video" | "image" | "document";

export type VaultFile = {
   _id: string;
   url: string;
   user: string;
   name: string;
   pinSize: number;
   createdAt: Date;
   updatedAt: Date;
   ipfsHash: string;
   mimeType: "image" | "video" | "audio" | "document";
   fileSize: {
      value: number;
      symbol: string;
   };
};
