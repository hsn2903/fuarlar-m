import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function getTags() {
  return await prisma.postTag.findMany({
    include: {
      _count: {
        select: { posts: true },
      },
    },
  });
}

async function createTag(formData) {
  "use server";
  const name = formData.get("name");
  await prisma.postTag.create({ data: { name } });
  revalidatePath("/admin/posts/tags");
}

async function deleteTag(formData) {
  "use server";
  const id = formData.get("id");
  await prisma.postTag.delete({ where: { id } });
  revalidatePath("/admin/posts/tags");
}

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tags</h1>
      <form action={createTag} className="mb-6">
        <input
          type="text"
          name="name"
          placeholder="New tag name"
          required
          className="border border-gray-300 rounded-md p-2 mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Tag
        </button>
      </form>
      <ul className="space-y-4">
        {tags.map((tag) => (
          <li
            key={tag.id}
            className="flex items-center justify-between bg-white p-4 rounded-md shadow"
          >
            <span>
              {tag.name} ({tag._count.posts} posts)
            </span>
            <form action={deleteTag}>
              <input type="hidden" name="id" value={tag.id} />
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
