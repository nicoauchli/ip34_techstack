import logging from "../config/logging";
import {NextFunction, Request, Response} from "express";
import { Connect, Query } from '../config/mysql';

const NAMESPACE = 'Books';

const createBooking = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Inserting bookings');

    let { title, amount, priority,  description } = req.body;

    let query = `INSERT INTO bookings (title, amount, priority,  description) VALUES ("${title}", "${amount}", "${priority}", "${description}")`;

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((result) => {
                    logging.info(NAMESPACE, 'Booking created: ', result);

                    return res.status(200).json({
                        result
                    });
                })
                .catch((error: { message: string; }) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

const getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Getting all bookings.');

    let query = 'SELECT * FROM bookings';

    Connect()
        .then((connection) => {
            Query(connection, query)
                .then((results) => {
                    logging.info(NAMESPACE, 'Retrieved bookings: ', results);

                    return res.status(200).json({
                        results
                    });
                })
                .catch((error: { message: string; }) => {
                    logging.error(NAMESPACE, error.message, error);

                    return res.status(200).json({
                        message: error.message,
                        error
                    });
                })
                .finally(() => {
                    logging.info(NAMESPACE, 'Closing connection.');
                    connection.end();
                });
        })
        .catch((error: { message: string; }) => {
            logging.error(NAMESPACE, error.message, error);

            return res.status(200).json({
                message: error.message,
                error
            });
        });
};

export default { createBooking: createBooking, getAllBookings: getAllBookings };
