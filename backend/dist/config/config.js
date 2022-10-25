"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MYSQL = {
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'db',
    user: process.env.MYSQL_USER || 'root',
    pass: process.env.MYSQL_PASS || 'rootpassword',
    port: process.env.MYSQL_PORT || 3306
};
const SERVER = {
    hostname: process.env.SERVER_HOSTNAME || 'localhost',
    port: process.env.SERVER_PORT || 8000
};
const config = {
    mysql: MYSQL,
    server: SERVER
};
exports.default = config;
