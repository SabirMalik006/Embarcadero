import Card from "./Card";
import React from "react";

function CardList({ data }) {
  return (
    <>
      
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-6 text-center lg:text-left px-4">
        <p className="text-2xl">
          Learn More on the{" "}
          <span className="bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
            RAD Studio 11.2
          </span>
          <span className="block lg:inline text-gray-600 text-lg">
            &nbsp;Embarcadero Blog
          </span>
        </p>

      
        <img
          className="hidden lg:block w-10 sm:w-12"
          src="./image/Group 39868.png"
          alt="Arrow Icon"
        />
      </div>

      
      <div className="flex justify-center items-center mt-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-[1000px]">
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
