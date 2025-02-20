"use client";
import { useEffect } from "react";

const Page = () => { // Component name should start with capital letter
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLSpanElement>(".counter");

    const startCount = (counter: HTMLSpanElement) => {
      const target = Number(counter.dataset.target) || 0; // Better type handling
      const increment = target / 100;
      let count = 0;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count).toString(); // Better type safety
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCount();
    };

    counters.forEach((counter) => startCount(counter));
  }, []);

  return (
    <div>
      <div className="Container flex flex-col items-center gap-8"> {/* Fixed className casing */}
        <span className="bg-brandColor p-2 rounded-3xl">
          7+ YEARS EXPERIENCED IN FIELD
        </span>
        <h1 className="text-6xl text-center max-w-[1200px]">
          CarOn was founded in 2023 by Alexander with a{" "}
          <span className="caveat">vision to your original</span> or inspiration.
        </h1>
        <div
          id="pattern"
          className="bg-light grid grid-cols-4 gap-10 max-w-[1200px] rounded-3xl p-[50px]"
        >
          {[
            { value: 3000, label: "Job posted" },
            { value: 2500, label: "Successful hires" },
            { value: 10, label: "Monthly visits", suffix: "M+" }, // Added suffix handling
            { value: 593, label: "Verified companies" }
          ].map((item) => (
            <div key={item.label}>
              <span>
                <span className="counter" data-target={item.value}>0</span>
                {item.suffix ? item.suffix : "+"}
              </span> 
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;