"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import GradientText from "../ui/GradientText";

const navItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Features",
    link: "/features",
  },
  {
    title: "Demo",
    link: "/demo",
  },
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "Contact Us",
    link: "/contact-us",
  },
];

export default function Header() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="bg-[#2D3547] max-w-[1160px] text-white mx-auto border border-[#AEB4C4] rounded-[65px] backdrop-blur-[12px] font-inter relative"
      style={{
        boxShadow: "20px 30px 75px 20px rgba(12, 15, 27, 0.1)",
      }}
    >
      <div className="flex items-center justify-between overflow-hidden">
        <Image src="/images/logo.svg" width={215} height={30} alt="logo" />
        <ul className="p-0 lg:flex items-center justify-center hidden ">
          {navItems.map((item, i) => (
            <li key={i} className="me-5">
              <Link
                className={`p-[8px_16px] rounded-[40px] block w-full text-center hover:bg-white hover:text-black ${
                  currentPath === item.link
                    ? "font-semibold text-[#000] bg-white"
                    : "text-[#cacaca] font-medium"
                }`}
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex me-4 lg:me-0 items-center">
          <Link
            className="px-[16px] py-[14px] mr-3 my-2 flex items-center bg-gradient-to-b from-[#779DFF] to-[#2D68FF] backdrop-blur-[25px] rounded-[25px] font-semibold"
            href="/"
          >
            <GradientText
              colors={["#40ffaa", "#000000", "#40ffaa", "#dddddd", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="md:hidden"
            >
              Trial
            </GradientText>
            <GradientText
              colors={["#40ffaa", "#000000", "#40ffaa", "#dddddd", "#40ffaa"]}
              animationSpeed={3}
              showBorder={false}
              className="hidden md:block"
            >
              Start free Trial
            </GradientText>
            <span className="ml-1 inline-block h-2 w-2 border-r-2 border-b-2 -rotate-45"></span>
          </Link>

          <button
            className="lg:hidden border p-2 rounded-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <ul className="p-4 pt-12 bg-[#2D3547] w-full absolute top-1/2 z-[-1] rounded-b-[40px]">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link
                className={`p-[8px_16px] rounded-[40px] inline-block w-full text-center mb-2 hover:bg-white hover:text-black ${
                  currentPath === item.link
                    ? "font-semibold text-[#000] bg-white"
                    : "text-[#cacaca] font-medium"
                }`}
                href={item.link}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
