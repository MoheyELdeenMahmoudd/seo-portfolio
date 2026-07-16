import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['eg-en', 'eg-ar', 'sa-en', 'sa-ar'];
const defaultLocale = 'eg-en';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Exclude paths that should not be redirected
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/images/') ||
    pathname.includes('.') // like favicon.ico, robots.txt, sitemap.xml
  ) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Redirect if there is no locale
  // e.g. incoming request is /projects/tcmg -> /eg-en/projects/tcmg
  const redirectUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
  ],
};
