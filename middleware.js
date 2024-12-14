


// export function middleware(request) {
//   return NextResponse.redirect(new URL("/about", request.url));
// }

import { auth } from "./app/_lib/auth.js";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
