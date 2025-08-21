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
      <div className="flex justify-center items-center text-center mt-14 px-4">
        <p className="text-3xl md:text-4xl 2xl:text-5xl font-bold 
          bg-gradient-to-r from-[#FE3B76] via-[#AF29CE] to-[#2931DD] 
          inline-block text-transparent bg-clip-text">
          <span className="text-black" >Ignite </span> Your Imagination
        </p>
      </div>

      <div className="w-full flex justify-center mt-12 mb-10 px-4 md:px-6 lg:px-0">
  <div className="w-full max-w-5xl xl:max-w-7xl z-10">
    {/* Tabs */}
    <div className="flex border border-gray-300 rounded-xl overflow-hidden ">
      {visibleTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            flex-1 text-sm md:text-base 2xl:font-medium 
            2xl:text-2xl 
            py-4
            transition-colors duration-500 ease-in-out 
            whitespace-nowrap
            ${activeTab === tab ? "bg-black text-white rounded-xl" : "bg-transparent text-gray-600"}
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
