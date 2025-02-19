import React from "react";
import { Caveat } from "next/font/google";
import AnimateOnScroll from "./AnimateOnScroll"; // Assuming it's a custom animation component

const caveat = Caveat({ subsets: ["latin"] });


interface SectionHeadingProps {
  title: string; // h1 content
  subtitle: string; // h2 content
  description: string; // p content before highlight
  highlight: string; // span highlighted text
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  description,
  highlight,
}) => {
  return (
    <AnimateOnScroll animation="translateY(-100px)">
      <div className="flex flex-col items-center my-11 gap-4">
        <h1 className={`${caveat.className} text-brandColor  text-6xl`}>
          {title}
        </h1>
        <h2 className="text-5xl font-semibold lg:max-w-[600px] text-center leading-snug">{subtitle}</h2>
        <p>
          {description} <span className="text-brandColor">{highlight}</span>
        </p>
      </div>
    </AnimateOnScroll>
  );
};

export default SectionHeading;
