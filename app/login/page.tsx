'use client';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleRegistrationForm = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      console.log('Attempting to sign in...');
      const signIn = await fetch('http://localhost:4000/api/user/signInUser', {
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
              onChange={(emailInput) => setForm({ ...form, email: emailInput.target.value })}
            />
            <Input
              placeholder='Password'
              value={form.password}
              onChange={(passwordInput) =>
                setForm({ ...form, password: passwordInput.target.value })
              }
            />
            <Button type='submit'>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
