"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import slogo from "../../public/smallLogo.svg";
import ham from "../../public/ham.png";
import cross from "../../public/cross.png";
import { useState } from "react";
import sun from "../../public/sun.png";
import moon from "../../public/moon.png";

export default function Header({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <header
      className={`w-full flex min-h-[11vh] fixed top-0 z-50 justify-between ${
        darkMode ? "bg-[#263238]" : "bg-white"
      } items-center py-3 px-8`}
    >
      <nav className="w-full flex justify-between items-center max-w-[1086px] m-auto">
        <div className="logo cursor-pointer pb-1">
          {darkMode ? (
            <div className="flex justify-center items-center gap-2 text-white text-xl md:text-2xl font-bold">
              <Image
                src={slogo}
                alt="logo"
                className="bg-cover w-[4vw] md:max-w-[30px] min-w-[25px]"
              />
              Nexcent
            </div>
          ) : (
            <Image src={logo} alt="logo" className="w-28 lg:w-32" />
          )}
        </div>
        <div
          className={`links gap-6 lg:gap-12 font-medium font-sans ${
            darkMode ? "text-white" : "text-[#263238]"
          } hidden md:flex`}
        >
          <div className="relative hoverable-element">
            Home <div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
          <div className="hoverable-element">
            Service<div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
          <div className="hoverable-element">
            Feature<div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
          <div className="hoverable-element">
            Product<div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
          <div className="hoverable-element">
            Testimonial
            <div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
          <div className="hoverable-element">
            FAQ<div className="line absolut h-[2px] bg-[#49A74B] "></div>
          </div>
        </div>
        <div className="authbtns flex justify-end items-center gap-2 lg:gap-4 ">
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={toggleTheme}
              className={`${
                darkMode
                  ? "bg-[#1F1F1F] border-white"
                  : "bg-white border-gray-800"
              } p-2 rounded-full  border-[0.01px]`}
              aria-label="dark mode btn"
            >
              {darkMode ? (
                <Image src={sun} alt="sun" className="w-5" />
              ) : (
                <Image src={moon} alt="moon" className="w-5" />
              )}
            </button>
          </div>
          <button
            className="btn text-[#49A74B] hover:text-[#237D31] font-medium font-sans hidden md:flex"
            aria-label="login"
          >
            Login
          </button>
          <button
            className="btn bg-[#49A74B] hover:bg-[#237D31] px-3 py-1.5 text-sm lg:text-base rounded-md font-medium font-sans text-white hidden md:flex"
            aria-label="sign up"
          >
            Sign Up
          </button>
          <div
            className="hamberger block md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <Image
                src={ham}
                width={30}
                className={`cursor-pointer ${darkMode && "filter invert"} `}
                alt="hamburger"
              />
            ) : (
              <Image
                src={cross}
                width={20}
                alt="cross"
                className={`cursor-pointer mx-[5px] ${
                  darkMode && "filter invert"
                } `}
              />
            )}
          </div>
        </div>

        {isOpen && (
          <div
            className={`sider absolute top-6 left-0 pt-10 ${
              darkMode
                ? "bg-gray-600 text-gray-200"
                : "bg-[#F5F7FA] text-[#263238]"
            } w-full h-screen flex flex-col items-center justify-start mt-10 font-medium font-sans gap-5 z-10`}
          >
            <div className="cursor-pointer">Home</div>
            <div className="cursor-pointer">Service</div>
            <div className="cursor-pointer">Feature</div>
            <div className="cursor-pointer">Product</div>
            <div className="cursor-pointer">Testimonials</div>
            <div className="cursor-pointer">FAQ</div>
            <div className="flex mt-5 gap-5 justify-center items-center">
              <div className="cursor-pointer text-[#49A74B] hover:text-[#237D31] font-medium font-sans">
                Login
              </div>
              <div className="bg-[#49A74B] hover:bg-[#237D31] px-3 py-1.5 rounded-md font-medium font-sans text-white">
                Sign In
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
