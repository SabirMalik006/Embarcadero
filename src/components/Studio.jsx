import React from "react";

const Studio = () => {
  return (
    <>
      <div className="main flex justify-center items-center mt-[80px] relative  ">
        {/* Top-right Arrow */}
        <img
          className="hidden 2xl:block absolute top-0 right-65 w-16 arrow-img"
          src="./image/arrow.png"
          alt=""
        />

        <img
          className="hidden  2xl:block absolute right-72 bottom-12 w-16 sm:w-24 md:w-auto"
          src="./image/Group.png"
          alt=""
        />

        {/* Text Content */}
        <div className="flex items-center justify-center px-[16px] sm:px-[24.5px]  xl:px-[83px] 2xl:px-[323px]">
          <div className="text-center w-full max-w-[745px] xl:max-w-[1440px] 2xl:max-w-[1920px] z-10  rounded-lg  ">
          
            <p className="hidden sm:block mb-4 text-[28px] sm:text-[40px] lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#ff17d8] via-[#8429ce] to-[#2931DD] inline-block text-transparent bg-clip-text">
                RAD Studio 11.2&nbsp;
              </span>
              is here!
            </p>

            
            <p className="block sm:hidden mb-4 text-[28px] sm:text-[40px] lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] inline-block text-transparent bg-clip-text">
                RAD Studio 11.2&nbsp;
              </span>
              is here!
            </p>

            <h3
              className=" max-w-[1920px] 
                 font-archivo not-italic font-normal text-[18px]
                 sm:text-[20px] xl:text-[24px] leading-[150%] tracking-[-1px] 
                 text-center text-[#525252] 
                 flex-none order-1 self-stretch grow-0 
                 z-[1] mx-auto "
            >
              RAD Studio 11.2 is here! The new release introduces Markdown
              support and an iOS Simulator on macOS ARM 64 for Delphi, and
              migrates the Delphi Linux debugger to LLDB. It also brings
              usability, performance and stability improvements to the IDE, the
              compilers and toolchains, the UX, RTL, database and Internet
              libraries for both Delphi and C++.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;
