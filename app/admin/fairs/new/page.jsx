import { uploadImage } from "@/lib/actions/upload-image";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function FairForm() {
  const fair = null;
  async function saveFair(formData) {
    "use server";

    const logoImageFile = formData.get("logoImage");
    const coverImageFile = formData.get("coverImage");

    let logoImageUrl = fair?.logoImage;
    let coverImageUrl = fair?.coverImage;

    if (logoImageFile.size > 0) {
      logoImageUrl = await uploadImage(
        new FormData().append("file", logoImageFile)
      );
    }
    if (coverImageFile.size > 0) {
      coverImageUrl = await uploadImage(
        new FormData().append("file", coverImageFile)
      );
    }

    const fairData = {
      name: formData.get("name"),
      slug: formData.get("slug"),
      website: formData.get("website"),
      type: formData.get("type"),
      category: formData.get("category"),
      description: formData.get("description"),
      startDate: new Date(formData.get("startDate")),
      endDate: new Date(formData.get("endDate")),
      venue: formData.get("venue"),
      isPublished: formData.get("isPublished") === "on",
      logoImage: logoImageUrl,
      coverImage: coverImageUrl,
    };

    await prisma.fair.create({ data: fairData });

    revalidatePath("/admin/fairs");
    redirect("/admin/fairs");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Create New Fair</h1>
      <form action={saveFair} className="space-y-4">
        <div>
          <label
            htmlFor="logoImage"
            className="block text-sm font-medium text-gray-700"
          >
            Logo Image
          </label>
          <input
            type="file"
            id="logoImage"
            name="logoImage"
            accept="image/*"
            className="mt-1 block w-full"
          />
          {/* {fair?.logoImage && (
            <img
              src={fair.logoImage}
              alt="Current Logo"
              className="mt-2 h-20 w-auto"
            />
          )} */}
        </div>
        <div>
          <label
            htmlFor="coverImage"
            className="block text-sm font-medium text-gray-700"
          >
            Cover Image
          </label>
          <input
            type="file"
            id="coverImage"
            name="coverImage"
            accept="image/*"
            className="mt-1 block w-full"
          />
          {/* {fair?.coverImage && (
            <img
              src={fair.coverImage}
              alt="Current Cover"
              className="mt-2 h-32 w-auto"
            />
          )} */}
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-gray-700"
          >
            Slug
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label
            htmlFor="venue"
            className="block text-sm font-medium text-gray-700"
          >
            Venue
          </label>
          <input
            type="text"
            id="venue"
            name="venue"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="isPublished" className="inline-flex items-center">
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <span className="ml-2">Publish</span>
          </label>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Fair
          </button>
        </div>
      </form>
    </div>
  );
}
