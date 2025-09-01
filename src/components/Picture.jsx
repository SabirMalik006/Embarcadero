import React from "react";

const Picture = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-[80px] px-[16px] sm:px-[40px] py-34 text-center max-w-8xl mx-auto  relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #ECECF8 0%, #F6F9F9 50%, #ECF6F8 100%)",
      }}
    >
      {/* Background Decorations */}
      <img
        className="absolute hidden
             2xl:h-[816px] 2xl:w-[1000px]
             2xl:l-[-565px] 2xl:t-[19px] 
             xl:h-[810px] xl:w-[1014px] 
             sm:w-[750px] sm:h-auto 
             sm:left-[-610px] sm:top-[-15px] 
            
                          md:block"
        src="./image/fullVector1.svg"
        alt="Background Left"
      />

      <img
        className="absolute hidden
             2xl:h-[1430px] 2xl:w-[822px] 2xl:right-[-409px] 2xl:top-[-137px] 
             xl:w-[850px] xl:h-[700px] xl:right-[-410px] xl:top-[172px] 
             sm:w-[850px] sm:h-[700px] sm:right-[-446px] sm:top-[240px] 
              md:block"
        src="./image/v.svg"
        alt="Background Right"
      />

      <img
        src="./image/md.svg"
        alt=""
        className="absolute  md:hidden  w-[96%] right-[604px] top-[-45px]"
      />
      <img
        src="./image/md1.svg"
        alt=""
        className="absolute md:hidden  xl:hidden w-[93%] left-[454px] top-[210px]"
      />

      <img
        src="./image/xsVector1.svg"
        alt=""
        className="absolute sm:hidden w-[92%] right-[305px] top-[-30px] "
      />
      <img
        src="./image/xsVector.svg"
        alt=""
        className="absolute sm:hidden w-[93%] left-[228px] top-[223px] "
      />

      {/* Heading */}
      <div className="mb-8 relative z-10 ">
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
        bg-black text-white px-5 py-4 sm:px-6 sm:py-3 rounded-xl w-full sm:w-[158px] z-61 
        transition-all duration-500 ease-in-out transform hover:opacity-70 hover:scale-105 cursor-pointer
  "
      >
        Download Now
      </button>
    </div>
  );
};

export default Picture;
