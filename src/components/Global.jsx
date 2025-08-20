import React from "react";

const Global = () => {
  return (
    <div className="px-10">
      <div className="lg:max-w-6xl  2xl:max-w-7xl mx-auto flex flex-col lg:flex-row   py-10 gap-8 my-6 ">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div>
          <h3 className="text-2xl font-bold 2xl:text-5xl">Join Our</h3>
          <h4 className="text-3xl 2xl:text-5xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
            Global Developer Community
          </h4>
          <h5 className="text-sm 2xl:text-2xl text-gray-600 mt-2">
            Join our email list and receive the latest case studies, event
            updates, product news, and much more.
          </h5>
        </div>

        {/* Email input */}
        <div className="flex flex-col sm:flex-row gap-3 mt-7">
          <input
            placeholder="Your Email"
            className="px-4 py-2 flex-1 border border-gray-400 rounded-lg"
            type="email"
          />
          <button className="px-4 py-2 bg-black text-white rounded-lg">
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
