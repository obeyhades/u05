import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require:true},
    
}, { timestamps: true });


export const userModel = mongoose.model("User", userSchema)