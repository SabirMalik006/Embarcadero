import React from "react";

function Card({ heading, Title, end }) {
  return (
    <div
      className="
        flex flex-col justify-start items-start
        gap-4
        w-full h-auto
        rounded-2xl 
        my-8 z-50 
        p-4
      "
    >
      <h2 className="text-sm font-normal tracking-wide text-gray-500 xl:text-2xl  2xl:text-lg  ">
        {heading}
      </h2>
      <h1 className="text-md lg:text-xl font-semibold tracking-wide leading-snug xl:text-2xl">
        {Title}
      </h1>
      <button className="flex font-normal items-center gap-2 text-sm lg:text-md xl:text-lg text-gray-500  group">
        {/* Text with underline animation */}
        <span className="relative inline-block font-medium text-lg">
          {end}
          <span className="absolute left-0 bottom-[1px] h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
        </span>

        {/* Arrow with smooth move */}
        <img
          className="w-4 xl:w-6 transition-transform duration-300 group-hover:translate-x-1"
          src="./image/picArrow.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default Card;
