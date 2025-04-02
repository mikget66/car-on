import prisma from "@/lib/prisma";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const userId = params.id; // the id of the user who posted the cars

  try {
    const postedCars = await prisma.car.findMany({
      where: {
        owner: {
          // Assuming owner is a relation to the User model, filtering by owner id.
          // If your schema uses ownerId directly, you could also do: ownerId: userId
          id: userId,
        },
      },
      include: {
        owner: { select: { name: true, image: true, phone: true, whatsapp: true } },
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
    
    return new Response(JSON.stringify(postedCars), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching posted cars:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch posted cars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
