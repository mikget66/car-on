"use client";

import { Car } from "@/types/car";
import baseUrl from "@/app/data/baseURL";
import { useState, useEffect } from "react";

import CardDetails from "@/app/components/ui/carDetails/CardDetails";
import ImageGrid from "@/app/components/ui/carDetails/ImageGrid";
import CarDetailHeader from "@/app/components/ui/carDetails/CarDetailHeader";
import InspectionReport from "@/app/components/ui/carDetails/InspectionReport";
import KnowYourCar from "@/app/components/ui/carDetails/KnowYourCar";
import CarDetailsSkeleton from "@/app/components/ui/skeletons/CarDetailsSkeleton";

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [car, setCar] = useState<Car | null>(null);

  // Fetch car details
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const id = (await params).id;
        const response = await fetch(`${baseUrl}/api/cars/${id}`);
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);

        const data: Car = await response.json();
        setCar(data);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCarDetails();
  }, [params]);

  if (!car) return <CarDetailsSkeleton/>;

  console.log(car);
  return (
    <div className="bg-light">
      <div className="Container flex flex-col gap-6 py-4 ">
        <CarDetailHeader car={car} />
        <ImageGrid images={car.images} />

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-2">
          <div className="flex flex-col gap-4 border-b-[1px] border-gray-600 pb-10">
            <KnowYourCar car={car} />
            <InspectionReport car={car} />
          </div>
          <CardDetails car={car} />
        </div>
      </div>
    </div>
  );
};

export default Page;
