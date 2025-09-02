import React from "react";

const HomePageWithRectangle = () => {
  return (
    <div className="w-full max-w-[1920px] mx-auto relative px-[16px]">
      {/* Bubble on left side */}
      <div
        className="hidden 2xl:block absolute w-[700px] h-[420px] 
                   bg-gradient-to-r from-[#edf0f1] via-[#edf7f7] to-[#ffffff]
                   left-0 opacity-80"
        style={{
          borderTopRightRadius: "250px",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
          filter: "blur(40px)",
        }}
      ></div>

      <div
        className="block 2xl:hidden absolute w-[800px] h-[490px] 
                   bg-gradient-to-r from-[#edf0f1] via-[#edf7f7] to-[#ffffff]
                   left-0 -top-31 sm:-top-29 md:-top-20  opacity-80"
        style={{
          borderTopRightRadius: "250px",
          borderBottomRightRadius: "250px",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskComposite: "destination-in",
          maskComposite: "intersect",
          filter: "blur(40px)",
        }}
      ></div>

      {/* Bubble on right side */}
      <div
        className="absolute hidden sm:block -top-10 right-0 
                   w-[600px] h-[1400px] sm:w-[350px] sm:h-[970px] md:w-[600px] md:h-[1400px]
                   bg-red-100 opacity-70 blur-3xl 
                   rounded-l-full"
      ></div>
      <div
        className="absolute  block sm:hidden top-0 right-0 bg-red-100 opacity-70 blur-3xl w-[300px] h-[500px]
                   rounded-l-full"
      ></div>

      {/* Top Section */}
      <div className="flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-0 mt-10 ">
        <h1
          className="text-[32px] sm:text-[40px] lg:text-5xl 
                     bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
                     inline-block text-transparent bg-clip-text z-50 font-semibold"
        >
          RAD Studio 11.2
        </h1>
        <h3 className="mt-4 text-[18px] lg:text-lg text-gray-600 z-60">
          Build Apps 5x Faster With One Codebase{" "}
          <br className="hidden sm:block" />
          for Windows, Android, iOS, macOS and Linux.
        </h3>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center mt-6 gap-2  sm:px-0 ">
        <button
          className="bg-black text-white px-5 py-3 sm:px-6 sm:py-3 rounded-xl w-full sm:w-[189px] z-61 
  transition-all duration-500 ease-in-out transform hover:opacity-70 hover:scale-105 cursor-pointer"
        >
          <a href="">Start Your Free Trial</a>
        </button>

        <button className="border border-black px-5 py-3 sm:px-6 sm:py-3 rounded-xl w-full sm:w-[229px]  z-62 transition-colors duration-300 hover:bg-black hover:text-white cursor-pointer">
          <a href="">Request a Product Demo</a>
        </button>
      </div>

      {/* Rectangle Section */}
      <div className="relative mt-[80px]  xl:px-[80.5px] 2xl:px-0 xl:mt-[128px]  sm:px-6 lg:px-20 ">
        {/* Main Image */}
        <div className="flex justify-center relative w-full">
          <img
            className="rounded-2xl h-auto object-contain 
               w-full sm:max-w-[695px] md:max-w-[1024px] xl:max-w-[1279px] 2xl:max-w-[1274px]"
            src="./image/Rectangle 364.png"
            alt=""
          />
          <img
            className="w-[22px] h-[22px] sm:w-[46px] sm:h-[46px] xl:w-[85px] xl:h-[85px] 
               absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="./image/Frame 427318308.png"
            alt=""
          />
        </div>

        {/* Resource Section */}
        <div className="flex justify-center    ">
          <div
            className="flex flex-col sm:flex-row justify-between items-center 
                       mt-6 sm:px-8 xl:py-6 xl:px-8 bg-amber-500 border  border-[#EFE4F0] py-4 w-full  md:max-w-[1024px] xl:max-w-[1440px] 2xl:max-w-[1274px] gap-4 rounded-2xl"
            style={{
              background:
                "linear-gradient(to right, #e5e9f0 0%, #f5f1f1e8 50%, #e5e9f0 100%)",
            }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="flex-shrink-0">
                <img src="./image/image 22.png" alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-[22px] font-bold">
                  RAD Studio 11.2 Resources
                </h1>
                <p className="text-[17px]">
                  PDF's, Videos, Courses of the Product
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto px-4 sm:px-0">
              <button
                className="  flex justify-center items-center 
  px-[25px] py-[12px] 
  w-full sm:w-[167px] h-[43px] 
  bg-[#262626] shadow-[0px_4px_32px_rgba(255,94,101,0.1)] 
  rounded-[12px] 
  text-white text-center 
  cursor-pointer 
  transition-all duration-300 ease-in-out 
  hover:bg-black hover:text-white hover:scale-105 hover:opacity-70"
              >
                View Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageWithRectangle;
