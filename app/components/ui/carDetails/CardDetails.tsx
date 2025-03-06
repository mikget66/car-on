import React from "react";
import { GiHomeGarage } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import { Car } from "@/types/car";

const CardDetails = ({ car }: { car: Car }) => {
  return (
    <div className="bg-background cardetails mb-10">
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
      </div>
      <div className="flex gap-3">
        <h3 className="text-2xl font-semibold">Price</h3>
        <p className="text-2xl font-semibold text-brandColor">${car.price}</p>
      </div>
      <button className="bg-brandColor text-xl p-1 rounded-lg">
        Book Free Test Drive
      </button>
    </div>
  );
};

export default CardDetails;
