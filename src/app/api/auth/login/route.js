import { NextResponse } from "next/server";


export async function POST(request) {
  const { email, password } = await request.json();
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (email === adminEmail && password === adminPassword) {
    // In production, generate a real JWT here
    const token = "demo-jwt-token";
    // Optionally set cookie
    const response = NextResponse.json({ token });
    response.cookies.set("jwt", token, { httpOnly: true, path: "/" });
    return response;
  }
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}