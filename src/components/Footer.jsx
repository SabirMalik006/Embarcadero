import React from "react";

const Footer = () => {
  return (
    <>
      <div className="py-5 max-w-6xl 2xl:max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <img
              src="./image/image 1.png"
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 h-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-6 sm:gap-8 md:gap-10 justify-center lg:justify-start">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="">Products</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base 2xl:font-normal">
                <a href="">RAD STUDIO</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base 2xl:font-normal">
                <a href="">DELPHI</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base 2xl:font-normal">
                <a href="">C++ BUILDER</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base 2xl:font-normal">
                <a href="">INTERBASE</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base 2xl:font-normal">
                <a href=""></a>RAD SERVER
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="#">Free Tools</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  C++ Compiler
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  C++ Builder Community ED
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  DELPHI Community ED
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  REST Debugger
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  INTERBASE Developer Edition
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  FMX STENCILS
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  DEV-C++
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Events and Webinars
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  White Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  For Educators
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  MVP Program
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  WEB APP Development
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Blogs
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="#">Company</a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Contact sales
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-xs sm:text-sm md:text-base">
                  Logo
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg 2xl:text-xl">
                <a href="#">Get in Touch</a>
              </li>
              <li>
                <a
                  href="tel:+15122268080"
                  className="text-xs sm:text-sm md:text-base"
                >
                  US: (512)226-8080
                </a>
              </li>
              <li>
                <a
                  href="tel:+4961033866100"
                  className="text-xs sm:text-sm md:text-base"
                >
                  DE:49(0)6103-3866-100
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@embarcadero.com"
                  className="text-xs sm:text-sm md:text-base"
                >
                  info@embarcadero.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom copyright & social */}
      <div className="flex flex-col sm:flex-row justify-between items-center py-4 px-2 sm:px-4 md:px-10 gap-4 text-xs sm:text-sm md:text-base max-w-5xl xl:max-w-6xl mx-auto text-center sm:text-left">
        <p>2022 Embarcadero Inc. All rights reserved</p>
        <div className="flex gap-4">
          <img
            src="./image/twitter.png"
            alt="Twitter"
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
          <img
            src="./image/face.png"
            alt="Facebook"
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
          <img
            src="./image/ball.png"
            alt="Dribbble"
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
          <img
            src="./image/github.png"
            alt="GitHub"
            className="w-4 sm:w-5 h-4 sm:h-5"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
