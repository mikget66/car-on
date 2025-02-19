"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCondirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form action="" className="flex flex-col gap-5 loginform">
      <div className="inputContainer">
        <label htmlFor="name">Full Name</label>
        <input id="name" type="text" />
      </div>
      <div className="inputContainer">
        <label htmlFor="email">Enter Email</label>
        <input id="email" type="text" />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input id="password" type={showPassword ? "text" : "password"} />
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
          type={showCondirmPassword ? "text" : "password"}
        />
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showCondirmPassword)}
          aria-label={showCondirmPassword ? "Hide password" : "Show password"}
        >
          {showCondirmPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xl">
          By signing up, you agree to the terms of service
        </label>
      </div>
      <input
        className="input bg-brandColor text-white py-2 rounded cursor-pointer"
        type="submit"
        value="Sign In"
      />
      <div className="text-xl text-center mt-2">
        Don have an account?{" "}
        <Link href="signin" className="text-brandColor underline">
          Sign IN
        </Link>
      </div>
    </form>
  );
};

export default SignUpForm;
