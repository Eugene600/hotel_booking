import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetails } from './components/booking-details/booking-details';
import { RoomDisplay } from './components/room-display/room-display';
import { BookingRow } from './components/booking-row/booking-row';
import { ImageCarousel } from './components/image-carousel/image-carousel';
import { AmenitiesIcons } from './components/amenities-icons/amenities-icons';
import { CustomCalendar } from './components/custom-calendar/custom-calendar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetails,
    RoomDisplay,
    BookingRow,
    ImageCarousel,
    AmenitiesIcons,
    CustomCalendar,
  ],
  exports: [
    BookingDetails,
    RoomDisplay,
    BookingRow,
    ImageCarousel,
    AmenitiesIcons,
    CustomCalendar,
  ],
})
export class SharedModule { }
