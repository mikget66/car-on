import { useState } from "react";
import Link from "next/link";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import StarRating from "@/app/components/ui/StarRating";
import { Car } from "@/types/car";

import { useAuth } from "@/app/context/AuthContext";
const CarDetailHeader = ({ car }: { car: Car }) => {
  const { user } = useAuth();
  const currentUserId  : string |undefined = user?.id 
  const initialBookmarks = Array.isArray(car.bookmarked)
    ? car.bookmarked.map((item) => String(item))
    : [];

  const [bookmarked, setBookmarked] = useState<string[]>(initialBookmarks);
  const isBookmarked = currentUserId ? bookmarked.includes(currentUserId) : false;


  const handleBookmark = async () => {
    try {
      if (!isBookmarked) {
        // POST request to bookmark the car
        const res = await fetch(`/api/cars/${car.id}/bookmark`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: currentUserId }),
        });
        if (res.ok) {
          const updatedCar = await res.json();
          setBookmarked(updatedCar.bookmarked || []);
        }
      } else {
        // DELETE request to unbookmark the car
        const res = await fetch(`/api/cars/${car.id}/bookmark`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: currentUserId }),
        });
        if (res.ok) {
          const updatedCar = await res.json();
          setBookmarked(updatedCar.bookmarked || []);
        }
      }
    } catch (error) {
      console.error("Bookmark error:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-2">
      <div>
        <h2 className="text-xl lg:text-[2.2rem] font-medium">
          {`${car.year} ${car.carBrand} ${car.carModel}`}
        </h2>
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
              className="inline mr-1 cursor-pointer"
              onClick={handleBookmark}
            />
            <span>saved</span>
          </div>
        ) : (
          <div>
            <IoMdHeartEmpty
              className="inline mr-1 cursor-pointer"
              onClick={handleBookmark}
            />
            <span>save this car</span>
          </div>
        )}
        <p>{bookmarked.length} people bookmarked this car</p>
      </div>
    </div>
  );
};

export default CarDetailHeader;
