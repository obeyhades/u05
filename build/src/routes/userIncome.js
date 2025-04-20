"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userIncome = void 0;
const express_1 = __importDefault(require("express"));
const incomeController_1 = require("../controllers/incomeController");
const router = express_1.default.Router();
exports.userIncome = router;
router.post("/", incomeController_1.createIncome);
router.get("/:userId", incomeController_1.getUserIncome);
router.put("/:incomeId", incomeController_1.updateIncome);
router.delete("/:incomeId", incomeController_1.deleteIncome);
