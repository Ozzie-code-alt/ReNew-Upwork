import React from 'react';

const HeroPage = () => {
  return (
    <div className='px-10 flex w-screen'>
      {/*Left */}
      <div className='w-[50%] h-full border border-red-500 '>
        <p className='className="leading-7 [&:not(:first-child)]:mt-6"'> hello world</p>
      </div>
      {/*Right */}
      <div className='w-[50%] h-full border border-blue-500'></div>
    </div>
  );
};

export default HeroPage;
