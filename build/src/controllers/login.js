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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModels_1 = require("../models/userModels");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    console.log(username);
    console.log(req.body.password);
    try {
        const user = yield userModels_1.userModel.findOne({ username });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        if (!(yield bcrypt_1.default.compare(req.body.password, user.password))) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }
        const accessToken = jsonwebtoken_1.default.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
        res.json({
            message: "Login successful",
            user_id: user === null || user === void 0 ? void 0 : user._id,
            user_name: user === null || user === void 0 ? void 0 : user.username,
            accessToken: accessToken,
        });
    }
    catch (error) {
        res.status(500).json({ message: "Error, could not log in" });
    }
});
exports.default = logIn;
