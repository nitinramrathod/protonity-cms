import { Schema, model, models } from "mongoose";

const EnquirySchema = new Schema(
    {
        name: { type: String, required: true, },
        organization: { type: String },
        mobile: { type: String, required: true },
        email_id: { type: String, required: true },
        address: { type: String, required: true },
        pincode: { type: String, required: true },
        message: { type: String, required: true }
    },
    {
        timestamps: true,
    }
)

const Enquiries = models.Enquiry || model('Enquiry', EnquirySchema);

export default Enquiries; 