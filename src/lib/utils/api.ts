import axios from "axios";

export type Response<T> = {
   success: boolean;
   message: string;
   status: number;
   data: T;
};

const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const defaultReqOptions: RequestInit = {
   credentials: "include",
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
   },
};

export const fetchWrapper = async <T>(url: string, options: RequestInit = {}): Promise<T> => {
   const fullUrl = `${BASE_URL}${url}`;
   const response = await fetch(fullUrl, { ...defaultReqOptions, ...options });

   if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
   }

   const data = (await response.json()) as Response<T>;
   return data.data;
};

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   withCredentials: true,
   headers: {
      "Content-Type": "application/json",
   },
});
