import { prisma } from "@/lib/prisma";

const AdminPage = async () => {
  const fairCount = await prisma.fair.count();
  const publishedFairCount = await prisma.fair.count({
    where: { isPublished: true },
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Fairs</h2>
          <p className="text-4xl font-bold">{fairCount}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Published Fairs</h2>
          <p className="text-4xl font-bold">{publishedFairCount}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
