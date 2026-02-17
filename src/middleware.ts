import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CUSTOM_DOMAIN = "www.nutracorelabsperu.com";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  if (host !== CUSTOM_DOMAIN && host.includes("vercel.app")) {
    const url = new URL(request.url);
    url.host = CUSTOM_DOMAIN;
    url.protocol = "https";
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
