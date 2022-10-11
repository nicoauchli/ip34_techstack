import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IBooking} from "../../models/IBooking";
import {DbService} from "../../services/db.service";

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  public bookingForm: FormGroup;
  public priorities: string[] = [ 'High', 'Low' ];

  constructor(
    private dbService: DbService,
  ) {}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      title: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      amount: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  public changePriority(e: any) {
    this.bookingForm.controls['priority'].setValue(e.target.value);
  }

  public submitBookingForm() {
      const booking: IBooking = {
        amount: this.bookingForm.controls['amount'].value.toString(),
        description: this.bookingForm.controls['description'].value,
        priority: this.bookingForm.controls['priority'].value,
        title: this.bookingForm.controls['title'].value
      }
      this.dbService.createBooking(booking);
  }
}
