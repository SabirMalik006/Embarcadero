import React, { useState, useEffect, useMemo } from "react";
import CustomContentList from "./CustomContentList";

function TabsSection({ tabsData }) {
  const tabNames = useMemo(() => Object.keys(tabsData), [tabsData]);

  const getTabsForWidth = (width) => {
    if (width >= 1280) {
      return tabNames.slice(0, 7); // xl+ screens
    } else if (width >= 640) {
      return tabNames.slice(0, 6); // sm to lg screens
    } else {
      return tabNames.slice(0, 3); // mobile (<sm)
    }
  };
  
  const [visibleTabs, setVisibleTabs] = useState(() =>
    getTabsForWidth(window.innerWidth)
  );
  const [activeTab, setActiveTab] = useState(tabNames[0] || "");

  useEffect(() => {
    const updateTabs = () => setVisibleTabs(getTabsForWidth(window.innerWidth));
    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, [tabNames.length]);

  return (
    <>
      <div className="flex justify-center items-center text-center sm:mt-14 px-4">
        <p
          className="text-3xl sm:text-[36px] xl:text-5xl font-bold 
          bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
           text-transparent bg-clip-text hidden sm:block"
        >
          <span className="text-black">Ignite </span> Your Imagination
        </p>
      </div>

      <div className="w-full flex justify-center mt-12 mb-10  ">
        <div className="w-full max-w-5xl xl:max-w-[1440px] px-[16px] sm:px-[24.5px] xl:px-[80px] 2xl:max-w-[1920px] z-10 2xl:px-[192px]  ">
          {/* Tabs */}
          <div className="flex border border-gray-300 rounded-[12px] overflow-hidden p-2">
            {visibleTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
            flex-1 text-[20px]  md:text-base 2xl:font-medium 
            2xl:text-2xl 
            py-4
            transition-colors duration-500 ease-in-out 
            whitespace-nowrap
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
