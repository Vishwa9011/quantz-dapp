import axios from "axios";
import { Mime, VaultFile } from "../types";
import { fetchWrapper } from "../utils";

type VaultFileResponse = {
   files: VaultFile[];
   totalSize: number;
};

export const getIpfsFiles = (mimeType?: Mime) => async () => {
   const response = await fetchWrapper<VaultFileResponse>(`/vault/files?mimeType=${mimeType || ""}`);
   return response;
};

export const uploadFile = async (data: FormData) => {
   const reponse = await axios.post(`${import.meta.env.VITE_API_URL}/api/vault/upload`, data, {
      withCredentials: true,
      headers: {
         "Content-Type": "multipart/form-data",
      },
   });
   return reponse.data;
};
