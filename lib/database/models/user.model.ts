import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    photo: { type: String, required: true },
    // password: { type: String, required: true, min: 5 },
    // addedCars: { type: Array, default: []},
    // rentedCars: { type: Array, default: [] },
    // location: String,
},   
// { timestamps: true }
)

const User = models.User || model('User', UserSchema);

export default User;