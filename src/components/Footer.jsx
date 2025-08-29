import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="max-w-[1920px] mx-auto py-10 sm:px-6 xl:px-[80px]">
        <div
          className="
            flex flex-col px-4 sm:px-0 items-start text-center 
            sm:items-start sm:text-left 
            lg:flex-row lg:justify-between lg:items-start
            xl:flex-col xl:items-start 
            2xl:flex-row
            gap-10 lg:gap-12 xl:gap-16 2xl:gap-20
          "
        >
          {/* Logo */}
          <div
            className="
              flex justify-center lg:justify-start 
              xl:justify-start xl:mb-6 
            "
          >
            <img
              src="./image/image 1.png"
              alt="Logo"
              className="w-[202px] 2xl:w-[255px] object-contain cursor-pointer"
            />
          </div>

          {/* Links Section */}
          <div
            className="
              grid gap-8 sm:gap-10 md:gap-12 lg:gap-6 xl:gap-12
              grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
              text-center sm:text-left 2xl:ml-[80px] 
              w-full
            "
          >
            {/* Products */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start">
              <li className="font-bold text-xl sm:text-[20px] md:text-lg xl:text-xl  text-gray-800">
                Products
              </li>
              <li className="sm:text-[16px] xl:text-base text-[#4B5563]">
                <a href="">RAD Studio</a>
              </li>
              <li className="sm:text-[16px] xl:text-base text-[#4B5563]">
                <a href="">Delphi</a>
              </li>
              <li className="sm:text-[16px] xl:text-base text-[#4B5563]">
                <a href="">C++ Builder</a>
              </li>
              <li className="sm:text-[16px] xl:text-base text-[#4B5563]">
                <a href="">InterBase</a>
              </li>
              <li className="sm:text-[16px] xl:text-base text-[#4B5563]">
                <a href="">RAD Server</a>
              </li>
            </ul>

            {/* Free Tools */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start text-left">
              <li className="font-bold text-xl sm:text-[20px] md:text-xl text-gray-800">
                Free Tools
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">C++ Compiler</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">C++ Builder Community ED</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Delphi Community ED</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">REST Debugger</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Interbase Developer Edition</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">FMX Stencils</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">DEV-C++</a>
              </li>
            </ul>

            {/* Resources */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start text-left">
              <li className="font-bold text-xl sm:text-[20px] md:text-xl text-gray-800">
                Resources
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Events & Webinars</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">White Papers</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Success Stories</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">For Educators</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Partners</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Certifications</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">MVP Program</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Web App Development</a>
              </li>
            </ul>

            {/* Community */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start">
              <li className="font-bold text-xl sm:text-[20px] md:text-xl text-gray-800">
                Community
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Blogs</a>
              </li>
            </ul>

            {/* Company */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start">
              <li className="font-bold text-xl sm:text-[20px] md:text-xl text-gray-800">
                Company
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">About Us</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Contact Us</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Contact Sales</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Legal</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Privacy Policy</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">Logo</a>
              </li>
            </ul>

            {/* Get in Touch */}
            <ul className="flex flex-col gap-4 sm:gap-3 items-start text-left">
              <li className="font-bold text-xl sm:text-[20px] md:text-xl text-gray-800">
                Get in Touch
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">US: (512)226-8080</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">DE: 49(0)6103-3866-100</a>
              </li>
              <li className="sm:text-[16px] md:text-base text-[#4B5563]">
                <a href="">info@embarcadero.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full ">
        <div
          className="max-w-[1920px] mx-4 sm:mx-6 xl:mx-20 py-4 
                  flex flex-col-reverse sm:flex-row 
                  justify-center sm:justify-between items-center 
                  gap-4 text-xs sm:text-sm text-center font-normal"
        >
          {/* Text */}
          <p className="text-center text-[14px] sm:text-left ">
            © 2022 Embarcadero Inc. All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 justify-center">
            <img
              src="./image/x.svg"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/f.svg"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/newBall.svg"
              alt="Dribbble"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/g.svg"
              alt="GitHub"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
