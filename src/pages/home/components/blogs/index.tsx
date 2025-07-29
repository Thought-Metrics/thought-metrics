import React from 'react';
import { blogPageData } from './blogs.constant';

const Blogs: React.FC = () => {
  return (
    <section className="common-component bg-info text-black">
      <div className="common-container px-6 py-8 md:px-24 md:py-12 !max-w-[1336px] flex-col">
        <h2 className="text-[1.1rem] md:text-3xl font-semibold leading-[1.25] tracking-normal">
          {blogPageData.title}
        </h2>
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-4 gap-6 pt-6">
          {blogPageData.cards.map((card) => (
            <article key={card.id} className="rounded-lg overflow-hidden">
              <div className="relative pb-[160px] bg-[#f5f5f5]">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="absolute top-0 left-0 w-full h-[102%] object-cover z-10"
                />
              </div>

              <div className="p-3 pt-4 flex flex-col gap-1 min-h-[170px] rounded-b-lg relative outline outline-black-500 outline-offset-[-2px]">
                <span className="bg-secondary px-4 py-2 text-md font-medium tracking-[0.05em] w-[70px] text-center rounded-lg">
                  {card.category}
                </span>
                <h3 className="text-base font-normal leading-[1.25] m-0 flex-1 tracking-tight">
                  {card.title}
                </h3>
                <div className="absolute bottom-0.5 right-0.5 w-[72px] h-[38px] rounded-tl-lg rounded-br-md bg-primary text-white border-none flex items-center justify-center">
                  <img
                    src="/icons/right-arrow-white.svg"
                    alt="Read more"
                    className="w-[35px] h-[35px]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="w-full h-auto flex overflow-y-hidden overflow-x-scroll md:hidden gap-3 pt-6 text-black">
          {blogPageData.cards.map((card) => (
            <article key={card.id} className="shrink-0 w-70 h-90 rounded-lg overflow-hidden">
              <div className="relative pb-[160px] bg-[#f5f5f5]">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="absolute top-0 left-0 w-full h-[102%] object-cover z-10"
                />
              </div>

              <div className="p-3 pt-4 flex flex-col gap-1 min-h-[170px] rounded-b-lg relative outline outline-black-500 outline-offset-[-2px]">
                <div className="bg-secondary p-1 text-sm font-medium tracking-[0.05em] w-[70px] text-center rounded-md">
                  {card.category}
                </div>
                <h3 className="text-md font-normal leading-[1.25] m-0 flex-1 tracking-tight">
                  {card.title}
                </h3>
                <div className="absolute bottom-0.5 right-0.5 w-[72px] h-[38px] rounded-tl-lg rounded-br-md bg-primary text-white border-none flex items-center justify-center">
                  <img
                    src="/icons/right-arrow-white.svg"
                    alt="Read more"
                    className="w-[35px] h-[35px]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
