import type { NextAuthConfig, User } from "next-auth";
import { ZodError } from "zod";
import AuthService from "./services/auth-service";
import { CredentialSchema } from "./lib/schema";
import Credentials from "next-auth/providers/credentials";

const publicRoutes = [
  "/",
  "/auth",
  "/auth/forgot-password",
  "/auth/reset-password",
];

export const authConfig = {
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      if (publicRoutes.includes(nextUrl.pathname) && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      if (!publicRoutes.includes(nextUrl.pathname) && !isLoggedIn) {
        return false;
      }

      return true;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        try {
          let user: User | null = null;

          const { email, password } = await CredentialSchema.parseAsync(
            credentials
          );

          user = await AuthService.login(email, password);

          if (!user) {
            throw new Error("User not found.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }

          throw error;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;