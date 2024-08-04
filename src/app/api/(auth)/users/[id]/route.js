import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connect from "@/app/lib/db";
import Users from "@/app/lib/modals/user";

export const PATCH = async (request, context) => {
    try {
        const id = context?.params?.id;
        const { searchParams } = new URL(request.url);
        const status = searchParams.get('status');

        if (!id) {
            return new NextResponse(JSON.stringify({ message: "User ID not found." }), { status: 404 });
        }

        if (!ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ message: `Invalid User ID: ${id}.` }), { status: 400 });
        }

        await connect();

        if (status === undefined) {
            return new NextResponse(JSON.stringify({ message: "Status value is required." }), { status: 400 });
        }

        const updatedUser = await Users.findByIdAndUpdate(
            id,
            { status },
            { new: true, runValidators: true }
        );

        if (!updatedUser) {
            return new NextResponse(JSON.stringify({ message: "User not found in the database." }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "User status successfully updated.", updatedUser }), { status: 200 });

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Error updating user status.", error: error.message }), { status: 500 });
    }
};

export const GET = async (request, context) => {
    try {
        const id = context?.params?.id;

        if (!id) {
            return new NextResponse(JSON.stringify({ message: "User ID not found." }), { status: 404 });
        }

        if (!ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ message: `Invalid User ID: ${id}.` }), { status: 400 });
        }

        await connect();

        const foundUser = await Users.findById(id);

        if (!foundUser) {
            return new NextResponse(JSON.stringify({ message: "User not found in the database." }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "User Fetch Successfully.", data: foundUser }), { status: 200 });

    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "Error Fetching user detail.", error: error.message }), { status: 500 });
    }
};