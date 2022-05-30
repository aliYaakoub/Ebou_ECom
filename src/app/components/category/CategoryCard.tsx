import React from 'react';

const CategoryCard = ({ image, label }) => {
  if (!image) return <div></div>;

  return (
    <div className="w-[363px] h-[417px] mx-[12.5px] relative z-10 font-lato">
      <img src={image} alt="" />
      <div className="flex items-center justify-center h-[60px] font-extrabold text-lg bg-white text-dark-orange absolute bottom-[22px] left-[23px] right-[23px] mx-auto">
        {label}
      </div>
    </div>
  );
};

export default CategoryCard;
