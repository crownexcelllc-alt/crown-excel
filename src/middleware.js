import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("jwt")?.value;
  const isProtected = request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login");
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};