import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#262626] text-white px-4 sm:px-6 2xl:px-20 py-3 text-xs 2xl:text-base">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center sm:text-left">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
          <p className="flex flex-wrap gap-1 justify-center sm:justify-start">
            <span className="font-light">See what’s new in</span>&nbsp; Delphi,
            C++ Builder, and RAD Studio{" "}
            <span className="hidden md:block">Watch The Replay</span>
          </p>
          <a
  href="#"
  className="relative inline-block leading-none pb-[1px] group"
>
  <span className="relative z-10 text-white">Watch The Replay</span>
  <span
    className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"
  ></span>
</a>

        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap justify-center ">
          {/* Links - hidden on xl */}
          <ul className="flex gap-4 flex-wrap text-xs 2xl:text-base hidden xl:flex">
            <li>
              <a href="#">My Downloads</a>
            </li>
            <li>
              <a href="#">Upgrade Center</a>
            </li>
            <li>
              <a href="#">My Customer Portal</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>

          {/* Icons - always visible */}
          <div className="flex gap-3 justify-center">
            <img
              src="./image/firstSearch.svg"
              alt="Search"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src="./image/cart.svg"
              alt="Icon"
              className="w-5 h-5 cursor-pointer"
            />
            <img
              src="./image/Language.svg"
              alt="User"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
