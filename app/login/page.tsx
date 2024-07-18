'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const handleRegistrationForm = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className='border flex justify-center items-center h-screen border-red-500'>
      {/*Left*/}
      <div className='w-[50%] border text-9xl h-[70%] border-blue-500 flex justify-center items-center'>
        Login
      </div>
      {/*Right*/}
      <div className='w-[50%] border h-[70%] border-green-500 flex flex-col justify-center items-center'>
        <div className='w-full flex flex-col gap-5 border items-center'>
          <form className='flex flex-col gap-10 w-[50%]' onSubmit={handleRegistrationForm}>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
