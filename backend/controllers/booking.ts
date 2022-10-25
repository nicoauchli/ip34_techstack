import logging from "../config/logging";
import {Request, Response} from "express";
import {Booking} from "../interfaces/booking";
import {Model} from "sequelize";

const NAMESPACE = 'Bookings';

const createBooking = async (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Inserting booking');

    let { title, amount, priority, description } = req.body;

    logging.info(NAMESPACE, title);

    Booking.create({
        title: title,
        amount: amount,
        priority: priority,
        description: description
    }).then((res: Response) => {
        return res.status(200).json({
            res
        })
    }).catch((error: string) => {
        logging.error(NAMESPACE, error, error);

        return res.status(200).json({
            message: error,
            error
        });
    });
};

const getAllBookings = async (req: Request, res: Response) => {
    logging.info(NAMESPACE, 'Getting all bookings.');

    Booking.findAll().then( (value: Model[])=> {
        logging.info(NAMESPACE, 'Retrieved bookings: ', value);

        return res.status(200).json({
            value
        });
    }).catch((error:string) => {
        logging.error(NAMESPACE, error, error);

        return res.status(200).json({
            message: error,
            error
        });
    });
}

export default { createBooking: createBooking, getAllBookings: getAllBookings };
