import prisma from "@/lib/prisma";

export async function GET(request, context) {
  const userId = context.params.id; // The id of the user for which we want liked cars

  try {
    // Filter for cars where the bookmarked JSON field contains the userId
    const likedCars = await prisma.car.findMany({
      where: {
        bookmarked: {
          array_contains: userId,
        },
      },
      include: {
        owner: {
          select: { name: true, image: true, phone: true, whatsapp: true },
        },
        safetyFeatures: true,
        inspectionReport: {
          include: {
            tyres: true,
            driven: true,
            imprerfections: true, // Note: Typo kept consistent with original
            repaintedParts: true,
            perfectParts: true,
          },
        },
      },
    });

    return new Response(JSON.stringify(likedCars), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching liked cars:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch liked cars" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}