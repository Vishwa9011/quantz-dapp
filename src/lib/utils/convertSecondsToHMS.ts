export function convertSecondsToHMS(totalSeconds: number): string {
   const hours = Math.floor(totalSeconds / 3600);
   const remainingSecondsAfterHours = totalSeconds % 3600;
   const minutes = Math.floor(remainingSecondsAfterHours / 60);
   const seconds = remainingSecondsAfterHours % 60;

   return `${hours}h:${minutes}m:${seconds}s`;
}
