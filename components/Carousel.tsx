'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const StaticPage1 = () => {
  return (
    <section className=''>
      <div className='mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch'>
          <div className='grid place-content-center rounded bg-gray-100 p-6 sm:p-8'>
            <div className='mx-auto max-w-md text-center lg:text-left'>
              <header>
                <h2 className='text-xl font-bold text-gray-900 sm:text-3xl'>
                  Timeless Elegance, Unmatched Craftsmanship
                </h2>

                <p className='mt-4 text-gray-500'>
                  Discover our collection of meticulously crafted watches, blending timeless
                  elegance with unparalleled precision for every occasion.
                </p>
              </header>

              <a
                href='#'
                className='mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring'
              >
                Shop All
              </a>
            </div>
          </div>

          <div className='lg:col-span-2 lg:py-8'>
            <ul className='grid grid-cols-2 gap-4'>
              <li key='1'>
                <a href='#' className='group block'>
                  <img
                    src='https://images.unsplash.com/photo-1533139502658-0198f920d8e8?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='aspect-square w-full rounded object-cover'
                  />

                  <div className='mt-3'>
                    <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                      Festina Watch
                    </h3>

                    <p className='mt-1 text-sm text-gray-700'>$150</p>
                  </div>
                </a>
              </li>

              <li key='2'>
                <a href='#' className='group block'>
                  <img
                    src='https://images.unsplash.com/photo-1594534475808-b18fc33b045e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='aspect-square w-full rounded object-cover'
                  />

                  <div className='mt-3'>
                    <h3 className='font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4'>
                      Rolex Watch
                    </h3>

                    <p className='mt-1 text-sm text-gray-700'>$150</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const StaticPage2 = () => {
  return (
    <section>
      <div className='mx-auto  px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div className='bg-blue-600 p-8  flex flex-col justify-center items-center md:p-12 lg:px-16 lg:py-24'>
            <div className='mx-auto flex flex-col   max-w-xl text-left'>
              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                Discover the Perfect Jacket for Every Season
              </h2>

              <p className='hidden text-white/90 sm:mt-4 sm:block'>
                Find your style with our collection of jackets, tailored for comfort and elegance in
                any weather.
              </p>

              <div className='mt-4 md:mt-8'>
                <a
                  href='#'
                  className='inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                >
                  Find Your Jacket Now
                </a>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
            <img
              alt=''
              src='https://plus.unsplash.com/premium_photo-1675186049563-000f7ac02c44?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='h-40 w-full object-cover sm:h-56 md:h-full'
            />

            <img
              alt=''
              src='https://plus.unsplash.com/premium_photo-1675183713626-81e6de4552e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              className='h-40 w-full object-cover sm:h-56 md:h-full'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StaticPage3 = () => {
  return (
    <section className='overflow-hidden h-[80%] my-20 bg-gray-50 sm:grid sm:grid-cols-2'>
      <div className='p-8 md:p-12 flex flex-col justify-center items-center lg:px-16 '>
        <div className='mx-auto '>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            Explore the Latest in Cutting-Edge Gadgets
          </h2>

          <p className='hidden text-gray-500 md:mt-4 md:block'>
            Upgrade your tech game with our innovative gadgets designed to enhance your everyday
            life.
          </p>

          <div className='mt-4 md:mt-8'>
            <a
              href='#'
              className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>

      <img
        alt=''
        src='https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        className='h-40 w-full object-cover sm:h-56 md:h-full'
      />
    </section>
  );
};

const pages = [
  <StaticPage1 key='page1' />,
  <StaticPage2 key='page2' />,
  <StaticPage3 key='page3' />
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50
};

export const SwipeCarousel = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setPageIndex((pv) => {
          if (pv === pages.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && pageIndex < pages.length - 1) {
      setPageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && pageIndex > 0) {
      setPageIndex((pv) => pv - 1);
    }
  };

  return (
    <div className='relative overflow-hidden bg-[#FFF2CC] '>
      <motion.div
        drag='x'
        dragConstraints={{
          left: 0,
          right: 0
        }}
        style={{
          x: dragX
        }}
        animate={{
          translateX: `-${pageIndex * 100}%`
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='flex cursor-grab items-center active:cursor-grabbing'
      >
        {pages.map((Page, index) => (
          <div key={index} className=' w-screen shrink-0'>
            {Page}
          </div>
        ))}
      </motion.div>
      <GradientEdges />
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className='pointer-events-none absolute bg-gradient-to-r from-neutral-950/50 to-neutral-950/0' />
      <div className='pointer-events-none absolute bg-gradient-to-l from-neutral-950/50 to-neutral-950/0' />
    </>
  );
};
