export function calculateClaimableBalance(totalBalance: number, increment: number): { claimable: number; remaining: number } {
   const claimableIncrements = Math.floor(totalBalance / increment);
   const claimableBalance = claimableIncrements * increment;
   const remainingBalance = totalBalance - claimableBalance;

   return {
      claimable: claimableBalance,
      remaining: remainingBalance,
   };
}
