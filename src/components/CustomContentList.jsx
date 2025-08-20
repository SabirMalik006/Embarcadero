import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CustomContentList({ data }) {
  return (
    <div className="space-y-6  lg:px-0 px-6">
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
            max-w-5xl xl:max-w-6xl
          "
        >
          {/* Image Section */}
          <div className="w-full lg:w-1/2 bg-[#4D4D4D] flex items-center justify-center">
            <img
              src={item.image}
              alt=""
              className={item.customHeight ? `${item.customHeight} object-contain` : "w-full h-full object-cover"}
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 px-6 lg:px-10 py-6 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500/8 to-transparent pointer-events-none rounded-lg"></div>

            <h2 className="text-xl font-bold 2xl:text-2xl">{item.heading}</h2>

            <ul className="list-disc list-inside mt-2 text-sm space-y-1 2xl:text-base">
              {item.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-sm 2xl:text-lg mt-4 flex items-center gap-1">
              {item.lastText}
              <IoCloudDownloadOutline height={20} width={20} />
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomContentList;
