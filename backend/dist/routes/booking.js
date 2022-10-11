"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const booking_1 = __importDefault(require("../controllers/booking"));
const router = express_1.default.Router();
router.post('/create/booking', booking_1.default.createBooking);
router.get('/get/bookings', booking_1.default.getAllBookings);
module.exports = router;
