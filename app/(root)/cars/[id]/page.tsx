"use client";
import Link from "next/link";
import Image from "next/image";
import { Car } from "@/types/car";
import baseUrl from "@/app/data/baseURL";
import { useState, useEffect, useRef } from "react";

import { PiEngine } from "react-icons/pi";
import { MdFullscreen } from "react-icons/md";
import { FaCar, FaGears } from "react-icons/fa6";
import { IoKey, IoLocation } from "react-icons/io5";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaExternalLinkAlt, FaRoad, FaUsers } from "react-icons/fa";
import { BsSpeedometer2, BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick, GiHomeGarage, GiCarWheel } from "react-icons/gi";

import StarRating from "@/app/components/ui/StarRating";

import { Caveat } from "next/font/google";
import AccordionComponent from "@/app/components/ui/AccordionComponent";
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

  const sumOfGodTyres = Object.values(car.inspectionReport.tyers).filter(
    (tread) => tread >= 90
  ).length;

  return (
    <div className="bg-light">
      <div className="Container flex flex-col gap-6 py-4 ">
        <div className="flex justify-between items-center gap-2">
          <div>
            <h2 className="text-[2.2rem] font-medium">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
            <div className="my-2 flex flex-row items-center gap-3">
              <Link href={"/"}>{car.carBrand}</Link>{" "}
              <FaExternalLinkAlt className="inline" />/
              <StarRating rating={car.rating} />{" "}
              <span className="text-brandColor">({car.rating})</span>
            </div>
            <p className="text-textlight">{car.location}</p>
          </div>

          <div>
            {isBookmarked ? (
              <div className="text-brandColor">
                <IoMdHeart
                  className="inline mr-1"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                />
                <span>saved</span>
              </div>
            ) : (
              <div>
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
          <div className="row-span-full col-span-full md:row-span-2 md:col-span-2 relative">
            <Image
              src={car.images[0]}
              fill
              alt="carImage"
              className="object-cover"
            />
          </div>
          <div className="hidden md:block relative w-full h-full">
            <Image
              src={car.images[0]}
              alt="Car image"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="hidden md:block relative w-full h-full">
            <Image
              src={car.images[0]}
              alt="Car image"
              fill
              className="object-cover w-full h-full"
            />
          </div>

          <div className="absolute bottom-0 text-sm font-medium right-0 z-10 m-4 p-2 rounded-lg flex flex-row items-center cursor-pointer btn-light">
            <MdFullscreen className="inline text-[1.5rem]" />
            View photos
          </div>
        </div>
        <div className="grid grid-cols-[60%_40%] gap-2">
          <div className="flex flex-col gap-4 border-b-[1px] border-gray-600 pb-10">
            <h3 className="text-4xl font-medium my-4">
              Know Your{" "}
              <span className={`${caveat.className} text-brandColor`}>car</span>
            </h3>
            <div className="details">
              <div>
                <div>
                  <GiCarWheel />
                </div>
                <p>
                  Good tyre life remaining
                  <span>
                    {`${sumOfGodTyres} ${
                      sumOfGodTyres == 1 ? "tyre" : "tyres"
                    } that still have more than 90% of their tread life remaining`}
                  </span>
                </p>
              </div>
              <div>
                <div>
                  <AiTwotoneSafetyCertificate />
                </div>
                <p>
                  Standard safety features
                  <span>
                    {`Equipped with ${car.safetyFeatures.airbagNo} airbags ${
                      car.safetyFeatures.ABS
                        ? "and an Antilock Braking System (ABS)"
                        : ",Not equipped with (ABS)"
                    }`}
                  </span>
                </p>
              </div>
              <div>
                <div>
                  <FaCar />
                </div>
                <p>
                  {car.inspectionReport.driven.type}
                  <span>{car.inspectionReport.driven.description}</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 moredetails">
              <div>
                <div>
                  <AiTwotoneSafetyCertificate />
                </div>
                <p>
                  Reg year
                  <span>May 2019</span>
                </p>
              </div>
              <div>
                <div>
                  <FaGears />
                </div>
                <p>
                  Make year
                  <span>{car.year}</span>
                </p>
              </div>
              <div>
                <div>
                  <FaRoad />
                </div>
                <p>
                  Reg No.
                  <span>{car.regNumber}</span>
                </p>
              </div>
              <div>
                <div>
                  <PiEngine />
                </div>
                <p>
                  Engine capacity
                  <span>{car.engineCapacity} cc</span>
                </p>
              </div>
              <div>
                <div>
                  <IoKey />
                </div>
                <p>
                  Spare key
                  <span>{car.spareKey ? "Available" : "Not available"}</span>
                </p>
              </div>
              <div>
                <div>
                  <GiGearStick />
                </div>
                <p>
                  Transmission
                  <span>{car.transmission}</span>
                </p>
              </div>
              <div>
                <div>
                  <BsSpeedometer2 />
                </div>
                <p>
                  KM driven
                  <span>{car.kmDriven} KM</span>
                </p>
              </div>
              <div>
                <div>
                  <FaUsers />
                </div>
                <p>
                  Ownership
                  <span>{car.ownerShip}</span>
                </p>
              </div>
              <div>
                <div>
                  <BsFillFuelPumpFill />
                </div>
                <p>
                  Fuel type
                  <span>{car.fuelType}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <AccordionComponent
                title="Imperfections"
                subTitle="Details of any imperfections"
              >
                {car.inspectionReport.imprerfections?.map(
                  (imperfection, index: number) => (
                    <div key={index} className="flex justify-between">
                      {imperfection.part}
                      <span>{imperfection.issue}</span>
                      {imperfection.image ? (
                        <img src={imperfection.image} alt="" />
                      ) : (
                        <div
                          role="status"
                          className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                        >
                          <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
                            <svg
                              className="w-10 h-10 text-gray-200 dark:text-gray-600"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 20 18"
                            >
                              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </AccordionComponent>
              <AccordionComponent
                icon={<FaGears size={20} />}
                iconColor="text-blue-500"
                title="Repainted parts"
                subTitle="Details of any repainted parts"
              ></AccordionComponent>
              <AccordionComponent
                title="Imperfections"
                subTitle="Details of any imperfections"
              ></AccordionComponent>
              <AccordionComponent
                title="Imperfections"
                subTitle="Details of any imperfections"
              ></AccordionComponent>
            </div>
          </div>
          <div className="bg-background cardetails ">
            <h2 className="text-2xl font-semibold">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
            <span>{car.transmission}</span>
            <div className="features ">
              <span>{car.kmDriven}KM</span>
              <span>{car.ownerShip}</span>
              <span>{car.fuelType}</span>
              <span>{car.regNumber}</span>
            </div>
            <div>
              <div className="flex gap-1">
                <GiHomeGarage />
                <span>Home Test Drive Available</span>
              </div>
              <div className="flex gap-1">
                <IoLocation />
                <span>{car.location}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <h3 className="text-2xl font-semibold">Price</h3>
              <p className="text-2xl font-semibold text-brandColor">
                ${car.price}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
