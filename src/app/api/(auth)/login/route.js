import connect from "@/app/lib/db";
import Users from "@/app/lib/modals/user";
import { signIn } from "@/auth";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        const body = await request.json();

        const email_id = body?.email_id
        const password = body?.password

        if (!email_id ||!password) {
            return new NextResponse(JSON.stringify({message: "Missing email_id or password"}), { status: 422 });
        }

        await connect();

        const foundUser = await Users.findOne({ email_id: email_id });

        if (!foundUser) {
            return new NextResponse(JSON.stringify({message: "User not found"}), { status: 404 });
        }

        if (foundUser.password!== password) {
            return new NextResponse(JSON.stringify({message: "Invalid password"}), { status: 401 });
        }

        const signing = await signIn("credentials", {
            email_id,
            password,
            redirect: false,
        })

        if(signing){

            return new NextResponse(JSON.stringify({message: "User Logged in successfully."}), { status: 201 });
        }
        
        return new NextResponse(JSON.stringify({message: "Something went wrong."}), { status: 500 });

    } catch (error) {
        return new NextResponse("Error in login user: " + error.message, { status: 500 });
    }
}