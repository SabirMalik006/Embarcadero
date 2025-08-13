import React from "react";

const Studio = () => {
  return (
    <>  
      <div className="main flex justify-center items-center mt-16 relative px-4">
        
        
        <img
          className="hidden lg:block absolute right-33 bottom-14 w-16 sm:w-24 md:w-auto"
          src="./image/Group.png"
          alt=""
        />

        
        <img
          className="hidden lg:block absolute right-27 top-0"
          src="./image/arrow.png"
          alt=""
        /> 

        
        <div className="top text-center w-full max-w-5xl bg-[#F9F8F8] px-4 sm:px-6 py-4 rounded-lg">
          <p className="mb-4 text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            RAD Studio 11.2 is here!
          </p>
          <h3 className="text-sm sm:text-base md:text-lg leading-relaxed">
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
