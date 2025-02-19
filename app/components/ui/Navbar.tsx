"use client";
import Link from "next/link";
import { Caveat } from "next/font/google";
import ThemeSwitch from "../ui/ThemeSwitch";
import { IoPersonAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";

const caveat = Caveat({ subsets: ["latin"] });

const links = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Explore",
  //   href: "explore",
  // },
  // {
  //   name: "Blog",
  //   href: "blog",
  // },
  {
    name: "About",
    href: "about",
  },
  // {
  //   name: "Customers",
  //   href: "/customers",
  // },
];

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div
      className={`fixed top-0 right-0 left-0 flex items-center rounded-3xl switch-colors z-50  ${
        pathName !== "/" ? "mb-4 bg-background sticky  rounded-none" : ""
      }`}
    >
      <div className="Container w-full">
        <nav className="flex justify-between items-center my-6">
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
          <div className="controls">
            <Link href={"/signin"}>
              <IoPersonAdd />
            </Link>
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
