import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const route = NextAuth({
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      httpOptions: {
        timeout: 40000,
      },
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 0,
  },
  callbacks: {
    async signIn(options) {
      console.log('signIn', options);
      return true;
    },
  }
});

export {route as GET, route as POST}