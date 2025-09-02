import Card from "./Card";
import React from "react";

function CardList({ data }) {

  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

 
const renderCards = (chunkSize, onlyFirstRowLine = false) => {
  const chunks = chunkArray(data, chunkSize);

  return chunks.map((group, rowIndex) => (
    <div key={rowIndex} className="w-full 2xl:px-48 xl:px-20 px-4">
     
      <div
        className={`
          grid gap-4 md:gap-6 lg:gap-8 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          xl:grid-cols-3

        `}
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

      
      {(onlyFirstRowLine ? rowIndex === 0 : rowIndex < chunks.length - 1) && (
        <hr className="my-6 sm:my-12 xl:my-20 custom-dashed" />
      )}
    </div>
  ));
};


  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden  sm:pb-[128px]">
      <div
        className="absolute hidden md:block left-0 bottom-[-5px] 
  w-[500px] h-[500px]  
  bg-[#ECFBFC] opacity-70 blur-3xl 
  rounded-2xl"
      ></div>
      <div
        className="absolute hidden md:block right-5 top-5 
  w-[600px] h-[300px]  
  bg-[#ECFBFC] opacity-70 blur-3xl 
  rounded-xl"
      ></div>
      <div
  className="absolute sm:hidden 
             top-1/2 left-1/2 
             w-[500px] h-[700px]  
             bg-red-100/30 opacity-70 blur-3xl 
             rounded-xl 
             transform -translate-x-1/2 -translate-y-1/2"
></div>

      {/* Heading */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-[42px] mb-[30px] mt-[80px] sm:mb-[64px]   xl:mt-[128px]  xl:mb-[105px] text-center lg:text-left max-w-5xl xl:max-w-6xl 2xl:max-w-[1920px] w-full">
        <p className="text-[30px] sm:text-[36px] xl:text-5xl font-semibold z-50">
          Learn More on the{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#e0296f] to-[#bf07ec] 
            inline-block text-transparent bg-clip-text font-semibold xl:text-5xl"
          >
            &nbsp;Embarcadero Blog
          </span>
        </p>
        <img
          className="hidden lg:block w-10 sm:w-12 xl:w-[58px] xl:h-auto z-51"
          src="./image/Group 39868.png"
          alt="Arrow Icon"
        />
      </div>

      {/* Cards */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1920px]">
          
          <div className="block sm:hidden w-full">{renderCards(1)}</div>

          
          <div className="hidden sm:block lg:hidden w-full">
            {renderCards(2)}
          </div>

          
          <div className="hidden lg:block w-full">{renderCards(3, true)}</div>
        </div>
      </div>
    </div>
  );
}

export default CardList;
