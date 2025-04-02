"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import CarCard from "../cars/CarCard";
import CarSkeleton from "../skeletons/CarSkeleton";
import { Car } from "@/types/car";
import ErrorMessage from "../../ErrorMessage";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const LikedCars = () => {
  const { user } = useAuth();
  const userId = user?.id;

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;

    const fetchLikedCars = async () => {
      try {
        const response = await fetch(
          `${baseUrl}api/users/${userId}/liked-cars`
        );
        if (!response.ok) throw new Error("Failed to fetch liked cars");

        const data = await response.json();
        setCars(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchLikedCars();
  }, [userId]);

  if (!userId) return <p>Please log in to see liked cars.</p>;
  if (loading) {
    return (
      <div className="flex flex-col gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <CarSkeleton key={index} />
        ))}
      </div>
    );
  }
  if (error) return <ErrorMessage error={error} />;

  return (
    <div className="flex flex-col gap-5">
      {cars.length > 0 ? (
        cars.map((car) => <CarCard key={car.id} car={car} />)
      ) : (
        <p>No liked cars found.</p>
      )}
    </div>
  );
};

export default LikedCars;
