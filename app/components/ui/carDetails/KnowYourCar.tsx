import { PiEngine } from "react-icons/pi";
import { FaCar,  FaGears } from "react-icons/fa6";
import { IoKey } from "react-icons/io5";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { FaRoad, FaUsers } from "react-icons/fa";
import { BsSpeedometer2, BsFillFuelPumpFill } from "react-icons/bs";
import { GiGearStick, GiCarWheel } from "react-icons/gi";

import { Caveat } from "next/font/google";
import { Car } from "@/types/car";
const caveat = Caveat({ subsets: ["latin"] });
const KnowYourCar = ({car}:{car:Car}) => {
    
    const sumOfGodTyres = Object.values(car.inspectionReport?.tyres || {}).filter(
        (tread) => tread >= 90
      ).length;
      
  return (
        <div className="">

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
        </div>
           
  )
}

export default KnowYourCar
