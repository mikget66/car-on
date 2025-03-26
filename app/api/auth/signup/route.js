import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    // Log the raw body before parsing
    const rawBody = await request.text();
    console.log("Raw request body:", rawBody);

    // Parse the body manually
    const body = JSON.parse(rawBody || "{}");
    console.log("Parsed body:", body);

    // Extract fields
    const { name, email, password, type } = body;
    console.log("Extracted fields:", { name, email, password, type });

    // Validate fields
    if (!name || typeof name !== "string") {
      return new Response(
        JSON.stringify({ error: "Name is required and must be a string" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({ error: "Email is required and must be a string" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!password || typeof password !== "string") {
      return new Response(
        JSON.stringify({ error: "Password is required and must be a string" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    if (!type || (type !== "Dealership" && type !== "Individual")) {
      return new Response(
        JSON.stringify({ error: "Type must be either 'Dealership' or 'Individual'" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Email already in use" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash the password
    console.log("Hashing password:", password);
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: "",
        whatsapp: "",
        image: "",
        location: "",
        type,
      },
    });

    return new Response(
      JSON.stringify({ message: "User created successfully", user: { id: user.id, email: user.email } }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return new Response(
      JSON.stringify({ error: "Signup failed", details: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}