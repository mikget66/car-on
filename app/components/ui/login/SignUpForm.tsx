"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [dealer, setDealer] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    setLoading(true);

    const payload = {
      name,
      email,
      password,
      type: dealer ? "Dealership" : "Individual",
    };

    try {
      const res = await fetch(`${baseUrl}api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      console.log("Response Status:", res.status);
      console.log("Response Text:", text);

      const data = text ? JSON.parse(text) : {};
      if (!res.ok) {
        setError(data.error || "Signup failed");
      } else {
        console.log("Signup successful:", data);
        // Optionally redirect or reset form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error: unknown) {
      console.error("Fetch error:", error);
      setError("Signup failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 loginform">
      <div className="inputContainer">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="false"
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Enter Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="false"
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
          autoComplete="false"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="inputContainer">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          type={showConfirmPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          autoComplete="false"
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          aria-label={showConfirmPassword ? "Hide password" : "Show password"}
        >
          {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="flex gap-3">
        <input
          id="dealer"
          type="checkbox"
          checked={dealer}
          onChange={(e) => setDealer(e.target.checked)}
          className="w-10 text-brandColor"
          autoComplete="false"
        />
        <label htmlFor="dealer" className="text-[1.2rem] font-semibold">
          Car Dealership?
        </label>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" required />
        <label htmlFor="remember" className="text-xl">
          By signing up, you agree to the terms of service
        </label>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <input
        className="input bg-brandColor text-white py-2 rounded cursor-pointer"
        type="submit"
        value={loading ? "Signing up..." : "Sign Up"}
      />
      <div className="text-xl text-center mt-2">
        Already have an account?{" "}
        <Link href="signin" className="text-brandColor underline">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
