import React from 'react';
import { SwipeCarousel } from './Carousel';
const HeroPage = () => {
  return (
    <div className='flex w-screen    justify-center items-center '>
      <div className='flex w-full  '>
        <SwipeCarousel />
      </div>
    </div>
  );
};

export default HeroPage;
