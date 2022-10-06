import { RowDataPacket } from "mysql2"

export interface IBooking extends RowDataPacket {
    id?: number,
    title: string,
    description: string
}
