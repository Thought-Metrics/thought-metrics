import React, { useState } from 'react';
import { industryData, type IndustryTabData } from './industries.constant';

const Industries: React.FC = () => {
  const [activeTab, setActiveTab] = useState<IndustryTabData>(
    industryData.industries[0]
  );

  const handleTabClick = (industry: IndustryTabData) => {
    setActiveTab(industry);
  };

  return (
    <section className="bg-white h-full w-full flex justify-center min-h-[860px]">
      <div className="w-full h-full relative max-w-[1536px] flex px-24 py-20 justify-center flex-col">
        <h2 className="text-[1.75rem] font-semibold leading-[1.25] text-black tracking-normal">
          {industryData.mainTitle}
        </h2>

        <div className="w-full h-full pt-6 flex gap-3">
          <div className="w-[70%] text-black">
            <div
              key={activeTab.title} // This forces re-render on tab change
              className="border border-black rounded-sm px-[3.25rem] relative flex flex-col gap-6 justify-center w-full h-full"
            >
              <h3 className="font-bold text-xl animate-fadeIn">
                {activeTab.title}
              </h3>

              <div className="flex w-full justify-between animate-fadeIn">
                <div className="flex flex-col gap-1 w-[45%]">
                  <h4 className="text-base leading-none font-semibold">
                    {activeTab.subtitle}
                  </h4>
                  <p className="text-base leading-none">
                    {activeTab.description}
                  </p>

                  <ul className="text-base leading-[1.2em] list-disc pl-7 space-y-1">
                    {activeTab.bulletPoints.map((point, index) => (
                      <li key={index + point} className="">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-[45%]">
                  <img
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="w-10 h-10 absolute left-10 bottom-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold">
                {activeTab.tabNumber}
              </div>
              <div className="h-10 px-8 absolute right-10 bottom-10 rounded-md bg-primary flex items-center justify-center text-sm font-bold">
                See More
              </div>
            </div>
          </div>

          <div className="w-[30%] flex flex-col justify-between xl:px-6 lg:px-3 text-black font-semibold">
            {industryData.industries.map((industry) => (
              <button
                key={industry.id}
                className={`bg-neutral px-3 py-2 rounded hover:bg-primary hover:shadow-md hover:shadow-primary/50 ${
                  activeTab.id === industry.id
                    ? 'bg-primary shadow-md shadow-primary/50'
                    : ''
                }`}
                onClick={() => handleTabClick(industry)}
              >
                <span>{industry.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
