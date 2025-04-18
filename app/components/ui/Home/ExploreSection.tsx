import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/pagination";

import CarSlider from "./CarSlider";

const ExploreSection = () => {
  return (
    <section id="explore" className="rounded-3xl bg-light my-5 lg:m-5 py-10">
      <div className="Container flex flex-col max-w-full">
        <div className="my-10">
          <h1 className="font-caveatRegular text-brandColor font-semibold drop text-5xl">
            Explore
          </h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Explore All Cars
          </h1>
          <div className="flex justify-between">
            <p>
              Discover exciting categories.
              <span className="text-brandColor">
                {" "}
                Find what you’re looking for.
              </span>
            </p>
            <Link href="/cars" className="text-brandColor">
              SEE ALL <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>

        <CarSlider />
      </div>
    </section>
  );
};

export default ExploreSection;
