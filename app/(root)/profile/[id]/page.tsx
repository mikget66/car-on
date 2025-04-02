"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import LikedCars from "@/app/components/ui/profile/LikedCars";
import PostedCars from "@/app/components/ui/profile/PostedCars";

const Page = () => {
  const { user } = useAuth();
  const [tap, setTap] = useState("liked");

  const src: string = !user?.image?.trim()
    ? "/images/placeholders/default-avatar.png"
    : user.image;

  console.log(user);

  return (
    <div className="Container grid grid-cols-[40%_60%] pt-10">
      <div className="flex flex-col items-center  gap-2">
        <div className="rounded-full overflow-hidden">
          <Image
            src={src}
            width={150}
            height={150}
            alt={`${user?.name || "User"} profile image`}
          />
        </div>
        <p className="text-3xl font-semibold">{user?.name}</p>
        <hr className="h-1 w-[50%]" />
        <div className="flex flex-col items-center">
          <span>{`mobile : ${user?.phone}`}</span>
          <span>{`whatsapp : ${user?.whatsapp}`}</span>
          <span>{`email : ${user?.email}`}</span>
        </div>
      </div>
      <div>
        <div className="">
          <button onClick={()=> setTap("liked")}>liked</button>
          <button onClick={()=> setTap("posted")}>posted</button>
        </div>
        {tap === "liked"?(
          <LikedCars/>
        ):(<PostedCars/>)}
      </div>
    </div>
  );
};

export default Page;
