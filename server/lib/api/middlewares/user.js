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
exports.getUsers = exports.getUser = exports.deleteUser = exports.putUser = exports.postUser = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entities/user");
const postUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.getConnection()
            .createQueryBuilder()
            .insert()
            .into(user_1.User)
            .values(user)
            .execute();
        return Promise.resolve({ 'success': 1 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.postUser = postUser;
const putUser = (user, id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.getConnection()
            .createQueryBuilder()
            .update(user_1.User)
            .set(user)
            .where({ id })
            .execute();
        return Promise.resolve({ 'success': 2 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.putUser = putUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield typeorm_1.getConnection()
            .createQueryBuilder()
            .delete()
            .from(user_1.User)
            .where({ id })
            .execute();
        return Promise.resolve({ 'success': 3 });
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.deleteUser = deleteUser;
const getUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield typeorm_1.getRepository(user_1.User).findOne(id);
        return Promise.resolve(user);
    }
    catch (e) {
        return Promise.reject(e);
    }
});
exports.getUser = getUser;
const getUsers = (skip, take) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield typeorm_1.getRepository(user_1.User).find({
        skip,
        take
    });
    return users;
});
exports.getUsers = getUsers;
//# sourceMappingURL=user.js.map