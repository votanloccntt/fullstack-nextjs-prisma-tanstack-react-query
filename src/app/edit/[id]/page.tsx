"use client";
import FormPost from "@/components/FormPost";
import { FormInputPost } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface EditPostPageProps {
  params: {
    id: string;
  };
}

const EditPostPage = ({ params: { id } }: EditPostPageProps) => {
  const router = useRouter();

  const { data: dataPost, isLoading: isLoadingPost } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });
  const { mutate: editPost, isLoading: isLoadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputPost) => {
      return axios.post(`/api/posts/${id}`, newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    editPost(data);
  };
  if (isLoadingPost) {
    return (
      <div className="text-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost
        isLoadingSubmit={isLoadingSubmit}
        submit={handleEditPost}
        initialValue={dataPost}
        isEditing={true}
      />
    </div>
  );
};

export default EditPostPage;
