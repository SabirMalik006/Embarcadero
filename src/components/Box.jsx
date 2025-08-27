// Box.jsx
import React from "react";

function Box({ name, des, image }) {
  return (
    <div className="rounded-lg py-1 w-full">
      {/* Mobile-first: center aligned, larger screens: left aligned */}
      <div className="flex flex-col gap-4 items-center text-center sm:items-start sm:text-left">
        <img
          src={image}
          alt={name}
          className=" w-[48px] h-[48px]  xl:w-[48px] xl:h-[48px] "
        />
        <h3 className="text-xl xl:text-2xl font-semibold  text-[#222222]">
          {name}
        </h3>
        <p className=" font-normal text-[18px] xl:text-xl leading-8 opacity-90 text-[#707070]">
          {des}
        </p>
      </div>
    </div>
  );
}

export default Box;
