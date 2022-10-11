import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IBooking} from "../models/IBooking";

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllBookings() {
    return this.http.get('http://localhost:8000/bookings/get/bookings');
  }

  public createBooking(booking: IBooking) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });

    const data = [{
      "title": booking.title,
      "amount": booking.amount,
      "priority": booking.priority,
      "description": booking.description,
    }]
    return this.http.post('http://localhost:8000/bookings/create/booking', JSON.stringify(booking), {headers: headers}  ).subscribe(() => {
      console.log("send");
    });
  }
}
