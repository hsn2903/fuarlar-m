import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function FairDetail({ params }) {
  const fair = await prisma.fair.findUnique({
    where: { slug: params.slug, isPublished: true },
  });

  if (!fair) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={fair.coverImage}
          alt={fair.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{fair.name}</h1>
            <img
              src={fair.logoImage}
              alt={`${fair.name} logo`}
              className="w-16 h-16 object-contain"
            />
          </div>
          <p className="text-gray-600 mb-4">
            {new Date(fair.startDate).toLocaleDateString()} -{" "}
            {new Date(fair.endDate).toLocaleDateString()}
          </p>
          <p className="text-gray-600 mb-4">{fair.venue}</p>
          <p className="text-gray-800 mb-4">{fair.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Type:</span> {fair.type}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Category:</span> {fair.category}
          </div>
          <a
            href={fair.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
