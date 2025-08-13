import React from "react";

const Footer = () => {
  return (
    <>

      <div className="bg-[#F9F8F8] px-6 lg:px-12 py-10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
         
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <img
              src="./image/image 1.png"
              alt="Logo"
              className="w-32 h-auto object-contain"
            />
          </div>

         
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap gap-8 sm:gap-10 md:gap-12 justify-center lg:justify-start">
            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Products</li>
              <li className="text-[12px]">RAD STUDIO</li>
              <li className="text-[12px]">DELPHI</li>
              <li className="text-[12px]">C++ BUILDER</li>
              <li className="text-[12px]">INTERBASE</li>
              <li className="text-[12px]">RAD SERVER</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Free Tools</li>
              <li className="text-[12px]">C++ Compiler </li>
              <li className="text-[12px]">C++ Builder Community ED</li>
              <li className="text-[12px]">DELPHI Community ED</li>
              <li className="text-[12px]">REST Debugger</li>
              <li className="text-[12px]">INTERBASE Developer Edition</li>
              <li className="text-[12px]">FMX STENCILS</li>
              <li className="text-[12px]">DEV-C++</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Resources</li>
              <li className="text-[12px]">Events and Webinars</li>
              <li className="text-[12px]">White Papers</li>
              <li className="text-[12px]">Success Stories</li>
              <li className="text-[12px]">For Educators</li>
              <li className="text-[12px]">Partners</li>
              <li className="text-[12px]">Certifications</li>
              <li className="text-[12px]">MVP Program</li>
              <li className="text-[12px]">WEB APP Development</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Community</li>
              <li className="text-[12px]">Blogs</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Company</li>
              <li className="text-[12px]">About us</li>
              <li className="text-[12px]">Contact us</li>
              <li className="text-[12px]">Contact sales</li>
              <li className="text-[12px]">Legal</li>
              <li className="text-[12px]">Privacy Policy</li>
              <li className="text-[12px]">Logo</li>
            </ul>

            <ul className="flex flex-col gap-2">
              <li className="font-bold text-[17px]">Get in Touch</li>
              <li className="text-[12px]">US: (512)226-8080</li>
              <li className="text-[12px]">DE:49(0)6103-3866-100</li>
              <li className="text-[12px]">info@embarcadero.com</li>
            </ul>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 lg:px-12 py-4 gap-4 text-sm">
        <p>2022 Embarcadero Inc. All rights reserved</p>
        <div className="flex gap-4">
          <img src="./image/twitter.png" alt="Twitter" className="w-5 h-5" />
          <img src="./image/face.png" alt="Facebook" className="w-5 h-5" />
          <img src="./image/ball.png" alt="Dribbble" className="w-5 h-5" />
          <img src="./image/github.png" alt="GitHub" className="w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default Footer;
