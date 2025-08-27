import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      {/* Top Section */}
      <div className="max-w-[1920px] mx-auto py-10 px-10">
        <div
          className="
            flex flex-col items-left items-start justify-center text-center 
            sm:items-start sm:text-left lg:flex-row lg:justify-between lg:items-start lg:text-left
            xl:flex-col xl:items-start xl:text-left
            2xl:flex-row 2xl:text-left
            gap-10 2xl:px-40 
          "
        >
          {/* Logo */}
          <div
            className="
              flex justify-center  lg:justify-start
              xl:justify-start xl:mb-6
            "
          >
            <img
              src="./image/image 1.png"
              alt="Logo"
              className="w-[202px] h-[35px] sm:w-[150px] md:w-[202px]  object-contain cursor-pointer"
            />
          </div>

          {/* Links Section */}
          <div
            className="
    grid gap-[16px] sm:gap-[25px] xl:gap-[70.8px] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6   
    text-center sm:text-left 2xl:ml-30
    
  "
          >
            {/* Products */}
            <ul className="flex flex-col gap-4 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg xl:text-xl text-gray-800">
                Products
              </li>
              <li className=" sm-text-[16px] xl:text-base text-[#4B5563]">
                <a href="">RAD Studio</a>
              </li>
              <li className=" sm-text-[16px] xl:text-base text-[#4B5563]">
                <a href="">Delphi</a>
              </li>
              <li className=" sm-text-[16px] xl:text-base text-[#4B5563]">
                <a href="">C++ Builder</a>
              </li>
              <li className=" sm-text-[16px] xl:text-base text-[#4B5563]">
                <a href="">InterBase</a>
              </li>
              <li className=" sm-text-[16px] xl:text-base text-[#4B5563]">
                <a href="">RAD Server</a>
              </li>
            </ul>

            {/* Free Tools */}
            <ul className="flex flex-col gap-4 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg text-gray-800">
                <a href="">Free Tools</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">C++ Compiler</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">C++ Builder Community ED</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Delphi Community ED</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">REST Debugger</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Interbase Developer Edition</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">FMX Stencils</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">DEV-C++</a>
              </li>
            </ul>

            {/* Resources */}
            <ul className="flex flex-col gap-6 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg text-gray-800">
                <a href="">Resources</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Events & Webinars</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">White Papers</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Success Stories</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">For Educators</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Partners</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Certifications</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">MVP Program</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                Web App Development
              </li>
            </ul>

            {/* Community */}
            <ul className="flex flex-col gap-4 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg text-gray-800">
                <a href="">Community</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Blogs</a>
              </li>
            </ul>

            {/* Company */}
            <ul className="flex flex-col gap-4 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg text-gray-800">
                <a href="">Company</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">About Us</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Contact Us</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Contact Sales</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Legal</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Privacy Policy</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">Logo</a>
              </li>
            </ul>

            {/* Get in Touch */}
            <ul className="flex flex-col gap-4 items-start justify-start">
              <li className="font-bold text-[20px]  sm:text-[20px] md:text-lg text-gray-800">
                <a href="">Get in Touch</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">US: (512)226-8080</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">DE: 49(0)6103-3866-100</a>
              </li>
              <li className=" sm-text-[16px] md:text-base text-[#4B5563]">
                <a href="">info@embarcadero.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full">
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
              src="./image/twitter.png"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/face.png"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/ball.png"
              alt="Dribbble"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="./image/github.png"
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
