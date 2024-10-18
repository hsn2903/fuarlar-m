import Image from "next/image";
import Link from "next/link";

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative h-48">
        {hotel.images.length > 0 ? (
          <Image
            src={hotel.images[0].url}
            alt={hotel.name}
            layout="fill"
            objectFit="cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200">
            <span className="text-gray-500">No image available</span>
          </div>
        )}
        {hotel.images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full text-sm">
            +{hotel.images.length - 1} more
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{hotel.description}</p>
        <Link
          href={`/hotels/${hotel.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
