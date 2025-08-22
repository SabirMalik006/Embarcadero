import React from "react";

function Box({ name, des, image }) {
  return (
    <div className="rounded-lg py-1   mt-10  pl-2">
      <div className="flex flex-col items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 xl:w-[48px] xl:h-[48px] mb-6"
        />
        <h3 className="text-xl xl:text-2xl font-semibold mb-4 text-[#222222]">
          {name}
        </h3>
        <p className=" text-md font-normal xl:text-xl leading-8 opacity-90 text-[#707070]">
          {des}
        </p>
      </div>
    </div>
  );
}

export default Box;
