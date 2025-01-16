/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { MAXIMUM_FILE_SIZE_VAULT } from "../constants";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

export const convertFiletoUrl = (file: File) => URL.createObjectURL(file);

export const wait = (delay: number) => {
   return new Promise((resolve) => {
      setTimeout(resolve, delay);
   });
};

export const validateUrl = (url: string) => {
   try {
      new URL(url);
      return true;
   } catch (e) {
      return false;
   }
};

export const capitalize = (str: string) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};

export const timeInString = (value: number) => {
   const valueMinutes = Math.floor(value / 60)
      .toString()
      .padStart(2, "0");
   const valueSeconds = Math.floor(value % 60)
      .toString()
      .padStart(2, "0");
   return `${valueMinutes}:${valueSeconds}`;
};

export const getFullName = (firstName?: string, lastName?: string) => {
   return [firstName, lastName].filter(Boolean).join(" ").trim();
};

export const sanitizeObject = (obj: any, keys: string[]) => {
   const newObj = JSON.parse(JSON.stringify(obj));
   keys.forEach((key) => {
      delete newObj[key];
   });
   return newObj;
};

export const truncateString = (str: string, start: number, end: number) => {
   return str.slice(0, start) + "..." + str.slice(-end);
};

export const truncateFilename = (str: string, start: number = 5, end: number = 6) => {
   const ext = str.split(".").pop();
   const filename = str.split(".").slice(0, -1).join(".");
   if (filename.length <= start + end) return str;
   return truncateString(filename, start, end) + "." + ext;
};

export function shortenTxId(txId: string) {
   return `${txId.slice(0, 6)}...${txId.slice(-6)}`;
}

export const convertIntoSize = (pinSize: number) => {
   const format = (num: number) => Math.floor(num);
   if (pinSize < 1024) return { value: pinSize, symbol: "B" };
   if (pinSize < 1024 * 1024) return { value: format(pinSize / 1024), symbol: "KB" };
   if (pinSize < 1024 * 1024 * 1024) return { value: format(pinSize / (1024 * 1024)), symbol: "MB" };
   return { value: format(pinSize / (1024 * 1024 * 1024)), symbol: "GB" };
};

export const getSpaceOccupied = (pinSize: number) => {
   const totalSpace = MAXIMUM_FILE_SIZE_VAULT * 1024 * 1024;
   const usedSpace = (pinSize / totalSpace) * 100;
   return Number(usedSpace.toFixed(2));
};

export const TimeFormatter = new Intl.RelativeTimeFormat("en", {
   numeric: "auto",
   style: "narrow",
});

export const convertTime = (time: Date) => {
   const currTime = Date.now();
   const TimeDiff = currTime - new Date(time).getTime();

   if (TimeDiff >= 31536000000) {
      const d = Math.floor(TimeDiff / 31536000000);
      return TimeFormatter.format(-d, "years");
   } else if (TimeDiff >= 2419200000) {
      const d = Math.floor(TimeDiff / 2419200000);
      return TimeFormatter.format(-d, "months");
   } else if (TimeDiff >= 86400000) {
      const d = Math.floor(TimeDiff / 86400000);
      return TimeFormatter.format(-d, "days");
   } else if (TimeDiff >= 3600000) {
      const d = Math.floor(TimeDiff / 3600000);
      return TimeFormatter.format(-d, "hours");
   } else if (TimeDiff >= 60000) {
      const d = Math.floor(TimeDiff / 60000);
      return TimeFormatter.format(-d, "minutes");
   } else {
      const d = Math.floor(TimeDiff / 1000);
      return TimeFormatter.format(-d, "seconds");
   }
};
