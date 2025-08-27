// MyComponent.jsx
import React from "react";
import Box from "./Box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";

function MyComponent({ items }) {
  return (
    <div className="relative w-full px-[16px] sm:px-[24.5px] xl:px-[83px] 2xl:px-[323px] mt-[48px] mb-[80px]">
      {/* Bubble on left side */}
      <div className="absolute hidden 2xl:block -left-16 top-1/2 -translate-y-1/2 w-52 h-52 bg-[#E9F8FB] rounded-full opacity-70 blur-2xl"></div>

      {/* Swiper Wrapper */}
      <div className="flex justify-center items-center w-full">
        <Swiper
          modules={[Navigation, Grid]}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          spaceBetween={20}
          loop={true} // ✅ Loop mode enabled
          breakpoints={{
            320: {
              slidesPerView: 1,
              grid: { rows: 6, fill: "row" },
              slidesPerGroup: 1,
            },
            745: {
              slidesPerView: 2,
              grid: { rows: 3, fill: "row" },
              slidesPerGroup: 6,
            },
            1024: {
              slidesPerView: 3,
              grid: { rows: 2, fill: "row" },
              slidesPerGroup: 6,
            },
          }}
          className="w-full max-w-[1920px]"
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
        <div className="custom-prev flex justify-center items-center bg-gray-400 w-9 h-9 rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
          <img src="./image/Vector 106 (1).png" alt="Prev" />
        </div>
        <div className="custom-next flex justify-center items-center bg-black w-9 h-9 rounded-lg cursor-pointer hover:opacity-80 transition-opacity">
          <img src="./image/Vector 106.png" alt="Next" />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
