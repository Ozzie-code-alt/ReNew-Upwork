'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Login = () => {
  const [form, setForm] = useState({ fullName: '', email: '', password: '' });
  const handleRegistrationForm = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className='border flex justify-center items-center h-screen border-red-500'>
      {/*Left*/}
      <div className='w-[50%] border text-9xl h-[70%] border-blue-500 flex justify-center items-center'>
        Sign Up
      </div>
      {/*Right*/}
      <div className='w-[50%] border h-[70%] border-green-500 flex justify-center items-center'>
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
      </div>
    </div>
  );
};

export default Login;
