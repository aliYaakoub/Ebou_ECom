import React from 'react';

import TestimonialCard, { Props as CardPropsType } from './TestimonialCard';

type Props = {
  data: CardPropsType[];
};

const Carousel: React.FC<Props> = ({ data }) => {
  return (
    <div className="overflow-x-scroll overflow-y-hidden bestSeller_carousel">
      <div className="flex mb-[48px]">
        {data.map(card => (
          <TestimonialCard
            key={card.id}
            image={card.image}
            title={card.title}
            name={card.name}
            message={card.message}
            work={card.work}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
