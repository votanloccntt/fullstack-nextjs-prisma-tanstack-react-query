import { Tag } from "@prisma/client";
import Link from "next/link";

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    tag: Tag;
  };
}

const PostCard = ({ post: { id, title, content, tag } }: PostCardProps) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content.slice(0, 30)}</p>
        <div className="card-actions justify-end">
          <span className="badge badge-neutral">{tag.name}</span>
          <Link href={`blog/${id}`} className="hover:underline">
            Read more...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
