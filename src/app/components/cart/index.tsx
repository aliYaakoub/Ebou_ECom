import React from 'react';

import CartItem, { Props as CartItemPropsType } from './CartItem';

const data: CartItemPropsType[] = [
  {
    id: 1,
    title: 'Original New Tactical Belt Quick Release Magnetic',
    price: 5000,
    specs: [
      {
        key: 'color',
        value: 'Black',
      },
      {
        key: 'Belt Length',
        value: '125cm',
      },
    ],
  },
  {
    id: 2,
    title: 'Original New Tactical Belt Quick Release Magnetic',
    price: 5000,
    specs: [
      {
        key: 'color',
        value: 'Black',
      },
      {
        key: 'Belt Length',
        value: '125cm',
      },
    ],
  },
  {
    id: 3,
    title: 'Original New Tactical Belt Quick Release Magnetic',
    price: 5000,
    specs: [
      {
        key: 'color',
        value: 'Black',
      },
      {
        key: 'Belt Length',
        value: '125cm',
      },
    ],
  },
];

type Props = {
  action: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart: React.FC<Props> = ({ action }) => {
  return (
    <div className="bg-black bg-opacity-30 fixed top-0 left-0 grid grid-cols-1 justify-center items-center content-center w-screen h-screen z-[100] pt-[156px] overflow-y-scroll">
      <div className="flex items-center justify-center w-full ">
        <div className="w-[646px] bg-white px-[22px] pb-[89px] relative">
          <button
            className="absolute top-5 right-5 text-xl"
            onClick={() => action(old => !old)}
          >
            X
          </button>
          {data.map(item => (
            <CartItem
              key={item.id}
              title={item.title}
              price={item.price}
              specs={item.specs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
