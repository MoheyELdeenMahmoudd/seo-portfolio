import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['eg-en', 'eg-ar', 'sa-en', 'sa-ar', 'en', 'ar'];
const defaultLocale = 'eg-en';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass API, public files, and static assets
  if (
    pathname.startsWith('/api/') ||
    pathname.match(/\.(.*)$/) ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/studio')
  ) {
    return NextResponse.next();
  }

  // Redirect /en to /eg-en and /ar to /eg-ar for homepage
  if (pathname === '/en') {
    return NextResponse.redirect(new URL(`/eg-en`, request.url));
  }
  if (pathname === '/ar') {
    return NextResponse.redirect(new URL(`/eg-ar`, request.url));
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Handle hybrid architecture: Redirect country-specific locales to base locales for inner pages
  const [, routeLocale, ...rest] = pathname.split('/');
  const isInnerPage = rest[0] === 'projects' || rest[0] === 'blog';
  const isCountryLocale = routeLocale.includes('-');

  if (isInnerPage && isCountryLocale) {
    const baseLocale = routeLocale.includes('ar') ? 'ar' : 'en';
    return NextResponse.redirect(
      new URL(`/${baseLocale}/${rest.join('/')}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images|pdfs|admin|studio|robots.txt|sitemap.xml).*)',
  ],
};
