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
  const { userId } = req.params;

  try {
    const incomes = await incomeModels.find({ userId: userId });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: "error, could not find incomes!" });
    return;
  }
};

//update user income
const updateIncome = async (req: Request, res: Response): Promise<void> => {
  const { incomeId } = req.params;

  try {
    const updateIncome = await incomeModels.findByIdAndUpdate(
      incomeId,
      req.body,
      { new: true }
    );

    if (!updateIncome) {
      res.status(404).json({ message: "Income not found" });
    }

    res.json(updateIncome);
  } catch (error) {
    res.status(500).json({ message: "Could not update income" });
  }
};

//delete income
const deleteIncome = async (req: Request, res: Response): Promise<void> => {
  const { incomeId } = req.params;
  console.log(incomeId);

  try {
    const deleteIncome = await incomeModels.findByIdAndDelete(incomeId);

    if (!deleteIncome) {
      res.status(404).json({ message: "Income not found" });
    }

    res.json({ message: "income deleted", income: deleteIncome });
    return;
  } catch (error) {
    res.status(500).json({ message: "Could not delete income" });
  }
};

export { createIncome, getUserIncome, updateIncome, deleteIncome };
