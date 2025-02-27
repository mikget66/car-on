"use client";
import StarRating from "@/app/components/ui/StarRating";
import baseUrl from "@/app/data/baseURL";
import Link from "next/link";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { Car } from "@/types/car";
import { Caveat } from "next/font/google";
import { MdFullscreen } from "react-icons/md";

const caveat = Caveat({ subsets: ["latin"] });

const Page = ({ params }: { params: Promise<{ id: string }> }) => {
  const [car, setCar] = useState<Car | null>(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const firstUpdate = useRef(true);
  const userId = "10"; // Hardcoded user ID

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
        setIsBookmarked(data.bookmarked.includes(userId));
      } catch (error) {
        console.error("Error fetching car:", error);
      }
    };

    fetchCarDetails();
  }, [params]);

  // Handle bookmark changes
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (!car) return;

    const endpoint = isBookmarked ? "bookmark" : "unbookmark";
    fetch(`${baseUrl}/api/cars/${car.id}/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    }).catch((error) => {
      console.error("Error updating bookmark:", error);
      setIsBookmarked((prev) => !prev); // Revert on error
    });
  }, [isBookmarked, car?.id, car]);

  if (!car) return <div>Loading...</div>;

  return (
    <div className="bg-light">
      <div className="Container flex flex-col gap-6 py-4 ">
        <div className="flex justify-between items-center gap-2">
          <div className="">
            <h2 className="text-[2.2rem] font-medium">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
            <div className="my-2 flex flex-row items-center gap-3">
              <Link href={"/"}>{car.carBrand}</Link>{" "}
              <FaExternalLinkAlt className="inline" />/
              <StarRating rating={car.rating} />{" "}
              <span className="text-brandColor">({car.rating})</span>
            </div>
            <p className="text-textlight">{car.location}</p>
          </div>

          <div className="">
            {isBookmarked ? (
              <div className="text-brandColor">
                <IoMdHeart
                  className="inline mr-1"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                />
                <span>saved</span>
              </div>
            ) : (
              <div className="">
                <IoMdHeartEmpty
                  className="inline mr-1"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                />
                <span>save this car</span>
              </div>
            )}
            <p>{car.bookmarked.length} people bookmarked this car</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden grid grid-cols-3 grid-rows-2 gap-2  md:h-[350px] xl:h-[480px] 2xl:h-[540px] relative">
          <img
            src={car.images[0]}
            alt=""
            className="row-span-full col-span-full md:row-span-2 md:col-span-2 object-cover w-full  h-full relative"
          />
          <img
            src={car.images[0]}
            alt=""
            className="w-full h-full object-cover hidden md:inline-block"
          />
          <img
            src={car.images[0]}
            alt=""
            className="w-full h-full object-cover hidden md:inline-block"
          />

          <div className="absolute bottom-0 text-sm font-medium right-0 z-10 m-4 p-2 rounded-lg flex flex-row items-center cursor-pointer btn-light">
          <MdFullscreen className="inline text-[1.5rem]"/>View photos
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%]">
          <div className="">
            <h3 className="text-4xl font-medium">
              Know Your{" "}
              <span className={`${caveat.className} text-brandColor`}>car</span>
            </h3>
          </div>
          <div className="bg-background cardetails">
          <h2 className="text-2xl font-semibold">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
          <span>{car.transmission}</span>
          <div className="features">
            <span>{car.kmDriven}KM</span>
            <span>{car.ownerShip}</span>
            <span>{car.fuelType}</span>
            <span>{car.regNumber}</span>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
