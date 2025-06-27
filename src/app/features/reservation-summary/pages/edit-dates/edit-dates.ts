import { Component, signal, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { SharedModule } from '../../../../shared/shared-module';
import { Router } from '@angular/router';
import { BookingState } from '../../../../core/services/booking-state';

@Component({
  selector: 'app-edit-dates',
  imports: [FontAwesomeModule, SharedModule],
  templateUrl: './edit-dates.html',
  styleUrl: './edit-dates.css'
})
export class EditDates {
  faBed = faBed;

  bookingState: BookingState = inject(BookingState);

  showCalendar = signal<boolean>(false);

  checkInDate = signal<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth(), 23));
  checkOutDate = signal<Date | null>(new Date(new Date().getFullYear(), new Date().getMonth(), 27));

  selectedField = signal<'checkIn' | 'checkOut' | null>(null);

  toggleCalendar(field: 'checkIn' | 'checkOut') {
    this.selectedField.set(field);
    this.showCalendar.set(!this.showCalendar());
  }

  onDateSelected(date: Date) {
    if (this.selectedField() === 'checkIn') {
      this.bookingState.setCheckInDate(date);
    } else if (this.selectedField() === 'checkOut') {
      this.bookingState.setCheckOutDate(date);
    }

    this.showCalendar.set(false);
  }

  constructor(private router: Router) {}

  goToReservationSummary() {
    this.router.navigate(['/reservation-summary'], {
      replaceUrl: true,
    })
  }

}
