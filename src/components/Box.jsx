import React from "react";

function Box({ name, des, image }) {
  return (
    <div className="rounded-lg py-1  xl:px-4 px-10 mt-4">
      <div className="flex flex-col items-start gap-3">
        <img src={image} alt={name} className="w-10 h-10 2xl:w-[48px] 2xl:h-[48px]" />
        <h3 className="text-xl 2xl:text-2xl font-semibold">{name}</h3>
        <p className="text-gray-600 text-md 2xl:text-xl leading-6">{des}</p>
      </div>
    </div>
  );
}

export default Box;
