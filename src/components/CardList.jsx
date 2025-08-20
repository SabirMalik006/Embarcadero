import Card from "./Card";
import React from "react";

function CardList({ data }) {
  return (
    <>
      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-10  text-center lg:text-left px-4 ">
        <p className="text-2xl 2xl:text-4xl">
          Learn More on the{" "}
          <span className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
          inline-block text-transparent bg-clip-text font-semibold 2xl:text-4xl ">
            &nbsp;Embarcadero Blog
          </span>
        </p>

        <img
          className="hidden lg:block w-10 sm:w-12"
          src="./image/Group 39868.png"
          alt="Arrow Icon"
        />
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center px-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
          {data.map((item, index) => (
            <Card
              key={index}
              heading={item.heading}
              Title={item.Title}
              end={item.end}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CardList;
