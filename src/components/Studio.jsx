import React from "react";

const Studio = () => {
  return (
    <>
      <div className="main flex justify-center items-center mt-16 relative  sm:px-[40px]">
        <img
          className="hidden lg:block 2xl:hidden absolute right-22 bottom-32 w-16 sm:w-24 md:w-auto"
          src="./image/Group.png"
          alt=""
        />

        {/* Top-right Arrow */}
        <img
          className="hidden lg:block 2xl:hidden absolute right-15 top-0 w-16 "
          src="./image/arrow.png"
          alt=""
        />

        {/* Text Content */}
        <div className="top text-center w-full max-w-5xl xl:max-w-6xl z-10 px-4 sm:px-6 py-4 rounded-lg">
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold">
            <span
              className="bg-gradient-to-r from-[#cc1184] via-[#9e34cf] to-[#232efa] 
               inline-block text-transparent bg-clip-text"
            >
              RAD Studio 11.2&nbsp;
            </span>
            is here!
          </p>

          <h3 className="text-center text-sm sm:text-base md:text-lg lg:text-2xl leading-relaxed text-[#525252]">
            RAD Studio 11.2 is here! The new release introduces Markdown support
            and an iOS Simulator on macOS ARM 64 for Delphi, and migrates the
            Delphi Linux debugger to LLDB. It also brings usability, performance
            and stability improvements to the IDE, the compilers and toolchains,
            the UX, RTL, database and Internet libraries for both Delphi and
            C++.
          </h3>
        </div>
      </div>
    </>
  );
};

export default Studio;
