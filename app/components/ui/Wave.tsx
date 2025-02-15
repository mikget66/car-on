import React from "react";

function Wave() {
  return (
    <div className="ondebox min-w-full">
      <svg
        className="onde"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="onda"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352Z"
          />
        </defs>
        <g className="parallaxonde">
          <use href="#onda" x="48" y="0" fill="var(--onda-fill-1)" />
          <use href="#onda" x="48" y="3" fill="var(--onda-fill-2)" />
          <use href="#onda" x="48" y="5" fill="var(--onda-fill-3)" />
          <use
            href="#onda"
            x="48"
            y="7"
            fill="var(--onda-fill-4)"
            className="bg-background"
          />
        </g>
      </svg>
    </div>
  );
}

export default Wave;
