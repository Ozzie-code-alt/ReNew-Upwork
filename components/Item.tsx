'use client';
import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from '@/providers/UserContext';

type ItemProps = {
  name: string;
  description: string;
  productId: number;
};
const Item = ({ name, description, productId }: ItemProps) => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('SomeComponent must be used within a CurrentUserProvider');
  }

  const { userID } = context;

  // console.log('this is userID ', userID);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = await fetch(`http://localhost:4000/api/cart/${userID}`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          userId: 5,
          totalPrice: 1000,
          productId: productId
        })
      });

      if (!data) {
        console.log('No Data');
      }
    } catch (error) {
      console.error('error in adding to cart', error);
    }
  };
  return (
    <div className='relative h-[400px] w-screen max-w-full border border-gray-600 bg-gray-100 px-4 pt-8  sm:px-6 lg:px-8 '>
      <div className='mt-4 space-y-6'>
        <ul className='space-y-4'>
          <li className='flex items-center gap-4'>
            <img
              src='https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80'
              alt=''
              className='size-16 rounded object-cover'
            />

            <div>
              <h3 className='text-sm text-gray-900'>{name}</h3>

              <dl className='mt-0.5 space-y-px text-[10px] text-gray-600'>{description}</dl>
            </div>

            <div className='flex flex-1 items-center justify-end gap-2'>
              <form>
                <label htmlFor='Line1Qty' className='sr-only'>
                  {' '}
                  Quantity{' '}
                </label>

                <input
                  type='number'
                  min='1'
                  value='1'
                  id='Line1Qty'
                  className='h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none'
                />
              </form>
              <button
                className='block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600'
                type='submit'
                onClick={handleSubmit}
              >
                Add to Cart
              </button>

              <button className='text-gray-600 transition hover:text-red-600'>
                <span className='sr-only'>Remove item</span>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='h-4 w-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                  />
                </svg>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Item;
