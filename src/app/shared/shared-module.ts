import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetails } from './components/booking-details/booking-details';
import { RoomDisplay } from './components/room-display/room-display';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetails,
    RoomDisplay,
  ],
  exports: [
    BookingDetails,
    RoomDisplay,
  ],
})
export class SharedModule { }
