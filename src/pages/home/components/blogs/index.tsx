import React from 'react';
import { blogPageData } from './blogs.constant';

const Blogs: React.FC = () => {
  return (
    <section className="bg-info py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-[2rem] font-semibold leading-[1.5] text-black m-0 mb-10">
          {blogPageData.title}
        </h2>

        <div className="grid grid-cols-4 gap-6">
          {blogPageData.cards.map((card) => (
            <article key={card.id} className="rounded-lg overflow-hidden">
              <a className="h-full">
                <div className="relative pb-[56.25%] overflow-hidden bg-[#f5f5f5]">
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <div className="p-2 flex flex-col gap-3 min-h-[200px] border border-black rounded-b-lg relative">
                  <span className="bg-secondary px-4 py-2 text-sm font-medium text-black tracking-[0.05em] w-[70px] text-center">
                    {card.category}
                  </span>
                  <h3 className="text-base font-normal leading-[1.625] text-black m-0 flex-1">
                    {card.title}
                  </h3>
                  <div className="absolute bottom-0 right-0 w-[72px] h-[38px] rounded-tl-lg rounded-br-lg bg-primary text-white border-none flex items-center justify-center">
                    <img
                      src="/icons/right-arrow-white.svg"
                      alt="Read more"
                      className="w-[35px] h-[35px]"
                    />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
