import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TestimonialCard, { Props as CardPropsType } from './TestimonialCard';

type Props = {
  data: CardPropsType[];
};

const Carousel: React.FC<Props> = ({ data }) => {
  const [currCard, setCurrCard] = React.useState(0);

  return (
    <div className="overflow-x-scroll overflow-y-hidden bestSeller_carousel">
      <Swiper
        slideToClickedSlide
        spaceBetween={25}
        slidesPerView={2}
        centeredSlides
        onSlideChange={s => setCurrCard(s.activeIndex)}
        onSwiper={s => setCurrCard(s.activeIndex)}
        className="mb-[48px]"
      >
        {data.map(card => (
          <SwiperSlide key={card.id}>
            <TestimonialCard
              image={card.image}
              title={card.title}
              name={card.name}
              message={card.message}
              work={card.work}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-[28px] flex items-center justify-center">
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: currCard === index ? '#34251F' : 'none' }}
            className="w-[13px] h-[13px] border border-[#34251F] mx-[4px] rounded-[50%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
