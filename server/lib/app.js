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
const typeorm_1 = require("typeorm");
const user_1 = require("./api/entities/user");
const config_1 = require("./config");
const routes_1 = require("./api/routes");
typeorm_1.createConnection({
    type: config_1.default.database.dialect,
    host: config_1.default.database.host,
    port: config_1.default.database.port,
    username: config_1.default.database.user,
    password: config_1.default.database.password,
    database: config_1.default.database.name,
    entities: [
        user_1.User
    ],
    synchronize: true,
    logging: false
}).then(() => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
        next();
    });
    app.use(routes_1.default);
    app.get('/', (req, res) => {
        res.send('index.html');
    });
    app.listen(config_1.default.port, () => {
        console.log('http://localhost:' + config_1.default.port);
    });
})).catch(error => console.log(error));
//# sourceMappingURL=app.js.map