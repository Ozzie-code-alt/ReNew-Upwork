import { CATEGORIES } from '@/constants/constant';
import Link from 'next/link';
import React from 'react';

const Categories = () => {
  return (
    <section className='bg-gray-900 text-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
        <div className='mx-auto max-w-lg text-center'>
          <h2 className='text-3xl font-bold sm:text-4xl'>Categories</h2>

          <p className='mt-4 text-gray-300'>
            Discover a wide range of products tailored to your needs. From innovative tech to
            essential home and personal care, explore our curated categories to find exactly what
            you&apos;re looking for.
          </p>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {CATEGORIES.map((value, index) => (
            <Link
              key={index}
              className='block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10'
              href={{
                //TODO: encodeURIComponent here
                pathname: `/categories/${value.title}`,
                query: { slug: value.title }
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='size-10 text-pink-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M12 14l9-5-9-5-9 5 9 5z' />
                <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                />
              </svg>

              <h2 className='mt-4 text-xl font-bold text-white'>{value.title}</h2>

              <p className='mt-1 text-sm text-gray-300'>{value.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
