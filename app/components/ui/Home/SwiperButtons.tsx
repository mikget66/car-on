
import { useSwiper } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const SwiperButtons = () => {
  const swiper = useSwiper();
  

  return (
    <div className="swiper-nav-btns flex justify-center items-center m-10">
      <button onClick={() => swiper.slidePrev()}>{<FaArrowLeft />}</button>
      <div className="inline-flex w-16">

      </div>
      <button onClick={() => swiper.slideNext()}>{<FaArrowRight />}</button>
    </div>
  );
};

export default SwiperButtons;
