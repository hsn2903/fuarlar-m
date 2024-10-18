import { uploadImage } from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

async function addHotel(formData) {
  "use server";

  const name = formData.get("name");
  const description = formData.get("description");
  const imageFiles = formData.getAll("images");

  const imageUrls = await Promise.all(
    imageFiles.map((file) => uploadImage(file))
  );

  await prisma.hotel.create({
    data: {
      name,
      description,
      images: {
        create: imageUrls.map((url) => ({ url })),
      },
    },
  });

  redirect("/admin/hotels");
}

export default function NewHotelPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add New Hotel</h1>
      <form
        action={addHotel}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        encType="multipart/form-data"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Hotel Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            name="name"
            type="text"
            placeholder="Enter hotel name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            placeholder="Enter hotel description"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="images"
          >
            Images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="images"
            name="images"
            type="file"
            multiple
            accept="image/*"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Hotel
          </button>
        </div>
      </form>
    </div>
  );
}
