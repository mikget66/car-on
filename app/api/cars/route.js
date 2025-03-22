import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const cars = await prisma.car.findMany({
      include: {
        owner:true,
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
    return new Response(JSON.stringify(cars), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch cars" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
