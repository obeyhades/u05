import mongoose from "mongoose";
import { incomeModels } from "../models/incomeModels";
import { Request, Response } from "express";

//create income
const createIncome = async (req: Request, res: Response): Promise<void> => {
  const { userId, amount, category } = req.body;

  try {
    const newIncome = new incomeModels({ userId, amount, category });
    await newIncome.save();

    res.status(201).json({ message: "Income added", income: newIncome });
    return;
  } catch (error) {
    console.error(error);
  }
};

//get income

const getUserIncome = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.body;
  try {
    const incomes = await incomeModels.find(userId);
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: "error, could not find incomes!" });
  }
};

//update user income
const updateIncome = async (req: Request, res: Response): Promise<void> => {
  const { incomeId } = req.params;
  try {
    const updateIncome = await incomeModels.findByIdAndUpdate(incomeId,req.body, { new: true });

    if (!updateIncome) {
      res.status(404).json({ message: "Income not found" });
    }

    res.json(updateIncome);
  } catch (error) {
    res.status(500).json({ message: "Could not update income" }); 
  }
};


export { createIncome, getUserIncome, updateIncome };
