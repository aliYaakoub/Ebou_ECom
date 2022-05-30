import React from 'react';

import { ReactComponent as Rect } from './assets/Rectangle.svg';
import { ReactComponent as Box } from '../../assets/dotted_box.svg';
import Pic1 from './assets/pic-1.png';
import Pic2 from './assets/pic-2.png';
import Pic3 from './assets/pic-3.png';
import CategoryCard from './CategoryCard';
import Featured from './Featured';
import { Props as CardPropsType } from './CategoryCard';

const data: CardPropsType[] = [
  {
    id: 1,
    image: Pic1,
    label: 'KIDS',
  },
  {
    id: 2,
    image: Pic2,
    label: 'MEN',
  },
  {
    id: 3,
    image: Pic3,
    label: 'T-SHIRTS',
  },
];

const Category: React.FC = () => {
  return (
    <section className="pt-[87px] pb-[138px] min-h-screen">
      <div className="flex flex-col items-center justify-center text-[#34251F]">
        <h2 className="font-bold font-frank text-[68px] mb-[12px]">Category</h2>
        <p className="text-[20px] font-lato">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper congue eros
        </p>
        <div className="grid grid-cols-3 mt-[47px] relative">
          {data.map(card => (
            <CategoryCard key={card.id} image={card.image} label={card.label} />
          ))}
          <div className="absolute bottom-[-80px] right-[-80px] z-0">
            <Rect />
          </div>
          <div className="absolute bottom-[-56px] right-[-56px] z-0">
            <Box />
          </div>
        </div>
      </div>
      <Featured />
    </section>
  );
};

export default Category;
