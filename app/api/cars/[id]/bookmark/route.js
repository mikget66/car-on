// app/api/cars/[id]/bookmark/route.ts

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request, { params }) {
  // Extract the car ID from the URL params
  const { id } = params;
  // Parse the request body for the userId
  const { userId } = await request.json();

  // Find the car record
  const car = await prisma.car.findUnique({ where: { id: parseInt(id, 10) } });
  if (!car) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }

  // Ensure the bookmarked field is an array (it might be null/undefined)
  let bookmarks = Array.isArray(car.bookmarked) ? car.bookmarked : [];

  // If the user hasn't already bookmarked the car, add the userId
  if (!bookmarks.includes(userId)) {
    bookmarks.push(userId);
  }

  // Update the car record
  const updatedCar = await prisma.car.update({
    where: { id: parseInt(id, 10) },
    data: { bookmarked: bookmarks },
  });

  return NextResponse.json(updatedCar);
}

export async function DELETE(request, { params }) {
  // Extract the car ID from URL params
  const { id } = params;
  // Parse the request body for the userId
  const { userId } = await request.json();

  // Find the car record
  const car = await prisma.car.findUnique({ where: { id: parseInt(id, 10) } });
  if (!car) {
    return NextResponse.json({ error: "Car not found" }, { status: 404 });
  }

  // Ensure the bookmarked field is an array
  let bookmarks = Array.isArray(car.bookmarked) ? car.bookmarked : [];

  // Remove the userId from the bookmarks array
  bookmarks = bookmarks.filter((bookmark) => bookmark !== userId);

  // Update the car record
  const updatedCar = await prisma.car.update({
    where: { id: parseInt(id, 10) },
    data: { bookmarked: bookmarks },
  });

  return NextResponse.json(updatedCar);
}
