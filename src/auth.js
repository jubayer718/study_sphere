import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import Google from 'next-auth/providers/google';
import Twitter from "next-auth/providers/twitter";

export const { handlers, signIn, signOut, getSession } = NextAuth({
  providers: [
    Google,
    Twitter,
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "Enter your email"
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "Enter your password"
        }
      },
      authorize: async (credentials) => {
         try {
          const res = await fetch(`${process.env.BACKEND_URL}/api/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            })
          },
          )

          const data = await res.json();
    
          if (res.ok && data.data) {
            return {
              id: data.data.id,
              email: data.data.email,
              name: data.data.name,
            };

          }

          return null;
        } catch (error) {
            console.error("Authorize error:", error);
          return null;
        }
      }
    })
  ],
    callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth
    },
  },
  pages: {
   signIn:'/login'
 }
})