"use client";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { Caveat } from "next/font/google";
import Image from "next/image";
const caveat = Caveat({ subsets: ["latin"] });

import { useEffect } from "react";

const Page = () => {
  // Component name should start with capital letter
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLSpanElement>(".counter");

    const startCount = (counter: HTMLSpanElement) => {
      const target = Number(counter.dataset.target) || 0; // Better type handling
      const increment = target / 100;
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count).toString(); // Better type safety
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
    <div className="Container">
      <div className=" flex flex-col items-center gap-8">
        {" "}
        {/* Fixed className casing */}
        <span className="bg-brandColor p-2 rounded-3xl">
          7+ YEARS EXPERIENCED IN FIELD
        </span>
        <h1 className="text-6xl text-center max-w-[1200px]">
          CarOn was founded in 2023 by Michael with a{" "}
          <span className={caveat.className}>vision to your original</span> or
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
      <section className="">
        <SectionHeading
          title=" About Us"
          subtitle="Explore over 2.5 million people travel around the world."
          description="Discover exciting categories."
          highlight="Find what you’re looking for. "
        />
        <div className="grid grid-cols-2">
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
              className={`${caveat.className} border-l-4 border-brandColor p-3 text-4xl`}
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
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
