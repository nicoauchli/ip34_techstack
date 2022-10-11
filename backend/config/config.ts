import dotenv from 'dotenv';

dotenv.config();

const MYSQL_HOST = process.env.MYSQL_HOST || 'localhost';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || 'db';
const MYSQL_USER = process.env.MYSQL_USER || 'root';
const MYSQL_PASS = process.env.MYSQL_PASS || 'rootpassword';
const MYSQL_PORT = process.env.MYSQL_PORT || 3306;

const MYSQL = {
    host: MYSQL_HOST,
    database: MYSQL_DATABASE,
    user: MYSQL_USER,
    pass: MYSQL_PASS,
    port: MYSQL_PORT
};

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 8000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    mysql: MYSQL,
    server: SERVER
};

export default config;
