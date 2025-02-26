import Link from "next/link";
import { Caveat } from "next/font/google";

import { GoArrowUpRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/pagination";

import CarSlider from "./CarSlider";

const caveat = Caveat({ subsets: ["latin"] });

const ExploreSection = () => {
  return (
    <section id="explore" className="rounded-3xl bg-light lg:m-5 py-10">
      <div className="Container flex flex-col max-w-full">
        <div className="my-10">
          <h1
            className={`${caveat.className} text-brandColor font-semibold drop text-5xl`}
          >
            Explore
          </h1>
          <h1 className="text-4xl lg:text-6xl font-semibold">Explore All Cars</h1>
          <div className="flex justify-between">
            <p>
              Discover exciting categories.
              <span className="text-brandColor">
                {" "}
                Find what you’re looking for.
              </span>
            </p>
            <Link href="/" className="text-brandColor">
              SEE ALL <GoArrowUpRight className="inline" />
            </Link>
          </div>
        </div>
{/*  */}
<CarSlider/>
      </div>
    </section>
  );
};

export default ExploreSection;
