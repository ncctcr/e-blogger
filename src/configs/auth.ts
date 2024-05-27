import type {AuthOptions, User} from "next-auth";
import GoogleProvider from 'next-auth/providers/google'
import Credentials from "next-auth/providers/credentials";
import {authenticateUser, getUser} from "@/services/user.service";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!
        }),
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email', required: true},
                password: { label: 'password', type: 'password', required: true}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null

                try {
                    const authResponse = await authenticateUser({
                        email: credentials.email,
                        password: credentials.password
                    })

                    const token = authResponse.token;

                    const userData = await getUser(token)
                    const { password, ...userWithoutPassword } = userData;
                    return userWithoutPassword as User;
                } catch (error: any) {
                    let errorMessage = 'Authentication failed';
                    if (error.response && error.response.data && error.response.data.message) {
                        errorMessage = error.response.data.message;
                    }
                    throw new Error(errorMessage);
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
}