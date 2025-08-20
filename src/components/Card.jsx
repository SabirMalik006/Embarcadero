import React from "react";

function Card({ heading, Title, end }) {
  return (
    <div className="  rounded-lg  text-left w-full py-4   ">
      <h2 className="text-sm font-medium tracking-wide text-gray-500 mb-4 2xl:text-lg">{heading}</h2>
      <h1 className="text-lg font-bold my-2 tracking-wide mb-4 2xl:text-3xl">{Title}</h1>
      <button className="text-gray-500 underline  gap-2 flex items-center text-sm 2xl:text-lg">
        {end}
        <img className="w-4 2xl:w-6 " src="./image/picArrow.png" alt="" />
      </button>
    </div>
  );
}

export default Card;
