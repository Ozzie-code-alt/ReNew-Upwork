'use client';
import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({ fullname: '', email: '', password: '' });
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className='border flex justify-center items-center h-screen border-red-500'>
      {/*Left*/}
      <div className='w-[50%] border h-[70%] border-blue-500 flex justify-center items-center'>
        Login Text Here
      </div>
      {/*Right*/}
      <div className='w-[50%] border h-[70%] border-green-500 flex justify-center items-center'>
        <form className='flex flex-col gap-10' onSubmit={handleSubmit}>
          <div className='flex gap-5'>
            <label htmlFor='name' className='text-5xl'>
              FullName
            </label>

            <input
              type='text'
              id='name'
              className='px-5'
              onChange={(nameText) => setForm({ ...form, fullname: nameText.target.value })}
              value={form.fullname}
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='email' className='text-5xl'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='px-5'
              onChange={(emailText) => setForm({ ...form, email: emailText.target.value })}
              value={form.email}
            />
          </div>
          <div className='flex gap-5'>
            <label htmlFor='password' className='text-5xl'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='px-5'
              onChange={(passwordText) => setForm({ ...form, password: passwordText.target.value })}
              value={form.password}
            />
          </div>
          <button type='submit' className='border rounded-md  py-2 w-[30%]   '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
