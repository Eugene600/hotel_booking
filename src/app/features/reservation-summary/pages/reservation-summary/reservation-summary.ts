import { Component, computed, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reservation-summary',
  imports: [FontAwesomeModule],
  templateUrl: './reservation-summary.html',
  styleUrl: './reservation-summary.css'
})
export class ReservationSummary {
  faAngleLeft = faAngleLeft;
  roomNumber = signal<number>(0);
  roomTotal = signal<number>(0);
  checkInDate = signal<Number | null>(23);
  checkOutDate = signal<Number | null>(27);
  checkInMonth = signal<String | null>('Apr 2025');
  checkOutMonth = signal<String | null>('Apr 2025');

  subTotal = computed(() => this.roomTotal() + 1200)
  

  constructor(private location: Location, private router:Router, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.roomNumber.set(Number(params['roomNumber'] || 0));
      this.roomTotal.set(Number(params['roomTotal'] || 0));
      this.checkInDate.set(Number(params['checkInDate'] || 23));
      this.checkOutDate.set(Number(params['checkOutDate'] || 27));
      this.checkInMonth.set(String(params['checkInDateMonth'] || 'Apr 2025'));
      this.checkOutMonth.set(String(params['checkOutDateMonth'] || 'Apr 2025'));
    });
  }

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
