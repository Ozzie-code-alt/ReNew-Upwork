'use client';

import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { cn } from '@/lib/utils';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { Modal, ModalBody, ModalContent, ModalTrigger } from '@/components/ui/animatedModal';
import { Input } from '@/components/ui/input';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Cart from './Cart';
import { UserContext } from '@/providers/UserContext';
import Image from 'next/image';
const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.'
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.'
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.'
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.'
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.'
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'
  }
];

export function Navbar() {
  const [userName, setUserName] = useState('');
  const [grabId, setGrabId] = useState<JwtPayload | null>(null);
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('SomeComponent must be used within a CurrentUserProvider');
  }

  const { setUserID, userID } = context;
  useEffect(() => {
    const grabCookies = Cookies.get('authToken')?.valueOf();
    if (grabCookies) {
      const decrypted = jwt.decode(grabCookies as string);
      if (decrypted && typeof decrypted !== 'string') {
        setGrabId(decrypted);
      }
    }
  }, []);
  setUserID(grabId?.user.id);
  console.log('this is grabID', grabId?.user.id);
  console.log('user ID from NAVBAR', userID);
  useEffect(() => {
    if (grabId && typeof grabId !== 'undefined') {
      const fetchUserName = async () => {
        try {
          const res = await fetch(`http://localhost:4000/api/user/${grabId?.user.id}`, {
            method: 'GET',
            credentials: 'include'
          });

          if (res.ok) {
            const data = await res.json();

            setUserName(data.name);
          } else {
            console.log('error fetching data');
          }
        } catch (error) {
          console.log('fetch error:', error);
        }
      };

      fetchUserName();
    }
  }, [grabId]);

  return (
    <div className='border flex justify-between   bg-[#FFD966] px-10 rounded-lg items-center  py-10'>
      <Modal>
        <div>
          <Image src={'/Logo.png'} height={50} width={50} alt='Logo' />
        </div>
        <div className='flex gap-5 items-center'>
          <div className=''>
            <Input type='text' placeholder='Find in Store' />
          </div>
          <div className='cursor-pointer'>
            {userName ? (
              <div>Welcome, {userName}</div>
            ) : (
              <Link href={'/sign-up'}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </Link>
            )}
          </div>
          <ModalTrigger>
            <div className='cursor-pointer'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </div>
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <Cart />
            </ModalContent>
          </ModalBody>
        </div>
      </Modal>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
