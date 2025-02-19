import React from "react";
import Main from "../components/ui/Home/Main";
import { WorksSection } from "../components/ui/Home/WorksSection";
import BrandsSection from "../components/ui/Home/BrandsSection";
import ExploreSection from "../components/ui/Home/ExploreSection";
import ServicesSection from "../components/ui/Home/ServicesSection";
import TestimonialSection from "../components/ui/Home/TestimonialSection";

export default function Home() {
  //   console.log("what am I doing here ? -- client/server");

  return (
    <>
      <Main />
      <WorksSection />
      <BrandsSection />
      <ExploreSection />
      <ServicesSection />
      <TestimonialSection/>
    </>
  );
}
