"use client";
import StarRating from "@/app/components/ui/StarRating";
import baseUrl from "@/app/data/baseURL";
import Link from "next/link";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";

type CarDetails = {
  id: string;
  year: number;
  carBrand: string;
  carModel: string;
  rating: number;
  location: string;
  price: number;
  topSpeed: number;
  fuelType: string;
  transmission: string;
  image: string;
  bookmarked: boolean;
};

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [car, setCar] = useState<CarDetails | null>(null);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  
  useEffect(() => {
    
    const fetchCarDetails = async () => {

      try {
        const id = (await params).id;
        const response = await fetch(`${baseUrl}/api/cars/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: CarDetails = await response.json();
        setCar(data);
        setIsBookmarked(data.bookmarked);
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCarDetails();
  },);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Container">
      <div className="flex">
        <div className="">
          <h2 className="text-3xl font-semibold">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
          <div>
            <Link href={"/"}>{car.carBrand}</Link>{" "}
            <FaExternalLinkAlt className="inline" />/
            <StarRating rating={car.rating} />{" "}
            <span className="text-brandColor">({car.rating})</span>
          </div>
          <p>{car.location}</p>
        </div>

        <div className="">
          {isBookmarked ? (
            <IoMdHeart className="text-brandColor"
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
            />
          ) : (
            <IoMdHeartEmpty 
              onClick={() => {
                setIsBookmarked(!isBookmarked);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
