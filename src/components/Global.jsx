import React from "react";

const Global = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row px-6 lg:px-10 py-10 gap-8">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center">
        <div>
          <h3 className="text-2xl">Join Our</h3>
          <h4 className="text-3xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
            Global Developer Community
          </h4>
          <h5 className="text-sm text-gray-600 mt-2">
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
          className="w-full max-w-md h-auto object-contain"
          src="./image/Frame.png"
          alt="Global Community"
        />
      </div>
    </div>
  );
};

export default Global;
