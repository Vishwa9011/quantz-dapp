export const formatDateTime = (isoDate: string): string => {
   const date = new Date(isoDate);

   const options: Intl.DateTimeFormatOptions = {
      weekday: "short", // Sat
      day: "2-digit", // 26
      month: "short", // Oct
      year: "numeric", // 2024
      hour: "numeric", // 3
      minute: "2-digit", // 04
      hour12: true, // PM
   };

   return date.toLocaleDateString("en-US", options);
};
