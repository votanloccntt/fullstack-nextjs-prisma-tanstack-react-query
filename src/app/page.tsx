import PostCard from "@/components/PostCard";

export default function Home() {
  return (
    <main className="grid justify-center items-center lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </main>
  );
}
