import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import BestSellerCard, { Props as CardPropsType } from './BestSellerCard';

type Props = {
  data: CardPropsType[];
};

const Carousel: React.FC<Props> = ({ data }) => {
  const [currCard, setCurrCard] = React.useState(0);

  return (
    <div className="h-full pt-[120px]">
      <Swiper
        slideToClickedSlide
        spaceBetween={25}
        slidesPerView={3}
        onSlideChange={s => setCurrCard(s.activeIndex)}
        onSwiper={s => setCurrCard(s.activeIndex)}
      >
        {data.map((card, index) => (
          <SwiperSlide key={card.id}>
            <BestSellerCard
              opacity={index === currCard + 2 ? '0.5' : '1'}
              image={card.image}
              title={card.title}
              price={card.price}
              discountedPrice={card.discountedPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="pt-[28px] flex">
        {data.map((i, index) => (
          <div
            key={index}
            style={{ background: currCard === index ? '#EEDDCC' : 'none' }}
            className="w-[13px] h-[13px] border border-[#EEDDCC] mx-[4px] rounded-[50%]"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
