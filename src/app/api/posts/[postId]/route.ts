import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface contextProps {
  params: {
    postId: string;
  };
}

export const DELETE = async (
  req: Request,
  { params: { postId } }: contextProps
) => {
  try {
    await db.post.delete({
      where: {
        id: postId,
      },
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 400 }
    );
  }
};

export const POST = async (
  req: Request,
  { params: { postId } }: contextProps
) => {
  try {
    const body = await req.json();
    const { title, content, tagId } = body;
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        title,
        content,
        tagId,
      },
    });
    return Response.json({ message: "update success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not edit post" },
      { status: 400 }
    );
  }
};
export const GET = async (
  req: Request,
  { params: { postId } }: contextProps
) => {
  try {
    const post = await db.post.findFirst({
      where: {
        id: postId,
      },
      include: {
        tag: true,
      },
    });
    return Response.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not get post" },
      { status: 400 }
    );
  }
};
