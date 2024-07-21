import { auth } from "./auth";

export default auth((req: any) => {
    // if (req.auth && req.nextUrl.pathname !== "/login") {
    //     const newUrl = new URL("/login", req.nextUrl.pathname);
    //     return Response.redirect(newUrl);
    // }
});
