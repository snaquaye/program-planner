import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
        credentials: {
            email: {},
            PassThrough: {},
        },
        async authorize(credentials, req) {
            let user = null

            if (!user) {
                throw new Error("User not found.")
            }

            return user;
        },
    })
  ],
})
