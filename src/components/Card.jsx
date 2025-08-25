import React from "react";

function Card({ heading, Title, end }) {
  return (
    <div
      className="
        flex flex-col justify-start items-start
        gap-4
        w-[331.5px] h-[213px]       /* Base size for small screens */
        sm:w-[90%] sm:h-auto        /* Small screens: flexible */
        md:w-[80%] md:h-auto        /* Medium screens: flexible */
        xl:w-[405px] xl:h-[234px]   /* XL screens */
        2xl:w-[466px] 2xl:h-[188px] /* 2XL screens */
        rounded-2xl z-50
      "
    >
      <h2 className="text-lg font-normal tracking-wide text-gray-500 xl:text-xl">
        {heading}
      </h2>
      <h1 className="font-semibold tracking-wide leading-snug text-[28px] xl:text-[32px] 2xl:text-[28px]">
        {Title}
      </h1>
      <button className="flex font-normal items-center gap-2 text-sm lg:text-md xl:text-lg text-gray-500 group">
        {/* Text with underline animation */}
        <span className="relative inline-block font-medium text-lg 2xl:text-xl cursor-pointer">
          {end}
          <span className="absolute left-0 bottom-[1px] h-[2px] w-0 bg-gray-500 transition-all duration-300 group-hover:w-full "></span>
        </span>

        {/* Arrow with smooth move */}
        <img
          className="w-4 xl:w-7 transition-transform duration-300 cursor-pointer group-hover:translate-x-1"
          src="./image/picArrow.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default Card;
