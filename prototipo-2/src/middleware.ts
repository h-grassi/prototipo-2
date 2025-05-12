import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

/*
// faz com que todos caminhos do array estejam protegidos por senha
// outra maneira de fazer é utilizar em cada arquivo que deseja proteger: await auth.protect() 
const isProtectedRoute = createRouteMatcher(['/(.*)']) 

export default clerkMiddleware(async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect()
})*/


export default clerkMiddleware;
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}