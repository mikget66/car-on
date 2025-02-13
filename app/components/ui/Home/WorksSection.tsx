import { Caveat } from "next/font/google";
import AnimateOnScroll from "../../AnimateOnScroll";

const caveat = Caveat({ subsets: ["latin"] });

export const WorksSection = () => {
  return (
    <>
      <section id="works" className="flex flex-col items-center my-24">
        <AnimateOnScroll animation="translateY(-100px)" >
          <h1
            className={`${caveat.className} text-brandColor font-semibold drop text-5xl`}
          >
            Works
          </h1>
          <h1 className="text-6xl font-semibold">How It Works</h1>
          <p>
            Discover exciting categories.
            <span className="text-brandColor">
              Find what you’re looking for.
            </span>
          </p>
        </AnimateOnScroll>

        <div className="lg:number-wrap Container flex xl:flex-row gap-10 flex-col">
          <AnimateOnScroll animation="translateY(0px)" delay={200}>
            <div className="flex flex-col items-center">
              <span
                className={`w-20 h-20 rounded-full bg-brandColor flex justify-center items-center ${caveat.className} text-5xl`}
              >
                1
              </span>
              <h4 className="text-3xl">Find Your Car</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, amet?
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="translateY(0px)" delay={400}>
            <div className="flex flex-col items-center xl:translate-y-14">
              <span
                className={`w-20 h-20 rounded-full bg-brandColor flex justify-center items-center ${caveat.className} text-5xl`}
              >
                2
              </span>

              <h4 className="text-3xl">Provide transfer details</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, amet?
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="translateY(0px)" delay={600}>
            <div className="flex flex-col items-center">
              <span
                className={`w-20 h-20 rounded-full bg-brandColor flex justify-center items-center ${caveat.className} text-5xl`}
              >
                3
              </span>

              <h4 className="text-3xl">Get your car delivered</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, amet?
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};
