import { NextResponse } from "next/server";

export async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const token = request.cookies.get("jwt")?.value;

  // 1. Admin Authentication Check
  const isProtected = pathname.startsWith("/admin") && !pathname.startsWith("/admin/login");
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // 2. SEO URL Redirects Check (skip for admin, api, static files, and paths with extensions)
  if (!pathname.startsWith("/admin") && !pathname.startsWith("/api") && !pathname.startsWith("/_next") && !pathname.includes('.')) {
    try {
      // Query the fast lookup endpoint
      const checkUrl = new URL(`/api/cms/redirect-check?path=${encodeURIComponent(pathname)}`, request.url);
      const res = await fetch(checkUrl);
      
      if (res.ok) {
        const data = await res.json();
        if (data && data.redirect) {
          const destination = data.redirect.toPath;
          const statusCode = data.redirect.type === '302' ? 302 : 301;
          
          if (destination.startsWith('http://') || destination.startsWith('https://')) {
            return NextResponse.redirect(destination, statusCode);
          } else {
            return NextResponse.redirect(new URL(destination, request.url), statusCode);
          }
        }
      }
    } catch (err) {
      console.error("Middleware URL redirect lookup failed:", err);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - standard file extensions (.png, .jpg, .svg, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)",
  ],
};