import React, { useState, useEffect } from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";

function CustomContentList({ data }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); 
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="space-y-6 lg:px-0">
      {data.map((item, index) => {
        const visibleBullets = isSmallScreen
          ? item.bullets.slice(0, 3)
          : item.bullets;

        return (
          <div
            key={index}
            className="
            flex 
            flex-col 
            lg:flex-row 
            bg-white 
            rounded-lg 
            overflow-hidden 
            mx-4 lg:mx-auto
            max-w-5xl xl:max-w-[1920px] 
          "
          >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 bg-[#4F4D4D] flex items-center justify-center">
              <div className="w-full h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] flex items-center justify-center ">
                <img
                  src={item.image}
                  alt=""
                  className="max-h-full max-w-full object-contain bg-transparent"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 px-6 lg:px-10 py-6 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-red-500/8 to-transparent pointer-events-none rounded-lg"></div>

              {/* Heading */}
              <h2 className="font-medium text-[24px] xl:text-[28px]  2xl:text-[24px]  2xl:text-2xl 2xl:font-medium mb-4">
                {item.heading}
              </h2>

              {/* Bullet Points */}
              <ul className="list-disc list-inside font-normal text-[16px] 2xl:text-base space-y-6 mb-4 leading-6">
                {visibleBullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* Last line with icon */}
              <div className="flex flex-wrap gap-2 sm:gap-0 relative cursor-pointer mt-12">
                <span className="relative text-lg leading-tight">
                  <span className="relative z-10">
                    Download RAD Studio Feature
                  </span>
                  <span className="absolute bottom-[2px] left-0 h-[1px] w-full bg-black rounded-full"></span>
                </span>
                <span className="relative text-lg leading-tight">
                  <span className="relative z-10">Matrix</span>
                  <span className="absolute bottom-[2px] left-0 h-[1px] w-full bg-black rounded-full"></span>
                </span>
                
                &nbsp;
                <IoCloudDownloadOutline className="w-7 h-7 absolute sm:static right-2 top-2" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CustomContentList;
