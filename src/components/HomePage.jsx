import React from "react";

const HomePage = () => {
  return (
    <div className="w-full  max-w-[1920px] mx-auto px-4 relative ">
      {/* Bubble on left side */}
      <div className="absolute hidden  lg:block  -bottom-100 -left-90  w-150 h-150  bg-[#E9F8FB] rounded-full opacity-70 blur-2xl "></div>

      <div className="flex flex-col justify-center items-center mt-16 text-center">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl 
          bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
          inline-block text-transparent bg-clip-text font-semibold "
        >
          RAD Studio 11.2
        </h1>
        <h3 className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
          Build Apps 5x Faster With One Codebase{" "}
          <br className="hidden sm:block" />
          for Windows, Android, iOS, macOS and Linux.
        </h3>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col  sm:flex-row justify-center items-center mt-6  gap-4 px-10">
        <button className="bg-black text-white px-5 py-4 sm:px-6 sm:py-3  rounded-xl w-full sm:w-auto">
          Start Your Free Trial
        </button>
        <button className="border border-black px-5 py-4 sm:px-6 sm:py-3 rounded-xl w-full sm:w-auto">
          Request a Product Demo
        </button>
      </div>
    </div>
  );
};

export default HomePage;
