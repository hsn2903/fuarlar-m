import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";

async function getAuthorsAndCategories() {
  const authors = await prisma.user.findMany();
  const categories = await prisma.postCategory.findMany();
  return { authors, categories };
}

async function createPost(formData) {
  "use server";
  const title = formData.get("title");
  const content = formData.get("content");
  const summary = formData.get("summary");
  const authorId = formData.get("authorId");
  const categoryId = formData.get("categoryId");
  const isPublished = formData.get("isPublished") === "on";
  const image = formData.get("image");

  let imageUrl = "";
  if (image && image.size > 0) {
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "blog-posts" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      image.arrayBuffer().then((arr) => {
        uploadStream.end(Buffer.from(arr));
      });
    });
    imageUrl = result.secure_url;
  }

  const slug = title
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");

  await prisma.post.create({
    data: {
      title,
      slug,
      content,
      summary,
      authorId,
      categoryId,
      isPublished,
      image: imageUrl,
    },
  });

  revalidatePath("/admin/posts");
  redirect("/admin/posts");
}

export default async function NewPostPage() {
  const { authors, categories } = await getAuthorsAndCategories();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Post</h1>
      <form action={createPost} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            id="content"
            name="content"
            rows="10"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-700"
          >
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            rows="3"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="authorId"
            className="block text-sm font-medium text-gray-700"
          >
            Author
          </label>
          <select
            id="authorId"
            name="authorId"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            {authors.map((author) => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="categoryId"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="categoryId"
            name="categoryId"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="mt-1 block w-full"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPublished"
            name="isPublished"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label
            htmlFor="isPublished"
            className="ml-2 block text-sm text-gray-900"
          >
            Publish immediately
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
