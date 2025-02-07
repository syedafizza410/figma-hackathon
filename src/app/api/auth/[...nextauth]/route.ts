import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const adminUser = { id: "1", email: "admin@example.com", password: "admin123" };

        if (
          credentials?.email === adminUser.email &&
          credentials?.password === adminUser.password
        ) {
          return { id: adminUser.id, email: adminUser.email };
        }
        return null; 
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, 
  pages: {
    signIn: "/login", 
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };