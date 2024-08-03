import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import connect from "@/app/lib/db";
import Enquiries from "@/app/lib/modals/enquiry";

export const DELETE = async (request, context) => {
    try {

        const id = context?.params?.id

        if (!id) {
            return new NextResponse(JSON.stringify({ message: "Enquiry id not found" }), { status: 404 });
        }

        if (!ObjectId.isValid(id)) {
            return new NextResponse(JSON.stringify({ message: `This Enquiry ${id} id Not Valid.` }), { status: 404 });
        }

        await connect();

        const deletedEnquiry = await Enquiries.findByIdAndDelete(id);

        if (!deletedEnquiry) {
            return new NextResponse(JSON.stringify({ message: "Enquiry not found in the database." }), { status: 404 });
        }

        return new NextResponse(JSON.stringify({ message: "Enquiry successfully deleted.", deletedEnquiry }), { status: 200 });

    } catch (error) {
        return new NextResponse("Error in deleting enquiry: " + error.message, { status: 500 });
    }
}