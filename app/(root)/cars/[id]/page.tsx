"use client";

import Image from "next/image";
import { Car } from "@/types/car";
import baseUrl from "@/app/data/baseURL";
import { useState, useEffect, useRef } from "react";

import { PiEngine, PiThermometerHot } from "react-icons/pi";
import { FaCar, FaCarBurst, FaGears } from "react-icons/fa6";
import { IoKey } from "react-icons/io5";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaCheckCircle, FaRoad, FaUsers, FaWater } from "react-icons/fa";
import { BsSpeedometer2, BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick, GiCarWheel } from "react-icons/gi";

import { Caveat } from "next/font/google";
import AccordionComponent from "@/app/components/ui/AccordionComponent";
import TyreCondition from "@/app/components/ui/carDetails/TyreCondition";
import CardDetails from "@/app/components/ui/carDetails/CardDetails";
import ImageGrid from "@/app/components/ui/carDetails/ImageGrid";
import CarDetailHeader from "@/app/components/ui/carDetails/CarDetailHeader";
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
        <CarDetailHeader car={car} />
        <ImageGrid images={car.images} />

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-2">
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
            <div className="grid lg:grid-cols-4 moredetails">
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
              <h3 className="text-4xl font-medium my-4">
                Inspection{" "}
                <span className={`${caveat.className} text-brandColor`}>
                  Report
                </span>
              </h3>
              <div className="flex justify-between flex-col md:flex-row gap-4">
                <p>
                  We aim to provide our customers with a reliable drive. Every
                  car we sell is refurbished by experts at our Mega
                  Refurbishment Labs.
                </p>
                <div className="flex justify-between">
                  <div className="flex flex-col text-center items-center mx-4 text-sm gap-2">
                    <div className="bg-background p-2 flex items-center justify-center h-14 w-14 rounded-lg">
                      <FaCarBurst size={25} />
                    </div>
                    {car.inspectionReport.accedental ? (
                      <span>Accidental</span>
                    ) : (
                      <span>Not Accidental</span>
                    )}
                  </div>
                  <div className="flex flex-col text-center items-center mx-4 text-sm gap-2">
                    <div className="bg-background p-2 flex items-center justify-center h-14 w-14 rounded-lg">
                      <PiThermometerHot size={25} />
                    </div>
                    {car.inspectionReport.tempered ? (
                      <span>Tempered</span>
                    ) : (
                      <span>Not Tempered</span>
                    )}
                  </div>
                  <div className="flex flex-col text-center items-center mx-4 text-sm gap-2">
                    <div className="bg-background p-2 flex items-center justify-center h-14 w-14 rounded-lg">
                      <FaWater size={25} />
                    </div>
                    {car.inspectionReport.flooded ? (
                      <span>Flooded</span>
                    ) : (
                      <span>Not Flooded </span>
                    )}
                  </div>
                </div>
              </div>
              <AccordionComponent
                title="Imperfections"
                subTitle="Details of any imperfections"
              >
                {car.inspectionReport.imprerfections?.map(
                  (imperfection, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {imperfection.part}
                      <span>{imperfection.issue}</span>
                      {imperfection.image ? (
                        <Image
                          src={"/images/CAR-INSPECTION.jpeg"}
                          alt=""
                          width={90}
                          height={90}
                        />
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
              >
                {car.inspectionReport.repaintedParts?.map(
                  (repaintedPart, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      {repaintedPart.part}

                      {repaintedPart.image ? (
                        <Image
                          src={"/images/CAR-INSPECTION.jpeg"}
                          alt=""
                          width={90}
                          height={90}
                        />
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
                title="Perfect parts"
                subTitle="Details of any perfect parts"
                icon={<FaCheckCircle size={20} />}
                iconColor="text-green-500"
              ></AccordionComponent>
              <AccordionComponent
                title="Tyres (Life Remaining)"
                subTitle="These tyres are in good condition. We ensure every tyre has a minimum tread depth of 1 mm, with no sidewall damage"
                IsOpen={true}
              >
                <div className="grid grid-cols-2 tyreCondition gap-x-3">
                  <div>
                    <span>Left Front Tyre</span>
                    <TyreCondition
                      percentage={car.inspectionReport.tyers.flTyre}
                    />
                  </div>
                  <div>
                    <span>Right Front Tyre</span>
                    <TyreCondition
                      percentage={car.inspectionReport.tyers.frTyre}
                    />
                  </div>
                  <div>
                    <span>Left Rear Tyre</span>
                    <TyreCondition
                      percentage={car.inspectionReport.tyers.rlTyre}
                    />
                  </div>
                  <div>
                    <span>Right Rear Tyre</span>
                    <TyreCondition
                      percentage={car.inspectionReport.tyers.rrTyre}
                    />
                  </div>
                  <div>
                    <span>Spare Tyre</span>
                    <TyreCondition
                      percentage={car.inspectionReport.tyers.spareTyre}
                    />
                  </div>
                </div>
              </AccordionComponent>
            </div>
          </div>
          <CardDetails car={car} />
        </div>
      </div>
    </div>
  );
};

export default Page;
