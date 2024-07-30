import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('authToken')?.value;
  console.log('Middleware token:', token);

  if (!token) {
    console.log('No token found, redirecting to login...');
    return NextResponse.redirect('https://re-new-upwork.vercel.app/sign-up');
  }

  try {
    const { payload } = await jwtVerify(token, secret);
    console.log('Token payload:', payload);

    // Optionally, you can check additional claims like expiration
    if (payload.exp && payload.exp * 1000 < Date.now()) {
      throw new Error('Token has expired');
    }
    console.log('Token is valid, proceeding with request...');

    // Type assertion for payload.user
    if (typeof payload.user === 'object' && payload.user !== null) {
      const user = payload.user as { name: string; email: string }; // Adjust types as per your payload structure
      const userName = user.name;
      console.log('this is name', userName);
      // Store user data in a custom header
      const response = NextResponse.next();
      response.headers.set('X-User-Name', userName);

      return response;
    } else {
      throw new Error('Invalid token payload structure');
    }
  } catch (err) {
    console.error('Token verification failed:', err);
    return NextResponse.redirect('https://re-new-upwork.vercel.app/login');
  }
}

export const config = {
  matcher: '/' // Apply middleware to protected routes
};
