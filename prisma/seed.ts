import { PrismaClient } from "@prisma/client";
import carArticles from "../app/data/carArticles"; // Adjust path as needed
import cars from "../app/data/cars"; // If you want to seed cars too

const prisma = new PrismaClient();

// Driven mapping and helper function (from your previous code)
const drivenMapping = {
  "City Driven": "CityDriven",
  "Uber Car": "UberCar",
  "Highway Driven": "HighwayDriven",
  "Off-Road Driven": "OffRoadDriven",
  "Company Fleet": "CompanyFleet",
  "Personal Use": "PersonalUse",
  "Rental Car": "RentalCar",
  "Taxi": "Taxi",
  "Weekend Car": "WeekendCar",
  "Commercial Use": "CommercialUse",
  "Government Vehicle": "GovernmentVehicle",
  "Courier/Delivery": "CourierDelivery",
  "new": "New",
} as const;

function mapDrivenType(type: string): string {
  if (type in drivenMapping) {
    return drivenMapping[type as keyof typeof drivenMapping] as string;
  }
  throw new Error(`Unknown driven type: ${type}`);
}

async function main() {
  // Upsert the author "Michael Anwar" with id "author1"
  const author = await prisma.author.upsert({
    where: { id: "author1" },
    update: {},
    create: {
      id: "author1",
      name: "Michael Anwar",
      email: "michael.anwar@example.com",
      password: "securepassword", // In real apps, hash your password!
      username: "michaelanwar",
      description: "Automotive enthusiast and tech writer.",
      avatar: "/images/authors/michael-avatar.png",
    },
  });

  // Insert all articles from carArticles, assigning them to author1
  for (const rawArticle of carArticles) {
    // Omit the auto-generated id if present
    const { id, author: _unused, ...articleData } = rawArticle;
    await prisma.article.create({
      data: {
        ...articleData,
        date: new Date(articleData.date), // already a Date object in your file
        author: { connect: { id: author.id } },
      },
    });
  }
  
  // Optionally seed cars as well, if desired:
  for (const rawCar of cars) {
    const { id, safetyFeatures, inspectionReport, ...carData } = rawCar;
    await prisma.car.create({
      data: {
        ...carData,
        safetyFeatures: {
          create: {
            airbagNo: safetyFeatures.airbagNo,
            ABS: safetyFeatures.ABS,
          },
        },
        inspectionReport: {
          create: {
            accedental: inspectionReport.accedental,
            tempered: inspectionReport.tempered,
            flooded: inspectionReport.flooded,
            imprerfections:
              inspectionReport.imprerfections && inspectionReport.imprerfections.length
                ? { createMany: { data: inspectionReport.imprerfections } }
                : undefined,
            repaintedParts:
              inspectionReport.repaintedParts && inspectionReport.repaintedParts.length
                ? { createMany: { data: inspectionReport.repaintedParts } }
                : undefined,
            perfectParts:
              inspectionReport.perfectParts && inspectionReport.perfectParts.length
                ? { createMany: { data: inspectionReport.perfectParts } }
                : undefined,
            tyres: {
              create: {
                flTyre: inspectionReport.tyers.flTyre,
                frTyre: inspectionReport.tyers.frTyre,
                rlTyre: inspectionReport.tyers.rlTyre,
                rrTyre: inspectionReport.tyers.rrTyre,
                spareTyre: inspectionReport.tyers.spareTyre,
              },
            },
            driven: {
              create: {
                type: mapDrivenType(inspectionReport.driven.type),
                description: inspectionReport.driven.description,
              },
            },
          },
        },
      },
    });
  }
  
  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
