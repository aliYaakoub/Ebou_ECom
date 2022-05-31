import React from 'react';

export type Props = {
  id?: number;
  title: string;
  message: string;
  image: string;
  name: string;
  work: string;
};

const TestimonialCard: React.FC<Props> = ({
  title,
  message,
  image,
  name,
  work,
}) => {
  return (
    <div className="testimonial_carousel_child min-w-[557px] h-[389px] bg-[#EEDDCC] bg-opacity-30 py-[35px] flex flex-col items-center text-[#34251F] font-lato mx-[12.5px] rounded-[6px] ">
      <h2 className="text-[18px] max-w-[359px] font-extrabold text-center mb-[13.5px]">
        {title}
      </h2>
      <p className="opacity-80 max-w-[431px] text-[14px] leading-[30px] text-center mb-[23.5px]">
        {message}
      </p>
      <img src={image} alt="" width={77} height={77} />
      <p className="font-bold mt-[14.41px]">{name}</p>
      <p className="opacity-80 mt-[5px]">{work}</p>
    </div>
  );
};

export default TestimonialCard;
