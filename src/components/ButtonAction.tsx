"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonActionProps {
  id: string;
}

const ButtonAction = ({ id }: ButtonActionProps) => {
  const router = useRouter();
  const { mutate: deletePost, isLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
  return (
    <div>
      <Link href={`/edit/${id}`} className="btn btn-primary mr-2">
        <Pencil />
        Edit
      </Link>
      <button onClick={() => deletePost()} className="btn btn-error text-white">
        {isLoading && <span className="loading loading-spinner" />}
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
