import { fetchWrapper } from "../utils";

export const getUserTransactions = async () => {
   const transactions = await fetchWrapper(`/tx`);
   return transactions;
};

export const claimRewards = async () => {
   const response = await fetchWrapper(`/tx/claim-tokens`, {
      method: "POST",
   });
   return response;
};
