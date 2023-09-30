import { BookOpenCheck } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="flex-1">
          <Link href="/">
            <BookOpenCheck className="text-rose-500" />
          </Link>
        </div>
        <div className="flex-none">
          <Link className="btn btn-ghost" href="create">
            Create Post
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
