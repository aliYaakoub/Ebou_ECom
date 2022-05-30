import React from 'react';
import { ReactComponent as Star } from './assets/star.svg';

export type Props = {
  id?: number;
  image: string;
  title: string;
  price: number;
  discountedPrice: number;
};

const BestSellerCard: React.FC<Props> = ({
  image,
  title,
  price,
  discountedPrice,
}) => {
  if (!image) return <div></div>;

  return (
    <div className="min-w-[363px] h-[538px] bg-white flex flex-col mx-5 carousel_child rounded-b-[6px] text-[#34251F]">
      <img src={image} alt="" />
      <div className="flex flex-col justify-center flex-grow pl-[39px]">
        <div className="flex items-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <p className="font-bold text-lg font-frank pt-[14px] pb-[8px]">
          {title}
        </p>
        <div className="flex items-center">
          <p className="text-[#C20A0A] font-lato line-through opacity-20 pr-[13px]">{`$${discountedPrice}`}</p>
          <p className="font-lato font-bold">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BestSellerCard;
