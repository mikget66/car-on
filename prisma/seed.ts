// import { PrismaClient } from "@prisma/client";
// import carArticles from "../app/data/carArticles"; // Adjust path as needed
// import cars from "../app/data/cars"; // Adjust path if needed

// const prisma = new PrismaClient();

// // Driven mapping and helper function
// const drivenMapping = {
//   "City Driven": "CityDriven",
//   "Uber Car": "UberCar",
//   "Highway Driven": "HighwayDriven",
//   "Off-Road Driven": "OffRoadDriven",
//   "Company Fleet": "CompanyFleet",
//   "Personal Use": "PersonalUse",
//   "Rental Car": "RentalCar",
//   "Taxi": "Taxi",
//   "Weekend Car": "WeekendCar",
//   "Commercial Use": "CommercialUse",
//   "Government Vehicle": "GovernmentVehicle",
//   "Courier/Delivery": "CourierDelivery",
//   "new": "New",
// } as const;

// function mapDrivenType(type: string): string {
//   if (type in drivenMapping) {
//     return drivenMapping[type as keyof typeof drivenMapping] as string;
//   }
//   throw new Error(`Unknown driven type: ${type}`);
// }

// async function main() {
//   // Upsert the Author "Michael Anwar" (for articles)
//   const author = await prisma.author.upsert({
//     where: { id: "author1" },
//     update: {},
//     create: {
//       id: "author1",
//       name: "Michael Anwar",
//       email: "michael.anwar@example.com",
//       password: "securepassword", // In real apps, hash your password!
//       username: "michaelanwar",
//       description: "Automotive enthusiast and tech writer.",
//       avatar: "/images/authors/michael-avatar.png",
//     },
//   });

//   // Upsert the User "Michael Anwar" (for car ownership)
//   const user = await prisma.user.upsert({
//     where: { email: "michael.user@example.com" },
//     update: {},
//     create: {
//       id: "user1", // or let it be auto-generated if you prefer
//       name: "Michael Anwar",
//       phone: "123-456-7890",
//       whatsapp: "123-456-7890",
//       email: "michael.user@example.com",
//       password: "securepassword", // In real apps, hash your password!
//       image: "/images/users/michael-avatar.png",
//       location: "Your City, Country",
//       type: "Individual",
//     },
//   });

//   // Insert all articles from carArticles, assigning them to the Author ("author1")
//   for (const rawArticle of carArticles) {
//     // Omit the auto-generated id if present
//     const { id, author: _unused, ...articleData } = rawArticle;
//     await prisma.article.create({
//       data: {
//         ...articleData,
//         date: new Date(articleData.date),
//         author: { connect: { id: author.id } },
//       },
//     });
//   }

//   // Insert all cars, assigning them to the User ("user1")
//   for (const rawCar of cars) {
//     // Omit the auto-generated id and override ownerId if present
//     const { id, ownerId: _oldOwnerId, safetyFeatures, inspectionReport, ...carData } = rawCar;
//     await prisma.car.create({
//       data: {
//         ...carData,
//         // Connect the car to the user (Michael Anwar as owner)
//         owner: { connect: { id: user.id } },
//         safetyFeatures: {
//           create: {
//             airbagNo: safetyFeatures.airbagNo,
//             ABS: safetyFeatures.ABS,
//           },
//         },
//         inspectionReport: {
//           create: {
//             accedental: inspectionReport.accedental,
//             tempered: inspectionReport.tempered,
//             flooded: inspectionReport.flooded,
//             imprerfections:
//               inspectionReport.imprerfections && inspectionReport.imprerfections.length
//                 ? { createMany: { data: inspectionReport.imprerfections } }
//                 : undefined,
//             repaintedParts:
//               inspectionReport.repaintedParts && inspectionReport.repaintedParts.length
//                 ? { createMany: { data: inspectionReport.repaintedParts } }
//                 : undefined,
//             perfectParts:
//               inspectionReport.perfectParts && inspectionReport.perfectParts.length
//                 ? { createMany: { data: inspectionReport.perfectParts } }
//                 : undefined,
//             tyres: {
//               create: {
//                 flTyre: inspectionReport.tyers.flTyre,
//                 frTyre: inspectionReport.tyers.frTyre,
//                 rlTyre: inspectionReport.tyers.rlTyre,
//                 rrTyre: inspectionReport.tyers.rrTyre,
//                 spareTyre: inspectionReport.tyers.spareTyre,
//               },
//             },
//             driven: {
//               create: {
//                 type: mapDrivenType(inspectionReport.driven.type),
//                 description: inspectionReport.driven.description,
//               },
//             },
//           },
//         },
//       },
//     });
//   }

//   console.log("Seeding completed successfully!");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
