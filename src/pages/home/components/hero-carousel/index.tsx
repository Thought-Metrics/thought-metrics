import React from 'react';
import { carouselData } from './hero-carousel.constant';
import { cn } from '@/core/utils/cn';
import { HeroCarousel1 } from '@/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import './hero-carousel.style.css';

const HeroCarousel: React.FC = () => {
  return (
    <section className="common-component">
      {/* Desktop View */}
      <div className="common-container relative !hidden md:!block w-full">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'custom-bullet',
            bulletActiveClass: 'custom-bullet-active',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full min-h-[18rem] xl:min-h-[25rem] xxl:min-h-[30rem] wide:min-h-[45rem]"
        >
          {carouselData.map((item, index) => (
            <SwiperSlide
              key={index + item.label}
              className="!flex !items-stretch"
            >
              <div className="grid grid-cols-2 w-full h-full">
                {/* Image Section */}
                <div className="relative h-full flex items-center">
                  {(() => {
                    const ImgComponent = item.imgComponent;
                    return ImgComponent ? (
                      <ImgComponent
                        className={cn(
                          'w-full h-full object-contain scale-100',
                          index === 0 ? 'p-[4rem] h-[38rem] pr-0' : '',
                          index === 1
                            ? 'p-[3rem] max-h-[24rem] xxl:max-h-[38rem] wide:min-h-[46rem] pr-0'
                            : ''
                        )}
                      />
                    ) : null;
                  })()}
                </div>

                {/* Text Section */}
                <div className="flex items-center justify-start">
                  <div className="text-[2.5rem] font-bold text-black">
                    {item.label.split('\n').map((line, idx) => (
                      <p key={idx + 'label'}>
                        {line.split('.').flatMap((part, i, arr) => [
                          part,
                          i < arr.length - 1 && (
                            <span key={i + 'label'} className="text-primary">
                              .
                            </span>
                          ),
                        ])}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination absolute flex gap-3 justify-center bottom-12 left-1/2 -translate-x-1/2 z-10"></div>
      </div>
      {/* Mobile View */}
      <div className="common-container flex-col gap-4 md:!hidden px-6 py-8 !justify-start">
        <div className="text-3xl font-bold text-black">
          {carouselData[0]?.mobileLabel.split('\n').map((line, idx) => (
            <p key={idx + 'label'}>
              {line.split('.').flatMap((part, i, arr) => [
                part,
                i < arr.length - 1 && (
                  <span key={i + 'label'} className="text-primary">
                    .
                  </span>
                ),
              ])}
            </p>
          ))}
        </div>
        <button className="bg-primary text-white font-bold rounded text-xl text-nowrap py-1 w-45">
          <label htmlFor="">{carouselData[0].buttonLabel}</label>
        </button>
        <HeroCarousel1 className="pt-10 w-full h-70 object-contain scale-100 py-0" />
      </div>
    </section>
  );
};

export default HeroCarousel;
