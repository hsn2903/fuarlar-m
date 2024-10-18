import { prisma } from "@/lib/prisma";
import Link from "next/link";
import React from "react";

const FairsPage = async () => {
  const fairs = await prisma.fair.findMany({
    where: { isPublished: true },
    orderBy: { startDate: "asc" },
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Upcoming Fairs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fairs.map((fair) => (
          <Link key={fair.id} href={`/fuarlar/${fair.slug}`} className="block">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={fair.coverImage}
                alt={fair.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{fair.name}</h2>
                <p className="text-gray-600 mb-2">
                  {new Date(fair.startDate).toLocaleDateString()} -{" "}
                  {new Date(fair.endDate).toLocaleDateString()}
                </p>
                <p className="text-gray-600">{fair.venue}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FairsPage;
