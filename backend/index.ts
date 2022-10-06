import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql';
import {connection} from "./db";

dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/test', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

if (connection) {
    console.log("Connection to db successfull");
}

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
