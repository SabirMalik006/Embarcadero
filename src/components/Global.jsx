import React from "react";

const Global = () => {
  return (
    <div className="px-5 md:px-10 relative">
      {/* Background blur box */}
      <div
        className="absolute hidden xl:block 
        w-[400px] h-[300px] 
        bg-red-100/30 rounded opacity-70 blur-3xl"
      ></div>

      <div className="lg:max-w-7xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row py-10 gap-8 my-6">
        {/* Left Section */}
        <div
          className="
            flex-1 flex flex-col justify-center
            text-center lg:text-left
            items-center lg:items-start
          "
        >
          <div>
            <div
              className="
    flex flex-col                
    md:flex-row                  
    lg:flex-col                  
    gap-1 md:gap-3 lg:gap-1
    items-center md:items-start  
  "
            >
              <h3 className="text-2xl font-semibold 2xl:text-4xl">Join Our</h3>
              <h4 className="text-2xl sm:text-3xl 2xl:text-4xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold">
                Global Developer Community
              </h4>
            </div>

            <h5 className="text-sm 2xl:text-xl text-gray-600 mt-2 mb-2">
              Join our email list and receive the latest case studies, event
              updates, product news, and much more.
            </h5>
          </div>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7 justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Your Email"
              className="px-5 py-[10px] bg-[#FFFEFE] border border-neutral-300 
               backdrop-blur-md rounded-lg 
               w-85.75 sm:w-94.25 xl:w-90.5 2xl:w-88.5  "
            />
            <button className="px-8 py-3  bg-black text-white rounded-lg z-43 2xl:w-30.25">
              Subscribe
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex justify-center items-center">
          <img
            className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-contain"
            src="./image/map.png"
            alt="Global Community"
          />
        </div>
      </div>
    </div>
  );
};

export default Global;
