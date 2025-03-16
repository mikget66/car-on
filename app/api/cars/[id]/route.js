import prisma from "@/lib/prisma"; // Adjust the path if needed

export async function GET(request, { params }) {
  const { id } = params; // params is already an object, no need for await
  const carId = parseInt(id, 10);

  // Fetch the car from the database using Prisma
  const car = await prisma.car.findUnique({
    where: { id: carId },
    include: {
      safetyFeatures: true,
      inspectionReport: {
        include: {
          tyres: true,
          driven: true,
          imprerfections: true,
          repaintedParts: true,
          perfectParts: true,
        },
      },
    },
  });

  if (!car) {
    return new Response(
      JSON.stringify({ error: "car not found" }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return new Response(
    JSON.stringify(car),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
