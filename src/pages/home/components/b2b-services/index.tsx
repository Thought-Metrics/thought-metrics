import React from 'react';
import { contentSecondData } from './b2bservices.constant';
import {
  ArrowRight,
  BoxCluster,
  DoorPerson,
  IllustrationSlope,
  Spiral,
} from '@/assets';

const B2BServices: React.FC = () => {
  return (
    <section className="bg-neutral w-full flex justify-center min-h-[860px]">
      <div className="w-full relative max-w-[1536px] flex px-24 py-12 justify-center flex-col">
        <h2 className="text-[1.75rem] font-semibold leading-[1.25] text-black tracking-normal">
          {contentSecondData.mainTitle}
        </h2>
        <div className="grid grid-cols-1 w-full md:grid-cols-3  md:grid-rows-2 gap-3 pt-6 text-black">
          {/* Service 1 */}
          <div className="relative col-span-1 bg-success rounded-md flex flex-col justify-center py-6 px-9 overflow-hidden">
            <IllustrationSlope className="absolute right-0 bottom-0 w-[70%]" />
            <div className="w-[60%] flex flex-col gap-2 z-1">
              <h3 className="leading-[1.2] font-semibold">
                {contentSecondData.service1.title}
              </h3>
              <p className="tracking-tight leading-[1.2]">
                {contentSecondData.service1.description}
              </p>
              <div className="py-2">
                <ArrowRight />
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="relative col-span-2 bg-gradient-to-r from-custom-violet to-white rounded-md flex flex-col py-6 px-9 overflow-hidden">
            <div className="w-[55%] flex flex-col gap-2">
              <h3 className="w-[50%] leading-[1.2] font-semibold">
                {contentSecondData.service2.title}
              </h3>
              <p className="tracking-tight leading-[1.2]">
                {contentSecondData.service2.description}
              </p>
              <div
                className="py-2"
                aria-label={`Learn more about ${contentSecondData.service2.title}`}
              >
                <ArrowRight />
              </div>
            </div>
            <DoorPerson className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[80%]" />
          </div>

          {/* Service 3 */}
          <div className="relative col-span-2 bg-gradient-to-r from-custom-grey-1 to-white rounded-md flex flex-col justify-center py-6 px-9 overflow-hidden">
            <div className="w-[55%] flex flex-col gap-2">
              <h3 className="w-[40%] leading-[1.2] font-semibold">
                {contentSecondData.service3.title}
              </h3>
              <p className="tracking-tight leading-[1.2]">
                {contentSecondData.service3.description}
              </p>
              <div
                className="py-2"
                aria-label={`Learn more about ${contentSecondData.service3.title}`}
              >
                <ArrowRight />
              </div>
            </div>
            <Spiral className="absolute top-1/2 right-0 transform -translate-y-1/2 h-[90%]" />
          </div>

          {/* Service 4 */}
          <div className="relative col-span-1 bg-custom-pink rounded-md flex flex-col justify-center py-6 px-9 overflow-hidden">
            <div className="w-[60%] flex flex-col gap-2">
              <h3 className="leading-[1.2] font-semibold">
                {contentSecondData.service4.title}
              </h3>
              <p className="tracking-tight leading-[1.2]">
                {contentSecondData.service4.description}
              </p>
              <div
                className="py-2"
                aria-label={`Learn more about ${contentSecondData.service4.title}`}
              >
                <ArrowRight />
              </div>
            </div>
            <BoxCluster className="absolute right-8 top-8" />
            <BoxCluster className="absolute right-10 bottom-8 w-[25%] h-[25%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BServices;
