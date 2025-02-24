"use client";
import Link from "next/link";
import { Caveat } from "next/font/google";
import ThemeSwitch from "../ui/ThemeSwitch";
import { IoPersonAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const caveat = Caveat({ subsets: ["latin"] });

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isresponsiveLinks, setIsresponsiveLinks] = useState(false);
  const toggleResponsiveNav = () => {
    setIsresponsiveLinks(!isresponsiveLinks);
  };
  const closeResponsiveNav = () => {
    setIsresponsiveLinks(false);
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 flex items-center rounded-lg lg:rounded-2xl m-3 switch-colors z-50 transition-scale duration-500  ease-linear overflow-hidden ${
        pathName !== "/"
          ? "mb-4 bg-background sticky rounded-none shadow-lg"
          : ""
      }`}
    >
      <div className="Container w-full">
        <nav className="flex justify-between items-center my-3">
          <Link
            href="/"
            className="logo text-3xl md:text-5xl font-semibold cursor-pointer"
          >
            Car
            <span className={`${caveat.className} text-brandColor`}>On.</span>
          </Link>

          <div>
            <ul className="hidden md:flex justify-start gap-3 ">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="text-xl font-semibold"
                >
                  {link.name}
                </Link>
              ))}
            </ul>
          </div>

          <div className="controls flex items-center gap-4">
            <Link href={"/signin"}>
              <IoPersonAdd />
            </Link>
            <ThemeSwitch />
            <button className="inline md:hidden lg:scale-0 lg:w-0 " onClick={toggleResponsiveNav}>
              <RxHamburgerMenu />
            </button>
          </div>
        </nav>
        <div
          className={`${
            isresponsiveLinks ? "max-h-40 mb-4" : "max-h-0 overflow-hidden "
          } transition-scale duration-500 ease-linear lg:m-0 lg:scale-0 lg:h-0 `}
        >
          <ul className=" flex flex-col justify-start gap-3 ">
            {links.map((link) => (
              <Link key={link.name} href={link.href} className="text-xl font-semibold  "  onClick={closeResponsiveNav}>
                <li  className="bg-light p-2 rounded-md">
                  {link.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
