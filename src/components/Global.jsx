import React from "react";

const Global = () => {
  return (
    <div className="relative max-w-[1920px] xl:mt-[128px] sm:mt-[120px] mt-[80px]  ">
      {/* Background blur box */}
      <div
        className="absolute hidden xl:block 
        w-[400px] h-[300px] 
        bg-red-100/50 rounded opacity-70 blur-3xl left-0 top-35"
      ></div>

      <div className="mx-auto  sm:px-6 lg:px-24 xl:px-20 2xl:px-48 flex flex-col lg:flex-row items-center justify-between xl:gap-10">
        {/* Left Section */}
        <div
          className="
            flex flex-col justify-center items-start
             max-w-[800px]
            p-0 gap-8 text-left
          "
        >
          <div className="w-full">
            {/* Headings */}
            <div className="flex flex-col gap-1 md:gap-3 lg:gap-1 items-start ">
              {/* XL only */}
              <div className="hidden xl:flex 2xl:hidden flex-col items-start text-left">
                <h3 className="text-5xl font-semibold bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]  inline-block text-transparent bg-clip-text ">
                  <span className="text-black">Join Our</span> Global
                </h3>
                <h4 className="text-5xl bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] inline-block text-transparent bg-clip-text font-semibold">
                  Developer Community
                </h4>
              </div>

              {/* 2XL and above */}
              <div className="hidden 2xl:flex flex-col items-start">
                <h3 className="text-5xl font-semibold text-black">Join Our</h3>
                <h4 className="text-5xl bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] inline-block text-transparent bg-clip-text font-semibold whitespace-nowrap">
                  Global Developer Community
                </h4>
              </div>

              {/* SM to LG */}
              <div className="hidden sm:flex xl:hidden items-center justify-center w-full h-full ">
                <h3 className="text-2xl text-center sm:text-[36px] lg:text-4xl font-semibold bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD]  inline-block text-transparent bg-clip-text tracking-tight">
                  <span className="text-black">Join Our</span> Global Developer
                  Community
                </h3>
              </div>

              {/* XS only */}
              <div className="w-full flex justify-center px-4 sm:hidden">
                {/* Parent with max width 375px */}
                <div className="w-[375px] px-4">
                  {/* Inner div with 343px width */}
                  <div className="w-[343px] flex flex-col items-center justify-center text-center py-2">
                    <h3
                      className="text-[30px] font-semibold whitespace-nowrap 
                      inline-block text-transparent bg-clip-text 
                      bg-[linear-gradient(to_right,#e025d1_0%,#a727da_40%,#501ec5_100%)]"
                      
                    >
                      <span className="text-black font-semibold">Join Our</span>{" "}
                      Global Developer
                    </h3>
                    <h4
                      className="text-3xl bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
        inline-block text-transparent bg-clip-text font-semibold"
                    >
                      Community
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <h5 className="relative text-xl xl:text-2xl  text-center xl:text-left text-[#525252] xl:font-normal xl:w-[512px] 2xl:w-[633px] mt-3 mb-2 z-80 px-4 sm:px-0">
              Join our email list and receive the latest case studies, event
              updates, product news, and much more.
            </h5>
          </div>

          {/* Email input */}
          <div
            className="flex flex-col sm:flex-row gap-4 
             justify-center items-center md:justify-center 2xl:justify-start 
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
             transition-transform duration-300 ease-in-out hover:scale-102 hover:opacity-60  cursor-pointer"
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
