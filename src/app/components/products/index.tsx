import React from 'react';

import Pic1 from './assets/pic-1.png';
import Pic2 from './assets/pic-2.png';
import Pic3 from './assets/pic-3.png';
import Pic4 from './assets/pic-4.png';
import Pic5 from './assets/pic-5.png';
import Pic6 from './assets/pic-6.png';
import Pic7 from './assets/pic-7.png';
import Pic8 from './assets/pic-8.png';
import ProductCard, { Props as CardPropsType } from './ProductCard';

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
    image: Pic3,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 4,
    image: Pic4,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 5,
    image: Pic5,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 6,
    image: Pic6,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 7,
    image: Pic7,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
  {
    id: 8,
    image: Pic8,
    title: 'Pastel Long Sleeve',
    price: 220,
    discountedPrice: 140,
  },
];

const Products: React.FC = () => {
  return (
    <section className="min-h-screen pt-[80px] text-[#34251F] flex flex-col items-center">
      <h2 className="text-[48px] font-bold font-frank">Our Product</h2>
      <ul className="flex items-center justify-center font-lato text-[15px] pt-[40px] pb-[70px]">
        <li className="mx-[22.5px] font-bold border-b-2">
          <a href="#">HOT</a>
        </li>
        <li className="mx-[22.5px]">
          <a href="#">ON SALE</a>
        </li>
        <li className="mx-[22.5px]">
          <a href="#">TRENDING NOW</a>
        </li>
        <li className="mx-[22.5px]">
          <a href="#">NEW ARRIVAL</a>
        </li>
      </ul>
      <div className="grid grid-cols-4 gap-[25px]">
        {data.map(card => (
          <ProductCard
            key={card.id}
            image={card.image}
            title={card.title}
            price={card.price}
            discountedPrice={card.discountedPrice}
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
