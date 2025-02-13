import { Caveat } from "next/font/google";
import ThemeSwitch from "../components/ThemeSwitch";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"] });

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Invoices",
    href: "/dashboard/",
  },
  {
    name: "Customers",
    href: "/customers",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 flex items-center rounded-3xl switch-colors m-4 py-2 z-50 ">
      <div className="Container m-10 py-3 w-full">
        <nav className="flex justify-between items-center">
          <Link href="/" className="logo text-3xl md:text-5xl font-semibold cursor-pointer">
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
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
