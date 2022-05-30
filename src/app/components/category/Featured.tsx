import React from 'react';

import { ReactComponent as Rect } from './assets/Featured-rectangle.svg';
import { ReactComponent as Box } from '../../assets/dotted_box.svg';
import Image from './assets/image.png';

const Featured = () => {
  return (
    <section className="grid grid-cols-2 px-[73px] mt-[226px] gap-[100px]">
      <div className="flex items-center justify-end">
        <div className="relative">
          <img src={Image} alt="" />
          <div className="absolute top-[-40px] right-[-40px]">
            <Box />
          </div>
          <div className="absolute bottom-[-45px] left-[-65px]">
            <Rect />
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[#34251F] pt-[40px]">
        <h2 className="text-[78px] font-bold mb-[35px] max-w-[530px] leading-[78px] font-frank">
          Fashion Style for You
        </h2>
        <p className="max-w-[446px] font-lato text-[20px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut orem ipsum
          dolor sit amet consectetur adipiscing elit Sed ullamcorper congue eros
          eleifend ut tincidunt ipsum .
        </p>
      </div>
    </section>
  );
};

export default Featured;
