import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CustomContentList({ data }) {
  return (
    <div className="space-y-6  lg:px-0 ">
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
              className={
                item.customHeight
                  ? `${item.customHeight} object-contain`
                  : "w-full h-full object-cover"
              }
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-6 lg:px-10 py-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500/8 to-transparent pointer-events-none rounded-lg"></div>

            {/* Heading */}
            <h2 className="font-bold text-[24px] 2xl:text-2xl 2xl:font-medium mb-4 ">
              {item.heading}
            </h2>

            {/* Bullet Points */}
            <ul className="list-disc list-inside font-normal  text-[16px] 2xl:text-base space-y-3 mb-4 leading-relaxed">
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Last line with icon */}
            <p className="text-sm text-[18px] 2xl:text-lg inline-flex items-center gap-2 mt-2">
              <span className="inline border-b border-gray-400 cursor-pointer">
                {item.lastText}
              </span>
              <IoCloudDownloadOutline className="w-8 h-7 sm:w-8 sm:h-8 " />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomContentList;
