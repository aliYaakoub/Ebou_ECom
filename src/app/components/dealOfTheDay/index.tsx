import React from 'react';

import Image from './assets/Image.png';
import { ReactComponent as Rect } from './assets/Rectangle.svg';
import { ReactComponent as Box } from '../../assets/dotted_box.svg';

const DealOfTheDay = () => {
  return (
    <section className="flex items-center justify-center pt-[142px] pb-[50px] font-lato">
      <div className="relative overflow-hidden bg-[#EEDDCC] w-[1139px] h-[504px] rounded-[5px]">
        <div className="absolute right-0 top-[-61px] z-0">
          <Rect />
        </div>
        <div className="absolute right-[62px] bottom-[110px]">
          <Box />
        </div>
        <div className="grid grid-cols-2 gap-[111px] pt-[44px] z-10">
          <div className="flex flex-col pt-[26px] pl-[85px] text-[#34251F]">
            <h2 className="font-frank font-bold text-[48px] leading-[61.97px]">
              Deal Of The Day
            </h2>
            <p className="text-[18px] max-w-[446px] mt-[7px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              ullamcorper congue erosget tincidunt
            </p>
            <div className="flex mt-[29px]">
              <div className="bg-white flex flex-col items-center justify-center w-[100px] h-[100px] mr-[18px]">
                <h2 className="font-bold text-[42px]">08</h2>
                <p>Days</p>
              </div>
              <div className="bg-white flex flex-col items-center justify-center w-[100px] h-[100px] mr-[18px]">
                <h2 className="font-bold text-[42px]">09</h2>
                <p>Hours</p>
              </div>
              <div className="bg-white flex flex-col items-center justify-center w-[100px] h-[100px] mr-[18px]">
                <h2 className="font-bold text-[42px]">14</h2>
                <p>Min</p>
              </div>
            </div>
            <button className="bg-[#34251F] w-[223px] h-[64px] mt-[42px] font-extrabold text-white text-[18px]">
              SHOP NOW
            </button>
          </div>
          <div className="flex items-end z-10">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;
