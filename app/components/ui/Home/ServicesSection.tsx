import { Caveat } from "next/font/google";
import AnimateOnScroll from "../../AnimateOnScroll";
import Link from "next/link";

import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"] });

const services = [
  {
    name: "SELL YOUR CAR",
    description:
      "Get the best value for your car with our hassle-free selling process.",
    image: "public/images/service.png",
    link: "",
  },
  {
    name: "CAR INSURANCE",
    description:
      "Protect your vehicle with comprehensive and affordable insurance plans.",
    image: "public/images/service.png",
    link: "",
  },
  {
    name: "CAR INSPECTION",
    description:
      "Ensure your car is in top condition with our professional inspection services.",
    image: "public/images/service.png",
    link: "",
  },
  {
    name: "CAR EXPORT",
    description:
      "Export your car globally with our reliable and efficient export services.",
    image: "public/images/service.png",
    link: "",
  },
];
const ServicesSection = () => {
  return (
    <section id="services" className="brounded-3xl bg-light m-5 py-10">
      <AnimateOnScroll animation="translateY(-100px)">
        <div className="flex flex-col items-center my-11">
          <h1
            className={`${caveat.className} text-brandColor font-semibold drop text-5xl`}
          >
            Services
          </h1>
          <h2 className="text-6xl font-semibold">CarOn Services</h2>
          <p>
            Discover exciting categories.
            <span className="text-brandColor">
              Find what you’re looking for.
            </span>
          </p>
        </div>
      </AnimateOnScroll>
      <div className="Container">
        <div className="flex flex-col md:flex-row">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={service.name}
              animation="translateY(0px)"
              delay={(index + 2) * 150}
              threshold={1}
            >
              <div key={service.name}>
                <div className="flex flex-row items-start gap-3 mb-7">
                  <div className="text-2xl font-semibold inline">{`0${
                    index + 1
                  } /`}</div>
                  <Image
                    src={"/images/placeholders/03.png"}
                    width={250}
                    height={180}
                    alt="m"
                    style={{ display: "inline" }}
                  />
                </div>
                <div className="">
                  <h3 className="text-2xl font-semibold">{service.name}</h3>
                  <p className="text-textlight">{service.description}</p>
                  <Link href={"/"} className="text-brandColor">
                    Explore More <GoArrowUpRight className="inline" />
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="my-[20px]">
          <div className="">
            <h2 className="text-3xl ">
              Electric crafted by mercedes-benz. The all electric range
            </h2>
            <p className="text-textlight">Starting form USD 249,000</p>
            <Link href={"/"}>Call Now!</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
