import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CustomContentList({ data }) {
  return (
    <div className="space-y-6 lg:px-0">
      {data.map((item, index) => (
        <div
          key={index}
          className="
            flex 
            flex-col 
            lg:flex-row 
            bg-white 
            rounded-lg 
            overflow-hidden 
            mx-auto
            max-w-5xl xl:max-w-[1920px]
          "
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 bg-[#4F4D4D] flex items-center justify-center">
            <img
              src={item.image}
              alt=""
              className={`object-contain
                w-full 
                max-h-[280px] sm:max-h-[400px] lg:max-h-full
              `}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-6 lg:px-10 py-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500/8 to-transparent pointer-events-none rounded-lg"></div>

            {/* Heading */}
            <h2 className="font-bold text-[24px] 2xl:text-2xl 2xl:font-medium mb-4">
              {item.heading}
            </h2>

            {/* Bullet Points */}
            <ul className="list-disc list-inside font-normal text-[16px] 2xl:text-base space-y-6 mb-4 leading-6">
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Last line with icon */}
            <div className="flex flex-wrap gap-2 sm:gap-0 relative cursor-pointer mt-12">
              <span className="relative text-lg leading-tight">
                <span className="relative z-10">
                  Download RAD Studio Feature
                </span>
                <span className="absolute bottom-[2px] left-0 h-[1px] w-full bg-black rounded-full"></span>
              </span>
              <span className="relative text-lg leading-tight">
                <span className="relative z-10">Matrix</span>
                <span className="absolute bottom-[2px] left-0 h-[1px] w-full bg-black rounded-full"></span>
              </span>
              {/* Icon */}
              &nbsp;
              <IoCloudDownloadOutline className="w-7 h-7 absolute sm:static right-2 top-2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomContentList;
