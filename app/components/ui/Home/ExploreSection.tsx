"use client";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination, A11y } from "swiper/modules";

import { CiHeart } from "react-icons/ci";
import { VscFlame } from "react-icons/vsc";
import { TbSwitch3 } from "react-icons/tb";
import { BsFuelPump } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import { GoArrowUpRight } from "react-icons/go";

import "swiper/css";

import "swiper/css/pagination";
import SwiperButtons from "./SwiperButtons";

const caveat = Caveat({ subsets: ["latin"] });
const cars = [
  {
    year: 2020,
    carBrand: "Toyota",
    carModel: "Camry",
    price: 24000,
    topSpeed: 130, // in mph
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    year: 2019,
    carBrand: "Honda",
    carModel: "Civic",
    price: 22000,
    topSpeed: 125,
    fuelType: "Gasoline",
    transmission: "Manual",
    discountPercentage: 20, // Discount percentage
  },
  {
    year: 2021,
    carBrand: "Tesla",
    carModel: "Model 3",
    price: 35000,
    topSpeed: 162,
    fuelType: "Electric",
    transmission: "Automatic",
  },
  {
    year: 2018,
    carBrand: "Ford",
    carModel: "F-150",
    price: 30000,
    topSpeed: 120,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    year: 2022,
    carBrand: "Chevrolet",
    carModel: "Malibu",
    price: 25000,
    topSpeed: 130,
    fuelType: "Gasoline",
    transmission: "Automatic",
    discountPercentage: 10, // Discount percentage
  },
  {
    year: 2017,
    carBrand: "Nissan",
    carModel: "Altima",
    price: 19000,
    topSpeed: 130,
    fuelType: "Diesel",
    transmission: "CVT",
  },
  {
    year: 2020,
    carBrand: "Hyundai",
    carModel: "Elantra",
    price: 21000,
    topSpeed: 120,
    fuelType: "Gasoline",
    transmission: "Manual",
  },
  {
    year: 2021,
    carBrand: "Kia",
    carModel: "Soul",
    price: 23000,
    topSpeed: 130,
    fuelType: "Gasoline",
    transmission: "Automatic",
  },
  {
    year: 2019,
    carBrand: "Subaru",
    carModel: "Outback",
    price: 27000,
    topSpeed: 130,
    fuelType: "Diesel",
    transmission: "Automatic",
  },
  {
    year: 2021,
    carBrand: "Volkswagen",
    carModel: "Jetta",
    price: 23000,
    topSpeed: 140,
    fuelType: "Diesel",
    transmission: "Automatic",
  },
];
const ExploreSection = () => {
  return (
    <section id="explore" className="rounded-3xl bg-light m-5 py-10">
      <div className="Container">
        <div className="my-10">
          <h1
            className={`${caveat.className} text-brandColor font-semibold drop text-5xl`}
          >
            Explore
          </h1>
          <h1 className="text-6xl font-semibold">Explore All Cars</h1>
          <div className="flex justify-between">
            <p>
              Discover exciting categories.
              <span className="text-brandColor">
                Find what you’re looking for.
              </span>
            </p>
            <Link href="/" className="text-brandColor">
              SEE ALL <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center ">
          <div className="">
            <Swiper
              modules={[ Pagination, A11y]}
              spaceBetween={50}
              slidesPerView={3}
            //   pagination={{ clickable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {cars.map((car, index) => (
                <SwiperSlide key={index}>
                  <div className="card bg-background rounded-2xl overflow-hidden">
                    <div className="shine ">
                      <span></span>
                      <div className="absolute top-5 right-5 text-brandColor text-2xl bg-light rounded-full p-2 z-10">
                        {<CiHeart />}
                      </div>
                      {car?.discountPercentage && (
                        <div className="descount absolute top-5 left-0 text-white flex items-center p-2 z-10">
                          <VscFlame className="inline" />
                          {car.discountPercentage}% off
                        </div>
                      )}
                      <img
                        className="dark-overlay"
                        src="/images/cardImage.jpeg"
                        alt=""
                      />
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
                        <li><GiSpeedometer /> {car.topSpeed} MILES</li>
                        <li><BsFuelPump /> {car.fuelType}</li>
                        <li><TbSwitch3 /> {car.transmission}</li>
                      </ul>
                      <p>Free Test Drive today at Noakhali, Bangladesh</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperButtons
                // slides= {cars.length}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
