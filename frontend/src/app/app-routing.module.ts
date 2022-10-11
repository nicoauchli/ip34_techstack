import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingFormComponent} from "./components/booking-form/booking-form.component";
import {BookingListComponent} from "./components/booking-list/booking-list.component";

const routes: Routes = [
  { path: 'bookings', component: BookingListComponent },
  { path: 'create/booking', component: BookingFormComponent },
  { path: '', redirectTo: 'bookings', pathMatch: 'full' },
  { path: '**', redirectTo: 'bookings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
