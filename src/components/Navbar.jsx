import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import TopBar from "./TopBar";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[24px] md:px-[40px] 2xl:px-[150px]">
      {/* -------- Top Navbar Section -------- */}
      <div className="w-full overflow-hidden">
        <div className="flex items-center justify-between mt-4">
          {/* Logo */}
          <div className="logo flex-shrink-0 cursor-pointer">
            <img
              src="./image/image 1.png"
              alt="logo"
              className="w-34.5 md:w-auto"
            />
          </div>

          {/* -------- Desktop Nav Links -------- */}
          <ul className="hidden xl:flex gap-6 flex-shrink absolute left-1/2 -translate-x-1/2">
            <li className="flex items-center gap-1 group cursor-pointer">
              <a href="#">Products</a>
              <img
                src="./image/downArrow.png"
                alt=""
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </li>
            <li className="flex items-center gap-1 group cursor-pointer">
              <a href="#">Free Tools</a>
              <img
                src="./image/downArrow.png"
                alt=""
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </li>
            <a href="#">Blog</a>
            <li className="flex items-center gap-1 group cursor-pointer">
              <a href="">Resources</a>
              <img
                src="./image/downArrow.png"
                alt=""
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </li>
            <a href="#">Getit</a>
            <a href="#">New Tools</a>
          </ul>

          {/* -------- Tablet View (745px - 1023px) -------- */}
          <div className="hidden min-[745px]:flex lg:hidden items-center gap-2 ml-auto px-4 py-2">
            {/* Sign In */}
            <button className=" group">
              <a href="" className="relative inline-block sm:text-[16px]">
                Sign In
                <span className="absolute left-0 bottom-[1px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </button>

            {/* Buy Now */}
            <button className="flex items-center justify-center  w-[89px] h-[38px] border border-[#262626] rounded-lg bg-white text-black font-medium text-[14px] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white cursor-pointer">
              <a href="" className="text-sm font-medium">
                Buy Now
              </a>
            </button>

            {/* Free Trial */}
            <button className="flex items-center justify-center  w-[91px] h-[38px] border border-black rounded-lg bg-black text-white font-medium text-[14px] transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black cursor-pointer">
              <a href="" className="text-sm font-medium">
                Free Trial
              </a>
            </button>

            {/* Hamburger for Tablet */}
            <button onClick={() => setShowMenu(!showMenu)} className="ml-2">
              {showMenu ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenu size={24} />
              )}
            </button>
          </div>

          {/* -------- Buttons for Desktop (≥lg) -------- */}
          <div className="hidden lg:flex items-center gap-4 ml-auto">
            <button className="p-2 group">
              <a href="#" className="relative inline-block">
                <span className="relative z-10">Sign In</span>
                <span className="absolute left-0 bottom-[1px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </button>

            <div className="flex gap-2">
              <button className="flex items-center justify-center  w-[89px] h-[38px] border border-[#262626] rounded-lg bg-white text-black font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white cursor-pointer">
                <a href="" className="text-sm font-medium">
                  Buy Now
                </a>
              </button>
              <button className="flex items-center justify-center w-[91px] h-[38px] border border-black rounded-lg bg-black text-white font-medium text-sm transition-transform duration-300 ease-in-out hover:scale-102 hover:opacity-60 cursor-pointer">
                <a href="" className="text-sm font-medium">
                  Free Trial
                </a>
              </button>
            </div>
          </div>

          {/* -------- Free Trial only Mobile -------- */}
          <div className="flex items-center gap-2 ml-auto sm:hidden">
            <button className="p-2 rounded bg-black text-white">
              <a href="">Free Trial</a>
            </button>
          </div>

          {/* -------- Hamburger only Mobile (<745px) -------- */}
          <div className="flex-shrink-0 ml-6 flex items-center max-[744px]:flex min-[745px]:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* -------- Mobile/Tablet Dropdown Menu -------- */}
      {showMenu && (
        <>
          {/* Overlay / Background dim */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-100 lg:hidden cursor-pointer"
            onClick={() => setShowMenu(false)}
          ></div>

          {/* Fullscreen Top Bar Layer */}
          <div className="fixed top-0 left-0 right-0 z-101 lg:hidden ">
            {/* TopBar component */}
            <TopBar />

            {/* Company Bar (Logo + Cross) */}
            <div className="w-full flex items-center justify-between pl-6 pr-12 py-7 bg-[#F8F9FC]">
              {/* Company Logo / Name (Left side) */}
              <div className="flex items-center gap-2">
                <img
                  src="./image/image 1.png"
                  alt="Company Logo"
                  className="h-6 w-auto"
                />
              </div>

              {/* Close Button (Right side) */}
              <button
                className="text-gray-700 hover:text-black text-[24px]"
                onClick={() => setShowMenu(false)}
              >
                <RxCross2 />
              </button>
            </div>
          </div>

          {/* Slide-in Menu (content area with limited width) */}
          <div
            className="fixed top-[180px] sm:top-[123px] right-0 h-[calc(100%-120px)] 
                w-full sm:w-3/4 sm:max-w-sm 
                bg-[#F6F8FB] shadow-lg flex flex-col justify-start overflow-y-auto 
                transition-transform duration-300 z-102 lg:hidden"
          >
            {/*content */}
            <div className="px-6 pt-4 pr-10 grid grid-cols-2 gap-4">
              <a href="" className="text-[14px]  font-medium">
                MyDownloads
              </a>
              <a href="" className="text-[14px] font-medium">
                Upgrade Center
              </a>
              <a href="" className="text-[14px] font-medium">
                My Customer Portal
              </a>
              <a href="" className="text-[14px] font-medium">
                Contact Us
              </a>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col gap-[34px] px-6 py-6">
              <li className="flex items-center justify-between gap-2">
                <a href="" className="font-medium">
                  Products
                </a>
                <img src="./image/downArrow.png" className="w-5 h-5" alt="" />
              </li>
              <li className="flex items-center justify-between gap-2">
                <a href="" className="font-medium">
                  Free Tools
                </a>
                <img src="./image/downArrow.png" className="w-5 h-5" alt="" />
              </li>
              <li>
                <a href="" className="font-medium">
                  Blog
                </a>
              </li>
              <li className="flex items-center justify-between gap-2">
                <a href="" className="font-medium">
                  Resources
                </a>
                <img src="./image/downArrow.png" alt="" />
              </li>
              <li>
                <a href="" className="font-medium">
                  Getit
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  New Tools
                </a>
              </li>
            </ul>

            {/* Mobile buttons */}
            <div className="flex flex-col gap-3 mt-auto px-9  pb-6">
              <button className="w-full bg-black text-white py-3 rounded-[12px]">
                <a href="">Free trial</a>
              </button>
              <button className="w-full border border-gray-300  py-3 rounded-[12px]">
                <a href="">Buy Now</a>
              </button>
              <button className="p-2">
                <a href="#" className="inline-block border-b border-black ">
                  Sign In
                </a>
              </button>
            </div>
          </div>
        </>
      )}

      {/* -------- Breadcrumbs -------- */}
      <div className="faq flex flex-col md:flex-row justify-between mt-8 font-medium items-center space-y-2 md:space-y-0 w-full">
        <div className="names flex gap-2 md:gap-3 items-center flex-wrap px-4 md:px-0 z-55">
          <a href="" className="text-sm font-medium">
            Home
          </a>
          <span className="text-gray-400 text-sm inline-block scale-x-50">
            &gt;&gt;
          </span>
          <a href="" className="text-sm font-medium">
            Products
          </a>
          <span className="text-gray-400 text-sm inline-block scale-x-50">
            &gt;&gt;
          </span>
          <a href="" className=" text-red-500 text-sm font-medium">
            RAD Studio
          </a>
        </div>
        <div className="questions z-57 flex gap-1 flex-wrap items-center justify-center  md:px-0">
          <a
            href="#"
            className="group relative text-sm leading-none overflow-hidden"
          >
            <span className="relative z-10">What's New?</span>
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>

          <p className="text-gray-500">-</p>

          <a
            href="#"
            className="group relative text-sm leading-none overflow-hidden"
          >
            <span className="relative z-10">Product Edition</span>
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>

          <p className="text-gray-500">-</p>

          <a
            href="#"
            className="group relative text-sm leading-none overflow-hidden"
          >
            <span className="relative z-10">Previous Version</span>
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>

          <p className="text-gray-500">-</p>

          <a
            href="#"
            className="group relative text-sm leading-none overflow-hidden"
          >
            <span className="relative z-10">Customers</span>
            <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-gray-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
