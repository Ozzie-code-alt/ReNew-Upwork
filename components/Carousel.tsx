'use client';
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const StaticPage1 = () => {
  return (
<section>
  <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
      <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
        <div className="mx-auto max-w-md text-center lg:text-left">
          <header>
            <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Watches</h2>

            <p className="mt-4 text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas rerum quam amet
              provident nulla error!
            </p>
          </header>

          <a
            href="#"
            className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 lg:py-8">
        <ul className="grid grid-cols-2 gap-4">
          <li>
            <a href="#" className="group block">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
              </div>
            </a>
          </li>

          <li>
            <a href="#" className="group block">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                alt=""
                className="aspect-square w-full rounded object-cover"
              />

              <div className="mt-3">
                <h3
                  className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  Simple Watch
                </h3>

                <p className="mt-1 text-sm text-gray-700">$150</p>
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
          <div className='bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24'>
            <div className='mx-auto max-w-xl text-center'>
              <h2 className='text-2xl font-bold text-white md:text-3xl'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className='hidden text-white/90 sm:mt-4 sm:block'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus
                etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet
                amet volutpat quisque ut interdum tincidunt duis.
              </p>

              <div className='mt-4 md:mt-8'>
                <a
                  href='#'
                  className='inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400'
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2'>
            <img
              alt=''
              src='https://images.unsplash.com/photo-1621274790572-7c32596bc67f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80'
              className='h-40 w-full object-cover sm:h-56 md:h-full'
            />

            <img
              alt=''
              src='https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
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
    <section className='overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2'>
      <div className='p-8 md:p-12 lg:px-16 '>
        <div className='mx-auto  text-center ltr:sm:text-left rtl:sm:text-right'>
          <h2 className='text-2xl font-bold text-gray-900 md:text-3xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className='hidden text-gray-500 md:mt-4 md:block'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
            sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
            volutpat quisque ut interdum tincidunt duis.
          </p>

          <div className='mt-4 md:mt-8'>
            <a
              href='#'
              className='inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400'
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <img
        alt=''
        src='https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        className='h-56 w-full object-cover sm:h-full'
      />
    </section>
  );
};

const pages = [<StaticPage1 />, <StaticPage2 />, <StaticPage3 />];

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
        {pages.map((Page, idx) => (
          <div key={idx} className='h-screen w-screen shrink-0'>
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
