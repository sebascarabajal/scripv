import prisma from "@/libs/prisma";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "MiCorreo@correo.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any, req) {
                const { email, password } = credentials;
        
                const userFound = await prisma.user.findUnique({
                  where: {
                    email,
                  },
                });
        
                if (!userFound) throw new Error("Invalid credentials");
        
                const validPassword = await bcrypt.compare(
                  password,
                  userFound.password
                );
        
                if (!validPassword) throw new Error("Invalid credentials");
        
                return {
                  id: userFound.id + "",
                  name: userFound.username,
                  email: userFound.email,
                };
            },
        })
    ], 
    pages: {
        signIn: "/auth/login"
    }
})

export { handler as GET, handler as POST }