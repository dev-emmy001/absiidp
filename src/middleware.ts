import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

let locales = ['en', 'ig'];
let defaultLocale = 'en';

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  
  // Exclude static files, api routes, Next.js internals, and images
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') || 
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Get locale from cookie, fallback to default
  const localeCookie = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = locales.includes(localeCookie || '') ? localeCookie : defaultLocale;

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // If they visit the root `/`, rewrite them to `/[locale]`
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
