import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetails } from './components/booking-details/booking-details';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetails,
  ],
  exports: [
    BookingDetails,
  ],
})
export class SharedModule { }
