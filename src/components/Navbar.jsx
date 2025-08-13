import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsDash } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-4 sm:px-6 lg:px-20">
      <div className="flex justify-between items-center mt-4">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src="./image/image 1.png" alt="logo" className="w-28 md:w-auto" />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex gap-4 flex-shrink">
          <li className="flex items-center gap-1">Products <RiArrowDropDownLine /></li>
          <li className="flex items-center gap-1">Free Tools <RiArrowDropDownLine /></li>
          <li>Blog</li>
          <li className="flex items-center gap-1">Resources <RiArrowDropDownLine /></li>
          <li>Getit</li>
          <li>New Tools</li>
        </ul>

        {/* Buttons for tablet/desktop */}
        <div className="hidden sm:flex items-center gap-2 ml-auto">
          <button className="p-2 hidden sm:block md:block">Sign In</button>
          <button className="border p-2 rounded hidden sm:block md:block">Buy Now</button>
          <button className="p-2 rounded bg-black text-white">Free Trial</button>
        </div>

        {/* Free Trial only for mobile */}
        <div className="flex items-center gap-2 ml-auto sm:hidden">
          <button className="p-2 rounded bg-black text-white">Free Trial</button>
        </div>

        {/* Hamburger menu → only below lg */}
        <div className="flex-shrink-0 ml-2 lg:hidden">
          <button onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {showMenu && (
        <div className="lg:hidden bg-white shadow-md p-4 mt-2 space-y-3 w-full">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-1">Products <RiArrowDropDownLine /></li>
            <li className="flex items-center gap-1">Free Tools <RiArrowDropDownLine /></li>
            <li>Blog</li>
            <li className="flex items-center gap-1">Resources <RiArrowDropDownLine /></li>
            <li>Getit</li>
            <li>New Tools</li>
          </ul>
          {/* Buttons for mobile menu */}
          <div className="flex flex-col gap-2 mt-2 sm:hidden">
            <button className="p-2">Sign In</button>
            <button className="border p-2 rounded">Buy Now</button>
          </div>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="faq flex flex-col md:flex-row justify-between mt-8 font-medium items-center space-y-2 md:space-y-0 w-full">
        <div className="names flex gap-2 md:gap-4 items-center flex-wrap px-4 md:px-0">
          <p className="font-semibold">Home</p>
          <MdOutlineKeyboardDoubleArrowRight />
          <p className="font-semibold">Products</p>
          <MdOutlineKeyboardDoubleArrowRight />
          <p className="font-semibold text-red-500">RAD Studio</p>
        </div>
        <div className="questions flex gap-1 flex-wrap items-center justify-center px-4 md:px-0">
          <a href="#" className="flex items-center border-b border-gray-500 text-sm/4">What's New?</a>
          <BsDash />
          <a href="#" className="flex items-center border-b border-gray-500 text-sm/4">Product Edition?</a>
          <BsDash />
          <a href="#" className="flex items-center border-b border-gray-500 text-sm/4">Previous Version?</a>
          <BsDash />
          <a href="#" className="flex items-center border-b border-gray-500 text-sm/4">Customer?</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
