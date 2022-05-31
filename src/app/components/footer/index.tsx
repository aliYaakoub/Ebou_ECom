import React from 'react';

import { ReactComponent as MasterCardIcon } from './assets/masterCard_icon.svg';
import { ReactComponent as VisaIcon } from './assets/visa_icon.svg';
import { ReactComponent as CoinBaseIcon } from './assets/coinbase_icon.svg';
import { ReactComponent as FacebookIcon } from './assets/facebook_icon.svg';
import { ReactComponent as InstagramIcon } from './assets/insta_icon.svg';
import { ReactComponent as TwitterIcon } from './assets/twitter_icon.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin_icon.svg';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F69F217D] h-[319px] grid grid-cols-6 font-lato text-black pt-[51px] pl-[101px]">
      <div className="col-span-2 flex flex-col  pl-[50px]">
        <h2 className="font-bold pl-[14px] mb-[20px]">ABOUT</h2>
        <p className="max-w-[300px] mb-[24px] text-[#34251F]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros, eget tincidunt ipsum eleifend ut.
        </p>
        <h2 className="font-bold mb-[16px]">PAYMENT METHODS</h2>
        <div className="flex items-center">
          <div className="mr-[25px]">
            <MasterCardIcon />
          </div>
          <div className="mr-[25px]">
            <VisaIcon />
          </div>
          <div className="mr-[25px]">
            <CoinBaseIcon />
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold mb-[20px]">CATEGORIES</h2>
        <ul>
          <li className="leading-[28.8px] mb-[6px]">Female fashion</li>
          <li className="leading-[28.8px] mb-[6px]">Male fashion</li>
          <li className="leading-[28.8px] mb-[6px]">Jewelry & Watches</li>
          <li className="leading-[28.8px] mb-[6px]">Bags & Shoes</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-[20px]">INFORMTION</h2>
        <ul>
          <li className="leading-[28.8px] mb-[6px]">About Us</li>
          <li className="leading-[28.8px] mb-[6px]">Contact Us</li>
          <li className="leading-[28.8px] mb-[6px]">Terms & Condition</li>
          <li className="leading-[28.8px] mb-[6px]">Return & Exchange</li>
          <li className="leading-[28.8px] mb-[6px]">Shipping & Delivery</li>
        </ul>
      </div>
      <div>
        <h2 className="font-bold mb-[20px]">CONTACT</h2>
        <p className="max-w-[239px] mb-[45px] text-[#34251F]">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <h2 className="font-bold mb-[16px]">JOIN US ON</h2>
        <div className="flex items-center">
          <div className="mr-[32px]">
            <FacebookIcon />
          </div>
          <div className="mr-[32px]">
            <TwitterIcon />
          </div>
          <div className="mr-[32px]">
            <InstagramIcon />
          </div>
          <div className="mr-[32px]">
            <LinkedInIcon />
          </div>
        </div>
      </div>
      <div></div>
      <div className="col-span-2"></div>
    </footer>
  );
};

export default Footer;
