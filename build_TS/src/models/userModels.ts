import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    }
})


export const userModel = mongoose.model("User", userSchema)