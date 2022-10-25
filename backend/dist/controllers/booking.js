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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = __importDefault(require("../config/logging"));
const booking_1 = require("../interfaces/booking");
const NAMESPACE = 'Bookings';
const createBooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logging_1.default.info(NAMESPACE, 'Inserting booking');
    let { title, amount, priority, description } = req.body;
    logging_1.default.info(NAMESPACE, title);
    booking_1.Booking.create({
        title: title,
        amount: amount,
        priority: priority,
        description: description
    }).then((res) => {
        return res.status(200).json({
            res
        });
    }).catch((error) => {
        logging_1.default.error(NAMESPACE, error, error);
        return res.status(200).json({
            message: error,
            error
        });
    });
});
const getAllBookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    logging_1.default.info(NAMESPACE, 'Getting all bookings.');
    booking_1.Booking.findAll().then((value) => {
        logging_1.default.info(NAMESPACE, 'Retrieved bookings: ', value);
        return res.status(200).json({
            value
        });
    }).catch((error) => {
        logging_1.default.error(NAMESPACE, error, error);
        return res.status(200).json({
            message: error,
            error
        });
    });
});
exports.default = { createBooking: createBooking, getAllBookings: getAllBookings };
