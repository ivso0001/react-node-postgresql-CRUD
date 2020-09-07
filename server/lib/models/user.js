"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user = (sequelize) => {
    return sequelize.define('users', {
        name: {
            type: sequelize_1.DataTypes.STRING(10),
        },
        email: {
            type: sequelize_1.DataTypes.STRING(30),
        },
        createdAt: {
            field: 'created_at',
            type: sequelize_1.DataTypes.DATE,
        },
        updatedAt: {
            field: 'updated_at',
            type: sequelize_1.DataTypes.DATE,
        }
    });
};
exports.default = user;
//# sourceMappingURL=user.js.map