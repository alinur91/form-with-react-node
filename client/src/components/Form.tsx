import { useForm, SubmitHandler } from "react-hook-form";
import { sendTransaction } from "../services/api";
import Input from "../ui/Input";
import { FormData } from "../lib/types";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await sendTransaction(data);
      alert("Transaction saved successfully!");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        alert(`Error saving transaction: ${error.message}`);
      } else {
        alert("Error saving transaction: An unknown error occurred.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 max-w-md mx-auto bg-white shadow-md rounded"
    >
      <Input
        label="Date & Time"
        name="dateTime"
        type="datetime-local"
        register={register}
        error={errors.dateTime?.message}
      />
      <Input
        label="Author"
        name="author"
        register={register}
        error={errors.author?.message}
      />
      <Input
        label="Sum"
        name="sum"
        type="number"
        register={register}
        error={errors.sum?.message}
      />
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          {...register("category", { required: "Category is required" })}
          className="mt-1 p-2 border rounded w-full"
        >
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>
      <Input
        label="Comment"
        name="comment"
        register={register}
        error={errors.comment?.message}
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 mt-4 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
