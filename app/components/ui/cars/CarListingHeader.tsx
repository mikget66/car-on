"use client";
import { useSearchParams } from "next/navigation";

const CarListingHeader = () => {
  const searchParams = useSearchParams();
  const condition = searchParams.get("condition") || "all";

  const getHeaderText = () => {
    switch (condition) {
      case "new":
        return "New Cars for Sale";
      case "used":
        return "Used Cars for Sale";
      default:
        return "New and used Cars for Sale";
    }
  };

  return (
    <h2 className="font-caveatRegular text-brandColor my-3 text-4xl">
      {getHeaderText()}
    </h2>
  );
};

export default CarListingHeader;
