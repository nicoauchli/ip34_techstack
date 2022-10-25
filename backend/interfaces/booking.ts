import {DataTypes} from "sequelize";
import {sequelize} from "../config/connection";

export const Booking = sequelize.define("bookings", {
    title: {
       type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
