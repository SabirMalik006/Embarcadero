import React from "react";

const Picture = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-16 px-[40px] py-12 text-center max-w-8xl mx-auto mb-8 relative
        bg-gradient-to-r from-[#E9F8FB] via-white to-[#E9F8FB]"
    >
      {/* Background Decorations */}
      <img
        className="absolute right-0 bottom-0 h-60 sm:hidden lg:block"
        src="./image/Vector (2).png"
        alt="Background Right"
      />
      <img
        className="absolute left-0 bottom-0 h-60 sm:hidden lg:block"
        src="./image/Vector (3).png"
        alt="Background Left"
      />

      {/* Heading */}
      <div className="mb-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
          Get RAD{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
              inline-block text-transparent bg-clip-text"
          >
            Studio Now!
          </span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-lg tracking-wide mt-2">
          One Codebase, Native on any platform, Fast framework.
        </p>
      </div>

      {/* Logos */}
      <div className="logos flex justify-center items-center flex-wrap gap-4 sm:gap-6 mt-6 relative z-10">
        <img src="./image/image 22.png" alt="logo1" className="w-10 sm:w-12 lg:w-12" />
        <img src="./image/image 19.png" alt="logo2" className="w-10 sm:w-12 lg:w-12" />
        <img src="./image/image 23.png" alt="logo3" className="w-10 sm:w-12 lg:w-12" />
        <img src="./image/image 20.png" alt="logo4" className="w-10 sm:w-12 lg:w-12" />
        <img src="./image/image 21.png" alt="logo5" className="w-10 sm:w-12 lg:w-12" />
      </div>

      {/* Button */}
      <button className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl mt-8 text-sm sm:text-base font-medium w-full sm:w-auto relative z-10">
        Download Now
      </button>
    </div>
  );
};

export default Picture;
