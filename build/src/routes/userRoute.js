"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const login_1 = __importDefault(require("../controllers/login"));
const router = express_1.default.Router();
exports.userRouter = router;
router.post("/", userControllers_1.createUser);
router.get("/", userControllers_1.getUsers);
router.get("/:id", userControllers_1.getUserById);
router.put("/:id", userControllers_1.updateUser);
router.delete("/:id", userControllers_1.deleteUser);
router.post("/login", login_1.default);
