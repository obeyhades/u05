import mongoose from "mongoose";
import { userModel } from "../models/userModels";
import { Request, Response } from "express";


export const logIn = async (req: Request, res: Response): Promise<void> => {
    const {username, password} =   req.body;

    const user = await userModel.findOne({ username });
    if (!user) {
         res.status(401).json({ message: "Invalid credentials"});
        } 
    if (password !== user?.password) {
            res.status(401).json({ message: "Invalid credentials" });
            }
            res.json({ message: "Login successful", user_id: user?._id, user_name: user?.username});
            
}