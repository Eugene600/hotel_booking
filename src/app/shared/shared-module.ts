import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetails } from './components/booking-details/booking-details';
import { RoomDisplay } from './components/room-display/room-display';
import { BookingRow } from './components/booking-row/booking-row';
import { ImageCarousel } from './components/image-carousel/image-carousel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetails,
    RoomDisplay,
    BookingRow,
    ImageCarousel,
  ],
  exports: [
    BookingDetails,
    RoomDisplay,
    BookingRow,
    ImageCarousel,
  ],
})
export class SharedModule { }
