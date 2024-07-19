import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;
  console.log('Middleware token:', token);

  if (!token) {
    console.log('No token found, redirecting to login...');
    return NextResponse.redirect('http://localhost:3000/login');
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    console.log('Token payload:', payload);

    // Optionally, you can check additional claims like expiration
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      throw new Error('Token has expired');
    }

    // Token is valid, allow the request to proceed
    console.log('Token is valid, proceeding with request...');
    return NextResponse.next();
  } catch (err) {
    console.error('Token verification failed:', err);
    return NextResponse.redirect('http://localhost:3000/login');
  }
}

export const config = {
  matcher: ['/'] // Apply middleware to protected routes
};
