import { Component, computed, signal, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faChevronRight, faAngleLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { RoomPricing } from "../../components/room-pricing/room-pricing";
import { Router } from '@angular/router';
import { BookingState } from '../../../../core/services/booking-state';


@Component({
  selector: 'app-book-now-pay-later',
  imports: [FontAwesomeModule, RoomPricing],
  templateUrl: './book-now-pay-later.html',
  styleUrl: './book-now-pay-later.css'
})
export class BookNowPayLater {
  faAngleLeft = faAngleLeft;
  faPlus = faPlus;
  faChevronRight = faChevronRight;
  faXmark = faXmark;

  bookingState: BookingState = inject(BookingState);

  addRoom() {
    this.bookingState.addRoom();
  }

  removeRoom(id: number) {
    this.bookingState.removeRoom(id);
  }

  updateTotal(id: number, price: number) {
    this.bookingState.updateRoomTotal(id, price);
  }

  constructor(private location: Location, private router: Router) { }

  goBack() {
    this.location.back();
  }

  goToReservationSummary() {
    this.router.navigate(['/reservation-summary']);
  }
}
