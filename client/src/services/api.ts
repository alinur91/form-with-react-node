// services/api.ts
import axios from "axios";
import { FormData } from "../lib/types";

export const sendTransaction = async (data: FormData) => {
  const response = await axios.post("http://localhost:5000/api/submit", data);
  return response.data;
};

export const fetchTransactions = async () => {
  const response = await axios.get("http://localhost:5000/api/transactions");
  return response.data; // Return the list of transactions
};
