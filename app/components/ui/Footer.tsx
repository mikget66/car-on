import Link from "next/link";
import {
  FaApple,
  FaChevronRight,
  FaDribbble,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { Caveat } from "next/font/google";
import Image from "next/image";

const caveat = Caveat({ subsets: ["latin"] });

const Footer = () => {
  return (
    <footer className="bg-bgdark text-white pt-36">
      <div className="Container py-4">
        <div className="bg-brandColor rounded-2xl Flex  flex-col lg:flex-row items-center justify-around lg:h-[200px] gap-7 lg:gap-0 text-center lg:text-start pt-7 lg:pt-0">
          <Image
            src={"/images/phone-mpckup.png"}
            width={300}
            height={300}
            alt=""
            className="lg:self-end m-0 order-last lg:order-first"
          />
          <div className="">
            <p className="text-3xl font-medium">Download Our App</p>
            <p className="w-[400px] text-lg font-normal">
              It is a long established fact that a reader will be distracted by
              the readable content.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href={"/"}
              className="border-[1px] border-white rounded-md p-2 flex items-center gap-2"
            >
              <FaApple className="text-4xl" />
              <span>
                Available on the
                <span className="block text-xl font-semibold">App Store</span>
              </span>
            </Link>
            <Link
              href={"/"}
              className="border-[1px] border-white rounded-md p-2 flex items-center gap-2"
            >
              <FaGooglePlay className="text-4xl" />
              <span>
                Get it on
                <span className="block text-xl font-semibold">Google Play</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="flex-col lg:flex-row flex items-start justify-start py-6 border-y-2 border-gray-700 my-10 gap-6 ">
          <div className=" flex-1 flex flex-col gap-11">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <p>
              Join our newsletter and receive the best job openings of the week,
              right on your inbox.
            </p>
            <div className="border-2 border-gray-700 rounded-xl p-6 ">
              <p className="text-textlight">Join our Whatsapp:</p>
              <p className="text-2xl font-bold underline decoration-2 tracking-widest">
                <FaWhatsapp className="inline mr-2 " />
                (123) 456-7890{" "}
              </p>
            </div>
            <h3 className=" text-2xl font-bold">
              Want to join ListOn? Write us !
            </h3>
            <Link href={"/"} className="text-lg">
              support@ListOn.com
            </Link>
          </div>
          <span className="border-r-2 border-gray-700 self-stretch mx-4"></span>
          <div className=" flex-1 flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Stay Connect</h3>
            <p>1123 Fictional St, San Francisco , CA 94103</p>
            <p>(123) 456-7890</p>
            <p>support@ListOn.com</p>
          </div>
          <span className="border-r-2 border-gray-700 self-stretch mx-4"></span>
          <div className=" flex-1 flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <form
              action=""
              className="border-2 border-gray-700 p-3 rounded-full flex justify-between"
            >
              <input
                type="text"
                placeholder="name@example.com"
                className=" bg-transparent outline-none"
              />
              <FaChevronRight className="inline text-white bg-brandColor opacity-100 hover:opacity-90 text-2xl rounded-full h-[40px] w-[40px] p-3 cursor-pointer self-end" />
            </form>

            <h3 className="text-2xl font-bold">Follow the location</h3>
            <ul className="socila-list">
              <li className="hover:bg-pink-900">
                <Link href={"/"}>
                  <FaInstagram />
                </Link>
              </li>
              <li className="hover:bg-blue-900">
                <Link href={"/"}>
                  <FaTwitter />
                </Link>
              </li>
              <li className="hover:bg-pink-900">
                <Link href={"/"}>
                  <FaDribbble/>
                </Link>
              </li>
              <li className="hover:bg-blue-700">
                <Link href={"/"}>
                  <FaFacebookF />
                </Link>
              </li>
              <li className="hover:bg-green-800">
                <Link href={"/"}>
                  <FaWhatsapp />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="logo text-3xl md:text-5xl font-semibold cursor-pointer"
            >
              Car
              <span className={`${caveat.className} text-brandColor`}>On.</span>
            </Link>
            <span className="border-r-2 border-gray-700 self-stretch mx-4"></span>
            <p className="">
              © 2022 ListOn - All Rights Reserved- All Rights Reserved
            </p>
          </div>
          <ul className="flex justify-between items-center gap-2">
            <li>
              <a href="">Privacy</a>
            </li>
            <span>/</span>
            <li>
              <a href="">Sitemap</a>
            </li>
            <span>/</span>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
