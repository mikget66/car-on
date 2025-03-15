import { useState } from "react";
import Link from "next/link";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarRating from "@/app/components/ui/StarRating";
import { Car } from "@/types/car";

const CarDetailHeader = ({ car }: { car: Car }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row  justify-between lg:items-center gap-2">
      <div>
        <h2 className="text-xl lg:text-[2.2rem] font-medium">{`${car.year} ${car.carBrand} ${car.carModel}`}</h2>
        <div className="my-2 flex flex-row items-center gap-1 lg:gap-3">
          <Link href={"/"}>{car.carBrand}</Link>{" "}
          <FaExternalLinkAlt className="inline" />/
          <StarRating rating={car.rating} />{" "}
          <span className="text-brandColor">({car.rating})</span>
        </div>
        <p className="text-textlight">{car.location}</p>
      </div>

      <div>
        {isBookmarked ? (
          <div className="text-brandColor">
            <IoMdHeart
              className="inline mr-1"
              onClick={() => setIsBookmarked(!isBookmarked)}
            />
            <span>saved</span>
          </div>
        ) : (
          <div>
            <IoMdHeartEmpty
              className="inline mr-1"
              onClick={() => setIsBookmarked(!isBookmarked)}
            />
            <span>save this car</span>
          </div>
        )}
        <p>{car.bookmarked.length} people bookmarked this car</p>
      </div>
    </div>
  );
};

export default CarDetailHeader;
