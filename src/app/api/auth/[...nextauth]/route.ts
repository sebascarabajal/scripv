import prisma from "@/supabase/prisma";
import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "MiCorreo@correo.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: any, req) {
        const { Email, Password } = credentials;

        const userFound = await prisma.usuarios.findUnique({
          where: {
            Email,
          },
        });

        if (!userFound) throw new Error("Invalid credentials");

        const validPassword = await bcrypt.compare(
          Password,
          userFound.Password
        );

        if (!validPassword) throw new Error("Invalid credentials");
        return {
          id: userFound.id_Usuario + "",
          name: userFound.Apellido,
          Email: userFound.Email,
        };
      },
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
      }
      return token;
    },
    async session({ session, user, token }) {
      if (token) {
        session.user.id = token.sub as string
      }
      return session
    }
  },
  pages: {
    signIn: "/auth/login"
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }