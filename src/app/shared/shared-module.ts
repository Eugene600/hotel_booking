import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetails } from './components/booking-details/booking-details';
import { RoomDisplay } from './components/room-display/room-display';
import { BookingRow } from './components/booking-row/booking-row';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetails,
    RoomDisplay,
    BookingRow,
  ],
  exports: [
    BookingDetails,
    RoomDisplay,
    BookingRow,
  ],
})
export class SharedModule { }
