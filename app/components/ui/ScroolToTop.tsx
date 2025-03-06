"use client";
import { FaArrowUpLong } from "react-icons/fa6";

const ScroolToTop = () => {
  return (
    <div
      className="fixed bottom-5 right-5 border-[2px] border-brandColor p-2 rounded-lg text-brandColor cursor-pointer z-50"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUpLong />
    </div>
  );
};

export default ScroolToTop;
