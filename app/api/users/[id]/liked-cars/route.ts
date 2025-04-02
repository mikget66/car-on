import { NextRequest } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const userId = context.params.id; // the id of the user for which we want liked cars
  
  try {
    // Filter for cars where the bookmarked JSON field contains the userId.
    // This assumes your bookmarked field is stored as an array in JSON.
    const likedCars = await prisma.car.findMany({
      where: {
        bookmarked: {
          // Prisma’s JSON "contains" operator: if userId is found in the array.
          array_contains: userId,
        },
      },
      include: {
        owner: { select: { name: true, image: true, phone: true, whatsapp: true } },
        safetyFeatures: true,
        inspectionReport: {
          include: {
            tyres: true,
            driven: true,
            imprerfections: true, // Note: likely a typo; should be "imperfections"
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
    return new Response(JSON.stringify({ error: "Failed to fetch liked cars" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}