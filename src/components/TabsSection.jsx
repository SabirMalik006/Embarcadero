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
    const updateTabs = () => {
      setVisibleTabs(getTabsForWidth(window.innerWidth));
    };

    updateTabs(); 
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, [tabNames.length]);

  return (
    <div className="w-full flex justify-center mt-10 mb-10 px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-[1000px]">
        
        <div className="flex flex-wrap justify-center gap-2 p-2 border border-gray-300 rounded-md overflow-x-auto">
          {visibleTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                text-sm md:text-base font-medium 
                px-3 md:px-4 py-2 rounded-md 
                transition-colors duration-500 ease-in-out 
                whitespace-nowrap
                ${activeTab === tab
                  ? "bg-black text-white"
                  : "bg-transparent text-gray-600"}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        
        <div className="mt-6 transition-opacity duration-300 ease-in-out">
          <CustomContentList data={tabsData[activeTab]} />
        </div>
      </div>
    </div>
  );
}

export default TabsSection;
