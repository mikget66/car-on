import SearchForm from "../../SearchForm";
import { Caveat } from "next/font/google";
import Image from "next/image";
import Wave from "../Wave";

const caveat = Caveat({ subsets: ["latin"] });
const carLinks = [
    {
      href: "#",
      text: "Sedan",
      icon: "/svgs/car-1.svg",
    },
    {
      href: "#",
      text: "SUV",
      icon: "/svgs/car-2.svg",
    },
    {
      href: "#",
      text: "Coupe",
      icon: "/svgs/car-3.svg",
    },
    {
      href: "#",
      text: "Hatchback",
      icon: "/svgs/car-4.svg",
    },
    {
      href: "#",
      text: "Convertible",
      icon: "/svgs/car-5.svg",
    },
    {
      href: "#",
      text: "Wagon",
      icon: "/svgs/car-6.svg",
    },
  ];

const Main = () => {
  return (
    <main
    className="
  main
  min-h-screen
  flex flex-col justify-center items-center  
  bg-CarImage bg-no-repeat bg-cover bg-center
  "
  >
    <h1 className="text-6xl md:text-8xl font-bold my-8">
      Find Your
      <span className={`${caveat.className} text-brandColor text-span`}>
        Dream
      </span>
      Car.
    </h1>
    <p className="mb-8 text-lg md:text-2xl m-1">
      {`You'll get comprehensive results based on the provided location.`}
    </p>

    <SearchForm />

    <div className=" text-white flex flex-row gap-5 flex-wrap md:flex-nowrap justify-center">
      {carLinks.map((car) => (
        <a
          href="#"
          className="flex flex-col items-center  gap-1 fs-13 fw-medium "
          key={car.text}
        >
          <Image
            src={car.icon}
            alt={car.text}
            width={100}
            height={29}
            className="icon-svg"
          />
          {car.text}
        </a>
      ))}
    </div>
    <Wave/>
  </main>
  )
}

export default Main