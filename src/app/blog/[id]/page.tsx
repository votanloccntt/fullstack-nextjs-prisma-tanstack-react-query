import BackButton from "@/components/BackButton";
import ButtonAction from "@/components/ButtonAction";
import db from "@/lib/db";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

const getPost = async (id: string) => {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });
  return response;
};

const BlogDetailPage = async ({ params: { id } }: BlogDetailPageProps) => {
  const post = await getPost(id);
  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post?.title}</h2>
        <ButtonAction id={id} />
      </div>
      <span className="badge badge-neutral">{post?.tag.name}</span>
      <p>{post?.content}</p>
    </div>
  );
};

export default BlogDetailPage;
