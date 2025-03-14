import mongoose from "mongoose";
import { incomeModels } from "../models/incomeModels";
import { Request, Response } from "express";

 const createIncome = async (req: Request, res: Response): Promise<void> => {
    const { userId, amount, category } = req.body;

    try{
        const newIncome =  new incomeModels({userId, amount, category})
        await newIncome.save();

        res.status(201).json({ message: "Income added", income: newIncome });
        return;
    } catch(error) {
        console.error(error);
    }

}



export {createIncome, };