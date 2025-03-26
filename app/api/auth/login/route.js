import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Store in .env file

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email, type: user.type },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return new Response(JSON.stringify({ message: "Login successful", token, user }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Login error:", error);
    return new Response(JSON.stringify({ error: "Login failed" }), { status: 500 });
  }
}
