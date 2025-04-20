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
exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = exports.deleteUser = void 0;
const userModels_1 = require("../models/userModels");
const bcrypt_1 = __importDefault(require("bcrypt"));
// create user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt_1.default.genSalt();
    const hashedPassword = yield bcrypt_1.default.hash(req.body.password, salt);
    console.log(salt);
    console.log(hashedPassword);
    const { username, email } = req.body;
    console.log(username, email);
    try {
        const existingUser = yield userModels_1.userModel.findOne({ username });
        if (existingUser) {
            res.status(201).json({ message: "user exist", user: req.user });
            return;
        }
        // add if dont exist "e!exist"
        const newUser = new userModels_1.userModel({ username, email, password: hashedPassword });
        yield newUser.save();
        res.json(newUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json('something went wrong when creating the user');
    }
});
exports.createUser = createUser;
//Get all users
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { getUsers } = req.body;
    try {
        const limit = parseInt(req.query.limit) || 0;
        const users = yield userModels_1.userModel.find(getUsers).limit(limit);
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: "error, could not find users!" });
    }
});
exports.getUsers = getUsers;
//Get a spec user
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModels_1.userModel.findById(req.params.id);
        if (!user)
            res.status(404).json({ message: "User not found! " });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Could not fetch user!" });
    }
});
exports.getUserById = getUserById;
//Update user
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModels_1.userModel.findById(req.params.id);
        if (!user) {
            res.status(404).json({ message: "Could not find user!" });
            return;
        }
        if (req.body.username)
            user.username = req.body.username;
        if (req.body.email)
            user.email = req.body.email;
        if (req.body.password) {
            const salt = yield bcrypt_1.default.genSalt();
            user.password = yield bcrypt_1.default.hash(req.body.password, salt);
        }
        yield user.save();
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: "Could not fetch user! " });
    }
});
exports.updateUser = updateUser;
// Removes a user 
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userid = req.params.id;
    // add error code
    const deleteUser = yield userModels_1.userModel.findByIdAndDelete(userid);
    console.log(deleteUser);
    res.json(deleteUser);
});
exports.deleteUser = deleteUser;
