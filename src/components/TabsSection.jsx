import React, { useState, useEffect, useMemo } from "react";
import CustomContentList from "./CustomContentList";

function TabsSection({ tabsData }) {
  const tabNames = useMemo(() => Object.keys(tabsData), [tabsData]);

  const getTabsForWidth = (width) => {
    if (width < 768) return tabNames.slice(0, 3);
    if (width < 1024) return tabNames.slice(0, 6);
    return tabNames.slice(0, 7);
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
      <div className="flex justify-center items-center text-center mt-16 px-4">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold 
          bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
          inline-block text-transparent bg-clip-text">
          Ignite Your Imagination!
        </p>
      </div>

      <div className="w-full flex justify-center mt-10 mb-10  px-4 md:px-6 lg:px-0">
        <div className="w-full max-w-5xl xl:max-w-6xl z-10">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 p-2 border border-gray-300 rounded-md overflow-x-auto px-8 ">
            {visibleTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  text-sm md:text-base font-medium 
                  px-3 md:px-4 py-2 rounded-md 
                  transition-colors duration-500 ease-in-out 
                  whitespace-nowrap bg-amber-300
                  ${activeTab === tab ? "bg-black text-white" : "bg-transparent text-gray-600"}
                `}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-6 transition-opacity duration-300 ease-in-out">
            <CustomContentList data={tabsData[activeTab]} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TabsSection;
