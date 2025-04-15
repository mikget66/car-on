"use client";

import { ReactNode, useState } from "react";

const Tooltip = ({ text, children }: { text: string; children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative "
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {isVisible && (
        <div className="absolute  top-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded shadow z-10 ">
          {text}
        </div>
      )}
      <div className="cursor-pointer flex items-center justify-center p-0 m-0">{children}</div>
    </div>
  );
};

export default Tooltip;
