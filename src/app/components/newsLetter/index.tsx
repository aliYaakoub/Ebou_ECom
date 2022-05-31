import React from 'react';

const NewsLetter: React.FC = () => {
  return (
    <section className="h-[338px] font-light bg-[#221C14] flex flex-col items-center text-white mt-[60px] mb-[101px]">
      <h2 className="font-frank text-[48px] leading-[50px] mt-[45.67px]">
        Sign Up For Newsletter
      </h2>
      <p className="mt-[26.33px] text-[20px] font-Inter text-center max-w-[528px] leading-[33.56px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis
      </p>
      <div className="w-[418.98px] h-[49.84px] flex overflow-hidden rounded-[35.71px] mt-[36.58px] ">
        <input
          type="email"
          className="flex-grow border-0 outline-none px-5 text-[#221C14]"
        />
        <button className="w-[106.51px] font-medium text-[17.85px] bg-dark-orange">
          Search
        </button>
      </div>
    </section>
  );
};

export default NewsLetter;
