import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Card({ heading, Title, end }) {
  return (
    <div className="bg-white shadow-md rounded-lg px-6 py-9 text-left hover:shadow-lg transition w-full">
      <h2 className="text-sm font-semibold text-gray-500">{heading}</h2>
      <h1 className="text-lg font-bold my-2">{Title}</h1>
      <button className="text-gray-500 hover:underline gap-2 flex items-center">
        {end}
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Card;
