import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
const HeroPage = () => {
  return (
    <div className='px-10 flex w-auto h-screen '>
      {/*Left */}
      <div className='w-[50%] h-[80%] border flex justify-center items-center border-red-500 '>
        <div className='flex flex-col justify-center  gap-3 '>
          <p className='text-7xl'> Hello world</p>
          <p className='text-2xl'> hello world some thing else</p>
          <Button className='w-[40%] rounded-full  bg-[#DFA67B]'>Shop ReNew</Button>
        </div>
      </div>
      {/*Right */}
      <div className={cn('w-[50%] h-[80%] border border-blue-500')}></div>
    </div>
  );
};

export default HeroPage;
