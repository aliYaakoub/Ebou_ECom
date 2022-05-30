import React from 'react';
import Image from './assets/Image.png';
import { ReactComponent as Box } from '../../assets/dotted_box.svg';

const Hero = () => {
  return (
    <section className="hero h-[900px] grid grid-cols-2 items-center justify-center content-center px-[150px] font-lato">
      <div className="flex flex-col text-[#34251F] max-w-[530px]">
        <h2 className="font-bold text-[78px] leading-[78px] font-frank">
          Top selling Fashion Style for You
        </h2>
        <p className="font-[400] text-[22px] mt-[31px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
        </p>
        <button className="mt-[44px] bg-dark-orange shadow-2xl shadow-[#34251F] w-[223px] h-[64px] text-white font-extrabold text-[18px] rounded-[2px]">
          SHOP NOW
        </button>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="absolute top-[107px] right-5">
          <Box />
        </div>
        <img src={Image} alt="" />
        <div className="absolute bottom-[47px] left-5">
          <Box />
        </div>
      </div>
    </section>
  );
};

export default Hero;
