"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.updateExpense = exports.getUserExpenses = exports.createExpense = void 0;
const expenseModels_1 = require("../models/expenseModels");
//crate expense
const createExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, amount, category, description } = req.body;
    try {
        const newExpense = new expenseModels_1.expenseModel({
            userId,
            amount,
            category,
            description,
        });
        yield newExpense.save();
        res.status(201).json({ message: "Expense added", expense: newExpense });
        return;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createExpense = createExpense;
//get expense
const getUserExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const expenses = yield expenseModels_1.expenseModel.find({ userId: userId });
        res.json(expenses);
    }
    catch (error) {
        res.status(500).json({ message: "error, could not find expenses!" });
    }
});
exports.getUserExpenses = getUserExpenses;
//update expense
const updateExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { expenseId } = req.params;
    try {
        const updateExpense = yield expenseModels_1.expenseModel.findByIdAndUpdate(expenseId, req.body, { new: true });
        if (!updateExpense) {
            res.status(404).json({ message: "Expense not found" });
        }
        res.json(updateExpense);
    }
    catch (error) {
        res.status(500).json({ message: "Could not update expense" });
    }
});
exports.updateExpense = updateExpense;
//delete expense
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { expenseId } = req.params;
    try {
        const deleteExpense = yield expenseModels_1.expenseModel.findByIdAndDelete(expenseId);
        if (!deleteExpense) {
            res.status(404).json({ message: "Expsense not found" });
            return;
        }
        res.json({ message: "Expense deleted", expense: deleteExpense });
    }
    catch (error) {
        res.status(500).json({ message: "Could not delete expense" });
    }
});
exports.deleteExpense = deleteExpense;
