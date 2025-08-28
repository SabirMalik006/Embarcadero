import React from "react";

const Picture = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-[80px] px-[40px] py-26 text-center max-w-8xl mx-auto  relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #ECECF8 0%, #F6F9F9 50%, #ECF6F8 100%)",
      }}
    >
      {/* Background Decorations */}
      <img
        className="absolute 
             2xl:h-[703px] 2xl:w-[1000px] 
             xl:h-[700px] xl:w-[1014px] 
             sm:w-[662px] sm:h-auto 
             sm:left-[-533px] sm:top-[3px] 
             left-[-300px]  
                          block"
        src="./image/fullVector1.svg"
        alt="Background Left"
      />

      <img
        className="absolute 
             2xl:h-[1430px] 2xl:w-[822px] 2xl:right-[-410px] 2xl:top-[-239px] 
             xl:w-[850px] xl:h-[700px] xl:right-[-410px] xl:top-[150px] 
             sm:w-[850px] sm:h-[700px] sm:right-[-446px] sm:top-[150px] 
             w-[865px] right-[-218px] top-[325px] block"
        src="./image/v.svg"
        alt="Background Right"
      />

      {/* Heading */}
      <div className="mb-8 relative z-10">
        <h2 className="text-[32px] sm:text-[40px] xl:text-[48px] font-semibold xl:font-bold leading-snug whitespace-nowrap">
          Get RAD{" "}
          <span
            className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
        inline-block text-transparent bg-clip-text"
          >
            Studio Now!
          </span>
        </h2>
        <p className="text-Neutral 800 font-normal text-[20px] sm:text-[20px] xl:text-2xl tracking-wide mt-3">
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
        className="
        mt-12
        bg-black text-white px-5 py-4 sm:px-6 sm:py-3 rounded-xl w-full sm:w-auto z-61 
        transition-all duration-500 ease-in-out transform hover:opacity-70 hover:scale-105 cursor-pointer
  "
      >
        Download Now
      </button>
    </div>
  );
};

export default Picture;
