import HotelCard from "@/app/admin/hotels/_components/hotel-card";
import { prisma } from "@/lib/prisma";

export default async function HotelsPage() {
  const hotels = await prisma.hotel.findMany({
    include: {
      images: true,
    },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}
