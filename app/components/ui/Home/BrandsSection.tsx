import { Caveat } from "next/font/google";
import Image from "next/image";
import AnimateOnScroll from "../../AnimateOnScroll";

const caveat = Caveat({ subsets: ["latin"] });

const brands = [
  { carBrand: "Toyota", total: 21, image: "/svgs/car-brand/toyota.svg" },
  { carBrand: "Hyundai", total: 56, image: "/svgs/car-brand/hyundai.svg" },
  { carBrand: "Nissan", total: 39, image: "/svgs/car-brand/nissan.svg" },
  { carBrand: "BMW", total: 28, image: "/svgs/car-brand/bmw.svg" },
  { carBrand: "Mercedes", total: 61, image: "/svgs/car-brand/mercedes.svg" },
  { carBrand: "Ford", total: 47, image: "/svgs/car-brand/ford.svg" },
  { carBrand: "Honda", total: 98, image: "/svgs/car-brand/honda.svg" },
  {
    carBrand: "Mitsubishi",
    total: 51,
    image: "/svgs/car-brand/mitsubishi.svg",
  },
  { carBrand: "Lexus", total: 85, image: "/svgs/car-brand/lexus.svg" },
  { carBrand: "Audi", total: 25, image: "/svgs/car-brand/audi.svg" },
  { carBrand: "Chevrolet", total: 25, image: "/svgs/car-brand/chevrolet.svg" },
  { carBrand: "Kia", total: 21, image: "/svgs/car-brand/kia.svg" },
];

const BrandsSection = () => {
  return (
    <section
      id="brands"
      className="brands flex flex-col justify-center rounded-3xl bg-light m-5 py-10"
    >
      <AnimateOnScroll animation="translateY(-100px)">
        <div className="flex flex-col items-center my-11">
          <h1
            className={`${caveat.className} text-brandColor font-semibold drop text-5xl`}
          >
            Brands
          </h1>
          <h2 className="text-6xl font-semibold">
            Prices, Specs & Features of <br />
            Popular Brands in ListOn
          </h2>
          <p>
            Discover exciting categories.{" "}
            <span className="text-brandColor">
              Find what you’re looking for.
            </span>
          </p>
        </div>
      </AnimateOnScroll>
      <div className="Container grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-3">
        {brands.map((brand) => (
          <div
            key={brand.carBrand}
            className="flex flex-col justify-center items-center bg-background hover:-translate-y-1 gap-2 p-2"
          >
            <Image
            className="brand-image"
              src={brand.image}
              alt={brand.carBrand}
              width={50}
              height={50}
          
            />
            <p>{brand.carBrand}</p>
            <span
              className={`${caveat.className} bg-light py-1 px-2 rounded-xl`}
            >
              {brand.total}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
