import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      console.log(auth, request);
      return !!auth?.user;
    },
    async signIn() {
      
    }
  },
};

export const {
  signIn,
  signOut,
  auth,
  handlers: { GET, POST },
} = NextAuth(authConfig);
