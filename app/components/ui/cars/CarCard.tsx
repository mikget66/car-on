"use client";
import Link from "next/link";
import Image from "next/image";
import { Car } from "@/types/car";
import { FaBolt, FaCalendar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TbRoad } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Link href={`/cars/${car.id}`}>
      <div className="flex flex-col sm:flex-row bg-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer">
        <div className="sm:w-[350px] h-[200px] md:h-[280px] relative overflow-hidden">
          <Image
            src={car.images[0]}
            fill
            alt={`${car.carBrand} ${car.carModel}`}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
        <div className="p-5 flex flex-col justify-between">
          <p className="text-brandColor text-2xl font-bold">${car.price}</p>
          <p>{`${car.carBrand} ${car.carModel} ${car.year}`}</p>
          <div className="flex items-center gap-2">
            <FaCalendar /> {car.year}{" "}
            {car.new ? (
              <>
                <MdVerified /> <span>new</span>
              </>
            ) : (
              <>
                <TbRoad />
                <span>{car.kmDriven}</span>
              </>
            )}
            {car.fuelType === "Electric" ? (
              <>
                <FaBolt /> <span>{car.fuelType}</span>
              </>
            ) : (
              <>
                <BsFillFuelPumpFill />
                <span>{car.fuelType}</span>
              </>
            )}
          </div>
          <span>{car.location}</span>
          <div className="mt-2">
            <button className="btn-dark px-3 py-1 mr-2">call</button>
            <button className="btn-light px-3 py-1">whatsapp</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
