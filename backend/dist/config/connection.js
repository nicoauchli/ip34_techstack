"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const logging_1 = __importDefault(require("./logging"));
const config_1 = __importDefault(require("./config"));
const Sequelize = require("sequelize");
exports.sequelize = new Sequelize(`${config_1.default.mysql.database}`, `${config_1.default.mysql.user}`, `${config_1.default.mysql.pass}`, {
    host: `${config_1.default.mysql.host}`,
    dialect: 'mysql'
});
exports.sequelize.authenticate().then(() => {
    logging_1.default.info("Server", "Connection has been established successfully");
}).catch((error) => {
    logging_1.default.info("Server", error);
});
exports.sequelize.sync().then(() => {
    logging_1.default.info("Server", "Tables Table created successfully");
}).catch((error) => {
    logging_1.default.error("Unable to create table: ", error);
});
