import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

async function getPost(slug) {
  const post = await prisma.post.findUnique({
    where: { slug },
    include: {
      author: true,
      category: true,
    },
  });

  if (!post || !post.isPublished) {
    notFound();
  }

  return post;
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);

  return (
    <article className="bg-white shadow-md rounded-lg overflow-hidden">
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
      )}
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="text-sm text-gray-600 mb-4">
          <span>By {post.author.name}</span>
          <span className="mx-2">|</span>
          <span>In {post.category.name}</span>
          <span className="mx-2">|</span>
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
