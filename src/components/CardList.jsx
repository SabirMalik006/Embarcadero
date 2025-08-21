import Card from "./Card";
import React from "react";

function CardList({ data }) {
  // Utility to chunk array into groups
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  // Responsive breakpoints: handle with Tailwind hidden + maps
  const renderCards = (chunkSize, onlyFirstRowLine = false) => {
    const chunks = chunkArray(data, chunkSize);

    return chunks.map((group, rowIndex) => (
      <div key={rowIndex} className="w-full">
        {/* Row of cards */}
        <div
          className={`grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${chunkSize}`}
        >
          {group.map((item, index) => (
            <Card
              key={index}
              heading={item.heading}
              Title={item.Title}
              end={item.end}
            />
          ))}
        </div>

        {/* Dotted line after rows */}
        {(onlyFirstRowLine ? rowIndex === 0 : rowIndex < chunks.length - 1) && (
          <hr className="border-t border-dotted border-gray-300 my-6" />
        )}
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col items-center px-6 sm:px-6 md:px-8 lg:px-10 2xl:px-0 relative">
      <div
        className="absolute hidden 2xl:block left-0 bottom-0 
  w-[500px] h-[400px]  
  bg-blue-100/50 opacity-70 blur-3xl 
  rounded-xl"
      ></div>
      <div
        className="absolute hidden 2xl:block right-0 top-0 
  w-[500px] h-[400px]  
  bg-blue-100/50 opacity-70 blur-3xl 
  rounded-xl"
      ></div>
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-10 mb-12 text-center lg:text-left max-w-5xl xl:max-w-6xl 2xl:max-w-7xl w-full">
        <p className="text-2xl md:text-4xl 2xl:text-5xl font-normal 2xl:font-semibold">
          Learn More on the{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
            inline-block text-transparent bg-clip-text font-semibold 2xl:text-5xl"
          >
            &nbsp;Embarcadero Blog
          </span>
        </p>
        <img
          className="hidden lg:block w-10 sm:w-12 2xl:w-14"
          src="./image/Group 39868.png"
          alt="Arrow Icon"
        />
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          {/* Mobile (1 per row → line every card) */}
          <div className="block sm:hidden w-full">{renderCards(1)}</div>

          {/* Tablet (2 per row → line every 2 cards) */}
          <div className="hidden sm:block lg:hidden w-full">
            {renderCards(2)}
          </div>

          {/* Desktop / 2xl (3 per row → line only after first 3) */}
          <div className="hidden lg:block w-full">{renderCards(3, true)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
