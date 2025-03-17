import mongoose from "mongoose";
import { Request, Response } from "express";
import { expenseModel } from "../models/expenseModels";


//crate expense
const createExpense = async (req: Request, res: Response): Promise<void> => {
    const { userId, amount, category, description } = req.body;

    try{
        const newExpense = new expenseModel({ userId, amount, category, description });
        await newExpense.save();
        
        res.status(201).json ({message: "Expense added", expense: newExpense});
        return;
    } catch (error) {
        console.error(error);
    }
};


//get expense




export {createExpense};