import { NextResponse, NextRequest } from 'next/server';
import { getSessionCookie } from 'better-auth/cookies';

// This function can be marked `async` if using `await` inside
export default async function proxy(request: NextRequest) {
  const cookie = getSessionCookie(request);
  const { pathname } = request.nextUrl;
  const isProtected = pathname.startsWith('/dashboard');
  const isAuthPage = pathname === '/sign-in' || pathname === '/sign-up';

  if (isProtected && !cookie) {
    return NextResponse.redirect(new URL('/404', request.url));
  }

  if (isAuthPage && cookie) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/sign-in', '/sign-up'],
};
