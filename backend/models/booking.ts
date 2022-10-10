import { RowDataPacket } from "mysql2"

export interface IBooking extends RowDataPacket {
    id?: number,
    title: string,
    priority: string,
    amount: string,
    description: string
}
