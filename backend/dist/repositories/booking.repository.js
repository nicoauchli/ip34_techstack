"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const db_1 = require("../db");
class BookingRepository {
    readAll() {
        return new Promise((resolve, reject) => {
            db_1.connection.query("SELECT * FROM booking", (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res);
            });
        });
    }
    readById(booking_id) {
        return new Promise((resolve, reject) => {
            db_1.connection.query("SELECT * FROM booking WHERE id = ?", [booking_id], (err, res) => {
                if (err)
                    reject(err);
                else
                    resolve(res === null || res === void 0 ? void 0 : res[0]);
            });
        });
    }
    create(booking) {
        return new Promise((resolve, reject) => {
            db_1.connection.query("INSERT INTO users (email, password, admin) VALUES(?,?,?)", [booking.email, booking.password, booking.admin], (err, res) => {
                if (err)
                    reject(err);
                else
                    this.readById(res.insertId)
                        .then(user => resolve(user))
                        .catch(reject);
            });
        });
    }
}
exports.BookingRepository = BookingRepository;
