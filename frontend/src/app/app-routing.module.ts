import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookingFormComponent} from "./components/booking-form/booking-form.component";

const routes: Routes = [
  { path: 'booking', component: BookingFormComponent },
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: '**', redirectTo: 'booking' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
