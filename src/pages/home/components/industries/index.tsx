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
    <section className="common-component bg-white">
      <div className="!hidden md:!flex common-container p-4 md:px-24 md:py-12 justify-center flex-col !max-w-[1336px]">
        <h2 className="text-[1.1rem] md:text-3xl font-semibold leading-[1.25] text-black tracking-normal">
          {industryData.mainTitle}
        </h2>

        <div className="w-full min-h-[360px] md:min-h-[640px] pt-6 flex gap-3">
          <div className="w-[67%] md:w-[75%] h-full text-black">
            <div
              key={activeTab.title} // This forces re-render on tab change
              className="flex border border-black rounded-sm px-3 py-4 md:px-[3.25rem] relative flex-col gap-6 justify-center w-full h-full"
            >
              <h3 className="hidden md:block font-bold text-xl animate-fadeIn">
                {activeTab.title}
              </h3>

              <div className="flex w-full justify-between animate-fadeIn text-xxs md:text-base leading-none">
                <div className="flex flex-col gap-1 md:w-[45%]">
                  <h4 className="font-semibold">{activeTab.subtitle}</h4>
                  <p>{activeTab.description}</p>

                  <ul className="leading-[1.2em] list-disc pl-4 md:pl-7 space-y-2">
                    {activeTab.bulletPoints.map((point, index) => (
                      <li key={index + point} className="">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="hidden md:block w-[45%]">
                  <img
                    src={activeTab.image}
                    alt={activeTab.imageAlt}
                    className="w-full h-full"
                  />
                </div>
              </div>

              <div className="w-6 h-8 md:w-10 md:h-10 absolute left-4 bottom-4 md:left-10 md:bottom-10 rounded-full bg-primary flex items-center justify-center text-xxs md:text-sm font-bold">
                {activeTab.tabNumber}
              </div>
              <div className="h-8 px-4 md:h-10 md:px-8 absolute right-4 bottom-4 md:right-10 md:bottom-10 rounded-md bg-primary flex items-center justify-center text-xxs md:text-sm font-bold">
                See More
              </div>
            </div>
          </div>

          <div className="w-[33%] md:w-[25%] flex flex-col justify-between text-black font-semibold text-xs md:text-base">
            {industryData.industries.map((industry) => (
              <button
                key={industry.id}
                className={`bg-neutral px-2 py-1.5 md:py-2 rounded hover:bg-primary hover:shadow-md hover:shadow-primary/50 ${
                  activeTab.id === industry.id
                    ? 'bg-primary shadow-md shadow-primary/50'
                    : ''
                } ${industry.isMobile && 'hidden md:block'}`}
                onClick={() => handleTabClick(industry)}
              >
                <span className={`${industry.shortTitle && 'hidden md:block'}`}>
                  {industry.label}
                </span>
                {industry.shortTitle && (
                  <span className="md:hidden">{industry.shortTitle}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
