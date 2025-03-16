import Image from "next/image";
import { Car } from "@/types/car";
import AccordionComponent from "@/app/components/ui/AccordionComponent";
import TyreCondition from "@/app/components/ui/carDetails/TyreCondition";

import { Caveat } from "next/font/google";
const caveat = Caveat({ subsets: ["latin"] });

import { PiThermometerHot } from "react-icons/pi";
import { FaCarBurst, FaGears } from "react-icons/fa6";
import { FaCheckCircle, FaWater } from "react-icons/fa";

const InspectionReport = ({ car }: { car: Car }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-4xl font-medium my-4">
        Inspection{" "}
        <span className={`${caveat.className} text-brandColor`}>Report</span>
      </h3>
      <div className="flex justify-between flex-col md:flex-row gap-4">
        <p>
          We aim to provide our customers with a reliable drive. Every car we
          sell is refurbished by experts at our Mega Refurbishment Labs.
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
              <span>Not Flooded</span>
            )}
          </div>
        </div>
      </div>
      <AccordionComponent
        title="Imperfections"
        subTitle="Details of any imperfections"
      >
        {car.new ? (
          <p className="text-green-600 font-semibold">
            This is a brand-new car. No imperfections to display!
          </p>
        ) : car.inspectionReport?.imprerfections &&
          car.inspectionReport.imprerfections.length > 0 ? (
          car.inspectionReport.imprerfections.map((imperfection, index) => (
            <div key={index} className="flex justify-between items-center">
              {imperfection.part}
              <span>{imperfection.issue}</span>
              {imperfection.image ? (
                <Image
                  src={imperfection.image}
                  alt="Imperfection image"
                  width={90}
                  height={90}
                  className="rounded"
                />
              ) : (
                <div
                  role="status"
                  className="animate-pulse flex items-center justify-center w-24 h-24 bg-gray-300 rounded"
                >
                  <svg
                    className="w-10 h-10 text-gray-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-green-600 font-semibold">
            Good as new! No imperfections found.
          </p>
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
            <div key={index} className="flex justify-between items-center">
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
      >
        {car.inspectionReport.perfectParts?.map((perfect, index: number) => {
          return (
            <div className="" key={index}>
              {perfect.part}
            </div>
          );
        })}
      </AccordionComponent>
      <AccordionComponent
        title="Tyres (Life Remaining)"
        subTitle="These tyres are in good condition. We ensure every tyre has a minimum tread depth of 1 mm, with no sidewall damage"
        IsOpen={true}
      >
        <div className="grid grid-cols-2 tyreCondition gap-x-3">
          <div>
            <span>Left Front Tyre</span>
            <TyreCondition
              percentage={car.inspectionReport.tyres?.flTyre ?? 0}
            />
          </div>
          <div>
            <span>Right Front Tyre</span>
            <TyreCondition
              percentage={car.inspectionReport.tyres?.frTyre ?? 0}
            />
          </div>
          <div>
            <span>Left Rear Tyre</span>
            <TyreCondition
              percentage={car.inspectionReport.tyres?.rlTyre ?? 0}
            />
          </div>
          <div>
            <span>Right Rear Tyre</span>
            <TyreCondition
              percentage={car.inspectionReport.tyres?.rrTyre ?? 0}
            />
          </div>
          <div>
            <span>Spare Tyre</span>
            <TyreCondition
              percentage={car.inspectionReport.tyres?.spareTyre ?? 0}
            />
          </div>
        </div>
      </AccordionComponent>
    </div>
  );
};

export default InspectionReport;
