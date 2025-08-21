import React from "react";

function Card({ heading, Title, end }) {
  return (
    <div
      className="
        flex flex-col justify-center items-start
        gap-4
        w-full h-auto
        rounded-2xl 
        my-8 z-50
      "
    >
     
      <h2 className="text-sm font-normal tracking-wide text-gray-500  2xl:text-lg  ">
        {heading}
      </h2>
      <h1 className="text-md lg:text-xl font-semibold tracking-wide leading-snug 2xl:text-2xl">
        {Title}
      </h1>
      <button className="flex font-normal items-center gap-2 text-sm lg:text-xl text-gray-500 underline 2xl:text-lg ">
        {end}
        <img className="w-4 2xl:w-6" src="./image/picArrow.png" alt="" />
      </button>
    </div>
  );
}

export default Card;
