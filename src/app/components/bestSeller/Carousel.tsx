import React from 'react';

import BestSellerCard, { Props as CardPropsType } from './BestSellerCard';

type Props = {
  data: CardPropsType[];
};

const Carousel: React.FC<Props> = ({ data }) => {
  return (
    <div className="h-full pt-[120px] overflow-x-scroll overflow-y-hidden bestSeller_carousel">
      <div className="flex">
        {data.map(card => (
          <BestSellerCard
            image={card.image}
            title={card.title}
            price={card.price}
            discountedPrice={card.discountedPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
