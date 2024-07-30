'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleRegistrationForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      console.log('Attempting to sign in...');
      const signIn = await fetch('https://re-new-upwork.vercel.app/api/user/signInUser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          hashedPassword: form.password
        })
      });

      if (!signIn.ok) {
        console.error('Error signing in:', signIn.statusText);
        return;
      }

      const data = await signIn.json();
      const token = data.token;
      console.log('Sign-in successful, received token:', token);

      Cookies.set('authToken', token, { secure: true, sameSite: 'Strict', path: '/' });
      console.log('Token set in cookies.');

      router.push('/');
    } catch (error) {
      console.error('Form Error:', error);
    }
  };

  return (
    <section className='relative flex flex-wrap lg:h-screen lg:items-center'>
      <div className='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24'>
        <div className='mx-auto max-w-lg text-center'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Get started today!</h1>

          <p className='mt-4 text-gray-500'>Login With your ReNew Account</p>
        </div>

        <form
          action='#'
          className='mx-auto mb-0 mt-8 max-w-md space-y-4'
          onSubmit={handleRegistrationForm}
        >
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>

            <div className='relative'>
              <Input
                placeholder='Email'
                value={form.email}
                onChange={(emailInput) => setForm({ ...form, email: emailInput.target.value })}
              />

              <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor='password' className='sr-only'>
              Password
            </label>

            <div className='relative'>
              <Input
                placeholder='Password'
                value={form.password}
                onChange={(passwordInput) =>
                  setForm({ ...form, password: passwordInput.target.value })
                }
              />
              <span className='absolute inset-y-0 end-0 grid place-content-center px-4'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-4 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </span>
            </div>
          </div>

          <div className='flex items-center justify-between'>
            <Link href='/sign-up'>
              <p className='text-gray-500 cursor-pointer'>
                Dont have an account ? <span className='text-black'>Sign Up</span>.{' '}
              </p>
            </Link>
            <button
              className='inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white'
              type='submit'
            >
              Sign in
            </button>
          </div>
        </form>
      </div>

      <div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
        <img
          alt=''
          src='https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          className='absolute inset-0 h-full w-full object-cover'
        />
      </div>
    </section>
  );
};

export default Login;
