import React from 'react';

import Pic1 from './assets/pic-1.png';
import Pic2 from './assets/pic-2.png';
import Carousel from './Carousel';
import { Props as CardPropsType } from './TestimonialCard';

const data: CardPropsType[] = [
  {
    id: 1,
    title:
      'Comfortable and met all my expectations! I ordered a medium and it fit perfectly',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ',
    image: Pic1,
    name: 'Anisa Zahra',
    work: 'Founder milenial',
  },
  {
    id: 2,
    title:
      'I really love this shirt! It feels more like a light flannel than a jacket',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ',
    image: Pic2,
    name: 'Melissa Wallace',
    work: 'Founder milenial',
  },
  {
    id: 3,
    title:
      'Comfortable and met all my expectations! I ordered a medium and it fit perfectly',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ',
    image: Pic1,
    name: 'Anisa Zahra',
    work: 'Founder milenial',
  },
  {
    id: 4,
    title:
      'I really love this shirt! It feels more like a light flannel than a jacket',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ',
    image: Pic2,
    name: 'Melissa Wallace',
    work: 'Founder milenial',
  },
  {
    id: 5,
    title:
      'Comfortable and met all my expectations! I ordered a medium and it fit perfectly',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet, ',
    image: Pic1,
    name: 'Anisa Zahra',
    work: 'Founder milenial',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="pt-[50px] flex flex-col items-center text-[#34251F] ">
      <h2 className="font-bold font-frank text-[48px] mb-[20px]">
        What People Say About Us
      </h2>
      <p className="text-[20px] font-lato mb-[48px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper
        congue eros
      </p>
      <div className="w-full">
        <Carousel data={data} />
      </div>
    </section>
  );
};

export default Testimonials;
