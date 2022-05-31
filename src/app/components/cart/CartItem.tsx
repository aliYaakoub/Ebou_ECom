import { StringableActionCreator } from '@redux-saga/types';
import React from 'react';

export type Props = {
  id?: number;
  title: string;
  image?: string;
  specs: {
    key: string;
    value: string;
  }[];
  price: number;
};

const CartItem: React.FC<Props> = ({
  title,
  image = undefined,
  specs,
  price,
}) => {
  return (
    <div className="flex items-start text-[#34251F] pb-[21px] mt-[68px] border-b border-[#00000054]">
      <div className="min-w-[142px] h-[147px] bg-[#D9D9D9]">
        {image && <img src={image} alt="" width={142} height={147} />}
      </div>
      <div className="flex flex-col pl-[15px] min-h-[147px]">
        <h2 className="font-medium text-[24px] font-frank">{title}</h2>
        <div className="flex mt-[7px]">
          {specs.map(spec => (
            <p className="text-[#34251F70] ">{`${spec.key}: ${spec.value}`}</p>
          ))}
        </div>
        <p className="text-dark-orange text-[24px] font-frank font-medium mt-[17px]">{`$${price}`}</p>
      </div>
    </div>
  );
};

export default CartItem;
