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
exports.deleteSavingGoal = exports.updateSavingGoal = exports.getUserSaving = exports.createSaving = void 0;
const savingModels_1 = require("../models/savingModels");
//create saving
const createSaving = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { goalName, targetAmount, currentSavings } = req.body;
    const userId = req.userId;
    try {
        const newGoal = new savingModels_1.savingModels({
            userId,
            goalName,
            targetAmount,
            currentSavings,
        });
        yield newGoal.save();
        res.status(201).json({ message: "Saving goal added", goal: newGoal });
        return;
    }
    catch (error) {
        console.error(error);
    }
});
exports.createSaving = createSaving;
//get user saving
const getUserSaving = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    console.log(userId);
    try {
        const goal = yield savingModels_1.savingModels.find({ userId: userId });
        res.json(goal);
    }
    catch (error) {
        res.status(500).json({ message: "error, could not find your dreams :)" });
    }
});
exports.getUserSaving = getUserSaving;
//update saving
const updateSavingGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { goalId } = req.params;
    try {
        const updatedGoal = yield savingModels_1.savingModels.findByIdAndUpdate(goalId, req.body, {
            new: true,
        });
        if (!updatedGoal) {
            res.status(404).json({ message: "saving goal not found" });
            return;
        }
        res.json(updatedGoal);
    }
    catch (error) {
        res.status(500).json({ message: "could not update saving goal" });
    }
});
exports.updateSavingGoal = updateSavingGoal;
//remove saving
const deleteSavingGoal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { goalId } = req.params;
    try {
        const deletedGoal = yield savingModels_1.savingModels.findByIdAndDelete(goalId);
        if (!deletedGoal) {
            res.status(404).json({ message: "Saving goal not found" });
            return;
        }
        res.json({ message: "saving goal got deleted", goal: deletedGoal });
    }
    catch (error) {
        res.status(500).json({ message: "could not delete saving goal" });
    }
});
exports.deleteSavingGoal = deleteSavingGoal;
