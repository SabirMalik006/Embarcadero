import React, { useState, useEffect, useMemo } from "react";
import CustomContentList from "./CustomContentList";

function TabsSection({ tabsData }) {
  const tabNames = useMemo(() => Object.keys(tabsData), [tabsData]);
  const [activeTab, setActiveTab] = useState(tabNames[0] || "");

  const [visibleTabs, setVisibleTabs] = useState(tabNames);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 746);

  useEffect(() => {
    const updateTabs = () => {
      const width = window.innerWidth;
      setIsMobile(width < 746);

      if (width >= 1280) {
        setVisibleTabs(tabNames.slice(0, 7));
      } else {
        setVisibleTabs(tabNames);
      }
    };
    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, [tabNames]);

  return (
    <>
      <div className="flex justify-center items-center text-center sm:mt-14 px-4">
        <p
          className="text-3xl sm:text-[36px] xl:text-5xl font-bold 
          bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
          text-transparent bg-clip-text hidden md:block"
        >
          <span className="text-black">Ignite </span> Your Imagination
        </p>
        <p
          className="text-3xl sm:text-[36px] xl:text-5xl font-medium 
  bg-gradient-to-r from-[#FE3B76] via-[#FE3B76CC] via-[#2931DDCC] to-[#2931DD] 
  text-transparent bg-clip-text hidden sm:block md:hidden"
        >
          <span className="text-black">Ignite </span>
          Your Imagination
        </p>
      </div>

      <div className="w-full flex justify-center mt-12 mb-10">
        <div
          className="w-full max-w-5xl xl:max-w-[1440px] 
                       xl:px-[80px] 
                     2xl:max-w-[1920px] z-10 2xl:px-[192px]"
        >
          {/* Tabs */}
          
          <div
            className={`
    flex border p-2 border-[#E5E5E5] ml-4 
    ${isMobile ? "rounded-l-[12px]" : "rounded-[12px]  " }
    ${isMobile ? "overflow-x-auto hide-scrollbar" : "overflow-hidden "}
  `}
          >
            <div className={`${isMobile ? "flex w-max" : "flex w-full"}`}>
              {visibleTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
          ${
            isMobile
              ? "flex-shrink-0 w-[107px] xl:w-[160px] first:rounded-l-[12px] "
              : "flex-1"
          }
          text-[20px] md:text-[24px] 2xl:font-medium 
          2xl:text-2xl 
          py-3 cursor-pointer
          transition-colors duration-300 ease-in-out 
          whitespace-nowrap rounded-[12px]  
          ${
            activeTab === tab
              ? "bg-[#262626] text-white rounded-xl"
              : "bg-transparent text-gray-600"
          }
        `}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="mt-8 transition-opacity duration-300 ease-in-out">
            <CustomContentList data={tabsData[activeTab]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsSection;
