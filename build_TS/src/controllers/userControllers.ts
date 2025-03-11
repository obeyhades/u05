import mongoose from "mongoose"
import { userModel } from "../models/userModels"
import { Request, Response } from "express"


const createUser= async (req: Request, res:Response): Promise<void>  =>{
    const {username} = req.body

    try {
        const existingUser = await userModel.findOne({ username })
        if (existingUser) {
            res.status(400).json({ message: "user exist"})
            return;
        }

        const newUser = new userModel({ username })
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async (req: Request, res:Response): Promise<void>  =>{
    const {userid} = req.body
    console.log(userid);
    
    const deleteUser = await userModel.findByIdAndDelete(userid)
    console.log(deleteUser)
    res.json(deleteUser)
    } 

export {deleteUser, createUser}