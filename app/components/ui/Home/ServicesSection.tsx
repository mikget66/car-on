import { Caveat } from "next/font/google";
import AnimateOnScroll from "../AnimateOnScroll";
import Link from "next/link";
import Image from "next/image";
import cursiveArrow from "../../../../public/svgs/cursiveArrow.svg";
import SectionHeading from "../SectionHeading";

import { GoArrowUpRight } from "react-icons/go";

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

const carArticles = [
  {
    date: "2023-10-01",
    category: "Electric Vehicles",
    title: "The Rise of Electric Cars",
    description:
      "How electric vehicles are transforming the automotive industry and what to expect in the future.",
    image: "/images/placeholders/6.jpg",
  },
  {
    date: "2023-09-25",
    category: "Luxury Cars",
    title: "Top 10 Luxury Cars of 2023",
    description:
      "A look at the most luxurious and high-performance cars available this year.",
    image: "/images/placeholders/6.jpg",
  },
  {
    date: "2023-09-20",
    category: "Classic Cars",
    title: "Restoring Vintage Cars: A Beginner's Guide",
    description:
      "Tips and tricks for restoring classic cars to their former glory.",
    image: "/images/placeholders/6.jpg",
  },
  {
    date: "2023-09-15",
    category: "Sports Cars",
    title: "The Fastest Sports Cars in the World",
    description:
      "Discover the fastest and most powerful sports cars that dominate the roads.",
    image: "/images/placeholders/6.jpg",
  },
  {
    date: "2023-09-10",
    category: "Car Maintenance",
    title: "Essential Car Maintenance Tips",
    description:
      "Keep your car running smoothly with these essential maintenance tips.",
    image: "/images/placeholders/6.jpg",
  },
  {
    date: "2023-09-05",
    category: "Autonomous Vehicles",
    title: "The Future of Self-Driving Cars",
    description:
      "Exploring the technology behind autonomous vehicles and their potential impact on transportation.",
    image: "/images/placeholders/6.jpg",
  },
];
const ServicesSection = () => {
  return (
    <section id="services" className="rounded-3xl lg:m-5 py-10">
            <SectionHeading
        title="Services"
        subtitle="CarOn Services"
        description="Discover exciting categories."
        highlight="Discover exciting categories. Find what you’re looking for."
      />

      <div className="Container">
        <div className="flex flex-col md:flex-row ">
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
        <div className="my-[30px] electric-cars p-9 rounded-2xl">
          <div className="">
            <Image
              src={"/images/background/eq-logo.jpg"}
              width={80}
              height={80}
              alt="sa"
              className="rounded-2xl my-3"
            />
            <h2 className="text-5xl text-white">
              Electric crafted by mercedes-benz. <br />
              The all electric range
            </h2>
            <p className="text-textlight font-bold text-2xl">
              Starting form USD 249,000
            </p>
            <Link
              href={"/"}
              className="text-white bg-brandColor px-4 py-3 font-medium rounded-md my-6 inline-block"
            >
              Call Now!
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1  lg:grid-cols-5 gap-3">
          <div className="lg:sticky lg:top-[150px] h-fit col-span-2">
            <AnimateOnScroll>
              <h2
                className={`${caveat.className} text-brandColor font-semibold text-5xl`}
              >
                Our Latest Articles
              </h2>
              <h3 className="text-6xl">
                Discover Our Latest News And Articles
              </h3>
              <p>
                Read our informative blog articles to stay updated with the
                latest trends, technological applications, products, and news.
                Our articles will provide you with tips and insights that can be
                very helpful while traveling.
              </p>
              <Link
                href={"/"}
                className="text-white bg-brandColor px-4 py-3 font-medium rounded-md my-6 inline-block"
              >
                View All Posts
              </Link>
              <Image priority src={cursiveArrow} alt="" />
            </AnimateOnScroll>
          </div>
          <div className="col-span-3 flex flex-col gap-5 z-10">
            {carArticles.map((article) => (
              <article
                className=" bg-light p-8 rounded-xl  grid grid-cols-1 lg:grid-cols-2  gap-4 min-h-[400px]"
                key={article.title}
              >
                <div
                  className="flex flex-col justify-start items-start gap-4"
                  aria-label="content article"
                >
                  <div className="flex gap-2 justify-start items-center">
                    <span>{article.date}</span> <span>|</span>
                    <span className="bg-white text-brandColor rounded px-2 py-1">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-4xl font-bold">{article.title}</h3>
                  <p className="text-textlight">{article.description}</p>
                </div>
                <div className="flex justify-end items-start">
                  <div className="overflow-hidden w-[300px] aspect-square rounded-2xl ">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={300}
                      height={300}
                      className="hover:rotate-6 hover:scale-125 transition-all ease-in-out duration-150"
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="relative w-0 h-0">
            <div className="absolute bottom-[100px] w-[400px] max-w-60 aspect-square bg-brandColor  -z-0 blur-[350px] opacity-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
