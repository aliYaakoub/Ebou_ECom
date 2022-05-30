import React from 'react';

import Pic1 from './assets/pic-1.png';
import Pic2 from './assets/pic-2.png';
import { Props as CardPropsType } from './BestSellerCard';
import Carousel from './Carousel';

const data: CardPropsType[] = [
  {
    id: 1,
    image: Pic1,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 2,
    image: Pic2,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 3,
    image: Pic1,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 4,
    image: Pic2,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 5,
    image: Pic1,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
];

const BestSeller: React.FC = () => {
  return (
    <section className="bestSeller h-[743px] grid grid-cols-3 overflow-hidden">
      <div className="flex flex-col pl-[150px] text-white py-[120px]">
        <h2 className="max-w-[355px] font-frank font-bold text-[52px] pt-[20px] leading-[67px] mb-[23px]">
          Best Seller Product
        </h2>
        <p className="max-w-[304px] fonr-lato text-[20px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
        <a
          href="#"
          className="border border-dark-orange flex items-center justify-center w-[193px] h-[64px] text-dark-orange text-sm font-bold font-lato mt-[55px]"
        >
          SEE MORE
        </a>
      </div>
      <div className="col-span-2">
        <Carousel data={data} />
      </div>
    </section>
  );
};

export default BestSeller;
