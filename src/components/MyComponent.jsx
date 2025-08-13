import React from "react";
import Box from "./Box";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

function MyComponent({ items }) {
  return (
    <>
      <div className="flex justify-center items-center mt-6 w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1000px] mt-6 w-full">
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

      
      <div className="flex justify-center items-center gap-2 mt-6">
        <div className="flex justify-center items-center bg-gray-400 w-10 h-10 text-3xl text-white rounded-lg cursor-pointer">
          <FaLongArrowAltLeft />
        </div>
        <div className="flex justify-center items-center bg-black w-10 h-10 text-white text-3xl rounded-lg cursor-pointer">
          <FaLongArrowAltRight />
        </div>
      </div>
    </>
  );
}

export default MyComponent;
