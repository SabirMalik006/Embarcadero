import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] md:px-[40px] 2xl:px-[150px]">
      {/* -------- Top Navbar Section (wrapped with overflow-hidden div) -------- */}
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
          <div className="hidden [@media(min-width:745px) and (max-width:1023px)]:flex items-center gap-4 ml-auto px-4 py-2 overflow-hidden">
            {/* Sign In */}
            <button className="p-2 group">
              <a href="" className="relative inline-block">
                Sign In
                <span className="absolute left-0 bottom-[1px] h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            </button>

            {/* Buy Now */}
            <button className="flex items-center justify-center px-4 py-2 w-[92px] h-[38px] border border-[#262626] rounded-lg bg-white text-black font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white">
              <a href="" className="text-sm font-medium">
                Buy Now
              </a>
            </button>

            {/* Free Trial */}
            <button className="flex items-center justify-center px-4 py-2 w-[94px] h-[38px] border border-black rounded-lg bg-black text-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black">
              <a href="" className="text-sm font-medium">
                Free Trial
              </a>
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
              <button className="flex items-center justify-center px-4 py-2 w-[92px] h-[38px] border border-[#262626] rounded-lg bg-white text-black font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hover:border-white">
                <a href="" className="text-sm font-medium">
                  Buy Now
                </a>
              </button>
              <button className="flex items-center justify-center px-4 py-2 w-[94px] h-[38px] border border-black rounded-lg bg-black text-white font-medium text-sm transition-colors duration-300 ease-in-out hover:bg-white hover:text-black hover:border-black">
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

          {/* -------- Hamburger (below lg) -------- */}
          <div className="flex-shrink-0 ml-6 flex items-center lg:hidden">
            <button onClick={() => setShowMenu(!showMenu)}>
              {showMenu ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* -------- Mobile/Tablet Dropdown Menu -------- */}
      {showMenu && (
        <div className="lg:hidden bg-white shadow-md p-4 mt-2 space-y-3 w-full">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              <a href="">Products</a>
              <img src="./image/dash.png" alt="" />
            </li>
            <li className="flex items-center gap-1">
              <a href="">Free Tools </a>
              <img src="./image/dash.png" alt="" />
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li className="flex items-center gap-1">
              <a href="">Resources </a>
              <img src="./image/dash.png" alt="" />
            </li>
            <li>
              <a href="">Getit</a>
            </li>
            <li>
              <a href="">New Tools</a>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-2 sm:hidden">
            <button className="p-2">
              <a href="">Sign In</a>
            </button>
            <button className="border p-2 rounded-lg">
              <a href="">Buy Now</a>
            </button>
          </div>
        </div>
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
        <div className="questions z-57 flex gap-1 flex-wrap items-center justify-center px-4 md:px-0">
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
