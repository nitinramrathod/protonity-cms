import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import User from "@/app/lib/modals/user";
import { ObjectId } from "mongodb";

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in user fetching " + error.message, { status: 500 });
    }
}

export const POST = async (request) => {
    try {
        const body = await request.json();
        
        await connect();

        const newUser = new User(body);

        const saveUser = await newUser.save();

        if (!saveUser) {
            return new NextResponse(JSON.stringify({ message: "User Creating error." }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "New user is created", user: newUser }), { status: 201 });

    } catch (error) {
        return new NextResponse("Error in creating user: " + error.message, { status: 500 });
    }
}

export const PATCH = async (request) => {
    try {
        const body = await request.json();
        await connect();
        const newUser = new User(body);
        await newUser.save();
        return new NextResponse(JSON.stringify({ message: "New user is created", user: newUser }), { status: 201 });

    } catch (error) {
        return new NextResponse("Error in creating user: " + error.message, { status: 500 });
    }
}

export const DELETE = async (request) => {
    try {
        const { searchParams } = new URL(request.url);
        const userId = searchParams.get('userId');

        if (!userId) {
            return new NextResponse(JSON.stringify({ message: "User id not found" }), { status: 404 });
        }

        if (!ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: `This ${userId} User id Not Valid.` }), { status: 404 });
        }

        await connect();

        const deleteUser = await User.findByIdAndDelete(userId);

        if (!deleteUser) {
            return new NextResponse(JSON.stringify({ message: "User not found in the database." }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "User successfully deleted." }), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in deleting user: " + error.message, { status: 500 });
    }
}


