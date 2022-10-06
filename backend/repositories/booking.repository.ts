import { OkPacket } from "mysql2"

import { connection } from "../db"
import {IBooking} from "../models/booking";

export class BookingRepository {
    readAll(): Promise<IBooking[]> {
        return new Promise((resolve, reject) => {
            connection.query<IBooking[]>("SELECT * FROM booking", (err, res) => {
                if (err) reject(err)
                else resolve(res)
            })
        })
    }

    readById(booking_id: number): Promise<IBooking | undefined> {
        return new Promise((resolve, reject) => {
            connection.query<IBooking[]>(
                "SELECT * FROM booking WHERE id = ?",
                [booking_id],
                (err, res) => {
                    if (err) reject(err)
                    else resolve(res?.[0])
                }
            )
        })
    }

    create(booking: IBooking): Promise<IBooking> {
        return new Promise((resolve, reject) => {
            connection.query<OkPacket>(
                "INSERT INTO users (email, password, admin) VALUES(?,?,?)",
                [booking.email, booking.password, booking.admin],
                (err, res) => {
                    if (err) reject(err)
                    else
                        this.readById(res.insertId)
                            .then(user => resolve(user!))
                            .catch(reject)
                }
            )
        })
    }
}
