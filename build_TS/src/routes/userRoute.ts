import express  from "express";
import { userModel } from "../models/userModels"

const router = express.Router()

router.post("/", async (req: any, res: any) => {
    const {username} = req.body

    try {
        const existingUser = await userModel.findOne({ username })
        if (existingUser) {
            return res.status(400).json({ message: "user exist"})
            
        }
        const newUser = new userModel({ username })
        await newUser.save()
    } catch (error) {
        console.error(error);
    } 
})


export { router as userRouter }