-- CreateEnum
CREATE TYPE "DrivenType" AS ENUM ('CityDriven', 'UberCar', 'HighwayDriven', 'OffRoadDriven', 'CompanyFleet', 'PersonalUse', 'RentalCar', 'Taxi', 'WeekendCar', 'CommercialUse', 'GovernmentVehicle', 'CourierDelivery', 'New');

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "carBrand" TEXT NOT NULL,
    "carModel" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "topSpeed" INTEGER NOT NULL,
    "fuelType" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "images" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,
    "location" TEXT NOT NULL,
    "bookmarked" JSONB NOT NULL,
    "kmDriven" INTEGER NOT NULL,
    "ownerShip" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "regNumber" TEXT,
    "engineCapacity" INTEGER NOT NULL,
    "spareKey" BOOLEAN NOT NULL,
    "new" BOOLEAN NOT NULL,
    "discountPercentage" DOUBLE PRECISION,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SafetyFeatures" (
    "id" SERIAL NOT NULL,
    "airbagNo" INTEGER NOT NULL,
    "ABS" BOOLEAN NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "SafetyFeatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InspectionReport" (
    "id" SERIAL NOT NULL,
    "accedental" BOOLEAN,
    "tempered" BOOLEAN,
    "flooded" BOOLEAN,
    "tyresId" INTEGER,
    "drivenId" INTEGER,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "InspectionReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tyres" (
    "id" SERIAL NOT NULL,
    "flTyre" INTEGER NOT NULL,
    "frTyre" INTEGER NOT NULL,
    "rlTyre" INTEGER NOT NULL,
    "rrTyre" INTEGER NOT NULL,
    "spareTyre" INTEGER NOT NULL,

    CONSTRAINT "Tyres_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driven" (
    "id" SERIAL NOT NULL,
    "type" "DrivenType" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Driven_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Imperfection" (
    "id" SERIAL NOT NULL,
    "part" TEXT NOT NULL,
    "issue" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "inspectionReportId" INTEGER NOT NULL,

    CONSTRAINT "Imperfection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RepaintedPart" (
    "id" SERIAL NOT NULL,
    "part" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "inspectionReportId" INTEGER NOT NULL,

    CONSTRAINT "RepaintedPart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PerfectPart" (
    "id" SERIAL NOT NULL,
    "part" TEXT NOT NULL,
    "inspectionReportId" INTEGER NOT NULL,

    CONSTRAINT "PerfectPart_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SafetyFeatures_carId_key" ON "SafetyFeatures"("carId");

-- CreateIndex
CREATE UNIQUE INDEX "InspectionReport_tyresId_key" ON "InspectionReport"("tyresId");

-- CreateIndex
CREATE UNIQUE INDEX "InspectionReport_drivenId_key" ON "InspectionReport"("drivenId");

-- CreateIndex
CREATE UNIQUE INDEX "InspectionReport_carId_key" ON "InspectionReport"("carId");

-- AddForeignKey
ALTER TABLE "SafetyFeatures" ADD CONSTRAINT "SafetyFeatures_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionReport" ADD CONSTRAINT "InspectionReport_tyresId_fkey" FOREIGN KEY ("tyresId") REFERENCES "Tyres"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionReport" ADD CONSTRAINT "InspectionReport_drivenId_fkey" FOREIGN KEY ("drivenId") REFERENCES "Driven"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InspectionReport" ADD CONSTRAINT "InspectionReport_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Imperfection" ADD CONSTRAINT "Imperfection_inspectionReportId_fkey" FOREIGN KEY ("inspectionReportId") REFERENCES "InspectionReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepaintedPart" ADD CONSTRAINT "RepaintedPart_inspectionReportId_fkey" FOREIGN KEY ("inspectionReportId") REFERENCES "InspectionReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PerfectPart" ADD CONSTRAINT "PerfectPart_inspectionReportId_fkey" FOREIGN KEY ("inspectionReportId") REFERENCES "InspectionReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
