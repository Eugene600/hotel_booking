import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingRow } from "../booking-row/booking-row";

@Component({
  selector: 'app-booking-details',
  imports: [FormsModule, BookingRow],
  templateUrl: './booking-details.html',
  styleUrl: './booking-details.css'
})
export class BookingDetails {
  


}
