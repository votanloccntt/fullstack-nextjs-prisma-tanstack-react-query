import { Pencil, Trash } from "lucide-react";
import Link from "next/link";

const ButtonAction = () => {
  return (
    <div>
      <Link href="edit/1" className="btn btn-primary mr-2">
        <Pencil />
        Edit
      </Link>
      <button className="btn btn-error text-white">
        <Trash />
        Delete
      </button>
    </div>
  );
};

export default ButtonAction;
