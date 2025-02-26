"use client"
import { useSwiper } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

export const SwiperLeftButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slidePrev()} aria-label="Previous Slide" className="leftbtn">
      <FaArrowLeft />
    </button>
  );
};

export const SwiperRightButton = () => {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} aria-label="Next Slide" className="rightbtn">
      <FaArrowRight />
    </button>
  );
};

interface SwiperButtonsProps {
  children?: React.ReactNode;
}

export const SwiperButtons: React.FC<SwiperButtonsProps> = ({ children }) => {
  return (
    <div className="swiper-nav-btns flex justify-center items-center m-10">
      <SwiperLeftButton />
      <div className="inline-flex w-16">{children}</div>
      <SwiperRightButton />
    </div>
  );
};
