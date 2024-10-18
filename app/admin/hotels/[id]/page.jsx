import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudinary";

async function getHotel(id) {
  const hotel = await prisma.hotel.findUnique({
    where: { id },
    include: { images: true },
  });

  if (!hotel) notFound();

  return hotel;
}

async function updateHotel(id, formData) {
  "use server";

  const name = formData.get("name");
  const description = formData.get("description");
  const imageFiles = formData.getAll("newImages");
  const imagesToDelete = formData.getAll("deleteImages");

  let newImageUrls = [];
  if (imageFiles && imageFiles.length > 0 && imageFiles[0].size > 0) {
    newImageUrls = await Promise.all(
      imageFiles.map((file) => uploadImage(file))
    );
  }

  const updateData = {
    name,
    description,
    images: {
      deleteMany: {
        id: { in: imagesToDelete },
      },
    },
  };

  if (newImageUrls.length > 0) {
    updateData.images.create = newImageUrls.map((url) => ({ url }));
  }

  await prisma.hotel.update({
    where: { id },
    data: updateData,
  });

  redirect("/admin/hotels");
}

export default async function EditHotelPage({ params }) {
  const hotel = await getHotel(params.id);

  const updateHotelWithId = updateHotel.bind(null, params.id);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Edit Hotel: {hotel.name}</h1>
      <form
        action={updateHotelWithId}
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
            defaultValue={hotel.name}
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
            defaultValue={hotel.description}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Current Images
          </label>
          <div className="grid grid-cols-3 gap-4">
            {hotel.images.map((image) => (
              <div key={image.id} className="relative">
                <Image
                  src={image.url}
                  alt="Hotel"
                  width={200}
                  height={200}
                  className="object-cover"
                />
                <label className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    name="deleteImages"
                    value={image.id}
                    className="mr-2"
                  />
                  Delete
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="newImages"
          >
            Add New Images
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newImages"
            name="newImages"
            type="file"
            multiple
            accept="image/*"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Hotel
          </button>
        </div>
      </form>
    </div>
  );
}
