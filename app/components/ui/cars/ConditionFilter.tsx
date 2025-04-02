"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const ConditionFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // Get the current condition filter from URL query, default to "all"
  const currentCondition = searchParams.get("condition") || "all";

  const handleClick = (condition: string) => {
    // Build a new URLSearchParams object from the current query
    const params = new URLSearchParams(searchParams.toString());
    if (condition === "all") {
      params.delete("condition");
    } else {
      params.set("condition", condition);
    }
    // Navigate to the same page with updated query params
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="grid md:grid-cols-[25%_75%] py-3">
        <div className=""></div>

    <div className="flex gap-2 ">
      <span
        className={`py-1 px-3 bg-light rounded-lg cursor-pointer ${
          currentCondition === "all" ? " bg-white text-brandColor font-bold" : ""
        }`}
        onClick={() => handleClick("all")}
      >
        all
      </span>
      <span
        className={`py-1 px-3 bg-light rounded-lg cursor-pointer ${
          currentCondition === "new" ? "bg-white text-brandColor font-bold" : ""
        }`}
        onClick={() => handleClick("new")}
      >
        new
      </span>
      <span
        className={`py-1 px-3 bg-light rounded-lg cursor-pointer ${
          currentCondition === "used" ? "bg-white text-brandColor font-bold" : ""
        }`}
        onClick={() => handleClick("used")}
        >
        used
      </span>
    </div>
          </div>
  );
};

export default ConditionFilter;
