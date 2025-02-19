import Image from "next/image";
import { Caveat } from "next/font/google";
import LoginForm from "@/app/components/ui/login/LoginForm";

import { FaApple, FaGoogle } from "react-icons/fa";
const caveat = Caveat({ subsets: ["latin"] });

const page = () => {
  return (
    <div id="login" className="w-full lg:w-10/12 grid grid-cols-3 py-5 m-auto">
      <div className="Flex flex-col  m-auto h-full py-[6rem]">
        <div className="flex flex-col gap-5">
          <h2 className="text-[3.2rem] font-medium">
            Welcome back! Please
            <span className={`${caveat.className} text-brandColor`}>
              Sign in
            </span>
            to continue.
          </h2>
          <p className="text-textlight">
            Unlock a world of exclusive content, enjoy special offers, and be
            the first to dive into exciting news and updates by joining our
            community!
          </p>
          <button className="btn-dark  signin-btn">
            <FaApple /> Sign up with Apple
          </button>
          <button className="btn-light signin-btn ">
            <FaGoogle />
            Sign up with Google
          </button>
          <p className="text-textlight">
            {`We won't post anything without your permission and your personal details are kept private`}
          </p>
        </div>
        <div className="Flex w-full items-center ">
          <hr className="flex-1 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
          <span className="mx-[8px] font-semibold text-2xl ">or</span>
          <hr className="flex-1 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>
        <LoginForm />
      </div>
      <div className="col-span-2 bg-light m-auto rounded-3xl p-[5rem] Flex flex-col items-center justify-center text-center">
        <h2>Effortlessly organize your workspace with ease.</h2>
        <p className="text-textlight">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <Image
          src={"/images/background/login-bg.jpeg"}
          width={700}
          height={700}
          alt="login"
          className="blur-sm"
        />
      </div>
    </div>
  );
};

export default page;
