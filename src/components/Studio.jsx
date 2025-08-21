import React from "react";

const Studio = () => {
  return (
    <>
      <div className="main flex justify-center items-center mt-32 relative ">
        <img
          className="hidden  2xl:block absolute right-83 bottom-24 w-16 sm:w-24 md:w-auto"
          src="./image/Group.png"
          alt=""
        />

        {/* Top-right Arrow */}
        <img
          className="hidden  2xl:block absolute right-76 top-0 w-16 "
          src="./image/arrow.png"
          alt=""
        />

        {/* Text Content */}
        <div className="flex items-center justify-center px-4">
          <div className="text-center w-full max-w-5xl xl:max-w-6xl 2xl:max-w-7xl z-10 px-4 py-4 rounded-lg">
            <p className="mb-8 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
              <span
                className="bg-gradient-to-r from-[#cc1184] via-[#9e34cf] to-[#232efa] 
                   inline-block text-transparent bg-clip-text"
              >
                RAD Studio 11.2&nbsp;
              </span>
              is here!
            </p>

            <h3
              className="pr-4 max-w-[1274px] 
                 font-archivo not-italic font-normal 
                 text-[24px] leading-[150%] tracking-[-1px] 
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
