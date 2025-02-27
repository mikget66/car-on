"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action="" className="flex flex-col gap-5 loginform">
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
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" />
        <label htmlFor="remember" className="text-xl">
          Remember me
        </label>
      </div>
      <input
        className="input bg-brandColor text-white py-2 rounded cursor-pointer"
        type="submit"
        value="Sign In"
      />
      <div className="text-xl text-center mt-2">
        Don&apos;t have an account?{" "}
        <Link href="signup" className="text-brandColor underline">
          Sign Up
        </Link>
        <br />
        Remind
        <Link href="forgetpassword" className="text-brandColor underline">
          {" "}
          Password
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
