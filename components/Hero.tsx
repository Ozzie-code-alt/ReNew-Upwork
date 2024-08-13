import React from 'react';
import { SwipeCarousel } from './Carousel';
const HeroPage = () => {
  return (
    <div className='flex w-screen h-auto justify-center items-center '>
      <div className='flex w-full justify-center items-center  '>
        <SwipeCarousel />
      </div>
    </div>
  );
};

export default HeroPage;
