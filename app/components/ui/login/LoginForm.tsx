"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext"; // adjust the path as needed

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        // Call the login function from context to update the auth state
        login(data.user, data.token);
        router.push("/");
      }
    } catch (err: unknown) {
      console.error("Login error:", err);
      setError("Login failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 loginform">
      <div className="inputContainer">
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xl">
          Remember me
        </label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="input bg-brandColor text-white py-2 rounded cursor-pointer"
        type="submit"
        value={loading ? "Signing In..." : "Sign In"}
      />
      <div className="text-xl text-center mt-2">
        Don&apos;t have an account?{" "}
        <Link href="signup" className="text-brandColor underline">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
