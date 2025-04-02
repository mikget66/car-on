"use client";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Image from "next/image";

import { useEffect } from "react";

const awards = [
  {
    title: "Best Automotive Marketplace 2024",
    image: "/svgs/Award.svg",
    date: "January 2024",
  },
  {
    title: "Customers' Choice Award",
    image: "/svgs/Award.svg",
    date: "December 2023",
  },
  {
    title: "Top Verified Listings Platform",
    image: "/svgs/Award.svg",
    date: "November 2023",
  },
  {
    title: "Most Transparent Pricing",
    image: "/svgs/Award.svg",
    date: "October 2023",
  },
];
const Page = () => {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLSpanElement>(".counter");

    const startCount = (counter: HTMLSpanElement) => {
      const target = Number(counter.dataset.target) || 0;
      const increment = target / 100;
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count).toString();
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCount();
    };

    counters.forEach((counter) => startCount(counter));
  }, []);

  return (
    <div className="py-4">
      <div className="Container flex flex-col items-center gap-8">
        {" "}
        {/* Fixed className casing */}
        <span className="bg-brandColor p-2 rounded-3xl">
          7+ YEARS EXPERIENCED IN FIELD
        </span>
        <h1 className="text-6xl text-center max-w-[1200px]">
          CarOn was founded in 2023 by Michael with a{" "}
          <span className='font-caveatRegular'>vision to your original</span> or
          inspiration.
        </h1>
        <div
          id="pattern"
          className="bg-light grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] rounded-3xl p-[50px] "
        >
          {[
            { value: 3000, label: "Job posted" },
            { value: 2500, label: "Successful hires" },
            { value: 10, label: "Monthly visits", suffix: "M+" }, // Added suffix handling
            { value: 593, label: "Verified companies" },
          ].map((item) => (
            <div key={item.label}>
              <span>
                <span className="counter" data-target={item.value}>
                  0
                </span>
                {item.suffix ? item.suffix : "+"}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <section className="Container">
        <SectionHeading
          title=" About Us"
          subtitle="Browse 10,000+ verified new & pre-owned vehicles"
          description="Buy, sell, or rent cars with transparent pricing"
          highlight="Get the best deals on your dream car today"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
          <div className="flex flex-col gap-5">
            <p className="styled-paragraph">
              <span className="first-letter text-brandColor">O</span>ur platform
              is designed to make car buying and selling seamless and
              hassle-free. Whether you&apos;re looking for a family SUV, a
              fuel-efficient sedan, or a high-performance sports car, we provide
              a curated selection to meet every need.
            </p>
            <p className="styled-paragraph">
              We prioritize transparency, ensuring that every listing includes
              detailed specifications, high-quality images, and verified seller
              information. Our mission is to simplify the car-buying experience
              while offering the best deals.
            </p>
            <p
              className='font-caveatRegular border-l-4 border-brandColor p-3 text-4xl'
            >
              With a vast network of trusted dealerships and private sellers,
              finding your dream car has never been easier. Explore, compare,
              and drive away with confidence.
            </p>
            <p>
              We hope you enjoy using our platform as much as we did building
              it. Happy car shopping! 🚗
            </p>
            <Image
              src={"/images/signature.png"}
              width={300}
              height={100}
              alt="signature"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="aboutImageGrid h-[450px] lg:h-auto">
            <div className="col">
              <div className="ImageContainer">
                <Image
                  src={"/images/grid1.webp"}
                  alt={"grid Image"}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="ImageContainer">
                <Image
                  src={"/images/grid2.jpeg"}
                  alt={"grid Image"}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
            <div className="col">
              <div className="ImageContainer">
                <Image
                  src={"/images/grid3.webp"}
                  alt={"grid Image"}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="ImageContainer">
                <Image
                  src={"/images/grid4.jpg"}
                  alt={"grid Image"}
                  fill
                  className="object-cover "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="awards" className="bg-light mx-3 rounded-xl py-5 my-4">
        <div className="Container flex flex-col items-center">
          <SectionHeading
            title="Our Recognition"
            subtitle="Trusted by thousands of car enthusiasts"
            description="Celebrating excellence in automotive marketplace innovation"
            highlight="Your journey to the perfect vehicle starts here"
          />
          <div className="flex flex-col md:flex-row justify-between gap-3">
            {awards.map(({ title, image, date }) => (
              <div key={title} className="flex flex-col gap-3 items-center">
                <Image src={image} width={100} height={100} alt="Award SVG" />
                <p className="text-brandColor font-semibold">{title}</p>
                <p>{date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
