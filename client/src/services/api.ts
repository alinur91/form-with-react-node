// services/api.ts
import axios from "axios";
import { FormData } from "../lib/types";

export const sendTransaction = async (data: FormData) => {
  const response = await axios.post("http://localhost:5000/submit", data);
  return response.data;
};
