import * as React from 'react';
import { ReactComponent as CartIcon } from './assets/cart.svg';
import Cart from 'app/components/cart';

export const Nav: React.FC = () => {
  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  return (
    <div className="h-[111px] bg-light-orange flex items-center justify-center font-lato">
      <ul className="font-extrabold text-[#34251F] flex">
        <li className="px-[22.5px]">
          <a href="#">MEN</a>
        </li>
        <li className="px-[22.5px]">
          <a href="#">WOMAN</a>
        </li>
        <li className="px-[22.5px]">
          <a href="#">KIDS</a>
        </li>
        <li className="px-[22.5px]">
          <a href="#">COLLECTION</a>
        </li>
        <li className="px-[22.5px]">
          <a href="#">TRENDS</a>
        </li>
      </ul>
      <div className="absolute right-0 pr-[111px] font-bold flex items-center">
        <button
          onClick={() => setCartIsOpen(!cartIsOpen)}
          className="mr-[22px]"
        >
          <CartIcon />
        </button>
        <button className="rounded-[10px] w-[104px] h-[50px] mr-[22px] text-white bg-dark-orange">
          Sign Up
        </button>
        <button className="rounded-[10px] w-[104px] h-[50px] border-2 border-black">
          Login
        </button>
      </div>
      {cartIsOpen && <Cart action={setCartIsOpen} />}
    </div>
  );
};
