import { Caveat } from "next/font/google";
import Image from "next/image";
import AnimateOnScroll from "../../AnimateOnScroll";

const caveat = Caveat({ subsets: ["latin"] });

const brands = [
  { carBrand: "Toyota", total: 21, image: "/images/brand/TOYOTA.png" },
  { carBrand: "Hyundai", total: 56, image: "/images/brand/HYNDAI.png" },
  { carBrand: "Nissan", total: 39, image: "/images/brand/NISSAN.png" },
  { carBrand: "BMW", total: 28, image: "/images/brand/BMW.png" },
  { carBrand: "Mercedes", total: 61, image: "/images/brand/MERCEDES.png" },
  { carBrand: "Ford", total: 47, image: "/images/brand/FORD.png" },
  { carBrand: "Honda", total: 98, image: "/images/brand/HONDA.png" },
  {
    carBrand: "Mitsubishi",
    total: 51,
    image: "/images/brand/MITSUBISHI.png",
  },
  { carBrand: "Lexus", total: 85, image: "/images/brand/LEXUS.png" },
  { carBrand: "Audi", total: 25, image: "/images/brand/AUDI.png" },
  { carBrand: "Chevrolet", total: 25, image: "/images/brand/CHEVROLET.png" },
  { carBrand: "Kia", total: 21, image: "/images/brand/KIA.png" },
];

const BrandsSection = () => {
  return (
    <section
      id="brands"
      className="brands flex flex-col justify-center rounded-3xl bg-light py-10"
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
              className="bg-slate-400"
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
