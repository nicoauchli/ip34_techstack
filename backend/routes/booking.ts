import express from "express";
import controller from '../controllers/booking';

const router = express.Router();

router.post('/create/booking', controller.createBooking);
router.get('/get/bookings', controller.getAllBookings);

export = router;
