import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users from "./app/lib/modals/user";
import connect from "./app/lib/db";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                
            },

            authorize: async (credentials) => {

                try {

                    const email_id = credentials.email_id;

                    const password = credentials.password;

                    await connect();
                    
                    const foundUser = await Users.findOne({ email_id: email_id });

                    const user={
                        name: foundUser.name,
                        email_id: foundUser.email_id,
                        status: foundUser.status,
                        username: foundUser.username,
                    }

                    return user;

                } catch (error) {
                    console.error('Error in signIn', error);
                    return null;

                }

            }
        }),
    ],
    callbacks: {
        async session({session, token}) {

            if(token){
                session.name = token.name;
                session.email_id = token.email_id;
                session.username = token.username;
                session.status = token.status;
            }
            return session
        },
        async jwt({token, user}) {
            if(user){
                token.name = user.name;
                token.email_id = user.email_id;
                token.username = user.username;
                token.status = user.status;
            }
            return token
        }
    }

    // pages: {
    //     signIn: "/dashboard",
    // }
})