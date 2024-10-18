import { uploadImage } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const title = formData.get("title");
  const slug = formData.get("slug");
  const content = formData.get("content");
  const summary = formData.get("summary");
  const image = formData.get("image");
  const tags = formData.get("tags");
  const categoryId = formData.get("categoryId");
  const isPublished = formData.get("isPublished") === "true";

  try {
    let imageUrl = null;
    if (image) {
      imageUrl = await uploadImage(image);
    }

    const post = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        summary,
        image: imageUrl,
        tags: { create: tags.map((tag) => ({ name: tag })) },
        categoryId,
        isPublished,
        author: { connect: { id: "your-author-id" } }, // Replace with actual author ID logic
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Error creating post" }, { status: 500 });
  }
}
