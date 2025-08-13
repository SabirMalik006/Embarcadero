import React from "react";

const Rectangle = () => {
  return (
    <>

      <div className="image w-full flex justify-center mt-16 relative px-4">
        <img
          className="w-full max-w-5xl h-auto object-contain"
          src="./image/Rectangle 364.png"
          alt=""
        />
        <img
          className="w-12 h-12 sm:w-14 sm:h-14 absolute top-1/2 -translate-y-1/2"
          src="./image/Frame 427318308.png"
          alt=""
        />
      </div>


      <div className="flex justify-center mt-3 px-4">
        <div className="
          flex flex-col sm:flex-row 
          justify-between items-center 
          mt-8 bg-[#F9F8F8] 
          px-4 sm:px-8 py-4 
          w-full max-w-5xl gap-4
        ">

          <div className="
            flex flex-col sm:flex-row 
            items-center sm:items-start 
            gap-4 text-center sm:text-left
          ">
            <div className="flex-shrink-0">
              <img
                src="./image/image 22.png"
                alt=""
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
                RAD Studio 11.2 Resources
              </h1>
              <p className="text-xs sm:text-sm">
                PDF's, Videos, Courses of the Product
              </p>
            </div>
          </div>


          <div className="flex-shrink-0 w-full sm:w-auto">
            <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg w-full sm:w-auto">
              View Resources
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rectangle;
