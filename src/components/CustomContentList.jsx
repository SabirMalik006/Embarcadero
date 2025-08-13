import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CustomContentList({ data }) {
  return (
    <div className="space-y-6 px-4 md:px-6 lg:px-0"> {/* Left-Right space added */}
      {data.map((item, index) => (
        <div
          key={index}
          className="
            flex 
            flex-col 
            lg:flex-row 
            bg-white 
            shadow-md 
            rounded-lg 
            overflow-hidden 
            hover:shadow-lg 
            transition
            mx-auto
            max-w-[1000px] {/* Limit width center align */}
          "
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 bg-[#4D4D4D] flex items-center justify-center">
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

            <h2 className="text-xl font-bold">{item.heading}</h2>

            <ul className="list-disc list-inside mt-2 text-sm space-y-1">
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-sm mt-4 flex items-center gap-1 flex items-center ">
              {item.lastText}
              <IoCloudDownloadOutline />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomContentList;
