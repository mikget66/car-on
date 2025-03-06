import React from "react";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ScroolToTop from "../components/ui/ScroolToTop";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-full ">
      <Navbar />
      {children}
      <Footer/>
      <ScroolToTop />
    </div>
  );
}
