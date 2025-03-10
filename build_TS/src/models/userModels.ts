import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    }
})


export const userModel = mongoose.model("User", userSchema)