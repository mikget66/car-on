"use client"
import React from "react";
import { useAuth } from "@/app/context/AuthContext";


const Filters = () => {
  const { logout } = useAuth();
  return (
    <div className="filters mt-16">
      <div className="filter">price</div>

      <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>

    </div>
  );
};

export default Filters;
