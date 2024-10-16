import React from "react";
import { InputProps } from "../lib/types";

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  register,
  placeholder,
  error,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      id={name}
      {...register(name, { required: `${label} is required` })}
      placeholder={placeholder}
      className="mt-1 p-2 border rounded w-full"
    />
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default Input;
