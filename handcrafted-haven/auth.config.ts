 import type { NextAuthConfig } from 'next-auth';
 
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ request: { nextUrl }, auth }) {
     
      const isLoggedIn = !!auth?.user;
      const isOnProducts = nextUrl.pathname.startsWith("/products");
    
      if (isOnProducts) {
        if (isLoggedIn) {
          return true; // Allow access if logged in
        } else {
          return Response.redirect(new URL("/login", nextUrl)); // Redirect unauthenticated users to the login page
        }
      } 

      return true;
    },  
    // @ts-ignore
    async session({ session, token}) {
      // @ts-ignore
      session.user.id = token?.sub;
      return session;
    }
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig; 