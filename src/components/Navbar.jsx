import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-[60px] 2xl:px-[150px] ">
      <div className="flex  items-center justify-between mt-4">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img
            src="./image/image 1.png"
            alt="logo"
            className="w-28 md:w-auto"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden xl:flex  gap-6 flex-shrink absolute left-1/2 -translate-x-1/2 ">
          <li className="flex items-center gap-1">
            <a href="#">Products</a>
            <img src="./image/downArrow.png" alt="" />
          </li>
          <li className="flex items-center gap-1">
            <a href="#">Free Tools</a>
            <img src="./image/downArrow.png" alt="" />
          </li>
          <a href="#">Blog</a>
          <li className="flex items-center gap-1">
            <p> Resources </p>
            <img src="./image/downArrow.png" alt="" />
          </li>
          <a href="#">Getit</a>
          <a href="#">New Tools</a>
        </ul>

        {/* Buttons for tablet/desktop */}
        <div className="hidden sm:flex  items-center gap-4 ml-auto">
          <button className="p-2 hidden sm:block md:block">Sign In</button>
          <button className="border p-2 rounded-lg hidden sm:block md:block">
            Buy Now
          </button>
          <button className="p-2 rounded-lg bg-black text-white">
            Free Trial
          </button>
        </div>

        {/* Free Trial only for mobile */}
        <div className="flex items-center gap-2 ml-auto sm:hidden">
          <button className="p-2 rounded bg-black text-white">
            Free Trial
          </button>
        </div>

        {/* Hamburger menu → only below lg */}
        <div className="flex-shrink-0 ml-2 flex items-center lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <HiOutlineX size={50} /> : <HiOutlineMenu size={50} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {showMenu && (
        <div className="lg:hidden bg-white shadow-md p-4 mt-2 space-y-3 w-full">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">
              Products
              <img src="./image/dash.png" alt="" />
            </li>
            <li className="flex items-center gap-1">
              Free Tools <img src="./image/dash.png" alt="" />
            </li>
            <li>Blog</li>
            <li className="flex items-center gap-1">
              Resources <img src="./image/dash.png" alt="" />
            </li>
            <li>Getit</li>
            <li>New Tools</li>
          </ul>
          {/* Buttons for mobile menu */}
          <div className="flex flex-col gap-2 mt-2 sm:hidden ">
            <button className="p-2">Sign In</button>
            <button className="border p-2 rounded-lg">Buy Now</button>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="faq flex flex-col md:flex-row justify-between mt-8 font-medium items-center space-y-2 md:space-y-0 w-full">
        <div className="names flex gap-2 md:gap-3 items-center flex-wrap px-4 md:px-0">
          <p>Home</p>
          <img src="./image/frame.png" alt="" />
          <p>Products</p>
          <img src="./image/frame.png" alt="" />
          <p className=" text-red-500">RAD Studio</p>
        </div>
        <div className="questions flex gap-1 flex-wrap items-center justify-center px-4 md:px-0">
          <a
            href="#"
            className="flex items-center border-b border-gray-600 text-sm leading-none -pb-[3px]"
          >
            What's New?
          </a>

          <img src="./image/dash.png" alt="" />
          <a
            href="#"
            className="flex items-center border-b border-gray-600 text-sm leading-none -pb-[3px]"
          >
            Product Edition
          </a>
          <img src="./image/dash.png" alt="" />
          <a
            href="#"
            className="flex items-center border-b border-gray-600 text-sm leading-none -pb-[3px]"
          >
            Previous Version
          </a>
          <img src="./image/dash.png" alt="" />
          <a
            href="#"
            className="flex items-center border-b border-gray-600 text-sm leading-none -pb-[3px]"
          >
            Customers
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
