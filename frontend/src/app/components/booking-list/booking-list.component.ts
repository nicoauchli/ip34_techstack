import { Component, OnInit } from '@angular/core';
import {DbService} from "../../services/db.service";
import {IBooking} from "../../models/IBooking";
import {noop} from "rxjs";

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  public bookings: any;

  constructor(
    private dbService: DbService,
  ) {
    this.dbService.getAllBookings().subscribe( (bookings) => {
      this.bookings = JSON.stringify(bookings);
      console.log("JSON object -", this.bookings);
    })
  }

  ngOnInit(): void {
  }

}
