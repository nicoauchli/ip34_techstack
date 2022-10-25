import logging from "./logging";
import config from "./config";
const Sequelize = require("sequelize");

export const sequelize = new Sequelize(
    `${config.mysql.database}`,
    `${config.mysql.user}`,
    `${config.mysql.pass}`,
    {
        host: `${config.mysql.host}`,
        dialect: 'mysql'
    });

sequelize.authenticate().then( () => {
    logging.info("Server", "Connection has been established successfully");
}).catch( (error: string) => {
    logging.info("Server", error);
})

sequelize.sync().then( () => {
    logging.info("Server", "Tables Table created successfully")
}).catch( (error:string) => {
    logging.error("Unable to create table: ", error)
})
