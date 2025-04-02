"use client"
import React, { useState } from "react";

const Filters = () => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minKm, setMinKm] = useState("");
  const [maxKm, setMaxKm] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);

  const handleFuelChange = (fuel: string, checked: boolean) => {
    if (checked) {
      setFuelTypes((prev) => [...prev, fuel]);
    } else {
      setFuelTypes((prev) => prev.filter((f) => f !== fuel));
    }
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    if (minPrice) params.append("minPrice", minPrice);
    if (maxPrice) params.append("maxPrice", maxPrice);
    if (minKm) params.append("minKm", minKm);
    if (maxKm) params.append("maxKm", maxKm);
    if (minYear) params.append("minYear", minYear);
    if (maxYear) params.append("maxYear", maxYear);
    if (fuelTypes.length > 0) {
      fuelTypes.forEach((fuel) => params.append("fuelType", fuel));
    }

    // Update the URL (this assumes you're using a client component in Next.js)
    window.location.search = params.toString();
  };

  return (
    <div className="filters">
      <div className="filter">
        <span>Price</span>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="60000"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="30000000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>

      <div className="filter">
        <span>Kilometers</span>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="0"
            value={minKm}
            onChange={(e) => setMinKm(e.target.value)}
          />
          <input
            type="text"
            placeholder="10000000"
            value={maxKm}
            onChange={(e) => setMaxKm(e.target.value)}
          />
        </div>
      </div>

      <div className="filter">
        <span>Year</span>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="1900"
            value={minYear}
            onChange={(e) => setMinYear(e.target.value)}
          />
          <input
            type="text"
            placeholder="2025"
            value={maxYear}
            onChange={(e) => setMaxYear(e.target.value)}
          />
        </div>
      </div>

      <div className="filter">
        <span>Fuel type</span>
        <div className="flex flex-col">
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                handleFuelChange("Electric", e.target.checked)
              }
            />
            Electric
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) =>
                handleFuelChange("Gasoline", e.target.checked)
              }
            />
            Gasoline
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFuelChange("Diesel", e.target.checked)}
            />
            Diesel
          </label>
        </div>
      </div>

    

      <button className="bg-brandColor py-2 text-white rounded-md" onClick={handleApplyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
