import React from 'react';
import { ReactComponent as Star } from './assets/star.svg';

export type Props = {
  id?: number;
  image: string;
  title: string;
  price: number;
  discountedPrice: number;
  stars: number;
};

const ProductCard: React.FC<Props> = ({
  image,
  title,
  price,
  discountedPrice,
  stars,
}) => {
  return (
    <div className="w-[266px] h-[388px] mb-[15px]">
      <img src={image} alt="" width={266} height={285} />
      <div className="flex justify-center items-center flex-col pt-[23px]">
        <div className="flex justify-center items-center">
          {Array(stars).fill(<Star />)}
        </div>
        <p className="font-bold text-lg font-frank pt-[14px] pb-[8px]">
          {title}
        </p>
        <div className="flex items-center justify-center">
          <p className="text-[#C20A0A] font-lato line-through opacity-20 pr-[13px]">{`$${discountedPrice}`}</p>
          <p className="font-lato font-bold">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
