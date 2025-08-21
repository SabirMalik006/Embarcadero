import React from "react";

const Global = () => {
  return (
    <div className="px-5 md:px-10 relative ">
      <div
        className="absolute hidden 2xl:block 
  w-[400px] h-[300px] 
  bg-red-100/30 rounded top-35 opacity-70 blur-3xl top-blur"
      ></div>
      <div className="lg:max-w-7xl  2xl:max-w-7xl mx-auto flex flex-col lg:flex-row   py-10 gap-8 my-6 ">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <h3 className="text-3xl font-bold 2xl:text-4xl">Join Our</h3>
            <h4 className="text-3xl 2xl:text-4xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
              Global Developer Community
            </h4>
            <h5 className="text-sm 2xl:text-xl text-gray-600 mt-2 mb-2 ">
              Join our email list and receive the latest case studies, event
              updates, product news, and much more.
            </h5>
          </div>

          {/* Email input */}
          <div className="flex flex-col sm:flex-row gap-4 mt-7">
  <input
    type="text"
    placeholder="Your Email"
    className="px-5 py-[10px] bg-[#FFFEFE] border border-neutral-300 
               backdrop-blur-md rounded-lg 
               w-full sm:w-72 md:w-80 lg:w-96"
  />

  <button className="px-8 py-2 bg-black text-white rounded-lg z-43">
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
