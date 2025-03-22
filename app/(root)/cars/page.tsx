import Image from "next/image";
import { Car } from "@/types/car";
import {FaBolt, FaCalendar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { TbRoad } from "react-icons/tb";
import { BsFillFuelPumpFill } from "react-icons/bs";

const page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const data = await fetch(`${baseUrl}/api/cars`);
  const cars: Car[] = await data.json();

  return (

    <div className="Container">
      <h2>New and used cars for sale</h2>
      <div className=" grid grid-cols-[25%_75%] py-3">
        <div className="filters">filter</div>

        <div className="flex flex-col  gap-3">
          {cars.map((car) => (
            <div
              className="flex bg-light rounded-lg overflow-hidden"
              key={car.id}
            >
              <div className="w-[350px] h-[280px] overflow-hidden relative">
                <Image
                  src={car.images[0]}
                  fill
                  alt="car"
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col justify-between">
                <p className="text-brandColor text-2xl font-bold">$ {car.price}</p>
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
                <div className="">
                  <button className="btn-dark px-3 py-1"> call</button>
                  <button className="btn-light px-3 py-1"> whatsapp</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
