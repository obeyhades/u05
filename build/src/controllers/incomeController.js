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
exports.deleteIncome = exports.updateIncome = exports.getUserIncome = exports.createIncome = void 0;
const incomeModels_1 = require("../models/incomeModels");
//create income
const createIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, amount, category } = req.body;
    try {
        const newIncome = new incomeModels_1.incomeModels({ userId, amount, category });
        yield newIncome.save();
        res.status(201).json({ message: "Income added", income: newIncome });
        return;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createIncome = createIncome;
//get income
const getUserIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const incomes = yield incomeModels_1.incomeModels.find({ userId: userId });
        res.json(incomes);
    }
    catch (error) {
        res.status(500).json({ message: "error, could not find incomes!" });
        return;
    }
});
exports.getUserIncome = getUserIncome;
//update user income
const updateIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { incomeId } = req.params;
    try {
        const updateIncome = yield incomeModels_1.incomeModels.findByIdAndUpdate(incomeId, req.body, { new: true });
        if (!updateIncome) {
            res.status(404).json({ message: "Income not found" });
        }
        res.json(updateIncome);
    }
    catch (error) {
        res.status(500).json({ message: "Could not update income" });
    }
});
exports.updateIncome = updateIncome;
//delete income
const deleteIncome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { incomeId } = req.params;
    console.log(incomeId);
    try {
        const deleteIncome = yield incomeModels_1.incomeModels.findByIdAndDelete(incomeId);
        if (!deleteIncome) {
            res.status(404).json({ message: "Income not found" });
        }
        res.json({ message: "income deleted", income: deleteIncome });
        return;
    }
    catch (error) {
        res.status(500).json({ message: "Could not delete income" });
    }
});
exports.deleteIncome = deleteIncome;
