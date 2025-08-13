import React from 'react'

const HomePage = () => {
  return (
    <>
      
      <div className="flex flex-col justify-center items-center mt-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-red-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text font-bold">
          RAD Studio 11.2
        </h1>
        <h3 className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600">
          Build Apps 5x Faster With One Codebase{" "}
          <br className="hidden sm:block" />
          for Windows, Android, iOS, macOS and Linux.
        </h3>
      </div>

     
      <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4 px-4">
        <button className="bg-black text-white px-5 py-2 sm:px-6 sm:py-3 rounded-lg w-full sm:w-auto">
          Start Your Free Trial
        </button>
        <button className="border border-gray-400 px-5 py-2 sm:px-6 sm:py-3 rounded-lg w-full sm:w-auto">
          Request a Product Demo
        </button>
      </div>
    </>
  );
};

export default HomePage;
