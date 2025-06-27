import { Component, computed, signal, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { BookingState } from '../../../../core/services/booking-state';

@Component({
  selector: 'app-reservation-summary',
  imports: [FontAwesomeModule],
  templateUrl: './reservation-summary.html',
  styleUrl: './reservation-summary.css'
})
export class ReservationSummary {
  faAngleLeft = faAngleLeft;

  bookingState: BookingState = inject(BookingState);


  subTotal = computed(() => this.bookingState.totalPrice() + 1200)

  constructor(private location: Location, private router:Router) {}

  goBack() {
    this.location.back();
  }

  goToBookNow() {
    this.router.navigate(['/book-now-pay-later'])
  }

  goToEditDates() {
    this.router.navigate(['/reservation-summary/edit-dates'])
  }

  
}
