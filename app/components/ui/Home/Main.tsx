import SearchForm from "../SearchForm";
import Image from "next/image";
import Wave from "../Wave";

const carLinks = [
  {
    href: "#",
    text: "Sedan",
    icon: "/svgs/cars/car-1.svg",
  },
  {
    href: "#",
    text: "SUV",
    icon: "/svgs/cars/car-2.svg",
  },
  {
    href: "#",
    text: "Coupe",
    icon: "/svgs/cars/car-3.svg",
  },
  {
    href: "#",
    text: "Hatchback",
    icon: "/svgs/cars/car-4.svg",
  },
  {
    href: "#",
    text: "Convertible",
    icon: "/svgs/cars/car-5.svg",
  },
  {
    href: "#",
    text: "Wagon",
    icon: "/svgs/cars/car-6.svg",
  },
];

const Main = () => {
  return (
    <main
      className="
  main
  h-screen
  max-w-screen
  flex flex-col justify-center items-center  
  bg-CarImage bg-no-repeat bg-cover bg-center
  "
    >
      <h1 className="text-5xl md:text-8xl font-bold my-8 text-center text-white">
        Find Your
        <span className='font-caveatRegular text-brandColor text-span'>
          Dream
        </span>
        Car.
      </h1>
      <p className="mb-8 text-lg md:text-2xl m-1 text-center text-white
      ">
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
            <div className="car-icon">
              <Image src={car.icon} alt={car.text} width={100} height={29} />
            </div>
            {car.text}
          </a>
        ))}
      </div>
      <Wave />
    </main>
  );
};

export default Main;
