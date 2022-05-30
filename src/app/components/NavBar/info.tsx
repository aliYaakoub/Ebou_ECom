import React from 'react';
import { ReactComponent as Flag } from './assets/british_flag.svg';

const Info: React.FC = () => {
  return (
    <div className="h-[43px] bg-dark-orange flex justify-center items-center text-white font-semibold font-lato">
      <p>Shop Your Way To Confidence</p>
      <div className="absolute right-0 flex justify-center items-center">
        <p>Help | change language</p>
        <div className="pl-[14px] pr-[42px]">
          <Flag />
        </div>
      </div>
    </div>
  );
};

export default Info;
