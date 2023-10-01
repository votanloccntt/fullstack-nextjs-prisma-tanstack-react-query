import { db } from "@/lib/db";
import { FormInputPost } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body: FormInputPost = await req.json();
    const newPost = await db.post.create({
      data: {
        ...body,
      },
    });
    return NextResponse.json({ newPost }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Could not create post" },
      { status: 400 }
    );
  }
};
