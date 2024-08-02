import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        email_id: { type: String, required: true, unique: true },
        username: { type: String, required: true, unique: true },
        name: { type: String, required: true},
        // password: { type: String, required: true, select: false},
        password: { type: String, required: true},
        status: { type: Boolean, default: false}
    },
    {
        timestamps: true,
    }
)

const Users = models?.User || model('User', UserSchema);

export default Users; 