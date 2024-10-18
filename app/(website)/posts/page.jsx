import { prisma } from "@/lib/prisma";
import Link from "next/link";

async function getPosts() {
  return await prisma.post.findMany({
    where: { isPublished: true },
    include: {
      author: true,
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export default async function BlogHomePage() {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Latest Posts</h1>
      {posts.map((post) => (
        <article
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-gray-600 mb-4">
              <span>By {post.author.name}</span>
              <span className="mx-2">|</span>
              <span>In {post.category.name}</span>
              <span className="mx-2">|</span>
              <span>{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
            <p className="text-gray-700">{post.summary}</p>
          </div>
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
          )}
        </article>
      ))}
    </div>
  );
}
