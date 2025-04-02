"use client";

import { useEffect, useState } from "react";
import CarSkeleton from "@/app/components/ui/skeletons/CarSkeleton";
import CarCard from "@/app/components/ui/cars/CarCard";
import { Car } from "@/types/car";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface CarListProps {
  query: string;
}

export default function CarListWithSkeleton({ query }: CarListProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Track error state

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on new request

    fetch(`${baseUrl}/api/cars?${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch cars: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [query]);

  // Show skeleton loader while fetching data
  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarSkeleton key={index} />
        ))}
      </div>
    );
  }

  // Show error message if fetching fails
  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>🚨 {error}</p>
        <button 
          className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => window.location.reload()} // Refresh the page
        >
          Retry
        </button>
      </div>
    );
  }

  // Show cars if data is available
  return (
    <div className="flex flex-col gap-5">
      {cars.length > 0 ? (
        cars.map((car) => <CarCard key={car.id} car={car} />)
      ) : (
        <p className="text-center text-gray-500">No cars found.</p>
      )}
    </div>
  );
}
