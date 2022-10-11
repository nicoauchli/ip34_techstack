import config from './config';
import logging from "./logging";
import mysql from 'mysql2';

const params = {
    user: config.mysql.user,
    password: config.mysql.pass,
    host: config.mysql.host,
    database: config.mysql.database,
    port: 3306
};

export const Connect = async () =>
    new Promise<mysql.Connection>((resolve, reject) => {
        logging.info("Server", JSON.stringify(params));
        const connection = mysql.createConnection(params);

        connection.connect((error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(connection);
        });
    });

export const Query = async (connection: mysql.Connection, query: string) =>
    new Promise((resolve, reject) => {
        connection.query(query, connection, (error, result) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });
