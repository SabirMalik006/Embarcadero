import React from "react";

const Footer = () => {
  return (
    <footer className="w-full  border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 ">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="./image/image 1.png"
              alt="Logo"
              className="w-24 sm:w-28 md:w-32 2xl:w-40 h-auto object-contain"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full text-center sm:text-left 2xl:ml-30">
            {/* Products */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                Products
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">RAD Studio</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Delphi</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">C++ Builder</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">InterBase</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">RAD Server</a></li>
            </ul>

            {/* Free Tools */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                Free Tools
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">C++ Compiler</a></li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">C++ Builder Community ED</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">Delphi Community ED</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">REST Debugger</li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">Interbase Developer Edition</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">FMX Stencils</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">DEV-C++</a></li>
            </ul>

            {/* Resources */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                <a href="">Resources</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">Events & Webinars</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">White Papers</a></li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">Success Stories</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">For Educators</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Partners</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Certifications</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">MVP Program</a></li>
              <li className="text-xs sm:text-sm md:text-base">
                Web App Development
              </li>
            </ul>

            {/* Community */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                <a href="">Community</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Blogs</a></li>
            </ul>

            {/* Company */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                <a href="">Company</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">About Us</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Contact Us</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Contact Sales</a></li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Legal</a></li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">Privacy Policy</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base"><a href="">Logo</a></li>
            </ul>

            {/* Get in Touch */}
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-sm sm:text-base md:text-lg">
                <a href="">Get in Touch</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">US: (512)226-8080</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">DE: 49(0)6103-3866-100</a>
              </li>
              <li className="text-xs sm:text-sm md:text-base">
                <a href="">info@embarcadero.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
          <p className="text-center sm:text-left">
            © 2022 Embarcadero Inc. All rights reserved
          </p>
          <div className="flex gap-4">
            <img src="./image/twitter.png" alt="Twitter" className="w-5 h-5" />
            <img src="./image/face.png" alt="Facebook" className="w-5 h-5" />
            <img src="./image/ball.png" alt="Dribbble" className="w-5 h-5" />
            <img src="./image/github.png" alt="GitHub" className="w-5 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
