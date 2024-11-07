import { UseFormRegister } from "react-hook-form";

export type FormData = {
  dateTime: string;
  author: string;
  sum: number;
  category: string;
  comment: string;
};

export type InputProps = {
  label: string;
  name: keyof FormData;
  type?: string;
  register: UseFormRegister<FormData>;
  placeholder?: string;
  error?: string;
};

export type Transaction = {
  dateTime: string;
  author: string;
  sum: number;
  category: string;
  comment: string;
};


