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
const express = require("express");
const user_1 = require("../middlewares/user");
const USER = '/user';
const USERS = '/users';
const router = express.Router();
router.post(USER, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield user_1.postUser(user);
        res.json(result);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.put(USER + '/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const id = Number(req.params.id);
        const result = yield user_1.putUser(user, id);
        res.json(result);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.delete(USER + '/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const result = yield user_1.deleteUser(id);
        res.json(result);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.get(USER + '/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = Number(req.params.id);
        const user = yield user_1.getUser(id);
        res.json(user);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
router.get(USERS, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const skip = Number(req.query.skip);
        const take = Number(req.query.take);
        const users = yield user_1.getUsers(skip, take);
        res.json(users);
    }
    catch (e) {
        res.status(500).json(e);
    }
}));
exports.default = router;
//# sourceMappingURL=user.js.map