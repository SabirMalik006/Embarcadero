import React from "react";

const Picture = () => {
  return (
    <div
    className="flex flex-col justify-center items-center mt-40 px-[40px] py-26 text-center max-w-8xl mx-auto mb-8 relative"
    style={{
      background: "linear-gradient(to right, #EDEEF8 0%, #EEF6F7 50%, #F5F5FA 100%)"
    }}
  >
      {/* Background Decorations */}
      <img
        className=" absolute right-0 bottom-0 2xl:h-[380px] 2xl:w-[400px]  sm:block xl:h-[400px]  xl:w-[410px]  sm:h-[250px]  sm:w-[200px]  h-[320px] w-[120px]"
        src="./image/Vector (2).png"
        alt="Background Right"
      />
      <img
        className="absolute left-0 bottom-0 2xl:h-[440px] 2xl:w-[520px]  xs:block xl:h-[500px]  xl:w-[280px]  sm:h-[450px]  sm:w-[150px] h-[450px] w-[100px] "
        src="./image/Vector (3).png"
        alt="Background Left"
      />

      {/* Heading */}
      <div className="mb-10  relative z-10">
        <h2 className="text-2xl sm:text-3xl  xl:text-5xl font-semibold xl:font-bold leading-snug">
          Get RAD{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
              inline-block text-transparent bg-clip-text"
          >
            Studio Now!
          </span>
        </h2>
        <p className="text-gray-600 font-normal text-sm sm:text-lg xl:text-2xl tracking-wide mt-4">
          One Codebase, Native on any platform, Fast framework.
        </p>
      </div>

      {/* Logos */}
      <div className="logos flex justify-center items-center flex-wrap gap-2 sm:gap-8 relative z-10">
        <img
          src="./image/image 22.png"
          alt="logo1"
          className="w-12 sm:w-14 lg:w-12 xl:w-16"
        />
        <img
          src="./image/image 19.png"
          alt="logo2"
          className="w-12 sm:w-14 lg:w-12 xl:w-16"
        />
        <img
          src="./image/image 23.png"
          alt="logo3"
          className="w-12 sm:w-14 lg:w-12 xl:w-16"
        />
        <img
          src="./image/image 20.png"
          alt="logo4"
          className="w-12 sm:w-14 lg:w-12 xl:w-16"
        />
        <img
          src="./image/image 21.png"
          alt="logo5"
          className="w-12 sm:w-14 lg:w-12 xl:w-16"
        />
      </div>

      {/* Button */}
      <button
        className="relative z-10 px-6 py-2 sm:px-8 sm:py-3 rounded-xl mt-12 text-sm sm:text-base font-medium w-full sm:w-auto
                   bg-black text-white border border-black
                   transition-colors duration-300
                   hover:bg-white hover:text-black"
      >
        Download Now
      </button>
    </div>
  );
};

export default Picture;
