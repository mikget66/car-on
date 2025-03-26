import React from "react";

import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import ScroolToTop from "../components/ui/ScroolToTop";
import { AuthProvider } from "../context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="relative max-w-full ">
        <Navbar />
        {children}
        <Footer />
        <ScroolToTop />
      </div>
    </AuthProvider>
  );
}
