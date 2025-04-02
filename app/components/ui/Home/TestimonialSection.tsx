"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { A11y } from "swiper/modules";
import { SwiperLeftButton, SwiperRightButton } from "./SwiperButtons";

import SectionHeading from "../SectionHeading";

const testimonials = [
  {
    who: "Mark Johnson - Fleet Manager, DriveSafe Rentals",
    testimonial:
      "Outstanding service! Our entire fleet is running smoother than ever, thanks to their expert maintenance team. They ensure every vehicle is in top condition, reducing unexpected breakdowns and saving us thousands in repair costs. Highly recommended for any business!",
  },
  {
    who: "Samantha Lee - Luxury Car Owner",
    testimonial:
      "The detailing package made my car look absolutely brand new. They restored the shine, removed every speck of dirt, and even cleaned the smallest crevices. Their attention to detail is simply unmatched, making them my go-to car care professionals.",
  },
  {
    who: "Carlos Martinez - Ride-Share Driver",
    testimonial:
      "Fast, reliable, and affordable service! As a ride-share driver, I depend on my car daily, and their quick oil changes, tire rotations, and thorough inspections keep me on the road. I never have to worry about unexpected mechanical issues anymore.",
  },
  {
    who: "Emily Davis - Road Trip Enthusiast",
    testimonial:
      "Their pre-trip inspection saved me from a potential breakdown during my cross-country drive. They checked everything from fluids to tire pressure, ensuring my trip was safe and smooth. I wouldn't trust any other service before hitting the road!",
  },
  {
    who: "David Thompson - Small Business Owner",
    testimonial:
      "Running a small business means every dollar counts. Their fleet maintenance plan keeps my delivery vans running efficiently, minimizing downtime. Thanks to their expert team, we’ve avoided costly repairs and unexpected delays, helping us maintain excellent customer service.",
  },
  {
    who: "Lisa Carter - Family SUV Owner",
    testimonial:
      "Safety is my top priority as a mother, and I feel much more secure after their thorough brake and tire check. Their mechanics explain every detail in a way I understand, making sure I know my family is safe on the road.",
  },
  {
    who: "Robert Wilson - Classic Car Collector",
    testimonial:
      "The restoration work they did on my vintage Mustang was phenomenal. They carefully handled every part, from the engine to the exterior detailing. My car now looks and runs better than ever. True experts in classic car preservation and repair!",
  },
  {
    who: "Maria Gonzalez - Daily Commuter",
    testimonial:
      "I have a busy schedule, so their quick and efficient service is perfect for me. I stopped by for an oil change, and they had me back on the road in no time. Plus, their customer service is outstanding every single time!",
  },
  {
    who: "James Anderson - Off-Road Enthusiast",
    testimonial:
      "Took my truck in for suspension work, and the difference is night and day. Now it handles rough terrain like a dream. I’ve tested it on some of the toughest trails, and it performs flawlessly. These guys truly know their stuff!",
  },
  {
    who: "Emma Robinson - College Student",
    testimonial:
      "Being on a student budget, I needed affordable yet reliable service. They gave me a detailed breakdown of what my car needed without upselling unnecessary repairs. Honest, affordable, and high-quality work—I won’t take my car anywhere else!",
  },
];

const TestimonialSection = () => {
  return (
    <section id="Testimonial" className="rounded-3xl my-5 lg:m-5 py-20">
      <SectionHeading
        title="Testimonial"
        subtitle="See What Our Clients Say About Us"
        description="Discover exciting categories."
        highlight="Discover exciting categories. Find what you’re looking for."
      />
      <div className="Container">
        <div className="relative">
          <Swiper modules={[A11y]} spaceBetween={50} slidesPerView={1}>
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col justify-center items-center gap-6">
                  <Image
                    src="/svgs/quote-white.svg"
                    height={30}
                    width={30}
                    style={{ width: "auto", height: "auto" }}
                    alt="quote SVG"
                  />

                  <p className="2xl:max-w-[60%] text-4xl text-center">
                    {testimonial.testimonial}
                  </p>
                  <p className="text-center">{testimonial.who}</p>
                </div>
              </SwiperSlide>
            ))}

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 hidden md:inline">
              <SwiperLeftButton />
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 hidden md:inline">
              <SwiperRightButton />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
