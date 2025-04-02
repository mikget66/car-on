"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import { CiHeart } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import { TbSwitch3 } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { TfiBolt } from "react-icons/tfi";

import { SwiperButtons } from "./SwiperButtons";
import CarSlideSkeleton from "@/app/components/ui/skeletons/CarSlideSkeleton";

import Link from "next/link";
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
import { Car } from "@/types/car";

const CarSlider = () => {
  const [cars, setCars] = useState<Car[]>([]);
const memoizedCars = useMemo(() => cars, [cars]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/cars`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError("Error fetching car articles. Please try again later.");
        console.error("Error fetching car articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <CarSlideSkeleton />;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col justify-center">
      <div>
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          breakpoints={{
            640: { slidesPerView: 2 },
            1668: { slidesPerView: 3 },
            0: { slidesPerView: 1 },
          }}
        >
          {memoizedCars.map((car) => (
            <SwiperSlide key={car.id}>
              <Link href={`/cars/${car.id}`}>
                <div className="card bg-background rounded-2xl overflow-hidden">
                  <div className="shine h-fit overflow-hidden">
                    <span></span>
                    <div className="absolute top-5 right-5 text-brandColor text-2xl bg-light rounded-full p-2 z-10">
                      <CiHeart />
                    </div>
                    {car.discountPercentage && (
                      <div className="descount absolute top-5 left-0 text-white flex items-center p-2 z-10">
                        <VscFlame className="inline" />
                        {car.discountPercentage}% off
                      </div>
                    )}

                    <div className="relative w-full h-[200px] sm:h-[220px] md:h-[254px] lg:h-[300px]">
                      <Image
                        className="object-cover"
                        src={car.images[0]}
                        alt={car.carBrand}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1668px) 50vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-3xl">
                      {car.year} {car.carBrand} {car.carModel}
                    </h4>
                    <p className="text-textlight">
                      CoWorking, Dedicated Desk, Serviced Offices POA
                    </p>
                    <div className="text-brandColor text-3xl font-bold block my-3">
                      ${car.price}
                    </div>
                    <hr className="border-textlight opacity-85" />
                    <ul>
                      <li>
                        <GiSpeedometer /> {car.kmDriven} KM
                      </li>
                      <li>
                        {car.fuelType == "Electric" ? (
                          <TfiBolt />
                        ) : (
                          <BsFillFuelPumpFill />
                        )}
                        {car.fuelType}
                      </li>
                      <li>
                        <TbSwitch3 /> {car.transmission}
                      </li>
                    </ul>
                    <p>Free Test Drive today at Noakhali, Bangladesh</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <SwiperButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default CarSlider;
