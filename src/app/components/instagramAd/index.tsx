import React from 'react';

import Pic1 from './assets/1.png';
import Pic2 from './assets/2.png';
import Pic3 from './assets/3.png';
import Pic4 from './assets/4.png';
import Pic5 from './assets/5.png';

const Images = [Pic1, Pic2, Pic3, Pic4, Pic5];

const InstagramAd = () => {
  return (
    <section className="pb-[42px] relative flex justify-center">
      <div className="absolute bottom-[8px] w-[479px] h-[72px] bg-white flex items-center justify-center text-[#34251F] text-[22px]">
        <p>Follow our Instagram :</p>
        <p className="font-bold">@Noname</p>
      </div>
      {Images.map(img => (
        <img src={img} alt="" className="flex-grow" />
      ))}
    </section>
  );
};

export default InstagramAd;
