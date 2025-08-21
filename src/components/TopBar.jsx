import React from "react";

const TopBar = () => {
  return (
    <div className="bg-[#262626] text-white px-4 sm:px-6 2xl:px-20 py-3 text-xs 2xl:text-base">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-center sm:text-left">
        
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center gap-2 flex-wrap">
          <p className="flex flex-wrap gap-1 justify-center sm:justify-start">
            <span className="font-light">See what’s new in</span>&nbsp;
            Delphi, C++ Builder, and RAD Studio <span className="hidden md:block" >Watch The Replay</span>
          </p>
          <a
            className="border-b border-white inline-block leading-none pb-[1px]"
            href="#"
          >
            Watch The Replay
          </a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 flex-wrap justify-center ">
          
          {/* Links - hidden on xl */}
          <ul className="flex gap-4 flex-wrap text-xs 2xl:text-base hidden xl:flex">
            <li>
              <a href="#" >My Downloads</a>
            </li>
            <li>
              <a href="#" >Upgrade Center</a>
            </li>
            <li>
              <a href="#" >My Customer Portal</a>
            </li>
            <li>
              <a href="#" >Contact Us</a>
            </li>
          </ul>

          {/* Icons - always visible */}
          <div className="flex gap-3 justify-center">
            <img
              src="./image/Search.png"
              alt="Search"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <img
              src="./image/Group 1000003433.png"
              alt="Icon"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <img
              src="./image/heello.png"
              alt="User"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
