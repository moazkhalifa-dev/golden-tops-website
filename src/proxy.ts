import { NextRequest, NextResponse } from "next/server";
import { i18n } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return NextResponse.redirect(
    new URL(`/${i18n.defaultLocale}${pathname}`, request.url),
  );
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico).*)"],
};
