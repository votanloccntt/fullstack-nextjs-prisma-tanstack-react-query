import PostCard from "@/components/PostCard";
import { db } from "@/lib/db";

const getPosts = async () => {
  const response = await db.post.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return response;
};

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
