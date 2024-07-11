import { useState } from "react";

interface Tab {
  slug: string;
  label: string;
  content: React.ReactNode;
  icon?: string; // Specify the Lordicon JSON data as a string
}

interface TabMenuProps {
  tabs: Tab[];
  tabToRender?: number; // Add tabToRender prop
}

function TabMenu({ tabs, tabToRender }: TabMenuProps) {
  const [activeTab, setActiveTab] = useState(
    tabToRender !== undefined && tabToRender >= 0 && tabToRender < tabs?.length
      ? tabs[tabToRender]?.slug
      : tabs[0]?.slug
  );

  return (
    <div className="flex flex-col w-full">
      <div className="w-full">
        <div className="bg-white w-full h-[50px] border-b-2  flex flex-row gap-[20px] items-end pl-2 pr-4 md:pl-4 md:gap-[40px] overflow-y-scroll">
          {tabs.map((tab) => (
            <div
              key={tab.slug}
              className="relative pb-[0.1rem] cursor-pointer group"
              onClick={() => setActiveTab(tab.slug)}
            >
              <p
                className={`font-bold pb-1 text-sm whitespace-nowrap md:text-base flex items-center text-center mx-[5%] w-[100%] ${
                  activeTab === tab.slug
                    ? "text-[#ff6610] font-semibold"
                    : "font-semibold text-gray-500"
                } `}
              >
                {tab.label}
              </p>

              <div
                className={`w-[110%] h-[2px] font-semibold bg-[#ff6610] absolute group-hover:block   ${
                  activeTab === tab.slug ? "flex" : "hidden"
                }`}
              />
            </div>
          ))}
        </div>

        <div className="w-[100%]">
          {tabs.map((tab) => (
            <div
              key={tab.slug}
              className={`${activeTab === tab.slug ? "" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TabMenu;
