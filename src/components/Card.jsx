import React from "react";

function Card({ heading, Title, end }) {
  return (
    <div
      className="
        flex flex-col justify-start items-start
        gap-4
        w-full max-w-[466px]   
        h-auto                 
        sm:pl-2            
        rounded-2xl z-50
      "
    >
      <h2 className="text-[18px] sm:text-lg xl:text-xl font-normal tracking-wide text-gray-500">
        {heading}
      </h2>

      <h1 className="font-semibold tracking-wide leading-snug text-[28px] xl:text-[32px]">
        {Title}
      </h1>

      <button className="flex font-normal items-center gap-2 text-sm lg:text-md xl:text-lg text-gray-500 group">
        {/* Text with underline animation */}
        <span className="relative inline-block font-medium text-[18px] sm:text-lg 2xl:text-xl cursor-pointer">
          {end}
          <span className="absolute left-0 bottom-[1px] h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        {/* Arrow with smooth move */}
        <img
          className="w-7  transition-transform duration-300 cursor-pointer group-hover:translate-x-1"
          src="./image/picArrow.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default Card;
