"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeModels = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const incomeSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
}, { timestamps: true });
exports.incomeModels = mongoose_1.default.model("income", incomeSchema);
