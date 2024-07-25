import { CATEGORIES } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <div className='py-10 px-10 text-center'>
      <div>
        <p className='text-slate-500 text-left uppercase font-bold'>Categories</p>
      </div>
      <div className='grid grid-cols-5 lg:grid-cols-10 gap-5 justify-center items-center py-10 '>
        {CATEGORIES.map((value, index) => (
          <Link href={value.imgUrl} key={index}>
            <div className=' flex flex-col gap-2 justify-center items-center h-[140px]'>
              <img src={value.imgUrl} alt='' className='h-[70px]' />
              <p>{value.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
