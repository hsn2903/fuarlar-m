import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function getCategories() {
  return await prisma.postCategory.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });
}

async function createCategory(formData) {
  "use server";
  const name = formData.get("name");
  await prisma.postCategory.create({ data: { name } });
  revalidatePath("/admin/posts/categories");
}

async function deleteCategory(formData) {
  "use server";
  const id = formData.get("id");
  await prisma.postCategory.delete({ where: { id } });
  revalidatePath("/admin/posts/categories");
}

export default async function PostCategoriesPage() {
  const categories = await getCategories();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Categories</h1>
      <form action={createCategory} className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="New category name"
          required
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Category
        </button>
      </form>
      <ul className="space-y-4">
        {categories.map((category) => (
          <li
            key={category.id}
            className="flex items-center justify-between bg-white p-4 rounded-md shadow"
          >
            <span>
              {category.name} ({category._count.posts} posts)
            </span>
            <form action={deleteCategory}>
              <input type="hidden" name="id" value={category.id} />
              <button type="submit" className="text-red-500 hover:text-red-700">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}
