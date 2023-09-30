"use client";

import { FormInputPost } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputPost>;
  isEditing: boolean;
}

const FormPost = ({ submit, isEditing }: FormPostProps) => {
  const { register, handleSubmit } = useForm<FormInputPost>();
  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        {...(register("title"), { required: true })}
        type="text"
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />
      <textarea
        {...(register("content"), { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>
      <select
        {...(register("tag"), { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue=""
      >
        <option disabled value="">
          Select tags
        </option>
        <option>Javascript</option>
        <option>PHP</option>
        <option>Python</option>
      </select>
      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default FormPost;
