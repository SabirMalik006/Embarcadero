import React from "react";

const Picture = () => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-[80px] px-[40px] py-26 text-center max-w-8xl mx-auto  relative overflow-hidden"
      style={{
        background:
          "linear-gradient(to right, #EDEEF8 0%, #EEF6F7 50%, #F5F5FA 100%)",
      }}
    >
      {/* Background Decorations */}
      <img
        className=" absolute xl:right-0 xl:bottom-0 2xl:h-[400px] 2xl:w-[400px] xl:h-[450px] xl:w-[350px]  sm:block sm:h-[450px]  sm:w-[300px] sm:right-[-25px] sm:bottom-[-110px] h-[580px] w-[250px] right-[-25px] top-[10px] "
        src="./image/secondVector.svg"
        alt="Background Right"
      />
      <img
        className="absolute xl:left-0 xl:bottom-0 2xl:h-[520px] 2xl:w-[480px]  xs:block xl:h-[555px] xl:w-[320px]  sm:h-[510px]  sm:w-[440px] sm:left-[-245px]  h-[580px] w-[350px] left-[-255px] "
        src="./image/firstVector.svg"
        alt="Background Left"
      />

      {/* Heading */}
      <div className="mb-8 relative z-10">
        <h2 className="text-[32px] sm:text-[40px] xl:text-5xl font-semibold xl:font-bold leading-snug whitespace-nowrap">
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
    relative z-10 
    flex flex-row items-start justify-center
    px-6 py-3 gap-2 sm:w-40 w-[343px] h-12
    mt-8 text-sm sm:text-base font-medium
    bg-[#171717] text-white border border-[#171717]
    rounded-xl transition-colors duration-300
    hover:bg-white hover:text-black 
    cursor-pointer
  "
>
  Download Now
</button>

    </div>
  );
};

export default Picture;
