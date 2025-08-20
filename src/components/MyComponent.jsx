import React from "react";
import Box from "./Box";

function MyComponent({ items }) {
  return (
    <div className="relative w-full">
      {/* Bubble on left side */}
      <div className="absolute hidden 2xl:block -left-16 top-1/2 -translate-y-1/2 w-200 h-200  bg-[#E9F8FB] rounded-full opacity-70 blur-2xl"></div>

      {/* Boxes grid */}
      <div className="flex justify-center items-center mt-6 w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl xl:max-w-6xl w-full z-10">
          {items.map((item, index) => (
            <Box
              key={index}
              name={item.name}
              des={item.des}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center items-center gap-2 mt-6">
        <div className="mt-6 flex justify-center items-center bg-gray-400 w-10 h-10 text-3xl text-white rounded-lg cursor-pointer">
          <img src="./image/Vector 106 (1).png" alt="" />
        </div>
        <div className="mt-6 flex justify-center items-center bg-black w-10 h-10 text-white text-3xl rounded-lg cursor-pointer">
          <img src="./image/Vector 106.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
