import { Caveat } from "next/font/google";
import SectionHeading from "../SectionHeading";
import AnimateOnScroll from "../AnimateOnScroll";


const caveat = Caveat({ subsets: ["latin"] });

export const WorksSection = () => {
  return (
    <>
      <section id="works" className="flex flex-col items-center my-24">
        <SectionHeading
          title="Works"
          subtitle="How It Works"
          description="Discover exciting categories."
          highlight="Discover exciting categories. Find what you’re looking for."
        />

        <div className="number-wrap Container flex xl:flex-row gap-10 flex-col">
          <AnimateOnScroll animation="translateY(0px)" delay={200}>
            <div className="flex flex-col items-center  text-center gap-3">
              <span
                className={`w-20 h-20 rounded-full bg-brandColor flex justify-center items-center ${caveat.className} text-5xl`}
              >
                1
              </span>
              <h4 className="text-3xl">Find Your Car</h4>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, amet?
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll animation="translateY(0px)" delay={400}>
            <div className="flex flex-col items-center xl:translate-y-14 text-center gap-3">
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
            <div className="flex flex-col items-center text-center gap-3">
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
