import { NextResponse } from "next/server";
import connect from "@/app/lib/db";
import Enquiry from "@/app/lib/modals/enquiry";
import { ObjectId } from "mongodb";

export const GET = async () => {
    try {
        await connect();
        const users = await Enquiry.find();
        return new NextResponse(JSON.stringify(users), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in user fetching " + error.message, { status: 500 });
    }
}

export const POST = async (request) => {
    try {
        const body = await request.json();
        await connect();
        const newUser = new Enquiry(body);
        await newUser.save();
        return new NextResponse(JSON.stringify({ message: "New enquiry is created", user: newUser }), { status: 201 });

    } catch (error) {
        return new NextResponse("Error in creating enquiry: " + error.message, { status: 500 });
    }
}
