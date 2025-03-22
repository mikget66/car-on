import React from "react";
import { GiHomeGarage } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { Car } from "@/types/car";
import { FaPhone } from "react-icons/fa6";

const CardDetails = ({ car }: { car: Car }) => {
  return (
    <div className="bg-background cardetails mt-7 mb-10">
      <h2 className="text-2xl font-semibold">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
      <span>{car.transmission}</span>
      <div className="features">
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
        <div className="flex gap-1">
          <FaPhone/>
          <span>{car.owner.phone}</span>
        </div>
      </div>
      <div className="flex gap-3">
        <h3 className="text-2xl font-semibold">Price</h3>
        <p className="text-2xl font-semibold text-brandColor">${car.price}</p>
      </div>
      <button className="bg-brandColor text-white text-xl p-1 font-semibold rounded-lg">
        Book Free Test Drive
      </button>
    </div>
  );
};

export default CardDetails;
