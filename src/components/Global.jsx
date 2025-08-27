import React from "react";

const Global = () => {
  return (
    <div className="relative max-w-[1920px] xl:mt-[128px] sm:mt-[144px] mt-[128px] ">
      {/* Background blur box */}
      <div
        className="absolute hidden xl:block 
        w-[400px] h-[300px] 
        bg-red-100/50 rounded opacity-70 blur-3xl left-0 top-35"
      ></div>

      <div className="mx-auto  sm:px-6 lg:px-24 xl:px-20 2xl:px-48 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div
          className="
            flex flex-col justify-center items-start
            w-full max-w-[800px]
            p-0 gap-8 text-left
          "
        >
          <div className="w-full">
            {/* Headings */}
            <div className="flex flex-col gap-1 md:gap-3 lg:gap-1 items-start">
              {/* XL only */}
              <div className="hidden xl:flex 2xl:hidden flex-col items-start text-left">
                <h3 className="text-5xl font-medium bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  <span className="text-black">Join Our</span> Global
                </h3>
                <h4 className="text-5xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-medium">
                  Developer Community
                </h4>
              </div>

              {/* 2XL and above */}
              <div className="hidden 2xl:flex flex-col items-start">
                <h3 className="text-5xl font-semibold text-black">Join Our</h3>
                <h4 className="text-5xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
                  Global Developer Community
                </h4>
              </div>

              {/* SM to LG */}
              <div className="hidden sm:flex xl:hidden items-center justify-center w-full h-full">
                <h3 className="text-2xl text-center sm:text-[36px] lg:text-4xl font-semibold bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text tracking-tight">
                  <span className="text-black">Join Our</span> Global Developer
                  Community
                </h3>
              </div>

              {/* XS only */}
              <div className="flex sm:hidden flex-col items-center justify-center text-center  ">
                <h3
                  className="text-3xl font-semibold whitespace-nowrap 
                 bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 
                 inline-block text-transparent bg-clip-text"
                >
                  <span className="text-black">Join Our</span> Global Developer
                </h3>
                <h4
                  className="text-3xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 
                 inline-block text-transparent bg-clip-text font-semibold"
                >
                  Community
                </h4>
              </div>
            </div>

            {/* Description */}
            <h5 className="relative text-xl xl:text-2xl text-center text-gray-600 mt-3 mb-2 z-80">
              Join our email list and receive the latest case studies, event
              updates, product news, and much more.
            </h5>
          </div>

          {/* Email input */}
          <div
            className="flex flex-col sm:flex-row gap-4 
             justify-center items-center md:justify-start 2xl:justify-start 
             w-full mb-15 "
          >
            <input
              type="text"
              placeholder="Your Email"
              className="px-5 py-[10px] bg-[#FFFEFE] border border-neutral-300 
               backdrop-blur-md rounded-lg 
               w-[343px] h-[52px] sm:w-[377px] xl:w-[361px] xl:h-[52px] 2xl:w-[354px]"
            />
            <button
              className="flex flex-row justify-center items-center 
             px-6 py-3.5 gap-2.5 
             w-[343px] h-[52px]  sm:w-[121px]  
             bg-[#262626] text-white 
             shadow-[0px_4px_32px_rgba(255,94,101,0.1)] 
             rounded-lg 
             transition-all duration-300 ease-in-out 
             hover:bg-white hover:text-black border border-black cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <img
            className="
            w-[343px] h-[209px]         /* xs */
            sm:w-[696px] sm:h-[365px]   /* sm+ */
            xl:w-[734px] xl:h-[364px]   /* xl */
            2xl:w-[882px] 2xl:h-[438px] /* 2xl */
            object-contain
            sm:mb-0
          "
            src="./image/map.png"
            alt="Global Community"
          />
        </div>
      </div>
    </div>
  );
};

export default Global;
