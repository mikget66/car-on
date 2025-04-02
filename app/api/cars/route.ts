import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // Extract filter parameters from the URL query string
    const condition = searchParams.get("condition"); // "all", "new", "used"
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const minKm = searchParams.get("minKm");
    const maxKm = searchParams.get("maxKm");
    const minYear = searchParams.get("minYear");
    const maxYear = searchParams.get("maxYear");
    const fuelTypes = searchParams.getAll("fuelType"); // Multiple fuel type values

    // Build a dynamic Prisma filter object
    const where: Prisma.CarWhereInput = {};

    // Condition filter: if "new" or "used" is provided, filter on the 'new' field.
    if (condition === "new") {
      where.new = true;
    } else if (condition === "used") {
      where.new = false;
    }

    // Price filter: using separate filter objects for safety.
    if (minPrice || maxPrice) {
      const priceFilter: Prisma.IntFilter = {};
      if (minPrice) {
        priceFilter.gte = Number(minPrice);
      }
      if (maxPrice) {
        priceFilter.lte = Number(maxPrice);
      }
      where.price = priceFilter;
    }

    // Kilometer filter
    if (minKm || maxKm) {
      const kmFilter: Prisma.IntFilter = {};
      if (minKm) {
        kmFilter.gte = Number(minKm);
      }
      if (maxKm) {
        kmFilter.lte = Number(maxKm);
      }
      where.kmDriven = kmFilter;
    }

    // Year filter
    if (minYear || maxYear) {
      const yearFilter: Prisma.IntFilter = {};
      if (minYear) {
        yearFilter.gte = Number(minYear);
      }
      if (maxYear) {
        yearFilter.lte = Number(maxYear);
      }
      where.year = yearFilter;
    }

    // Fuel type filter: if fuelTypes are provided, filter by inclusion.
    if (fuelTypes.length > 0) {
      where.fuelType = { in: fuelTypes };
    }

    // Fetch the filtered cars from the database
    const cars = await prisma.car.findMany({
      where,
      include: {
        owner: {
          select: {
            name: true,
            image: true,
            phone: true,
            whatsapp: true,
          },
        },
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
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
