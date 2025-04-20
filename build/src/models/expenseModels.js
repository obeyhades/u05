"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const expenseSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
}, { timestamps: true });
exports.expenseModel = mongoose_1.default.model("Expense", expenseSchema);
