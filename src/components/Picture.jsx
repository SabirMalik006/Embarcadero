import React from "react";

const Picture = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-40 px-[40px] py-24 text-center max-w-8xl mx-auto mb-8 relative
        bg-gradient-to-r from-[#E9F8FB] via-[#F7F8F9] to-[#EEEFF9] relative"
    >
      {/* Background Decorations */}
      <img
        className="hidden absolute right-0 bottom-0 2xl:h-[380px] 2xl:w-[400px]  xl:block xl:h-[400px]  xl:w-[260px]  "
        src="./image/Vector (2).png"
        alt="Background Right"
      />
      <img
        className="hidden absolute left-0 bottom-0 2xl:h-[440px] 2xl:w-[450px]  xl:block xl:h-[400px]  xl:w-[260px]"
        src="./image/Vector (3).png"
        alt="Background Left"
      />

      {/* Heading */}
      <div className="mb-10  relative z-10">
        <h2 className="text-2xl sm:text-3xl 2xl:text-5xl font-semibold 2xl:font-bold leading-snug">
          Get RAD{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
              inline-block text-transparent bg-clip-text"
          >
            Studio Now!
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg 2xl:text-2xl tracking-wide mt-4">
          One Codebase, Native on any platform, Fast framework.
        </p>
      </div>

      {/* Logos */}
      <div className="logos flex justify-center items-center flex-wrap gap-4 sm:gap-6  relative z-10">
        <img src="./image/image 22.png" alt="logo1" className="w-10 sm:w-12 lg:w-12 2xl:w-16" />
        <img src="./image/image 19.png" alt="logo2" className="w-10 sm:w-12 lg:w-12 2xl:w-16" />
        <img src="./image/image 23.png" alt="logo3" className="w-10 sm:w-12 lg:w-12 2xl:w-16" />
        <img src="./image/image 20.png" alt="logo4" className="w-10 sm:w-12 lg:w-12 2xl:w-16" />
        <img src="./image/image 21.png" alt="logo5" className="w-10 sm:w-12 lg:w-12 2xl:w-16" />
      </div>

      {/* Button */}
      <button className="bg-black text-white  px-6 py-2 sm:px-8 sm:py-3 rounded-xl mt-14 text-sm sm:text-base font-medium w-full sm:w-auto relative z-10 ">
        Download Now
      </button>
    </div>
  );
};

export default Picture;
