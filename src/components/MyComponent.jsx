// MyComponent.jsx
import React, { useState } from "react";
import Box from "./Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

function MyComponent({ items }) {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full px-[16px] sm:px-[24.5px] md:px-[80
    px] xl:px-[83px] 2xl:px-[323px] mt-[48px] mb-[80px]">
      {/* Bubble on left side */}
      <div className="absolute hidden 2xl:block -left-16 top-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#EAF9F] rounded-full opacity-70 blur-2xl"></div>

      {/* Swiper Wrapper */}
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={20}
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: { rows: 6, fill: "row" },
              slidesPerGroup: 1,
            },
            745: {
              slidesPerView: 2,
              grid: { rows: 3, fill: "row" },
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 2, fill: "row" },
              slidesPerGroup: 3,
            },
          }}
          className="w-full max-w-[1920px]"
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Box name={item.name} des={item.des} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Arrows */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {/* Prev Arrow */}
        <div
          className={`custom-prev flex justify-center items-center w-9 h-9 rounded-lg cursor-pointer transition-opacity 
      ${
        isBeginning
          ? "bg-[#c0b9b9] cursor-not-allowed" 
          : isEnd
          ? "bg-black cursor-pointer" 
          : "bg-[#c0b9b9] hover:opacity-80"
      }`}
        >
          <img src="./image/Vector 106 (1).png" alt="Prev" />
        </div>

        {/* Next Arrow */}
        <div
          className={`custom-next flex justify-center items-center w-9 h-9 rounded-lg cursor-pointer transition-opacity 
      ${
        isEnd
          ? "bg-[#c0b9b9] cursor-not-allowed" 
          : isBeginning
          ? "bg-black cursor-pointer" 
          : "bg-black hover:opacity-80"
      }`}
        >
          <img src="./image/Vector 106.png" alt="Next" />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
