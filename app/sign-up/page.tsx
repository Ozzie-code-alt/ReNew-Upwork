'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const SignUp = () => {
  const router = useRouter();
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const handleRegistrationForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const SignUpData = await fetch('http://localhost:4000/api/user/createUser', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          hashedPassword: form.password,
          address: 'SampleAddress'
        })
      });
      if (!SignUpData) {
        console.log('SignUp Error');
      } else {
        router.push('/');
      }
      console.log(form);
    } catch (error) {
      console.log('fetch error', error);
    }
  };
  return (
    <div className='border flex justify-center items-center h-screen border-red-500'>
      {/*Left*/}
      <div className='w-[50%] border text-9xl h-[70%] border-blue-500 flex justify-center items-center'>
        Sign Up
      </div>
      {/*Right*/}
      <div className='w-[50%] border h-[70%] border-green-500 flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col gap-5 border items-center'>
          <form className='flex flex-col gap-10 w-[50%]' onSubmit={handleRegistrationForm}>
            <Input
              placeholder='Fullname'
              value={form.fullName}
              onChange={(fullNameInput) => {
                setForm({ ...form, fullName: fullNameInput.target.value });
              }}
            />
            <Input
              placeholder='Email'
              value={form.email}
              onChange={(emailInput) => {
                setForm({ ...form, email: emailInput.target.value });
              }}
            />
            <Input
              placeholder='Password'
              value={form.password}
              onChange={(passwordInput) => {
                setForm({ ...form, password: passwordInput.target.value });
              }}
            />
            <Button type='submit'>Submit</Button>
          </form>
          <div className=' w-[50%]'>
            <Link href='/login'>
              <p className='text-gray-500 cursor-pointer'>
                Already have an account ? <span className='text-black'>Sign In</span>.{' '}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
