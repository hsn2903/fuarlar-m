import Link from "next/link";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

async function deleteHotel(id) {
  "use server";

  await prisma.hotel.delete({
    where: { id },
  });

  revalidatePath("/admin/hotels");
}

export default async function AdminHotelsPage() {
  const hotels = await prisma.hotel.findMany({
    include: { images: true },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Oteller</h1>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/admin/hotels/new" className="flex items-center">
              <Plus className="mr-2 h-4 w-4" />
              Yeni Otel
            </Link>
          </Button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Images
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {hotels.map((hotel) => (
              <tr key={hotel.id}>
                <td className="px-6 py-4 whitespace-nowrap">{hotel.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {hotel.images.length} images
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    href={`/admin/hotels/${hotel.id}`}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <form
                    action={deleteHotel.bind(null, hotel.id)}
                    className="inline"
                  >
                    <button
                      type="submit"
                      className="text-red-500 hover:underline"
                      // onClick={(e) => {
                      //   if (
                      //     !confirm(
                      //       "Are you sure you want to delete this hotel?"
                      //     )
                      //   ) {
                      //     e.preventDefault();
                      //   }
                      // }}
                    >
                      Delete
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
